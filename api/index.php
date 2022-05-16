<?php
include "/var/www/helpline_config.php";

$db = mysqli_connect (null, THE_DB_USN, null, THE_DB_NAME, null, "/var/lib/mysql/mysql.sock") or die ("Could not connect to Database Server.");
$db2 = mysqli_connect (null, THE_DB_USN, null, THE_DB_NAME, null, "/var/lib/mysql/mysql.sock") or die ("Could not connect to Database Server.");

include "model_k.php";
include "model.php";
include "rest.php";
include "session.php";
include "dialplan.php";
include "XLSX.php";

function rpty ()
{
	$url = "http://127.0.0.1:7374/rpt/";
        $r = array ('data'=>'', 'info'=>0);
        $ch = curl_init ();
        curl_setopt ($ch, CURLOPT_URL, $url);
        curl_setopt ($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt ($ch, CURLOPT_TIMEOUT, 2);
//      curl_setopt ($ch, CURLOPT_VERBOSE, 2);
        $r['data'] = curl_exec ($ch);
        $r['info'] = curl_getinfo ($ch);
        curl_close ($ch);
        error_log ("[rpt] ". $args." | ".$r['info']['http_code']);
	// error_log ("[ami] >> ". $r['data']);
        return $r;
}

function ami ($args)
{
	$url = "http://127.0.0.1:7374/vami/".$args;
        $r = array ('data'=>'', 'info'=>0);
        $ch = curl_init ();
        curl_setopt ($ch, CURLOPT_URL, $url);
        curl_setopt ($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt ($ch, CURLOPT_TIMEOUT, 60);
//      curl_setopt ($ch, CURLOPT_VERBOSE, 2);
        $r['data'] = curl_exec ($ch);
        $r['info'] = curl_getinfo ($ch);
        curl_close ($ch);
        error_log ("[ami] ". $args." | ".$r['info']['http_code']);
	// error_log ("[ami] >> ". $r['data']);
        return $r;
}

function agent_session ($o)
{
	$usn = $_SESSION["cc_user_usn"];
	$exten = $_SESSION["cc_user_exten"];

	error_log ("[agent] request ".json_encode ($o)." | ".$usn. " ". $exten);

	if ($o['action']=='0') // get chan id
	{
		$r = ami ("sync?c=-1&");
		$o_ = json_decode ($r['data'], true);
		$k = array_keys ($o_['channels']);
		$n = count ($k);
		$me = null;
		for ($i=0; $i<$n; $i++) if ($o_['channels'][$k[$i]][0]==$exten) { $me=$k[$i]; break; }
		$s = "usr?action=0&call_id=".$me."&";
		if ($me!=null) ami ($s); 
		if ($me==null) error_log (" * [agent not found ] ");
	}

	if ($o['action']=='1')
	{
		$k = ['any','sun','mon','tue','wed','thu','fri','sat'];
		$q = "SELECT UNIX_TIMESTAMP(Date(Now())), Dayofweek(Now())";
		$row = qryp ($q, "", [], 1);
		$at = [];
		$av = [$row[0], $row[0], _S('cc_user_id')];	
		$q = "SELECT workinghour.campaign_id, campaign_campaign FROM workinghour INNER JOIN member ON workinghour.campaign_id=member.campaign_id && source='1' && dt0<=? && dt1>=? && ".$k[$row[1]]."='1' && user_id=?";  // fetch active campaigns
		$res = qryp ($q, "sss", $av, 0);
		$campaigns = "";
		$outbound = 0;
		while ($row = mysqli_fetch_row ($res))
		{
			error_log ("MBR: [".$row[0]." ".$row[1]."]");
			$v = $row[0];
			if ($row[1]==2) { $v="O"; $outbound++; }
			if ($outbound>1) continue;
			$campaigns .= $v.",";
		}
		if ($campaigns=="") $campaigns = "0,";
		$s = "usr?action=1&usr=".$exten."&interface=2&exten=".$exten."&queue=".$campaigns."&";
		ami ($s); 
	}
}

function copy_from_pabx ($uid)
{
	$q = "sox /home/dat/helpline/calls/".$uid.".gsm /home/dat/helpline/calls/".$uid.".ogg 2>&1";
	$aa = shell_exec ($q);
	error_log ("[shell exec] ". $q." | ". $aa);
}

function dash ($p)
{
	$rights = $GLOBALS[("RIGHTS_".$_SESSION["cc_user_role"])];
	$dash_period = "this_month";
	$dash_gbv = "both";
	$dash_src = "all";
	if (isset ($_GET["dash_period"])) $dash_period = $_GET["dash_period"];
	if (isset ($_GET["dash_gbv"])) $dash_gbv = $_GET["dash_gbv"];
	if (isset ($_GET["dash_src"])) $dash_src = $_GET["dash_src"];

	$_gbv_ = array ("both"=>"", "vac"=>"0", "gbv"=>"1" );	
	$_src_ = array ("all"=>"", "call"=>"call", "sms"=>"sms", "email"=>"email", "social"=>"social", "walkin"=>"walkin" );
	$dash_ts = _str2ts ($dash_period);
	
	echo '"dash":[["'.$dash_period.'","'.$dash_gbv.'","'.$dash_src.'","'.$dash_ts.'","'.$_gbv_[$dash_gbv].'","'.$_src_[$dash_src].'"]]';
		
	$aa = array ("w"=>"", "s"=>"");
	$av = [];
	ctx_rights ("cases", "kase", $aa, $av, $p, $rights["cases"]);
	if (strlen ($_gbv_[$dash_gbv])>0) k_c ("kase", "gbv_related", explode (",", $_gbv_[$dash_gbv]), $aa, $av);
	if (strlen ($dash_ts)>0) k_d ("kase", "created_on", explode (";", $dash_ts), $aa, $av);
	$q = "SELECT src, COUNT(id) FROM kase ".$aa["w"]." GROUP BY src";
	error_log ("[dash] ".$q." | ".json_encode ($av)." | ".$_SESSION["cc_user_role"]);
	$res = qryp ($q, $aa["s"], $av);
	$i = 0;
	$tot = 0;
	echo ',"case_source":{';
	while ($row = mysqli_fetch_row ($res))
	{
		if ($i>0) echo ","; 
		echo '"'.$row[0].'":["'.$row[0].'","'.$row[1].' Cases"]';
		$i++;
		if ($row[0] && strlen ($row[0])>0) $tot += $row[1]; 
	}
	if ($i>0) echo ","; 
	echo '"total":["total","'.$tot.' Cases"] }';
}

$FN = ["sendOTP"=>1, "verifyOTP"=>1, "changeAuth"=>1, "resetAuth"=>1, "agent"=>1, "chan"=>1, "dash"=>1, "leads_csv"=>1]; // allow to pass rest_uri and non-crud

$u = "";
$id = NULL;
$p = [];
$o = [];

$rt = _rest_uri ($_SERVER["REQUEST_METHOD"], $_SERVER["REQUEST_URI"], 3, $u, $id, $o);

if ($rt==0 && $u=="sendOTP")
{
	//$rt = sendOTP ();
	exit (1);
}

if ($rt!=0 && $u=="verifyOTP")
{
	$rt = verifyOTP ();
}

if ($rt==0) 
{
	if (isset ($_GET["logout"]))
	{
		$o_ = ["action"=>"0"];
		agent_session ($o_);
	}
		
	$rt = auth ($o);
	if ($rt==0 && strlen($u)<1) $rt=1;
	if ($rt==0 || $rt==1)
	{
		$p["auth_id"] = $_SESSION["cc_user_id"];
		$p["auth_exten"] = $_SESSION["cc_user_exten"];
		$p["profile_id"] = $_SESSION["cc_user_contact_id"]; 
	}
	error_log ("auth(".$u.") ".$rt." --------------------------------------------------/".$_SESSION["cc_user_id"]);
}

if ($rt==0 && $u=="changeAuth")
{
	$rt = changeAuth ($o, $p);
}

if ($rt==0 && $u=="resetAuth")
{
	error_log ($id." |".json_encode ($o));
	$rt = changeAuthAdmin ($id);
}

if ($rt==0 && $u=="agent")
{
	agent_session ($o);
	header("HTTP/1.0 203 Wait");
	header ('Content-Type: application/json');
	echo '{ }'; 
	exit ();
}

if ($rt==0 && $u=="chan")
{
	error_log ("[ami] request ".json_encode ($o));
	
	
	if ($o['action']>2 && $o['action']<6) // cb_xfer, cb_conference, cb_resume
	{
		$s = "redirect?action=".$o['action']."&exten=".$o['exten']."&chan1=".$o['chan1']."&chan3=".$o['chan3']."&";
		ami ($s); 
	}

	if ($o['action']>0 && $o['action']<3) // cb_invite, cb_dial
	{
		$o['exten'] = 'CB'.$o['src_uid'];
		if (isset ($o['cbid']) && strlen ($o['cbid'])>0) $o['exten'] = $o['cbid']; 
		if (!isset ($o['chan2'])) $o['chan2'] = '';
		$s = "redirect?action=".$o['action']."&usr=".$o['src_usr']."&exten=".$o['exten']."&chan1=".$o['chan1']."&chan2=".$o['chan2']."&add=".$o['add']."&ref=".$o['phone']."&";
		ami ($s); 
	}
	
	if ($o['action']==0)
	{
		$s = "hangup?chan=".$o['chan3']."&";
		ami ($s); 
	}

	$ts = time ();
	$add = '';
	if (isset ($o['add'])) $add = $o['add'];
	header ("HTTP/1.0 203 Wait");
	header ('Content-Type: application/json');
	echo '{ "action":[["'.$ts.'","'.$o['action'].'","'.$add.'"]] }'; 
	exit ();
}

if ($rt==0 && $u=="dash")
{
	header("HTTP/1.0 200 OK");
	header ('Content-Type: application/json');
	echo '{';
	dash ($p);
	echo '}';
	exit ();
}

if ($rt==0)
{
	
	if ($u=="calls" && $_SERVER["REQUEST_METHOD"]=="GET") 
	{
		if (isset ($_GET["today"]))
		{
			 $_GET["dt"] = _str2ts ("today");
			 // rpty ();
		}
		//if (!isset ($_GET["chan_ts"])) $_GET["chan_ts"]="1625346000-1625864400";
		error_log (" >> calls: ".$_GET["dt"]);
	}
	
	if ($u=="inbound" )
	{
		if ($_SERVER["REQUEST_METHOD"]=="GET") $_GET["campaign"]="1";
		if ($_SERVER["REQUEST_METHOD"]=="POST") $o["campaign"]="1";
	}

	if ($u=="outbound" )
	{
		if ($_SERVER["REQUEST_METHOD"]=="GET") $_GET["campaign"]="2";
		if ($_SERVER["REQUEST_METHOD"]=="POST") $o["campaign"]="2";
	}
	
	if ($u=="leads")
	{
		if ($_SERVER["REQUEST_METHOD"]=="GET") $_GET["task"]="lead";
		if ($_SERVER["REQUEST_METHOD"]=="POST") $o["task"]="lead";
	}
	
	if ($u=="tasks" && $_SERVER["REQUEST_METHOD"]=="POST")
	{
		$o["task"] = "Disposition";
		$o["task_task"] = "Disposition";
	}
	
	if ($u=="activities" && $id==-1 && $_SERVER["REQUEST_METHOD"]=="GET")
	{
		$o["src_uid"] = _G("src_uid");
		$o["src_address"] = phone_fmt (_G("src_address"));
		$q_ = "SELECT MAX(id) FROM action WHERE action='disposition' && src='call' && src_uid=?";
		$as_ = "s";
		$av_ = [$o['src_uid']];
		$row_ = qryp ($q_, $as_, $av_, 1);
		if ($row_!=NULL) 
		{
			$p["action_id"]=$row_[0]; // error_log (" ------ get last disposition id it exists ".$row_[0]);
			$_on_call_disposition_dup = array ("actions","dup","id","action_id",NULL,"disposition_id:disposition_id","disposition:disposition"); 
			_dup ($_on_call_disposition_dup, $o, $p);
		}
	}

	if ($u=="shifts")
	{
		if ($_SERVER["REQUEST_METHOD"]=="POST") 
		{ 
			working_hours ($o); 
			//error_log ("<*> ".json_encode ($o));
			$kk_ = array ("daterange","dayofweek","start_ts","end_ts","dt0","dt1","sun","mon","tue","wed","thu","fri","sat");
			$n_ = count ($kk_);
			for ($i_=0; $i_<$n_; $i_++) if (isset ($o[$kk_[$i_]])) $p[$kk_[$i_]]=$o[$kk_[$i_]];
		}
	}
	
	if ($u=="workinghours")
	{
		if ($_SERVER["REQUEST_METHOD"]=="GET") $_GET["source"]="1";
		if ($_SERVER["REQUEST_METHOD"]=="POST") { $o["source"]="1"; working_hours ($o); }
	}

	if ($u=="ooohours")
	{
		if ($_SERVER["REQUEST_METHOD"]=="GET") $_GET["source"]="2";
		if ($_SERVER["REQUEST_METHOD"]=="POST") { $o["source"]="2"; working_hours ($o); }
	}

	if ($u=="voiceprompts" )
	{
		if ($_SERVER["REQUEST_METHOD"]=="GET") $_GET["lvl"]="0";
		if ($_SERVER["REQUEST_METHOD"]=="POST") $o["lvl"]="0";
	}

	if ($u=="dst")
	{
		if ($_SERVER["REQUEST_METHOD"]=="GET") $_GET["lvl"]="1";
		if ($_SERVER["REQUEST_METHOD"]=="POST") $o["lvl"]="1";
	}
	
	if ($u=="cases" && $_SERVER["REQUEST_METHOD"]=="GET") // eval _title
	{
		$_t = _G ("_title");
		if ($_t=="my_cases") $_GET["created_by_id__"] = $p["auth_id"]; // my cases 
		if ($_t=="esca_by_me") $_GET["escalatedby_id__"] = $p["auth_id"]; // esca_by_me
		if ($_t=="esca_to_me") $_GET["escalatedto_id__"] = $p["auth_id"]; // esca_to_me
		if ($_t=="all_cases_today") { $_GET["created_on__"] = strtotime(date("d F Y")); }
		
		$case_count_yaxis = ["today"=>["hour","line"], "this_week"=>["dt","line"], "this_month"=>["dt","line"], "last_3_month"=>["mn","line"], "last_6_month"=>["mn","line"], "last_9_month"=>["mn","line"], "this_year"=>["mn","line"], "all"=>["yr","bar"] ];
		if (isset ($_GET["yaxis"]) && $_GET["yaxis"]=="dt" && isset ($_GET["dash_period"]))
		{
			error_log ("rpt? ".$_GET["yaxis"]." | ".$_GET["dash_period"]);
			$_GET["yaxis"] = $case_count_yaxis[$_GET["dash_period"]][0];
			$_GET["type"] = $case_count_yaxis[$_GET["dash_period"]][1];
		}
	}
	
	if ($_SERVER["REQUEST_METHOD"]=="POST")
	{
		$_reporter_by_src_dup = array ("reporters","dup","src","src","src_uid","src_uid","src_uid",":!=: ", NULL, "id"); // check for existing reporter 1:1 (sub-activity for multi-reporter)
		$_reporter_is_client_dup = array ("reporters","dup","id","reporter_id",NULL,"contact_id:contact_id"); // get contact_id for reporter is client to created contact record
		
		if ($u=="cases" && $id==NULL) 
		{
			$o['assigned_to_id'] = $p['auth_id']; 
			if (isset ($o['escalatedto_id'])) 
			{
				$o['assigned_to_id'] = $o['escalatedto_id'];
				$o['escalatedby_id'] = $p['auth_id'];
			}
			
			$o["activity"]="1"; 
		}
		if ($u=="cases" && $id!=NULL) 
		{ 
			if (isset ($o['escalatedto_id'])) 
			{
				$o['assigned_to_id'] = $o['escalatedto_id'];
				$o['escalatedby_id'] = $p['auth_id'];
			}
			
			$o["activity"]="2"; 
			if (isset ($o["case_category_id"])) // edit
			{ 
				$o["activity"]="3"; 
				if (!isset ($o["is_reporter_client"])) $o["is_reporter_client"]="";
			} 
			if (isset ($o["case_category_root_id"]) && !isset ($o["case_category_id"])) $o["activity"]="4"; // change type
		}
		if ($u=="clients" && $id==NULL) 
		{ 
			$o["activity"]="6"; 
			$o["is_reporter"]="";
			if (isset ($o["is_reporter_client"])) { $o["is_reporter"]="1";  _dup ($_reporter_is_client_dup, $o, $p); }
		}	
		if ($u=="perpetrators" && $id==NULL) { $o["activity"]="7"; }
		if ($u=="attachments" && $id==NULL) { $o["activity"]="8"; }	
				
		if ($u=="reporters")
		{
			_dup ($_reporter_by_src_dup, $o, $p);
			if (isset ($p["reporter_id"])) $id = $p["reporter_id"];
			if ($id!=NULL) { $o["activity"]="9"; $p["activity"]="9"; }; 
		}
		
		if ($u=="clients" && $id!=NULL) { $o["activity"]="10"; }
		if ($u=="perpetrators" && $id!=NULL) { $o["activity"]="11"; }
		if ($u=="attachments" && $id!=NULL) { $o["activity"]="12"; }	
		
		if ($u=="clients" && $id!=NULL && isset ($o['is_delete'])) { $o["activity"]="13"; }
		if ($u=="perpetrators" && $id!=NULL && isset ($o['is_delete'])) { $o["activity"]="14"; }
		if ($u=="attachments" && $id!=NULL && isset ($o['is_delete'])) { $o["activity"]="15"; }
		
		if (isset ($o['disposition_id'])) { $p["action"]="disposition"; }
		
				
		// todo: generate random src_uid for walkin
				
		$k = model_k_id ($u);
		$o['i_']=0;
		$rt = rest_uri_post ($u, $id, $o, $p);
		if (!isset ($p[$k])) $p[$k]="-2";
		$id = $p[$k];

		if ($u=="campaigns") 						queue_conf ($p['campaign_id']);	
		if ($u=="voiceprompts" || $u=="voicemaps") 			dialplan_conf ($p["voiceprompt_id"]);
		if ($u=="dst") 							dialplan_conf ($p["dst_id"]);
		if ($u=="workinghours" || $u=="ooohours") 			ami ("whr?");
	}

	if ($rt==0 || $rt==201 || $rt==202)
	{
		$of = [];
		if ($rt==0) { $rt=200; $of=$_GET; }
		$rt = rest_uri_get ($u, $id, $o, $p, $rt, $of); 
		if ($rt==201) echo ',"'.$u.'_nb":[["info","'.$GLOBALS["RESOURCES"][$u][5].' Created"]]';
		if ($rt==202) echo ',"'.$u.'_nb":[["info","'.$GLOBALS["RESOURCES"][$u][5].' Updated"]]';
		if ($rt==201 && $u=="csv") echo ','.$p['csv_data_k'].','.$p['csv_data_nb'].','.$p['csv_data'];
		if ($rt>199 && $rt<204) echo '}';
	}
}

if ($rt == 1)
{
	$o = [];
	$fo = [];
	
	//if (!isset ($GLOBALS[("RIGHTS_".$_SESSION["cc_user_role"])])) return 404;
	$rights = $GLOBALS[("RIGHTS_".$_SESSION["cc_user_role"])];
	
        header ("HTTP/1.0 201 OK");
	header ('Content-Type: application/json');
        echo "{";
       
        ss ();

	echo ",";
	rest_uri_get ("auth", $p["auth_id"], $o, $p, 0, $fo);
	
	echo ",";
	rest_uri_get ("today", "0", $o, $p, 0, $fo); 
			
	$q = "SELECT GROUP_CONCAT(DISTINCT campaign_id) FROM workinghour WHERE dt0<=unix_timestamp(date(now())) && dt1>=unix_timestamp(date(now()))";
	$av = [];
	$row = qryp ($q, "", $av, 1);
	$active_campaigns = "0";
	if ($row && strlen ($row[0])>0) $active_campaigns=$row[0];
	$fo_=["id"=>$active_campaigns];
	error_log ("ACTIVE CAMPAIGNS: ".$active_campaigns);

	echo ",";
	rest_uri_get ("campaigns", NULL, $o, $p, 0, $fo_); 
	
	$q = "SELECT GROUP_CONCAT(DISTINCT user_id) FROM shift WHERE dt0<=unix_timestamp(date(now())) && dt1>=unix_timestamp(date(now()))";
	$av = [];
	$row = qryp ($q, "", $av, 1);
	$active_users = "0";
	if ($row && strlen ($row[0])>0) $active_users=$row[0];
	$fo_=["id"=>$active_users];
	error_log ("ACTIVE USERS: ".$active_users);
	echo ",";
	rest_uri_get ("users", NULL, $o, $p, 0, $fo_);  // load agents active today


	echo ",";
        dash ($p);
	echo ",";
	rest_uri_get ("cases", "0", $o, $p, 0, $fo); // load cases_k
	//echo ",";
	//rest_uri_get ("reporters", "0", $o, $p, 0, $fo); // load reporters_k
	//echo ",";
	//rest_uri_get ("clients", "0", $o, $p, 0, $fo); // load clients_k
	//echo ",";
	//rest_uri_get ("perpetrators", "0", $o, $p, 0, $fo); // load clients_k
	echo ",";
	rest_uri_get ("contacts", "0", $o, $p, 0, $fo); // load contacts_k

	
	echo ",";
	$_GET["_c"] = "10";
	rest_uri_get ("activities", NULL, $o, $p, 0, $fo); // load activities

	echo ","; // http://127.0.0.1/helpline/api/subcategories/?root_id=101&_c=1000
	$_GET["_c"] = "1000";
	$fo_ = ["root_id"=>"101"];
	rest_uri_get ("age_groups", NULL, $o, $p, 0, $fo_); 

	//echo ",\r\n \"rrr\":0, ";
        //rest_uri_get ("reporters", "-2", $o, $p, 0, $fo); // load reporters_k

        echo "}";
        exit ();
}

if ($rt == -1)
{
	header ("HTTP/1.0 401 Authentication Failed");
	header ('Content-Type: application/json');
	echo '{"errors":[["error","Invalid Username or Password"]], "loggedoff":[["Auth"]], "auth_nb":[["error","Invalid Username or Password"]] }';
	exit ();
}

if ($rt == 400)
{
	header("HTTP/1.0 400 Bad Request");
	header ('Content-Type: application/json');
	echo '{"errors":[["error","Invalid Request"]] }'; 
	exit ();
}

if ($rt == 401)
{
	header ("HTTP/1.0 401 Authentication Required");
	header ('Content-Type: application/json');
	echo '{"errors":[["error","Authentication Required"]], "loggedoff":[["Auth"]] }'; 
	exit ();
}

if ($rt == 403)
{
	header("HTTP/1.0 412 Access Denied");
	header ('Content-Type: application/json');
//	[ "error", "Extension is Required", "REQUIRED", "users", 0, "exten" ]
	echo '{"errors":[["error","You do not have rights to update this resource","Access Denied","","",""]]}';
	exit ();
}

if ($rt == 404)
{
	header("HTTP/1.0 404 Not Found");
	header ('Content-Type: application/json');
	echo '{ "errors":[["error","The requested URL '.esc ($_SERVER["REQUEST_URI"]).' was not found on this server"]]}';
	exit ();
}

if ($rt == 412)
{
	header("HTTP/1.0 412 Invalid Data");
	header ('Content-Type: application/json');
	$s = json_encode ($GLOBALS["ERRORS"]); // nb: each error-item will have fieldname, tablename, row-index
	echo '{"errors":'.$s.'}';
	exit ();
}

if ($rt == 500)
{
	header("HTTP/1.0 500 Server Error");
	header ('Content-Type: application/json');
	$s = json_encode ($GLOBALS["ERRORS"]); // nb: each error-item will have fieldname, tablename, row-index
	echo '{"errors":'.$s.'}';
	exit ();
}

?>
