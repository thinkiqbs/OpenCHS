<?php

$ERRORS=array();
$SQL_LAST_ERROR = 0;

/* NICE TO HAVE CURL OPTS

	curl_setopt ($ch, CURLINFO_HEADER_OUT, true);
	curl_setopt ($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt ($ch, CURLOPT_SSL_VERIFYHOST, 0);
	curl_setopt ($ch, CURLOPT_STDERR, $fd);
	curl_setopt($ch,CURLOPT_ENCODING, '');

*/

/* KURL SEND EMAIL
	$fp = fopen ($filename, 'c+');
	$opts = [ // CURLOPT_URL => ,
	CURLOPT_MAIL_FROM => '',
	CURLOPT_MAIL_RCPT => [$p['_email']],
	CURLOPT_USERNAME => '',
	CURLOPT_PASSWORD => '',
	CURLOPT_USE_SSL => CURLUSESSL_ALL,
//	CURLOPT_READFUNCTION => 'read_cb',
	CURLOPT_INFILE => $fp,  // file handle // 
	CURLOPT_UPLOAD => true ];
	$r = kurl ('', null, null, $opts);
	close 
*/

function kurl ($url,$timeout,$postdata=null,$hdrs=null,$opts=null,$email_to=null,$email_content=null)
{
	$fp = null;
        $r = array ('data'=>'', 'info'=>0);
        $ch = curl_init ();
        curl_setopt ($ch, CURLOPT_URL, $url);
	curl_setopt ($ch, CURLOPT_HEADER, false);
        curl_setopt ($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt ($ch, CURLOPT_TIMEOUT, $timeout);
        // curl_setopt ($ch, CURLOPT_VERBOSE, 2);
	if ($opts!=null)
	{
		curl_setopt_array ($ch, $opts);
	}
	if ($hdrs!=NULL && count ($hdrs)>0)
	{
		curl_setopt ($ch, CURLOPT_HTTPHEADER, $hdrs);
	}
	if ($postdata!=null)
	{
		curl_setopt($ch, CURLOPT_POST, true);
		curl_setopt($ch, CURLOPT_POSTFIELDS, $postdata); 
	}
	if ($email_to!=null) // send email via curl
	{
		$fp = fopen ($email_content, 'r');
		curl_setopt ($ch, CURLOPT_MAIL_FROM, $GLOBALS['SMTP_FROM_ADDRESS']);
		curl_setopt ($ch, CURLOPT_MAIL_RCPT, $email_to);
		curl_setopt ($ch, CURLOPT_USERNAME, $GLOBALS['SMTP_AUTH_USN']);
		curl_setopt ($ch, CURLOPT_PASSWORD, $GLOBALS['SMTP_AUTH_PASS']);
		curl_setopt ($ch, CURLOPT_USE_SSL, CURLUSESSL_ALL);
		//	CURLOPT_READFUNCTION => 'read_cb',
		curl_setopt ($ch, CURLOPT_INFILE, $fp);  // file handle // 
		curl_setopt ($ch, CURLOPT_UPLOAD, true);
	}
        $r['data'] = curl_exec ($ch);
        $r['info'] = curl_getinfo ($ch);
        curl_close ($ch);
	if ($fp!=null) fclose ($fp);
	// error_log ("[curl_info] ". $r['info']['http_code'] ."|".json_encode ($r['info']));
	error_log ("[curl_result] ".$r['info']['http_code']." | ". $r['data']);
        return $r;
}

function requestf (&$tpl, &$o, &$p)
{
	$e = 0;
	$o['_request'] = "";
	$n = count ($tpl);
	for ($i=0; $i<$n; $i++)
	{
		$s = $tpl[$i]; 
		if (strlen ($s)<1) continue;
		if (substr ($s,0,1)=="\r") // NB: allow acess to array values only; dont access object->properties
		{
			$v = explode ("\r",$s);
			/*if ($v[1]=='vendor') 
			{
				$v_ = $vendor[$v[2]];
				if (isset ($GLOBALS["DECNF"][$v[2]])) $v_ = _denc ($v_);
				$o['_request'] .= $v_; 
				
			}*/
			if ($v[1]=='inputs')
			{
				$val = "";
				if (isset ($o[$v[2]])) $val = $o[$v[2]]; // todo: escape value based on payload type
				if (isset ($p[$v[2]])) $val = $p[$v[2]]; // todo: escape value based on payload type
				$o['_request'] .= $val;
			}
			continue;
		}
		$o['_request'] .= $s;
	}
	return $e;
}

function _xml_payload ($s, &$o)
{
	$xmlp = xml_parser_create ();
	$rr = xml_parse_into_struct ($xmlp, $s, $ov); //, $index);
	xml_parser_free ($xmlp);
	
	$ll = array ();
	if (!is_array ($ov)) return -1; // echo $s." ".$n." po:".$po."\n";
	$n = count ($ov);
	for ($i=0; $i<$n; $i++)
	{
		if (!isset ($ov[$i]['level'])) continue;
		$l = $ov[$i]['level'];
		$ll[$l] = $ov[$i]['tag'];
		if ($ov[$i]['type']!='complete') continue;
		$k = "";
		$v = "";
		for ($j=1; $j<=$l; $j++) $k .= $ll[$j].'_';
		if (isset ($ov[$i]['value'])) $v = $ov[$i]['value'];
		$o[$k] = $v;
		// echo $k."=".$v."\n";
	}
	
	error_log (json_encode ($o));

	return 0;
}

function geop_country ($ip)
{
	$url = 'http://www.geoplugin.net/json.gp?ip='.$ip;
	$s = @file_get_contents ($url);
	error_log ($s);
	$o = json_decode ($s,true);
	// error_log ($o["geoplugin_countryCode"]);
	if (!isset ($o["geoplugin_countryCode"])) return "";
	$q = "SELECT phonecode FROM country WHERE iso=?";
	$av = [$o["geoplugin_countryCode"]];
	$row = qryp ($q, "s", $av, 1);
	if (!$row) return "";
	return $row[0];  
}

function phone_fmt ($s)
{
	$a = 0;
	$n = strlen ($s);
	for ($i=0; $i<$n; $i++) 
	{
		$ch = substr ($s,$i,1);
		if ($ch=="+" || $ch=="0") { $a++; continue; }
		break;
	}
	error_log ("phone_fmt: ".$a." ".$n." |". $s );
	if ($n-$a==9) return $GLOBALS["COUNTRY_CODE"].substr ($s,$a,($n-$a));
	return substr ($s, $a, ($n-$a));
}

function _date ($fmt, $v)
{
	if ($v==0) return "";
	return date ($fmt, $v);
}

function _enum ($fmt, $v)
{
	$nn = explode (':',$fmt);		
	if ( !isset ($GLOBALS[($nn[2]."_enum")])) return $v;
	$vv = explode (",", $v);
        $vn = count ($vv);
        $enum_ = $GLOBALS[($nn[2]."_enum")];
        $v="";
        $vc=0;
	for ($iv=0; $iv<$vn; $iv++)
	{
		$v_ = $vv[$iv];
		if (strlen ($v_)<1) continue;
		if (isset ($enum_[$v_])) $v_=$enum_[$v_][$nn[4]];
		if ($vc>0) $v.=',';
		$v .= $v_;
		$vc++;
        }
        return $v;
}

function model_k_id ($u)
{
	$t = $GLOBALS["RESOURCES"][$u][0];
	$ta = $GLOBALS["RESOURCES"][$u][1];
	if (strlen($ta)<1) $ta=$t;
	$a = $GLOBALS[($u."_def")];
	$k = $ta."_".$a[0][0];
	if (strlen ($a[0][1])>0) $k = $a[0][1];
	return $k;
}

// -------------------

function _G ($k)
{
	if (isset($_GET[$k])) return $_GET[$k];
	return "";
}

function __G ($k)
{
	if (isset($_GET[$k])) return mysqli_real_escape_string($GLOBALS["db"],$_GET[$k]);
	return "";
}

function _P ($k)
{
	if (isset($_POST[$k])) return $_POST[$k];
	return "";
}

function __P ($k)
{
	if (!isset($_POST[$k])) return "";
	$a = array ("\r","\n","\t",'\r','\n','\t');
	$v = str_replace ($a, "", $_POST[$k]); 
	$v = str_replace ("\\", "", $v); 
	$v = str_replace ("\"", "'", $v); 
	return mysqli_real_escape_string($GLOBALS["db"],$_POST[$k]);
}

function _S ($k)
{
	if (isset($_SESSION[$k])) return $_SESSION[$k];
	return "";
}

function __S ($k)
{
	if (isset($_SESSION[$k])) return mysqli_real_escape_string($GLOBALS["db"],$_SESSION[$k]);
	return "";
}

function esc ($v,$l="")
{
	$s = str_replace ("\\", ($l."\\\\"), $v); // mysql,json
	$s = str_replace ("'", ($l."\\'"), $s);
	$s = str_replace ("\r", ($l."\\r"), $s);
	$s = str_replace ("\n", ($l."\\n"), $s);
	$s = str_replace ("\"", ($l."\\\""), $s);
	return $s;
}

function __VESC ($v)
{
	//$a = array ("\r","\n","\t",'\r','\n','\t');
	//$v = str_replace ($a, " ", $v); 
	//$v = str_replace ("\\", "", $v); 
	//$v = str_replace ("\"", "'", $v); 
	$v = preg_replace ('/[[:^print:]]/', ' ', $v); 
	$v_ = $v;
	$n  = strlen ($v);
	if ($n>0)
	{
		$v_ = json_encode (("".$v));
		$n = strlen ($v_);
		if ($n>2) $v_ = substr ($v_,1,$n-2);
	}
	$v_ = str_replace ("<", "&lt;", $v_); 
	$v_ = str_replace (">", "&gt;", $v_); 
        // error_log ("  [var] esc ".$v.' => '.$v_.' | '.$n);
	return $v_; // mysqli_real_escape_string ($GLOBALS["db"],$v);
}

function __V ($v)
{
	//$a = array ("\r","\n","\t",'\r','\n','\t');
	//$v = str_replace ($a, " ", $v); 
	//$v = str_replace ("\\", "", $v); 
	//$v = str_replace ("\"", "'", $v); 
	//$v = preg_replace ('/[[:^print:]]/', ' ', $v); 
	$v_ = $v;
	$n  = strlen ($v);
	if ($n>0)
	{
		$v_ = json_encode (("".$v));	        
		$n = strlen ($v_);
		if ($n>2) $v_ = substr ($v_,1,$n-2);
	}
	$v_ = str_replace ("<", "&lt;", $v_); 
	$v_ = str_replace (">", "&gt;", $v_); 
	//   error_log ("    >> VAL (".$v.') => ('.$v_.') '. $n);
	return $v_; // mysqli_real_escape_string ($GLOBALS["db"],$v);
}

function _rands ($n,$k)
{
        $ch = array
	(
		'num'=>'0123456789',
		'alpha'=>'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
		'ascii'=>'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$abcdefghijklmnopqrstuvwxyz',
	);
	$chn = array ('num'=>9, 'alpha'=>61, 'ascii'=>65);
	$s = '';
        for ($i=0; $i<$n; $i++) {
        	$s .= $ch[$k][ rand (0, $chn[$k])];
        }
	return $s;
}

function _str2ts ($str)
{
	$_s_ = [ 
	"all"=>["0",""], 
	"today"=>["1","d F Y"], 
	"this_week"=>["2","F Y"], 
	"this_month"=>["3","1 F Y"], 
	"this_year"=>["4","Y"], 
	"last_3_month"=>["5","90"], "last_6_month"=>["5","180"], "last_9_month"=>["5","270"] ];
	
	$t1 = time ();
	if (!isset ($_s_[$str])) return "";
	$k = $_s_[$str];
	if ($k[0]=="0") return "";
	if ($k[0]=="1") 
	{
		$t0 = strtotime (date($k[1], $t1)); 
		return $t0;
	}
	if ($k[0]=="2") // find 
	{
		$d = date ("w");
		$t0 = strtotime (date("d F Y", $t1)); 
		$t0 -= ($d*3600*24);
		return $t0.";".$t1;
	}
	if ($k[0]=="3") 
	{
		$t0 = strtotime (date($k[1], $t1)); 
		return $t0.";".$t1;
	}
	if ($k[0]=="4")
	{
		$y = date ("Y",$t1);
		$t0 = strtotime ("1 January ".$y); 
		return $t0.";".$t1;
	}
	if ($k[0]=="5")
	{
		$t1_ = strtotime (date("1 F Y", $t1)); ;
		$t0 = $t1_-($k[1]*3600*24);
		return $t0.";".$t1;
	} 
		return $t0.";".$t1;
}

function qry ($q, $r=0, $db_="db", $id_=-2)
{
	$GLOBALS["SQL_LAST_ERROR"]=0;

	$res = mysqli_query ($GLOBALS[$db_],$q);
	if ($res==FALSE)
	{
		$GLOBALS["SQL_LAST_ERROR"]=-1;
		$errno = mysqli_errno ($GLOBALS[$db_]);
		error_log ("[QRY ERROR (".$r.")]: (".mysqli_errno ($GLOBALS[$db_]).") ".mysqli_error ($GLOBALS[$db_])." //".$q);
		if ($errno==1062) return -3;
		// todo catch duplicate and report it -- implement dup on db
		//$aa["log"] .= ',["error","'.$u.': query error"]';
		if ($r==2) return -2;
		return NULL;
	}
	if ($r==1) 
	{
		return mysqli_fetch_row ($res);
	}
	if ($r==2)
	{
		$id = mysqli_insert_id ($GLOBALS[$db_]);
		if ($id>0) return $id;
		if ($id_!=-2) return $id_;
		// $aa["log"] .= ',["error","'.$u.': get insert_id failed"], ';
		return -2;
	}
	return $res;
}

function qryp ($q, $argt, $argv, $r=0, $db_="db", $id_=-2)
{
	$GLOBALS["SQL_LAST_ERROR"]=0;
	$stmt = mysqli_stmt_init ($GLOBALS[$db_]);
	if ($stmt==NULL) 
	{
		$GLOBALS["SQL_LAST_ERROR"]=-1;
		error_log ("STMT INIT ERROR: ".mysqli_error ($GLOBALS[$db_])." //".$q);
		return NULL;
	}
	if (mysqli_stmt_prepare ($stmt, $q)==FALSE) 
	{
		$GLOBALS["SQL_LAST_ERROR"]=-1;
		error_log ("STMT PREPARE ERROR: ".mysqli_error ($GLOBALS[$db_])." //".$q);
		return NULL;
	}
	$n = count ($argv);
	if ($n>0)
	{
		$a = array (&$stmt, &$argt);
		for ($i=0; $i<$n; $i++) { $a[] = &$argv[$i]; }
		$ret = call_user_func_array ("mysqli_stmt_bind_param", $a);
		if ($ret!==TRUE) 
		{
			$GLOBALS["SQL_LAST_ERROR"]=-1;
			error_log ("STMT BIND ERROR: Bind Failed //".$q."/".$argt."/(".$n.") ".json_encode ($argv));
			return NULL;
		}
	}
	$ret = mysqli_stmt_execute ($stmt);
	if ($ret!==TRUE) 
	{ 
		$GLOBALS["SQL_LAST_ERROR"]=mysqli_errno ($GLOBALS[$db_]);
		error_log ("STMT EXEC ERROR: ".$q." | ".mysqli_errno ($GLOBALS[$db_])." ".mysqli_error ($GLOBALS[$db_]));
		return NULL; 
	}
	// error_log ("###STMT: (".$ret.",".$n.") ".$q." | ".json_encode ($argv));
	if ($r==1) 
	{
		$res = mysqli_stmt_get_result ($stmt);
		if ($res===FALSE)
		{
			$GLOBALS["SQL_LAST_ERROR"]=-1;
			error_log ("STMT RES ERROR: ".mysqli_error ($GLOBALS[$db_]));
			return NULL;
		}
		return mysqli_fetch_array ($res,  MYSQLI_NUM); // 
	}
	if ($r==2)
	{
		//$id = mysqli_stmt_insert_id ($stmt);
		$id = mysqli_insert_id ($GLOBALS[$db_]);
		// error_log ( " insert_id: ". $id. " |".$id_);
		if ($id>0) return $id;
		if ($id_!=-2) return $id_;
		// $aa["log"] .= ',["error","'.$u.': get insert_id failed"], ';
		return -2;
	}
	if ($r==3)
	{
		return mysqli_stmt_affected_rows ($stmt);
	}
	if ($r==4) return $ret;
	
	
	$ret = mysqli_stmt_get_result ($stmt);
	if ($ret===FALSE)
	{
		$GLOBALS["SQL_LAST_ERROR"]=-1;
		error_log ("STMT RES ERROR:: ".$q." | ".mysqli_error ($GLOBALS[$db_]));
		return NULL;
	}
	return $ret;
}

// ---------------------------------------------------

function _val_error ($u, $i, $k, $v, $errno, $errmsg)
{
	$GLOBALS["ERRORS"][] = ["error",$errmsg,$errno,$u,$i,$k]; 

	error_log ("    +-- [invalid] ".$k. " ". $errno);

	return 1;
}

function _val_phone (&$v)
{
	if (strlen ($v)<1) return 1;
	$v = phone_fmt ($v); // standadize phone numbers
	// $phone_regex = '/^(0|254|)[1-9]{1,1}[0-9]{8,8}/';
	$phone_regex = '/^[0-9]{3,15}/';
	if (preg_match ($phone_regex, $v)!=1) return 1;
	return 0;
}

function _val_email ($v)
{
	if (strlen ($v)<1) return 1;
	$email_regex = '/^(?!(?:(?:\x22?\x5C[\x01-\x7E]\x22?)|(?:\x22?[^\x5C\x22]\x22?)){255,})(?!(?:(?:\x22?\x5C[\x01-\x7E]\x22?)|(?:\x22?[^\x5C\x22]\x22?)){65,}@)(?:(?:[\x21\x23-\x27\x2A\x2B\x2D\x2F-\x39\x3D\x3F\x5E-\x7E]+)|(?:\x22(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21\x23-\x5B\x5D-\x7F]|(?:\x5C[\x01-\x7F]))*\x22))(?:\.(?:(?:[\x21\x23-\x27\x2A\x2B\x2D\x2F-\x39\x3D\x3F\x5E-\x7E]+)|(?:\x22(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21\x23-\x5B\x5D-\x7F]|(?:\x5C[\x01-\x7F]))*\x22)))*@(?:(?:(?!.*[^.]{64,})(?:(?:(?:xn--)?[a-z0-9]+(?:-[a-z0-9]+)*\.){1,126}){1,}(?:(?:[a-z][a-z0-9]*)|(?:(?:xn--)[a-z0-9]+))(?:-[a-z0-9]+)*)|(?:\[(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){7})|(?:(?!(?:.*[a-f0-9][:\]]){7,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?)))|(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){5}:)|(?:(?!(?:.*[a-f0-9]:){5,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3}:)?)))?(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))(?:\.(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))){3}))\]))$/iD';
	if (preg_match ($email_regex, $v)!=1) return 1;
	return 0;
}

function _val_id ()
{
	$ts = gettimeofday (true);
	return floor($ts*10000);
}

function _val ($u, &$a, $id, &$o, &$p, &$v, $istry=0)
{
	$e = 0;

	if ($a[4]=="k") { $v = ($a[5]); return 0; }
	if ($a[4]=="@") { $v = _val_id (); return 0; }
	if ($a[4]=="#") { $v = _rands (9,"num"); return 0; }

	$k = $a[0];
	if (strlen($a[1])>0) $k = $a[1];

	if (isset ($o[$k])) $v = $o[$k];
	if (isset ($p[$k])) $v = $p[$k];

	if ($id!=NULL && $v===NULL) // skip unset during update
	{ 
		// error_log ("    [VAL] ".$k." -skipped-");
		return 0; 
	} 

	if ($v==null && strlen ($a[6])==0 && strlen ($a[7])>0) $v=$a[7]; // error_log ("    [VAL] ".$k."=<".$v.">");
	
	if (strlen($a[4])==0 && strlen($a[5])==0) return 0;


	if (($a[4]=="m" || $a[4]=="u") && strlen($v)<1) // check mandatory field
		return _val_error ($u, $o["i_"], $k, $v, "REQUIRED", $a[9]." is Required");

	if ($a[4]=="u" && isset ($o[$k]) && isset ($p[$k]) && $o[$k]==$p[$k]) // check duplicate field
		return _val_error ($u, $o["i_"], $k, $v, "DUPLICATE", $a[9]." exists with value of ".$o[$k]);

	if ($a[5]=="p" && strlen ($v)>0 && _val_phone ($v)!=0) 
		return _val_error ($u, $o["i_"], $k, $v, "INVALID", ("Invalid Phone Number '".$v."'")); //  at row ".$o['i_']

	if ($a[5]=="e" && strlen ($v)>0 && _val_email ($v)!=0) 
		return _val_error ($u, $o["i_"], $k, $v, "INVALID", "Invalid Email address");

	if ($a[5]=="r" && strlen ($v)>0 && preg_match ($a[6], $v)!=1) 
		return _val_error ($u, $o["i_"], $k, $v, "INVALID", "Invalid format for ".$a[9]);

	if ($a[3]==1 && $a[5]=="l")
	{
		$min = $a[6];
		$max = $a[7];
		$m = strlen ($v);
		if (strlen ($min)>0 && $m<$min) $e += _val_error ($u, $o["i_"], $k, $v, "INVALID", ($a[9]." length must be at least ".$min));
		if (strlen ($max)>0 && $m>$max) $e += _val_error ($u, $o["i_"], $k, $v, "INVALID", ($a[9]." length Exceed ".$max));
	}

	if ($a[3]==4 && $a[5]=="l")
	{
		$min = $a[6];
		$max = $a[7];
		if (strlen ($min)>0 && $v<$min) $e +=  _val_error ($u, $o["i_"], $k, $v, "INVALID", ($a[9]." Must be at least ".$min)); 
		if (strlen ($max)>0 && $v>$max) $e +=  _val_error ($u, $o["i_"], $k, $v, "INVALID", ($a[9]." Exceeds ".$max)); 
	}

	if ($a[5]=='f' && !isset ($p[$k]) && isset ($o[$k]) && strlen($o[$k])>0 && $o[$k]!="0")
	{
		return _val_error ($u, $o["i_"], $k, $v, "INVALID_FOREIGN_KEY", $a[9]." does not exist");  
	}

	if ($a[4]=='u' && isset ($o[$k]) && isset ($p[$k]) && $o[$k]==$p[$k]) 
	{
		return _val_error ($u, $o["i_"], $k, $v, "DUPLICATE", $a[9]." Already exists");  
	}
	
	return $e;
}

function _try ($u, $t, $id, &$o, &$p, &$rights)
{
	error_log ("  [try] ".$u);

	$a = $GLOBALS[($u."_def")];
	$n = count ($a);
	$c=0;
	$e=0;	
	for ($i=1; $i<$n; $i++)
	{ 
		$v = null;
		$e += _val ($u, $a[$i], $id, $o, $p, $v, 1); 
	} 
	if ($e>0) return -2;
	return NULL;
}

function _au ($aub_id, $u, $id, $k, $v)
{
	$q = "INSERT INTO au(aub_id,t,row_id,k,v) VALUES(?,?,?,?,?)";
	$argt = "sssss";
	$argv = [$aub_id,$u,$id,$k,$v];
	$id = qryp ($q, $argt, $argv, 2); 
	if ($id==NULL) error_log (" [au](".$u.") ERROR audit trail save failed ");
}

function _upd ($u, $t, $id, &$o, &$p, &$rights, $fm=2)
{
	if (strlen ($id)<1) return 0;
	
	$a = $GLOBALS[($u."_def")];
		
	$k_ = model_k_id ($u);
	$_dup = array ($u,"dup",$a[0][0],$k_,NULL,"*"); // generate audit trail record
	$o_ = [];
	$p_ = [];
	if (isset ($o[$k_])) $o_ = [$k_=>$o[$k_]];
	if (isset ($p[$k_])) $p_ = [$k_=>$p[$k_]];
	_dup ($_dup, $o_, $p_);
	
	$aub_id = 0;
	if (isset ($p["aub_id"])) $aub_id = $p["aub_id"];

	$q = "UPDATE `".$t."` SET "; //updated_on=UNIX_TIMESTAMP(Now()), updated_by=\"".__S("cc_user_usn")."\", updated_by_id=\"".__S("cc_user_id")."\"";
	$argt = "";
	$argv = [];
	$n = count ($a);
	$c=0;
	$e=0;	
	for ($i=1; $i<$n; $i++)
	{ 
		if ($a[$i][2]!=$fm && $a[$i][2]!=3) continue;

		$v = null;
		$e += _val ($u, $a[$i], $id, $o, $p, $v); 
		if ($v===null) continue;
		
		if (isset ($p_[$a[$i][0]]) && $v!=$p_[$a[$i][0]]) _au ($aub_id, $u, $id, $a[$i][0], $p_[$a[$i][0]]); // generate audit trail

		if ($c>0) $q .= ",";
		$q .= $a[$i][0]."=?"; 
		$argt .= "s";
		$argv[$c] = __V($v);
		$c++;
	} 
	
	// error_log ("     ---upd ".$q);
	
	if ($c<1) return $id; // 0
	$q .= " WHERE ".$a[0][0]."=?";
	$argt .= "s";
	$argv[$c] = $id;

	if ($rights!=NULL) // apply rights Table
	{
		
	}

	if ($e>0 && $GLOBALS["RESOURCES"][$u][4]==0) return -2;

 	error_log ("   [UPD] (".$id.") ".$q." (".$argt.") ".json_encode ($argv));
	$res = qryp ($q, $argt, $argv, 4); 
	if ($res==NULL) return -1;
	return $id;
}

function _add ($u, $t, &$o, &$p, $id_=-2) 
{
	error_log ("    +--p: ".json_encode ($p));
	error_log ("    +--o: ".json_encode ($o));

	$argt = "";
	$argv = [];
	$subset = null;
	if (isset ($GLOBALS[($u.'_subset')])) $subset = $GLOBALS[($u.'_subset')];

	$q = "INSERT INTO `".$t."`(";
	$qv = ", created_on, created_by, created_by_id, created_by_role) VALUES(";
	$a = $GLOBALS[($u."_def")];
	$n = count ($a);
	$c=0;	
	$e=0;

	for ($i=0; $i<$n; $i++)
	{ 
		if ($a[$i][2]!=1 && $a[$i][2]!=3) continue;
		if ($subset!=NULL && !isset ($subset [$a[$i][0]])) continue;

		$v = null;
		$e += _val ($u, $a[$i], NULL, $o, $p, $v); 
		// if ($v===null) $v=""; //continue;

		if ($c>0) { $q.=","; $qv.=","; }
		$q .= $a[$i][0]; 
		$qv .= "?";
		$argt .= "s";
		$argv[$c] = __V($v);
		// error_log (" arg ".$c." ".$a[$i][0]." ".$v." | ".	$argv[$c]);
		$c++;
	} 
	if ($c<1) return 0;

	$q .= $qv.", UNIX_TIMESTAMP(Now()),?,?,?)";
	$argt .= "sss";
	$argv[$c] = __S("cc_user_usn");
	$argv[($c+1)] = __S("cc_user_id"); 
	$argv[($c+2)] = __S("cc_user_role"); 

	if ($e>0 && $GLOBALS["RESOURCES"][$u][4]==0) return -2;

	error_log ("  [ADD] ".$q." |".json_encode ($argv));
	$id_ =  qryp ($q, $argt, $argv, 2, "db", $id_); 
	if ($id_==NULL && $GLOBALS["SQL_LAST_ERROR"]==1062)
	{
		_val_error ($u, $o["i_"], "", "", "DUPLICATE", ("Record Already Exists in ".$u));
		return -3;
	}
	if ($id_==NULL) return -2;
	return $id_;
}

function _select_cols ($u, &$q, $prefix)
{
	/* if (strlen ($prefix)>0 && isset ($GLOBALS[($u."_csv")]))
	{
		$k = $GLOBALS[($u."_csv")];
		$n = count ($k);
		for ($j=0; $j<$n; $j++)
		{ 
			if ($j>0) $q.=",";
			$q .= $prefix.$k[$j]; 
		}
		return;
	}*/ 
	
	$a = $GLOBALS[($u."_def")];
	$n = count ($a);
	for ($j=0; $j<$n; $j++)
	{ 
		if ($j>0) $q.=",";
		$q .= $prefix.$a[$j][0]; 
	}
}

function _select ($u, $t, &$aa, &$av, $db_="db", $join=[]) 
{
	$a = $GLOBALS[($u."_def")];
	$nj = count ($join);
	$prefix = "";
	
	$q = "SELECT ";
	if ($nj>0) $prefix=$t.".";
	_select_cols ($u, $q, $prefix);
	$ta = "`".$t."`";
	
	if ($nj>0 && isset ($GLOBALS[($u."_join")]))
	{
		$tt = $GLOBALS[($u."_join")];	
		for ($i=0; $i<$nj; $i++)
		{
			error_log ("[join] ".$join[$i]." of ".$nj);
			if (!isset ($tt[$join[$i]])) continue;
			$q.=",";
			$tj = $tt[$join[$i]];
			$prefix = $tj[1].".";
			_select_cols ($tj[0], $q, $prefix);
			$ta .= " LEFT JOIN `".$tj[1]."` ON ".$tj[2];
		}
	}

	$orderby = " ORDER BY ".$t.".".$a[0][0]." DESC "; // todo eval order by
	if (strlen ($GLOBALS["RESOURCES"][$u][6])>0) $orderby = " ORDER BY ".$GLOBALS["RESOURCES"][$u][6];

	$q .= " FROM ".$ta." ".$aa["w"].$orderby.$aa["lim"];  

	error_log ("    [SELECT] (".$u.") ".$q." |".$aa["s"]." | ".json_encode ($av));
	
	return qryp ($q, $aa["s"], $av); 
}

// --------------------------------------------------- 

function urr ($row,$n,$o,$i=-1,$l=-1)
{
	if ($o==1) echo '"'.$row[0].'":';
	echo '[';
	for ($j=0;$j<$n;$j++) 
	{
		if ($j>0) echo ",";
		echo '"'; 
	 	echo $row[$j];
		echo '"';
	} 
	if ($o==0 && $i>-1) echo ',"'.$i.'","ro'.$i.'","rc'.$l.'"';
	echo  ']';
}

function _ul ($u,$res,$n,$o=0)
{
	error_log ( "_ul:".$n);

	$o0 = array ('":[','":{','":[');
	$o1 = array (']','}',']');
	$i = 0;
	$l = 0;
	echo '"'.$u.$o0[$o]; // ':[';
	while ($row = mysqli_fetch_row ($res))
	{
		if ($i>0) echo ',';
		urr ($row,$n,$o,$i,$l);
		$i++;
		$l++; if ($l>1) $l=0;
	}
	echo $o1[$o]; 
//	if ($i==0) echo '"'.$u.'_no_data":[[]]';
}

function _rpt ($u, $t, &$aa, &$av, $join) 
{
	$CHART_TYPE = ["bar"=>1,"line"=>1];
	$CHART_STACKED = ["stacked"=>1];
	$mm = $GLOBALS["METRICS"];
	$mm_ = $GLOBALS["METRIC"];
	$a = $GLOBALS[($u."_def")];
	$n = count ($a);

	$xx = explode (",", _G("xaxis"));
	$yy = explode (",", _G("yaxis"));
	$zz = explode (",", _G("metrics"));
	$xn = 0; 
	$yn = 0; 
	$zn = 0; 
	if (strlen (_G("xaxis"))>0) $xn = count ($xx);
	if (strlen (_G("yaxis"))>0) $yn = count ($yy);
	if (strlen (_G("metrics"))>0) $zn = count ($zz);
	
	$x = "";
	$y = "";
	$z = "";
	$z_ = "";
	$g = "";
	$s = "";
	$xm= 0;
	$ym= 0;
	$zm= 0;
	//$zc= 0;
	$c=0;
	$i=0;

	$fmt="";
	$gg = array ();

	for ($i=0; $i<$xn; $i++) { $gg[$xx[$i]]=-1; } // todo: use $kk /\(..)/\
	for ($i=0; $i<$yn; $i++) { $gg[$yy[$i]]=-1; }
	for ($i=0; $i<$n; $i++)
	{
		$k_ = $a[$i][0];
		if (strlen ($a[$i][1])>0) $k_ = $a[$i][1];
		if (!isset ($gg[$k_])) continue;
		if ($a[$i][3]!=2) continue;
		$gg[$k_]=$i;
	}
	for ($i=0; $i<$xn; $i++) 
	{ 
		if ($gg[$xx[$i]]<0) continue; 
		if ($xm>0) $x.=","; $x.=$a[$gg[$xx[$i]]][0];  
		if ($c>0) $g.=","; $g.=$a[$gg[$xx[$i]]][0]; 
		if ($c>0) $fmt.=","; $fmt.='"'. $a[$gg[$xx[$i]]][10].'"';
		$xm++; $c++; 
	}
	for ($i=0; $i<$yn; $i++) 
	{ 
		if ($gg[$yy[$i]]<0) continue; 
		if ($ym>0) $y.=","; $y.=$a[$gg[$yy[$i]]][0];
		if ($c>0) $g.=","; $g.=$a[$gg[$yy[$i]]][0];
                if ($c>0) $fmt.=","; $fmt.='"'. $a[$gg[$yy[$i]]][10].'"';
		$ym++; $c++;
	}
	$s .= '"'.$u.'_z":[';   
	for ($i=0; $i<$zn; $i++)   // 	[metric,xtot_metric,ytot_metric,precision,pre,post]
	{
		if (!isset ($mm[$zz[$i]])) continue;
		$zn_ = count ($mm[$zz[$i]]);
		for ($j=0; $j<$zn_; $j++)
		{
			$m_ = $mm_[$mm[$zz[$i]][$j]];
			if ($zm>0) { $z.=","; $s.=","; } { $z.=$m_[0]; $z_.=$zz[$i]; }
			$s .= '["'.$m_[1].'","'.$m_[2].'","'.$m_[3].'","'.$m_[4].'","'.$m_[5].'","'.$m_[6].'","'.$m_[7].'"]';
			$zm++;
		}
	}
	if ($zm<1) // default metric: count
	{ 
		$m_ = $mm_["count"];
		$z.=$m_[0]; 
		$z_.="count";
		$s .= '["'.$m_[1].'","'.$m_[2].'","'.$m_[3].'","'.$m_[4].'","'.$m_[5].'","'.$m_[6].'"]';
		$zm++; 
	}
	$s .= '],';

	error_log ('[RPT]  x:['.$x.']  y:['.$y.']  z:['.$z.']  groupby:['.$g.']  fmt:['. $fmt.']' );

	if ($c<1) 
	{
		$q = "SELECT COUNT(*) FROM ".$t.$aa["w"]; 
		$row = qryp ($q, $aa["s"], $av, 1); 
		if ($row==NULL) return 404;

		header ('Content-Type: application/json');
		echo "{\"".$u."\":\"".$row[0]."\"";
		return 200;
	}

	$xx = explode (",",$x);
	$yy = explode (",",$y);

	$s .= '"'.$u.'_y":[';
	for ($j=0; $j<$ym; $j++) 
	{
		$q = "SELECT ".$yy[$j]." FROM ".$t.$aa["w"]." GROUP BY ".$yy[$j];
		if ($yy[$j]=="h" || $yy[$j]=="dt" || $yy[$j]=="wk" || $yy[$j]=="mn" || $yy[$j]=="yr")  $q.=" DESC ";
		$res = 	qryp ($q, $aa["s"], $av); 
		if ($j>0) $s .= ',';  
		$s .= '[';
		if ($res!=NULL)
		{
			$n = 0;
			while ($row = mysqli_fetch_row ($res))
			{
				if ($n>0) $s .= ',';
				$s .= '"'.$row[0].'"';
				$n++;
			}
		}
		$s .= ']';
	}
	$s .= '],';

	$s .=  '"'.$u.'_x":[';
	for ($j=0; $j<$xm; $j++) { if ($j>0) $s .= ','; $s .= '"'.$xx[$j].'"'; }
	$s .=  '],';
	
	$s .= '"'.$u.'_fmt":['.$fmt.'],';

	$chart_type = "bar";
	$chart_stacked = "";
	$chart_stacked = "";
	$chart_mmask = "";
	if (isset ($_GET["type"]) && isset ($CHART_TYPE[$_GET["type"]])) $chart_type = $_GET["type"];
	if (isset ($_GET["stacked"]) && isset ($CHART_STACKED[$_GET["stacked"]])) $chart_stacked = $_GET["stacked"];
	if (isset ($_GET["mmask"])) $chart_mmask = $_GET["mmask"];
	$s .= '"'.$u.'_rpt":[["'.$u.'","put-name-here","'.$x.'","'.$y.'","'.$z_.'","'.$chart_type.'","'.$chart_stacked.'","'.$chart_mmask.'",""]],'; // todo:saved report : load the params from db 

	$sort = "";
	if ($yn>0 && $y=="lvl") $sort = " ORDER BY ".$y;
	if ($yn==0 && $x=="voiceprompt_name") { $sort = " ORDER BY AVG(durtot)"; }
	if ($y=="h" || $y=="dt" || $y=="wk" || $y=="mn" || $y=="yr")  $sort = " DESC";

	$q = "SELECT ".$g.",".$z." FROM ".$t.$aa["w"]." GROUP BY ".$g.$sort; // ." WITH ROLLUP";
	error_log ("--> [RPT] ".$q." | ".json_encode ($av));
	$res = 	qryp ($q, $aa["s"], $av); 
	if ($res==NULL) return 404;

	header ('Content-Type: application/json');
	echo "{".$s.$aa['f'].',';
	_ul ($u, $res, ($xm+$ym+$zm), 2);

	return 200;
}

// ---------------------------------------

function k_ft ($t, $k, $v, &$aa, &$av)
{
	error_log ("k_ft: ".$k."=".json_encode ($v)); // MATCH(fullname) AGAINST('+jinja' IN BOOLEAN MODE)
	$s = ' WHERE ';
	if (strlen ($aa["w"])>0) $s = ' && ';
	$n = count ($v);
	$c = 0;
	for ($j=0; $j<$n; $j++) if (strlen($v[$j])>0)
	{ 
		if ($c==0) $aa["w"] .= $s."(";
		if ($c>0) $aa["w"] .= " && ";
		$aa["w"] .= $t.'.'.$k." REGEXP ?"; //.mysqli_real_escape_string ($GLOBALS["db"],$v[$j])."%\" ";
		$aa["s"] .= "s";
		$av[] = '[ \\^]'.$v[$j]."|^".$v[$j];
		$c++;
	}
	if ($c>0) $aa["w"] .= ")"; 
}

function k_n ($t, $k, $v, &$aa, &$av)
{
	$s = ' WHERE ';
	if (strlen ($aa["w"])>0) $s = ' && ';
	$n = count ($v);
	if ($n==1 && strlen(trim($v[0]))>0) { $aa["w"] .= $s.$t.'.'.$k."=?"; $aa["s"].="s"; $av[]=$v[0]; }
	if ($n==2 && strlen(trim($v[0]))>0 && strlen(trim($v[1]))>0) { $aa["w"] .= $s.$t.'.'.$k.">=? && ".$t.'.'.$k."<=?"; $aa["s"].="ss"; $av[]=$v[0]; $av[]=$v[1]; } 
}

function k_d ($t, $k, $v, &$aa, &$av)
{
	$s = ' WHERE ';
	if (strlen ($aa["w"])>0) $s = ' && ';
	$n = count ($v);
	if ($n>0)  
	{ 
		$aa["w"] .= $s."(".$t.'.'.$k.">=?"; 
		$aa["s"].="s"; 
		$v_ = $v[0];
		//$dt = DateTime::createFromFormat ('Y-m-d H:i:s', (trim($v[0])." 00:00:00")); 
		//if ($dt!=null) $v_ = $dt->getTimestamp ();
		$av[] = $v_; 
	} 
	if ($n==1) 
	{ 
		$aa["w"] .= " && ".$t.'.'.$k."<?)"; 
		$aa["s"].="s"; 
		$v_ = "".($v[0]+86400);
		//$dt = DateTime::createFromFormat ('Y-m-d H:i:s', (trim($v[0])." 23:59:59"));
		//if ($dt!=null) $v_ = $dt->getTimestamp ();
		$av[] = $v_; 
	} 
	if ($n>1)  
	{ 
		$aa["w"] .= " && ".$t.'.'.$k."<?)";  
		$aa["s"].="s";  
		$v_ = "".($v[1]+86400);
		//$dt = DateTime::createFromFormat ('Y-m-d H:i:s', (trim($v[1])." 23:59:59")); 
		//if ($dt!=null) $v_ = $dt->getTimestamp ();
		$av[] = $v_; 
	} 
}

function k_c ($t, $k, $v, &$aa, &$av)
{
	$s = ' WHERE ';
	if (strlen ($aa["w"])>0) $s = ' && ';
	$n = count ($v);
	$c = 0;
	for ($j=0; $j<$n; $j++) if (strlen($v[$j])>0) 
	{
		if ($c==0) $aa["w"] .= $s.$t.'.'.$k." IN (";
		if ($c>0) $aa["w"] .=","; 
		$aa["w"] .= "?"; //mysqli_real_escape_string($GLOBALS["db"],$v[$j])."\""; 
		$aa["s"] .= "s";
		$av[] = $v[$j];
		$c++;
	}
	if ($c>0) $aa["w"] .= ")";
}

function k_s ($t, $k, $v, &$aa, &$av)
{
	$s = ' WHERE ';
	if (strlen ($aa["w"])>0) $s = ' && ';
	$n = count ($v);
	$c = 0;
	for ($j=0; $j<$n; $j++) if (strlen($v[$j])>0)
	{ 
		if ($c==0) $aa["w"] .= $s."(";
		if ($c>0) $aa["w"] .= " || ";
		$aa["w"] .= $t.'.'.$k." LIKE ?"; //.mysqli_real_escape_string ($GLOBALS["db"],$v[$j])."%\" ";
		$aa["s"] .= "s";
		$av[] = "%".$v[$j]."%";
		$c++;
	}
	if ($c>0) $aa["w"] .= ")";
}

function ctx_f ($u, $t, &$aa, &$av, &$o, $issub=0) // parse GET parameters
{
	$a = $GLOBALS[($u."_def")];
	$n = count ($a);
	$s = '"'.$u.'_k":{';
	for ($i=0; $i<$n; $i++)
	{
		if ($a[$i][10]===NULL) break;
		$m = $a[$i][3];
		$k = $a[$i][0];
		if (strlen($a[$i][1])>0) $k=$a[$i][1];

		$va = "";
		for ($p=0; $p<3; $p++)
		{
			$v = NULL;
			if ($p==0 && isset ($o[$k])) $v = $o[$k];
			if ($p==1 && isset ($o[($k.'__')])) { $v=$o[($k.'__')]; }
			if ($p==2 && isset ($o[($k.'_')])) { $m=9; $v=$o[($k.'_')]; }
			if ($v==NULL) continue;
			
			if ($p!=1)
			{
				if (strlen($va)>0) $va.=",";
				$va.=$v;
			}
			
			if ($issub==1)  continue; // dont generate where clause for sub
			
			if ($m==1) k_ft ($t, $a[$i][0], explode (",",$v), $aa, $av);
			if ($m==2) k_c ($t, $a[$i][0], explode (",",$v), $aa, $av);
			if ($m==3) k_d ($t, $a[$i][0], explode (";",$v), $aa, $av);
			if ($m==4) k_n ($t, $a[$i][0], explode ("-",$v), $aa, $av);
			if ($m==9) k_ft ($t, $a[$i][0], explode (" ",$v), $aa, $av); // fulltext search
		}
		if ($i>0) { $s .= ','; }
		$s .= '"'.$k.'":["'.$i.'","'.$k.'","'.$va.'","'.$a[$i][9].'","%0"]';
	}
	$s.='}';
	$aa["f"] .= $s;
}

function ctx ($u, $t, &$aa, &$av, &$fo, $join=[], $issub=0)
{
	$a = $GLOBALS[($u."_def")];

	$_a = 0;
	$_c = 20;
	$c = 20;
	$title = "";
	if (isset ($_GET["_a"])) $_a = ($_GET["_a"]*1);
	if (isset ($_GET["_c"])) { $_c = ($_GET["_c"]*1); $c=$_c; }
	if (isset ($_GET["__c"])) $_c = ($_GET["__c"]*1); // c override
	if ($_c>1) $_a -= ($_a % $_c); // align _a
	if (isset ($_GET["_o"])) $_a = $_a+($_GET["_o"]*1);
	if (isset ($_GET["_title"])) $title = $_GET["_title"];
	
	$ta = $t;
	$uj = null;
	$nj = 0;
	if (isset ($GLOBALS[($u."_join")])) { $uj=$GLOBALS[($u."_join")]; $nj=count ($join); }
	
	ctx_f ($u, $t, $aa, $av, $fo, $issub);
	
	for ($i=0; $i<$nj; $i++)
	{
		if (!isset ($uj[$join[$i]])) continue;
		$tj = $uj[$join[$i]];
		$ta .= " LEFT JOIN `".$tj[1]."` ON ".$tj[2];
		$aa["f"] .= ","; 
		$fo_ = []; // quick fix: dont filter by join col until get parameters have resource.prefix
		ctx_f ($tj[0], $tj[1], $aa, $av, $fo_, $issub);
	}
	
	$q = 'SELECT COUNT(DISTINCT '.$t.'.'.$a[0][0].') FROM '.$ta.' '.$aa["w"];  	// error_log ("   [CTX] (".$u.") ".$q);
	$row = qryp ($q, $aa["s"], $av, 1); 
	$_n = $row[0];
	$_m = $_n%$_c;
	if ($_m==0 && $_n>0) $_m=$_c; /////
	$_l = $_n-$_m;
	if ($_a<0) $_a=0;
	if ($_a>$_l) $_a=$_l;

	$a_ = $_a;
	if ($_n>0) $a_++;
	$c_ = $_a+$_c;
	if ($c_>$_n) $c_=$_n;
	
	$aa["lim"] = " LIMIT ".$_a.",".$_c;
	$aa["ctx"] = '"'.$u.'_ctx":[["'.$_a.'","'.$c.'","'.$a_.'","'.$c_.'","'.$_n.'","'.$title.'"]]'; // todo: append _join list to $aa["ctx"]
}

function ctx_rights ($u, $t, &$aa, &$av, &$p, &$rights)
{
	$s = " WHERE ";
	if (strlen ($aa["w"])>0) $s = " && ";
	$n = count ($rights);
	$c = 0;
	for ($i=3; $i<$n; $i+=2)
	{
		$k = $rights[($i+1)];
		if (strlen ($k)>0 && !isset ($p[$k])) { error_log ("ctx-right fail ".$k); return -1; }
		$aa["w"].=$s;
		if ($c==0) $aa["w"].="(";
		$aa["w"] .= $t.'.'.$rights[$i];
		if (strlen ($k)>0)
		{
			$aa["w"] .= "?";
			$aa["s"] .= "s";
			$av[] = $p[$k];
		}
		$s = " || ";
		$c++;
	}
	if ($c>0) $aa["w"].=") ";
	return 0;
}

function ctx_unset ($u)
{
	$gg = array ("_a", "_c", "_o", "__c"); 
	for ($i=0; $i<4; $i++) unset ($_GET[$gg[$i]]);
	$a = $GLOBALS[($u."_def")];
	$n = count ($a);
	for ($i=0; $i<$n; $i++)
	{
		$k = $a[$i][1];
		if (strlen($k)<1) $k=$a[$i][0];
		if (!isset ($_GET[$k])) continue; 
		unset ($_GET[$k]);
	}
}

// ----------------------

function _csv_cols_v ($u, $row, $start)
{
	$a = $GLOBALS[($u."_def")];
        $kk = $GLOBALS[($u."_k")];
        $jj = null;
        $jn = count ($a);
	if (isset ($GLOBALS[($u."_csv")])) {  $jj = $GLOBALS[($u."_csv")]; $jn = count ($jj); }
       	for ($j=0; $j<$jn; $j++)
	{
		$j_=$j;
		if ($jj!=null) $j_ = $kk[$jj[$j]];
		$v = $row[($j_+$start)];
		if ($a[$j_][3]==3 && strlen ($v)>0) { $v = _date ($a[$j_][10], $v); }
		if ($a[$j_][3]==2 && strlen($a[$j_][10])>0) { $v = _enum ($a[$j_][10], $v); }
		if ($j>0) echo ",";
		echo '"'.$v.'"';
	}
	return count ($a);
}

function _csv_cols_k ($u)
{
	$a = $GLOBALS[($u."_def")];
        $kk = $GLOBALS[($u."_k")];
        $jj = null;
        $jn = count ($a);
	if (isset ($GLOBALS[($u."_csv")])) {  $jj = $GLOBALS[($u."_csv")]; $jn = count ($jj); }
        for ($j=0; $j<$jn; $j++)
        {
        	$j_=$j;
		if ($jj!=null) $j_ = $kk[$jj[$j]];
        	if ($j>0) echo ",";
                echo '"'.strtoupper($a[$j_][9]).'"';
	}        
}

function _csv_download ($u, $res, $join)
{

        header("Content-Type: text/csv");
        //header("Content-Length: " . filesize($s));
        //header('Content-Description: File Download');
        header('Content-Disposition: attachment; filename="'.$u.'.csv"');
        //header('Expires: 0');
        //header('Cache-Control: must-revalidate');
        //header('Pragma: public');
        header("Content-Transfer-Encoding: binary");

	$nj = 0;
	$uj = null;
	if (isset ($GLOBALS[($u."_join")])) { $nj=count ($join);  $uj=$GLOBALS[($u."_join")]; }
			
	_csv_cols_k ($u);
	for ($i=0; $i<$nj; $i++)
	{
		if (!isset ($uj[$join[$i]])) continue;
		echo ',';
		_csv_cols_k ($uj[$join[$i]][0]);
	}
        echo "\r\n";

        while (($row = mysqli_fetch_row ($res)))
        {
        	$start = _csv_cols_v ($u, $row, 0);
		for ($i=0; $i<$nj; $i++)
		{
			if (!isset ($uj[$join[$i]])) continue;
			echo ',';
			$start += _csv_cols_v ($uj[$join[$i]][0], $row, $start);
		}
                echo  "\r\n";
        }
	exit (0);
}

function _file_download ($u, $res, $f)
{
	$row = mysqli_fetch_row ($res);
	if ($row==NULL) return 404;

        $mime = "application/octet-stream"; // todo pick from RESOURCE
        $kk = $GLOBALS[($u."_k")];
        $ff = array ();
        if (isset ($GLOBALS[($u."_folders")])) $ff = $GLOBALS[($u."_folders")];
        $s = DAT."/".$u."/";
        if (isset ($ff[$f])) { $s.=$ff[$f][0]."/"; $mime=$ff[$f][1]; }
        $s .= $row[0];
        if ($u=="vfiles") $s.=".wav";
	if ($u=="calls") 
	{
		$s .= ".ogg";
		$mime = 'audio/ogg'; // 'audio/ogg';
	}

	$found = file_exists ($s);
	
	if ($u=="calls" && !$found) // 
	{
		copy_from_pabx ($row[0]);
		$found = file_exists ($s);
	}

	error_log ("FILE DOWNLOAD: ".$s." | ".$found); 

	if (!$found) return 404;

        if (isset ($kk["mime"])) $mime = $row[$kk["mime"]]; 

	// todo: update read status function

        // send the right headers
        header("Content-Type: " . $mime);
        header("Content-Length: " . filesize($s));
        //header('Content-Description: File Download');
	if (isset ($kk["name"])) header('Content-Disposition: attachment; filename="'.$row[$kk["name"]].'"');
        //header('Expires: 0');
        header('Cache-Control: no-cache');
        //header('Pragma: public');
        header("Content-Transfer-Encoding: binary");
        readfile ($s);
        exit (0);
}

function ur ($u, &$a, $row, $n, $fmt, &$o, $i=-1, $l=-1)
{
	$fmt_start = array ('[','[','{','');
	$fmt_end = array (']',']','}','');
	if ($fmt==1) echo '"'.$row[0].'":';
	echo $fmt_start[$fmt];
	for ($j=0;$j<$n;$j++) 
	{
		if ($j>0) echo ",";
		if ($fmt==2 || $fmt==3)
		{
			$k = $a[$j][0];
			if (strlen ($a[$j][1])>0) $k = $a[$j][1];
			echo '"'.$k.'":';
		}
		$v = $row[$j];
		// todo: if (2 && file) $v = base64 (file)
		// if ($a[$j][3]==3 && strlen ($row[$j])>0) { $v = date ($a[$j][9], $row[$j]); } //error_log ("-->date:(".$a[$j][6].") ".$a[$j][0].":".$row[$j]); }
		echo '"'.$v.'"';
	} 
	if ($fmt==0 && $i>-1) echo ',"'.$i.'","ro'.$i.'","rc'.$l.'"';
	echo $fmt_end[$fmt];
	echo "\r\n";
}

function _u ($u, $res, $id, $fmt, &$o, &$p)
{
	// if ($id!=NULL && $fmt==2) $fmt=3;	
	$fmt_start = array ('":[', '":{', '":[', '":{');
	$fmt_end = array (']', '}', ']', '}');
	$i = 0;
	$l = 0;
	$a = $GLOBALS[($u."_def")];
	$jn = count ($a);
	echo '"'.$u.$fmt_start[$fmt]; // ':[';
	while ($row = mysqli_fetch_row ($res))
	{
		if ($i>0) echo ',';
		ur ($u, $a, $row, $jn, $fmt, $o, $i, $l);
		$i++;
		$l++; if ($l>1) $l=0;
		if ($id!=NULL) break;
	}
	
	if ($id==-1 && $i==0) // map any avalable field here
	{
		error_log ("---- minus one map ----");
		echo "[\"-1\"";
		for ($j=1; $j<$jn; $j++) 
		{
			$v="";
			if (isset ($p[$a[$j][0]])) $v=$p[$a[$j][0]];
			echo ",\"".$v."\"";
		}
		echo "]";
	}	
	echo $fmt_end[$fmt]; 
	if ($i==0) echo ', "'.$u.'_no_data":[[]]';
	return $row;
}

// ----------------------------------------

function csv_upload ($u, $t, $i, &$p)
{
	$file_tmp_name = $_FILES[$t]["tmp_name"][$i];
	$file_name = $_FILES[$t]["name"][$i];
	$vv = explode (".", $file_name);
	$n = count ($vv);

	if ($n<2 || $vv[$n-1]!="csv")
	{
		// return _val_error ($u, $i, "File Format", "", "INVALID", "Upload Failed. File should be CSV Format!"); 
	}

	$fd = fopen ($file_tmp_name, "r");
	if (!$fd)
	{
		return _val_error ($u, $i, "System Error", "", "INVALID", "Upload Failed!"); 
	}

	$p['csv_data_nb'] = '"csv_data_nb":[["error","No records found"]]';
	$p['csv_data_k'] = '"csv_data_k":{"0":["","","?","",""], "1":["","","?","",""], "2":["","","?","",""], "3":["","","?","",""] }';
	$p['csv_data'] = '"csv_data":[';

	$r = -1;
	while (($data = fgetcsv ($fd, 4000, ",")) !== FALSE) 
	{
		$r++;

		$jn = count ($data);

		if ($r==0)
		{
			$p['csv_data_k'] = '"csv_data_k":{';
			for ($j=0; $j<3; $j++)
			{
				$v = '?';
				if ($jn>$j) $v = $data[$j];
				if ($j>0) $p['csv_data_k'] .= ',';
				$p['csv_data_k'] .= '"'.$j.'":["","","'.$v.'","",""]';
			}
			$p['csv_data_k'] .= '}';
			continue;
		}

		if ($r>10) continue;

		if ($r>1) $p['csv_data'] .= ',';
		$p['csv_data'] .= '[';		
		for ($j=0; $j<3; $j++)
		{
			$v = '?';
			if ($jn>$j) $v = __VESC ($data[$j]);
			if ($j>0) $p['csv_data'] .= ',';
			$p['csv_data'] .= '"'.$v.'"';
		}
		$p['csv_data'] .= ']';
	}

  	fclose ($fd);

	if ($r>0) $p['csv_data_nb'] = '"csv_data_nb":[["info","'.$r.' records found"]]';

	$p['csv_data'] .= ']';

	return 0;
}

function _file_upload ($u, $t, $i, &$o, &$p)
{
	$o["id"] = _val_id ();
	$o["name"] = $_FILES[$t]["name"][$i];
	$o["mime"] = $_FILES[$t]["type"][$i];
	$o["size"] = $_FILES[$t]["size"][$i];
	$o["uploadstatus"] = $_FILES[$t]["error"][$i];
	$o["movestatus"] = "fail";
	$s = $o["id"];
	$f = $_FILES[$t]["tmp_name"][$i];

	error_log ("  file_upload: id=".$o["id"]." | ".$i." | ".json_encode ($_FILES[$t]["error"][$i]));
	if ($_FILES[$t]["error"][$i]!=0)
	{
		_val_error ($u, $i, "File Size", $out[0], "INVALID", "Upload Failed. file size exceeds allowed size!"); 
		return -2;
	}
	
	if ($u=="csv")
	{
		$e = csv_upload ($u, $t, $i, $p);
		if ($e>0) return -2;
	}

	if ($u=="vfiles") // todo validate: voicefile and get duration
	{
		$s.=".wav";
		$out=null;
		$ret=[null,null,null,null];
		exec (('soxi -t '.$f), $out, $ret[0]);
		error_log ( "  [soxi] -t ".$f." | ".$ret[0]." |".json_encode ($out));
		if ($ret[0]!=0)
		{
			_val_error ($u, $i, "File Format", $out[0], "INVALID", "Upload Failed. Not a wav file!"); 
			return -2;
		}
		exec (('soxi -r '.$f), $out, $ret[1]);
		exec (('soxi -c '.$f), $out, $ret[2]);
		exec (('soxi -D '.$f), $out, $ret[3]);
		error_log ( "  [soxi] ".json_encode ($ret) ." | ".json_encode ($out));
		$e = 0;
		if ($ret[1]!=0 || $out[1]!="8000") { $e++;   _val_error ($u, $i, "Sample Rate", $out[1], "INVALID", "Sample rate should be 8000Hz");    }
		if ($ret[2]!=0 || $out[2]!="1") { $e++;   _val_error ($u, $i, "Channels", $out[2], "INVALID", "Channels should be single/mono channel");   }
		if ($e>0) return -2;

		$o["channels"] = $out[1];
		$o["sample_rate"] = $out[2];
		$o["duration"] = $out[3];

	}

	error_log ("   move file: ".(DAT."/".$u."/".$s));
	
	if ($o["uploadstatus"]==0 && move_uploaded_file ($_FILES[$t]["tmp_name"][$i], (DAT."/".$u."/".$s))) // 
	{
		$o["movestatus"] = "ok";
	}
	else 
	{
		// todo: log error
		_val_error ($u, $i, "Destination", "id", "INVALID", "Upload Failed. Permission denied!"); 
		return -2;
	}

	return _add ($u, $t, $o, $p, $o["id"]);
}

function _params (&$b, &$o, &$p)
{
	$n = count ($b);
	
	error_log ("  [par] ".$b[0]." |".$n);

	for ($i=2; $i<$n; $i+=2)
	{
		$k = $b[($i+1)];
		$v = null;
		if (isset ($o[$k])) $v = $o[$k];
		if (isset ($p[$k])) $v = $p[$k];
		if (substr ($k,0,1)==' ') $v = substr ($k,1);
		if ($v===null) continue;
		$p[$b[$i]] = $v;
		error_log ("    --> par: ".$i.") ".$b[$i]."=".$v."<".$k.">");
	}

}

function _caret (&$b, &$o, &$p)
{
	$n = count ($b);
	$k = $b[2];
	$v = null;
	$vv = [];
	if (!isset ($p[$k])) 
	{
		error_log ("  [caret] ".$b[0]." ".$k." is not set"); 
		return; 
	}
	$v=$p[$k]; 
	$vv=explode ('^',$v);
	$vn = count ($vv);
	error_log ("  [caret] ".$b[0]." ".$k." |".$n);
	for ($i=3; $i<$n; $i++) 
	{
		$v_ = "";
		if ($v!=null && ($i-2)<$vn) $v_ = $vv[($i-2)];
		$p[$b[$i]] = $v_;	
		error_log ("   caret -> ".($i-3).": ".$b[$i]." ".$v_." | ".$vn ." ");
	}
}

function _dup (&$b, &$o, &$p)
{
	error_log ("  [dup] ".$b[0]);

	$aa = array ("ctx"=>"", "f"=>"", "w"=>"", "s"=>"", "sort"=>"", "lim"=>"");
	$av = [];

	$a = $GLOBALS[($b[0]."_def")];
	$kk = $GLOBALS[($b[0]."_k")];
	$t = $GLOBALS["RESOURCES"][$b[0]][0];
	$t_ = $GLOBALS["RESOURCES"][$b[0]][1];
	if (strlen ($t_)<1) $t_=$t;

	$aa["w"] = ' WHERE ';
	$i=2;
	$e=0;
	while ($b[$i]!=NULL)
	{
		if ($i>2) $aa["w"] .= '&& ';
		$k = $b[($i+1)];
		$v = null;
		$op = '=';
		if (substr ($k,0,1)==':') 
		{ 
			$vv = explode (":",$k); 
			$op=$vv[1]; 
			$k=$vv[2];  
		}
		if (isset ($o[$k]) && strlen($o[$k])>0) $v = $o[$k];
		if (isset ($p[$k]) && strlen($p[$k])>0) $v = $p[$k];
		if (substr ($k,0,1)==' ') $v = substr ($k,1);
		if ($v==null) { $v=""; error_log ("    --x dup k blank:  ".$k." ".$v); } // return NULL; }

		$aa["w"] .= $b[$i].$op."? "; 
		$aa["s"] .= "s";
		$av[] = __VESC ($v);
		$i += 2;
	}

	error_log ("    --> dup: (".$b[0].") ".$aa["w"]." |". json_encode ($av));

	$res = _select ($b[0], $t, $aa, $av);
	if ($res==NULL) return NULL;
	$row = mysqli_fetch_row ($res);
	if ($row==NULL) return NULL; // TODO: clear related field eg location_id, location
	$i++;
	
	if ($b[$i]=="*") // used mainly by upd
	{
		$n = count ($a);
		for ($i=1; $i<$n; $i++) $p[$a[$i][0]] = $row[$i];
		return $row;
	}
	
	$n = count ($b);
	for ($i; $i<$n; $i++)
	{
		$vv = explode (":",$b[$i]);
		$vn = count ($vv);
		$j = $kk[$vv[0]]; // $j = $kk[$b[$i]];
		$k = $t_."_".$vv[0];
		if (strlen ($a[$j][1])>0) $k = $a[$j][1];
		if ($vn>1) $k = $vv[1];
		$v = $row[$j];	
		
		if ($vn>2)
		{
			$i_=0;
			$o[$vv[2]] = [];
			$o[$vv[2]][$i_] = [];
			$o[$vv[2]][$i_][$k] = $v;
			while ($row = mysqli_fetch_row ($res)) 
			{
				$i_++;
				$o[$vv[2]][$i_] = [];
				$o[$vv[2]][$i_][$k] = $row[$j];
			}
			error_log ("    --> dup: ".$i.") ".$vv[2].": ". json_encode ($o[$vv[2]]));		
			return NULL;
		}
		
		$p[$k] = $v;
		error_log ("    --> dup: ".$i.") ".$k."=".$v);		
	}
	return $row;	
}

function _agg (&$b, &$o, &$p)
{
	error_log ("  [agg] ".$b[0]." ".$b[1]." (".$b[2].") ");
	//error_log ("    --> [p]: ".json_encode ($p));
	
	$u = $b[0];
	$t = $GLOBALS["RESOURCES"][$u][0];
	$a = $GLOBALS[($u."_def")];
	$an = count ($a);	
	$m = substr ($b[1],3,1);
	$skip_blank = 0;
	if (strlen($b[1])>4) $skip_blank=1;

	$u_ = $b[2];
	$t_ = $GLOBALS["RESOURCES"][$u_][0];
	$c = 0;
	$q = "SELECT ";
	for ($i=0; $i<$an; $i++)
	{
		if ($a[$i][2]!=$m) continue;
		if ($a[$i][6]!=$u_) continue;
		if ($c>0) { $q.=","; }
		$q .= $a[$i][7];
		$c++;
	}

	if ($c<1) { error_log ("    --x agg error:  c:".$c); return; }
	
	$av = [];
	$ds = "";
	$c = 0;
	$e = 0;	
	$n = count ($b);
	for ($i=4; $i<$n; $i+=2)
	{
		$k = $b[($i+1)];
		$v = NULL;
		$op = '=';
		if (substr ($k,0,1)==':') 
		{ 
			$vv = explode (":",$k); 
			$op=$vv[1]; 
			$k=$vv[2];  
		}
		if (isset ($o[$k]) /*&& strlen($o[$k])>0*/) $v = $o[$k];
		if (isset ($p[$k]) /*&& strlen($p[$k])>0*/) $v = $p[$k];
		if (substr ($k,0,1)==' ') $v = substr ($k,1);
		if ($v===NULL) { error_log ("    --x agg error:  ".$k." ".$v); $e++; break; }

		if ($i==4) $q .= ' FROM '.$t_.' WHERE ';
		if ($i>4) $q .= '&& ';
		$q .= $b[$i].$op.'? '; 
		$ds .= "s";
		$av[] = $v;
		$c++;
	}

	if ($e>0) { error_log ("    --x agg error:  e:".$e); return; }

	error_log ("    --> agg qs:".$q." |".json_encode ($av)); 
	
	$row = qryp ($q, $ds, $av, 1);
	if (!$row) { error_log ("    --x agg error: nodata"); return; }
	
	// -----------

	$qu = "UPDATE ".$t." SET ";
	$du = "";
	$av = [];
	$c = -1;
	$c_ = 0;
	
	for ($i=0; $i<$an; $i++)
	{
		if ($a[$i][2]!=$m) continue;
		if ($a[$i][6]!=$u_) continue;
		$c++;
		if ($skip_blank==1 && strlen ($row[$c])<1) continue;
		if ($c_>0) $qu.=","; 
		$qu .= $a[$i][0]."=?";
		$d_ = "s";
		//if ($a[$i][3]==4) $d_="i";
		//if ($a[$i][3]==5) $d_="d";
		//if ($a[$i][3]==6) $d_="b";
		$du .= $d_;
		$av[] = "".$row[$c];
		if (strlen($a[$i][8])>0) { $p[$a[$i][8]] = $row[$c]; } 
		$c_++;
	}
	
	
		
	$ta = $GLOBALS["RESOURCES"][$u][1];
	if (strlen($ta)<1) $ta=$t;
	$k = $ta."_".$a[0][0];
	if (strlen ($a[0][1])>0) $k = $a[0][1];	
	if (strlen($b[3])>0) $k = $b[3];
	
	$v = "";
	if (isset ($o[$k])) $v = $o[$k];
	if (isset ($p[$k])) $v = $p[$k];	
	$du .= "s";
	$av[] = $v;
	
	$qu .= " WHERE ".$a[0][0]."=?";
	
	error_log ("    --> agg qu:".$qu." |".json_encode ($av)); 

	qryp ($qu, $du, $av, 3);
}

// --------------------------------------

function rest_uri_post ($u, $id, &$o, &$p, $api="")
{
	error_log ("----------------------POST START (".$u."/".$id.")-------------------------------------");
	error_log ("  [r] ". $_SESSION["cc_user_role"]);
	error_log ("  [o] ". json_encode ($o));
	error_log ("  [p] ". json_encode ($p));

	if (!isset ($GLOBALS[($u.$api."_api")])) return 404;
	
	if (!isset ($GLOBALS[("RIGHTS_".$_SESSION["cc_user_role"])])) return 404;
	$rights = $GLOBALS[("RIGHTS_".$_SESSION["cc_user_role"])];

	$rt = 202;
	if ($id==NULL) $rt=201;

	$bb = $GLOBALS[($u.$api."_api")];
	$n = count ($bb);
	for ($i=0; $i<$n; $i++)
	{
		$u_ = $bb[$i][0];
		$f_ = $bb[$i][1];
		$t_ = $GLOBALS["RESOURCES"][$u_][0];
		$ta_ = $GLOBALS["RESOURCES"][$u_][1];
		if (strlen($ta_)<1) $ta_=$t_;
		$m_ = $GLOBALS["RESOURCES"][$u_][2];
		$a_ = $GLOBALS[($u_."_def")];
		$k_ = $ta_."_".$a_[0][0];
		if (strlen ($a_[0][1])>0) $k_ = $a_[0][1];

		if ($f_=="params")
		{
			 _params ($bb[$i], $o, $p);
			continue;
		}
		
		if ($f_=="caret")
		{
			 _caret ($bb[$i], $o, $p);
			continue;
		}
		
		if ($f_=="aub")
		{
			// if (isset ($p["aub_id"]) && $p["aub_id"]>0) continue;
			$p["aub_id"] = "0";
			$q = "INSERT INTO aub(t) VALUES(?)";
			$argt = "s";
			$argv = [$u];
			$p["aub_id"] = qryp ($q, $argt, $argv, 2, "db");  // generate audit batch_id
			continue;
		}

		if ($f_=="dup")
		{
			 _dup ($bb[$i], $o, $p);
			continue;
		}

		if (substr($f_,0,3)=="agg")
		{
			_agg ($bb[$i], $o, $p);
			continue;
		}

		if ($f_=="array")
		{	
			if (!isset ($o[$u_])) continue;		
			$o_ = $o[$u_];
			$n_ = count ($o_);
			$api_ = "";
			$fm_ = 0;
			$n__ = count ($bb[$i]);
			if ($n__>2) $api_ = $bb[$i][2];
			if ($n__>3 && $bb[$i][3]=="1" && $id==NULL) $fm_=1; // allow link during add
			if ($n__>3 && $bb[$i][4]=="1" && $id!=NULL) $fm_=1; // allow link during upd
			error_log ("  [arr] ".$u_."(".$api_.") n=".$n_." | ".$fm_."(".$id.") | ".json_encode ($o[$u_]));
			if ($n__>3 && $fm_==0) continue;
			for ($i_=0; $i_<$n_; $i_++)
			{
				error_log ("  [arr-item] ".$u_."(".$api_.") ".$i_." of ".$n_);
				$o_[$i_]["i_"]=$i_;
				$p_ = $p;
				rest_uri_post ($u_, NULL, $o_[$i_], $p_, $api_);
			}
			continue;
		}
		
		if ($f_=="object")
		{	
			error_log ("  [obj] ".$u_);
			$o[$k_]=null;  // unset any fk not in object
			if (!isset ($o[$u_])) continue; 
			
			$_k_ = array_keys ($o[$u_]);
			$_n_ = count ($_k_);
			if ($_n_<1) continue;

			if (isset ($bb[$i][2]) && $bb[$i][2]=="p" && isset ($o[$u_][$k_])) $p[$k_]=$o[$u_][$k_]; // prepolutate incase record is not yet in db (peer process will complete linking)
			
			$o_ = $o[$u_];	
			$o_["i_"]=$o["i_"];
			//$o_[$u_]['action_'] = $o['action_'];		
			rest_uri_post ($u_, NULL, $o_, $p);
			continue;
		}
		
		if ($f_=="include") 
		{
			rest_uri_post ($u_, NULL, $o, $p); // evaluate the full api scope
			continue;
		}
		
		$s_ = "";	
		$id_ = NULL;
		if (isset ($o[$k_]) && strlen ($o[$k_])>0) $id_ = $o[$k_];
		if (isset ($p[$k_]) && strlen ($p[$k_])>0) $id_ = $p[$k_];
		if ($u==$u_)
		{
			if ($id_==NULL) $rt=201;
			if ($id_!=NULL) $rt=202;
		}
		
		if ($f_=="try")
		{
			$id_ = _try ($u_, $t_, $id_, $o, $p, $rights[$u_]);
			$s_ = "@ ";
		}
		
		if (strlen ($f_)==0 && $id_!=NULL)
		{
			if ($m_!=2 && $m_!=3) continue;
			if ($rights[$u_][2]!="1") return 403; // check upd rights flag
			$fm_ = "2";
			if (isset ($bb[$i][2])) $fm_ = $bb[$i][2];
			error_log ("  [upd] ".$u_." ".$k_." | ".$fm_);
			$id_ = _upd ($u_, $t_, $id_, $o, $p, $rights[$u_], $fm_);
			$s_ = "& ";
		}

		if (strlen ($f_)==0 && $id_==NULL)
		{
			if ($m_!=1 && $m_!=3) continue;
			if ($rights[$u_][1]!="1") return 403; // check add rights flag
			error_log ("  [add] ".$u_." | ".$k_);
			$id_ = _add ($u_, $t_, $o, $p);
			$s_ = "* ";
		}

		if ($f_=="file" && $id_==NULL)
		{
			if ($rights[$u_][1]!="1") return 403; // check add rights flag
			$p['batch_id'] = _val_id ();
			error_log ("  [file] ".$u_);
			if (!isset ($_FILES[$t_])) 
			{ 
				error_log (" --- no file to upload"); 
				_val_error ($u, $i, "File Format", "", "INVALID", "File Upload Failed!"); 
				return 412; 
			}
			$n_ = count ($_FILES[$t_]["name"]); // check for multiple files
			for ($i_=0; $i_<$n_; $i_++)
			{
				error_log ("      file ".$i_." of ".$n_);
				$o_ = array ();
				$o_["i_"]=$i_;
				$id_ = _file_upload ($u_, $t_, $i_, $o_, $p);
			}
			$s_ = "** ";
		}	

		error_log ("    +--".$s_.$k_."=".$id_);

		if ($id_==-2) return 412;
		
		$p[$k_] = "".$id_;
	}

	error_log ("----------------------POST END (".$u.")-------------------------------------");

	return $rt;
}

function rest_uri_get ($u, $id, &$o, &$p, $rt, &$fo)
{
	if (!isset ($GLOBALS[("RIGHTS_".$_SESSION["cc_user_role"])])) return 404;
	$rights = $GLOBALS[("RIGHTS_".$_SESSION["cc_user_role"])];
	
	$aa = array ("ctx"=>"", "f"=>"", "w"=>"", "s"=>"", "sort"=>"", "lim"=>"");
	$av = [];

	$t = $GLOBALS["RESOURCES"][$u][0];
	$ta = $GLOBALS["RESOURCES"][$u][1];
	if (strlen($ta)<1) $ta=$t;
	$a = $GLOBALS[($u."_def")];

	$fn = NULL;
	if ($id!==NULL && $id=="rpt") { $fn="rpt"; $id=NULL; }
	if ($id==NULL && isset ($_GET["metrics"])) { $fn="rpt"; $id=NULL; }
	if ($id!==NULL){ $aa["w"]=" WHERE ".$t.".".$a[0][0]."=? "; $aa["s"]="s"; $av[]=$id; }

	if ($rights[$u][0]!="1") return 403; // check read rights flag
	
	if (ctx_rights ($u, $t, $aa, $av, $p, $rights[$u])!=0)
	{
		return 403;
	}

	$join = [];
	if ($id==NULL && isset ($_GET["join"])) $join = explode (",",$_GET["join"]); // todo: replicate db for reporting
		
	if ($id==NULL)	ctx ($u, $t, $aa, $av, $fo, $join);
	
	if ($id!=NULL) // generate u_k (pseudo: only key-map useful)
	{
		$aa_ = array ("ctx"=>"", "f"=>"", "w"=>"", "s"=>"", "sort"=>"", "lim"=>"");
		$av_ = [];
		$fo_ = [];
		ctx_f ($u, $t, $aa_, $av_, $fo_);
		$aa["f"] = $aa_["f"];
	}
 
	if ($fn=="rpt") 
	{ 
		return _rpt ($u, $t, $aa, $av, $join);
	}
 
	if ($id==NULL && (isset ($_GET["csv"]) || isset ($_GET["xlsx"])))
	{
		$aa["lim"] = "";
	} 
	
	$res = _select ($u, $t, $aa, $av, "db", $join); 
		
	if ($res==NULL) return 500;

	if ($id!=NULL && isset ($_GET["file"]))
	{
		return _file_download ($u, $res, $_GET["file"]);
	}

	if ($id==NULL && isset ($_GET["csv"]))
        {
                return _csv_download ($u, $res, $join);
        }

	if ($id==NULL && isset ($_GET["xlsx"]))
        {
                return _xlsx_download ($u, $res, $join);
        }
        
	if ($rt!=0)
	{
		$h = " OK";
		if ($rt==201) $h = " Created";
		if ($rt==202) $h = " Updated";
		header("HTTP/1.0 ".$rt.$h);
		header ('Content-Type: application/json');
		echo '{';
	}

	$fmt = $GLOBALS["RESOURCES"][$u][3];
	$row = _u ($u, $res, $id, $fmt, $o, $p, $join);
	if ($id==NULL) echo ",".$aa["ctx"];
	echo ",".$aa["f"];

	$bb = NULL;
	if ($id==NULL && isset ($GLOBALS[($u."_rel")]))
	{
		$bb = $GLOBALS[($u."_rel")];
		$p = $fo;
	}
	if ($id!=NULL && isset ($GLOBALS[($u."_subs")]))
	{
		$bb = $GLOBALS[($u."_subs")];

		$k = $ta."_".$a[0][0];
		if (strlen ($a[0][1])>0) $k = $a[0][1];
		// $p = array ();
		$p[$k] = $id;
		$n = count ($a);
		for ($j=1; $j<$n; $j++)  // collect fk
		{
			if ($a[$j][5]!='f' && $a[$j][5]!='F') continue;
			if (!$row) break;
			error_log ("[fk get] ".$j." : ".$a[$j][0]." = ".$row[$j]);
			$p[$a[$j][0]] = $row[$j]; 
		}
	}
	if ($bb==NULL) return $rt;	

	error_log ("--- subs ----------------------- [p] ".json_encode ($p));

	$n = count ($bb);		
	for ($i=0; $i<$n; $i++)
	{
		$aa_ = array ("ctx"=>"", "f"=>"", "w"=>"", "s"=>"", "sort"=>"", "lim"=>"");
		$av_ = [];
		$fo_ = [];
	
		$b = $bb[$i];
		$n_ = count ($b); 
		$u_ = $b[0];
		$t_ = $GLOBALS["RESOURCES"][$u_][0];
		$ta_ = $GLOBALS["RESOURCES"][$u_][1];
		if (strlen($ta_)<1) $ta_=$t_;
		$a_ = $GLOBALS[($u_."_def")];
		$e = 0;
		
		error_log ("    sub: --------------------------".$b[0]."");
		
		for ($i_=1; $i_<$n_; $i_+=2)
		{
			$k_ = $b[($i_+1)];  
			$v_ = NULL;
			$op_ = "=";
			// if (substr ($k_,0,1)==':')  // supports only = operator coz of nav
			// { 
			//	$vv_ = explode (":",$k_); 
			//	$op_ = $vv_[1]; 
			//	$k_ = $vv_[2];  
			// }
			if (isset ($o[$k_]) && strlen($o[$k_])>0) $v_ = $o[$k_];
			if (isset ($p[$k_]) && strlen($p[$k_])>0) $v_ = $p[$k_];
			if (substr ($k_,0,1)==' ') $v_ = substr ($k_,1);
			$s = " WHERE ";
			if (strlen ($aa_["w"])>0) $s = "&& ";
			$aa_["w"] .= $s.$b[$i_].$op_.'? '; 
			$aa_["s"] .= "s";
			$av_[] = $v_;
			$fo_[$b[$i_]] = $v_; // skip filter keys with operator
			error_log ("    sub-where: ".$b[$i_]."=".$v_." | ".$e);
		}
		if ($rights[$u][0]!="1") continue; // check read rights flag
		if (ctx_rights ($u_, $t_, $aa_, $av_, $p, $rights[$u_])!=0) continue;  // apply rights		
		if ($e>0)
		{
			echo ',"'.$u_.'":[], "'.$u_.'_ctx":[["0","10","0","10","0"]]';
			continue;
		}

		ctx ($u_, $t_, $aa_, $av_, $fo_, [], 1);
		$res = _select ($u_, $t_, $aa_, $av_);
		if ($res==NULL) continue;
		echo ",";
		_u ($u_, $res, 0, $GLOBALS["RESOURCES"][$u_][3], $o, $p);
		echo ",".$aa_["ctx"];
		echo ",".$aa_["f"];
	}

	return $rt; 
}

function _rest_uri ($meth, $uri, $i, &$u, &$id, &$o)
{
	if ($meth=="POST" && isset ($_SERVER["CONTENT_TYPE"]) && strstr ($_SERVER["CONTENT_TYPE"], "application/json")!=FALSE )
	{
		$s = file_get_contents ("php://input");
		$o = json_decode ($s, true);
		if ($o==NULL) return 400;
	}

	$id_ = NULL;
	$uri_ = explode ('?', $uri);
	$vv = explode ('/',$uri_[0]);
	$nn = count ($vv);
	if ($nn>0 && strlen ($vv[$nn-1])<1) $nn--; // skip last item if blank

	for ($i; $i<$nn; $i+=2)
	{
		$u = $vv[$i];
		$id_ = NULL;
		if ($i+1<$nn) $id_ = $vv[($i+1)];

		if (strlen ($u)<1) return 404;
		if (!isset ($GLOBALS[($u."_def")])) 
		{
			if (isset ($GLOBALS["FN"][$u])) break;
			return 404;
		}

		$t = $GLOBALS["RESOURCES"][$u][0];
		$ta = $GLOBALS["RESOURCES"][$u][1];
		if (strlen($ta)<1) $ta=$t;
		$a = $GLOBALS[($u."_def")];
		$n = count ($a);
		$k = $ta."_".$a[0][0];
		if (strlen ($a[0][1])>0) $k = $a[0][1];

		$o[$k] = $id_;
		if ($meth=="GET") $GET[$k] = $id_;
	}
			
	$id = $id_;

	return 0;
}
?>
