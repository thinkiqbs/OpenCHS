
var chan_a = {};
	


function chan_stats ()
{
	var call_waiting = "0";
	var max_waiting = "";
	var cn = "";
	if (c[1]>0) 
	{ 
		call_waiting=c[1]; 
		cn="go cw"; 
		max_waiting = hmst (c[3], ["","","","","","",""]); // (c[3]-ts)+" sec";
	}
	
	//pa.nextSibling.firstChild.firstChild.className = cn; 
	//pa.nextSibling.firstChild.firstChild.childNodes[1].innerHTML = call_waiting;

	
	return;
	
	
 	ps.childNodes[5].firstChild.childNodes[1].innerHTML = call_waiting;
 	ps.childNodes[5].firstChild.childNodes[2].childNodes[1].innerHTML = max_waiting;
 	ps.childNodes[5].firstChild.className = cn;

	// console.log (c[5]+" "+c[6]);
	pc.childNodes[0].childNodes[0].firstChild.innerHTML = c[0];
	pc.childNodes[1].childNodes[0].firstChild.innerHTML = c[5];
	pc.childNodes[2].childNodes[0].firstChild.innerHTML = c[6];

}

function fntoday ()
{
	var pagents = document.getElementById ("vagents");
	var pcampaigns = document.getElementById ("vcampaigns");
	
	for (var i=0; i<ra["users"].length; i++)
	{
		nd (pagents, te["pane_agent"], [], ra["users"][i], [0]);
	}
	
	for (var i=0; i<ra["campaigns"].length; i++)
	{
		var k = 1;
		var t = "pane_inbound";
		if (ra["campaigns"][i][9]==2) { k=3; t="pane_outbound"; }
		nd (pcampaigns.childNodes[k], te[t], [], ra["campaigns"][i], [0]);
	}
	
	return;
	
	var h0 = ["_ans_avg_talk_time","_avg_hold","_sla_wait_count","_ans_count","_ab_count"];
	var hu0 = [":h:ms:0:",":h:ms:0:","%0","%0","%0"];
	var h1 = ["_ans_max_talk_time","_hold_max","_sla_wait","_ans_avg_queue_time","_ab_avg_queue_time"];
	var hu1 = [":h:ms:0:",":h:ms:0:","%0",":h:ms:0:",":h:ms:0:"];
	var hu2 = ["","","%","",""];
	var coll = document.getElementById ("vstats").childNodes;
	for (var i=0; i<5; i++)
	{
		var coll_ = coll[i].firstChild.childNodes;
		coll_[1].innerHTML = valf ([ ra["today"][h0[i]] ], hu0[i]); // ra["today"][h0[i]]+hu0[i];
		coll_[2].childNodes[1].innerHTML = valf ([ ra["today"][h1[i]] ], hu1[i]) + hu2[i];  // ra["today"][h1[i]]+hu1[i];
	}
	coll[2].firstChild.childNodes[0].innerHTML = "Answered within "+ra["today"]["_sla_wait_target"]+" sec"
}

// --------------------------------------------------------------------

re["chan_action"] = 
{
"0":["0","Hangup...","xx y"],
"1":["1","Invite...","xx y"],
"2":["2","Dial...","xx y"],
"3":["3","Resume...","xx y cd"],
"4":["4","Transfer...","xx y cd"],
"5":["5","Conference...","xx y cd"],
"init":["init","Dialing......","xx y cd"], // wait for actual status
"dialing":["dialing","Dialing...","xx y cd"], // wait for actual status
"xfer_offline":["xfer_offline","Extension is Offline","xx y gp cr"],
"xfer_busy":["xfer_busy","Busy","xx y gp cr"],
"xfer_noanswer":["xfer_noanswer","No Answer","xx y gp cr"],
"xfer_consult":["xfer_consult","Consult Ended.","xx y cg"],
"xfer_add":["xfer_add","Added To Call","xx y cg"],
"xfer_ok":["xfer_ok","Transfer Successful","xx y cg"],
"xfer_bxfer":["xfer_bxfer","Blind Transfer...","xx y cr"],
"agtk_hangup":["agtk_hangup","Call Ended","xx y gp cr"],
};

te["chan_action_msg"] = { s:["::chan_action:0:2","::chan_action:0:1"] };

te["chan_add_ld"] = { div:["gw","action"], c:
[
	{ s:["c y",""], s:["::chan_action:1:2","::chan_action:1:1"] }, 
	{ s:["d xx y",""] }, // xfer type
	{ div:["e"] }
]};

te["chan_add_btns"] = { div:["gw t"], c:
[
	{ div:["c x y"], c:[ { ac:["ao btn","chan_add_ld-chan-4","_add_action","x y w08 gws cb s tc","Transfer"] }, { s:["y bd b savl","..."] } ] },
	{ div:["c x y"], c:[ { ac:["ao btn","chan_add_ld-chan-5","_add_action","x y w08 gws cb s tc","Conference"] }, { s:["y bd b savl","..."] } ] },
	{ div:["c x y"], c:[ { ac:["ao btn","chan_add_ld-chan-3","_add_action","x y w08 gws cb s tc","Resume"] }, { s:["y bd b savl","..."] } ] },
	{ p:["e","o"], c:[ { arg:["","chan3","%3"] }, { arg:["","exten","%33"] }, { arg:["","chan_ts","%1"] }, { arg:["","cid","%4"] }, { arg:["","ctx","%32"] } ] },
	{ p:["x","nb"] }
]};

te["call_add_ld"] = { div:["gw t","add_ld"], c:
[ 
	{ s:["c x07 y b","%2"] }, // xten
	{ s:["d xx y",""] }, // xfer type
	{ arg:["","","%0"] }, // ts
	{ div:["e y"], s:["::chan_action:1:2","::chan_action:1:1"] },
]};

te["call_add_form"] = { div:["","ve"], c: 
[
	{ s:["x tt ","Enter Extension"] },
	{ div:["yy"], c:
	[
		{ div:["c x"], c:[ { div:["ba_b w15"], c:[ { input:["w15 x y","","add",""] } ] } ] },
		{ div:["d x"], c:[ { ac:["ag btn","call_add_ld-chan","_add_dial","x15 y gws cb tc","Invite"] }, { s:["y b savl","..."] } ] },
		{ div:["d x"], c:[ { ac:["ag btn","call_add_ld-chan","_add_dial","x15 y gws cb tc","Dial"] }, { s:["y b savl","..."] } ] },
		{ div:["e"] }
	]}
]};

te["call_add_main"] = { div:["w30 ma bd sh__ gw xx yy","vddvw"], ev:["_undd"], c:
[
	{ div:["","vp_add"], c:
	[
		{ s:["x yy h3","Add Extension to this Call"] },
		{ div:["e"], c:[ { arg:["","chan1","%"] }, { arg:["","",""] } ] }
	]},
	{ div:["","%10"], c:[ { div:["","init"], s:["x y g","..."] } ] },
	{ div:["","cba"] } // show matching add-chan here 
]};

te["call_btns"] = { c: 
[	
	{ arg:["","","%21"] }, // sipid needed to invoke call actions
	{ div:["","va"],  c:
	[	
		{ div:["d w09 gnws x t02 call_ended_"], c:
		[
			{ input:["g","","sbr","1","radio"] },
			{ ac:["d x t","","_activity_close","x y03 h2 cb bd16","&Cross;"] },
			{ s:["d x t08 cb tc","Close"] },
			{ div:["e"] }
		]},
		
		{ div:["d w09 gnws x t call_hangup_"], c: // "call_hangup_reason-r_","_vp"
		[
			{ ac:["c ao","","_hangup","x t b03 w02 h02 h2 ma bd16 gb cw tc",""], c:
			[
				{ s:["","&Cross;"] },
				{ div:["e"], c:[ { arg:["uniqueid-10","","%10"] },{ arg:["phone-13","","%13"] }, { arg:["callid-21","","%21"] } ] }
			]},
			{ s:["c x s cb t tc","Hangup"] },
			{ div:["e"] }
		]}, 
			
		{ div:["d w09 gnws x t"], c:
		[
			{ div:["c"], c:
			[
				{ ac:["ao call_connected_","call_add_main-r_","_add_dial_form","x t b03 w02 h02 h2 ma bd16 gb cw tc",""], c:
				[
					{ s:["","+"] },
					{ div:["e"], c:[ { arg:["_uid","","%10"] }, { arg:["_chan","","%19"] } ] }
				]},
				{ div:[] }
			]},
			{ s:["c call_connected_ x t s cb tc","Add"] },
			{ s:["c call_connected__ x y w02 ma bd16 cd_ tc h2","+"] },
			{ s:["c call_connected__ x t s cd_ tc","Add"] },
			{ div:["e"] }
		]},
		{ div:["d w09 gnws x t"], c:
		[
			{ input:["g","chanholdstate","","1","checkbox"] },
			{ div:["w10 btnhold"], c:
			[
				{ ac:["c ao call_connected_","","_hold","x y w02 h2 ma bd16 gb cw tc","||"] },
				{ div:["c call_connected_"], s:["x y s cb btnhold_lbl","Hold"] },
				{ div:["c call_connected_"], s:["x y s cr btnunhold_lbl","UnHold"] },
				{ s:["c call_connected__ x y w02 ma bd16 cd_ tc h2","||"] },
				{ s:["c call_connected__ x y s cd_ btnhold_lbl","Hold"] },
				{ div:["e"] }
			]}
		]},
		
		{ div:["d w09 t03 call_connected_"], c: 
		[
			{ div:["g"], c: // show only in cbid
			[
				{ ac:["c ao","","_answer","x t b03 w02 h02 h2 ma cb tc micon","group"] },
				{ s:["c t08 cb","4"] },
				{ div:["e"] }
			]}
		]},
			
		{ div:["d w09 gnws t"], s:["::vector:14:7",""], c:
		[ 
			{ div:["w09 x ao call_ringing_"], c:
			[
				{ ac:["c ","","_answer","x t b03 w02 h02 h2 ma bd16 gb cw tc micon","call"] },
				{ s:["c x t s cb tc","Answer"] },
				{ div:["e"] }
			]} 
		]},
		
		
		
		{ div:["e"] }
	]},
	
	{ div:["t07"], c:
	[
		{ div:["d r15 t15"], c:
		[
			{ ac:["","activity_disposition-subcategories-^","_vp","xx y03 bd gb cw",""], c:
			[
				{ s:["","Disposition"] },
				{ div:[], c:[ { arg:["","root_id",DISPOSITION_ROOT] }, { arg:["","_c","100"] } ] }
			]},
			{ div:[], arg:["","","activity_dispo_ufn----@"] }
		]},
		{ p:["d xx t15","dispo"], s:["x08 y03 gws bd",""], uval:["",":v:activities:disposition"] },
		{ div:["e"] }
	]},
	
	{ div:["x15 t50 b10 cd s g"], c:
	[
		{ s:["tt tr","::vector:14:8"] },
		{ s:["t02 tr","%12"] },		
		{ div:["e"] }
	]},
	
	{ div:[] }, // additional channels ?
]};

te["call_toolbar"] = { div:["ma w18","%10"], c: // p.firstChild.childNodes[1].firstChild.firstChild.childNodes;
[
	{ input:["g","","dksldksld","1","radio","1"] },
	{ ac:["abs mtn45 ao t08 w13 bd","","_activity_show","w13 bd cw",""], c:[ { div:["%7"], c:
	[
		{ s:["c w07 x y tr","%15"] },
		{ s:["c w05 y ","%18"] },
		{ arg:["ts","","%16"] }, 	
		{ div:["e"] }
	]} ]},
]};

te["call_ringing"] = { div:["w45ma bd sh__ gw xx yy","vddvw"], ev:["_undd"], c:
[
	{ div:["g"], c:
	[
		{ ac:["d ay","","_vpclose","x y bd_ h2 cb","&Cross;"] },
		{ div:["e"] }
	]},
	{ div:["tt"], s:["w12 ma",""], c:[ { img:["","","/helpline/images/Icon_Call.png","120"] } ] },
	{ s:["yy tc n co ","::vector:14:9"] },
	{ s:["yy tc h2 ","%12"] },
	// list possible contact -- not action 
	// Answer button
]};

// --------------------------------------------------------------------

te["chan_args"] = { p:["","%2"], c:
[
	{ arg:["","src_ts","%1"] },
	{ arg:["","src_uid","%2"] },
	{ arg:["","chan1","%3"] },
	{ arg:["","src_usr","%4"] },
	{ arg:["","action_id","%8"] },
	{ arg:["","cbid","%33"] }, // confbridgeid
	{ arg:["","chan2","%35"] },
	{ arg:["","callid","%38"] },
	{ arg:["","chan_state",""] },
	{ arg:["","chan_state_ts",""] },
	{ arg:["","phone","%36"] }, // phone = cid2
	{ arg:["","cid_name","%31"] },
	{ arg:["","vector","%46"] }  
]};
				
te["chan_add"] = { p:["neg","%2"], s:["",""], c:
[
	{ input:["g","optc_add","chvw0","%2","radio",""] }, 
	{ div:["x y gw"], c: 
	[
		{ s:["c x t cb b",""] },	// cid_num
		{ s:["c x t cb",""] },		// cid_name
		{ s:["c x t g",""] },		// vector
		{ s:["c x t g",""] },		// cid2
		{ s:["d x t",""] },		// status-duration
		{ arg:["ts","",""] }, 		// status-ts
		{ s:["d x t",""] }, 		// status-text
		{ div:["e"], c:[ { arg:["","chan3","%3"] }, { arg:["","exten","%33"] }, { arg:["","chan_ts","%1"] }, { arg:["","cid","%4"] }, { arg:["","ctx","%32"] } ] }
	]},
	{ div:["","ve"] }
]};


te["chan_call"] = { p:["","%2"], c:[ { li:[], ev:[], c: 
[ 
	{ input:["g","optc","chvw0","%2","radio",""] }, 
	{ div:["x y02 mr bt_ br_ bb_ gw sh"], c:
	[
		{ s:["c x y cb",""] },		// cid_num
		{ s:["c x w08 y cb",""] },	// cid_name
		{ s:["c x y cb",""] },		// vector
		{ s:["c x y cb g",""] },		// cid2
		{ s:["d x y b w05 tr",""] },		// status-duration
		{ arg:["ts","",""] }, 		// status-ts
		{ s:["d x y s w06 tr",""] }, 		// status-text
		{ s:["d x y s cb",""] },		// cid2
		{ div:["e"] }
	]},
	{ div:[] }
]} ]};

te["chan_agent"] = { p:["","%2"], c:[ { li:[], ev:[], c:  // el.f.c1.c2
[ 
	{ input:["g","optc","chvw0","%2","radio",""] }, 
	{ div:["x y02 mr bt_ br_ bb_ gw sh"], c:			
	[
		{ s:["c x y cb",""] },		// cid_num
		{ s:["c x w08 y cb",""] },	// cid_name
		{ s:["c x y cb",""] },		// vector
		{ s:["c x y cb g",""] },		// cid2
		{ s:["d x y b w05 tr",""] },		// status-duration
		{ arg:["ts","",""] }, 			// status-ts
		{ s:["d x y s w06 tr",""] }, 		// status-text
		{ s:["d x y s cb",""] },		// cid2
		{ div:["e"] }
	]},
	{ div:[] }
]} ]};

te["agent_onbreak"] = { ac:["","","","",""], c: // 
[
	{ div:["c ll tt"], s:["w01 h01 go bd",""] },
	{ div:["c"], s:["xx t07 b05 cb","On Break"] }, 	
	{ div:["e"] },
]};

te["agent_available"] = { ac:["","","","",""], c: // 
[
	{ div:["c ll tt"], s:["w01 h01 gg bd",""] },
	{ div:["c"], s:["xx t07 b05 cb","Available"] }, 	
	{ div:["e"] },
]};

te["agent_offline"] = { ac:["","","","",""], c: // 
[
	{ div:["c ll tt"], s:["w01 h01 gw bd",""] },
	{ div:["c w11"], s:["xx t07 b05 cd","Connecting ..."] }, 	
	{ div:["e"] },
]};

// -------------------------------------------------------

const CHAN_TS = 1;
const CHAN_UNIQUEID = 2;
const CHAN_CHAN	= 3;
const CHAN_CALLERID_NUM	= 4;
const CHAN_CALLERID_NAME = 5;
const CHAN_CONTEXT = 6;
const CHAN_EXTEN = 7;
const CHAN_ACTION_ID = 8; 
const CHAN_STATE_UP = 13;
const CHAN_STATE_QUEUE = 14;	
const CHAN_STATE_CONNECT = 15;
const CHAN_STATE_HANGUP = 16;
const CHAN_STATE_HOLD = 18;
const CHAN_STATE_XFER =	19;
const CHAN_XFER = 22; 	
const CHAN_XFER_UNIQUEID = 23; 	// xfer peer 
const CHAN_XFER_EXTEN = 24; 	// xfer peer 
const CHAN_XFER_STATUS = 25; 	
const CHAN_CONTEXT_MASQ	= 32;
const CHAN_EXTEN_MASQ = 33;
const CHAN_UNIQUEID_2 =	34;
const CHAN_CHAN_2 = 35;	
const CHAN_CALLERID_2 = 36;
const CHAN_SIPCALLID = 38;
const CHAN_BRIDGE_ID = 39;
const CHAN_CBO_TS = 41;
const CHAN_CBO_UNIQUEID = 42;
const CHAN_CBO_STATUS = 43;
const CHAN_VECTOR = 46;
const CHAN_STATUS = 47; 

function chan_status (tp, ch, r) //  cid,cid2,vector,status_txt,dur,ts, bg_color,fg_color
{
	var ss = 
	{
		"chan_call":["Down","Dialing","Ringing","IVR","In Queue","Connected","Call Ended","On Mute","On Hold"],
		"chan_add":["Down","Dialing","Ringing","IVR","In Queue","Connected","Call Ended","On Mute","On Hold"],
		"chan_args":["Down","Dialing","Ringing","IVR","In Queue","Connected","Call Ended","On Mute","On Hold"],
		"chan_agent":["Down","Dialing","Ringing","Available","Waiting","OnCall","Call Ended","On Mute","On Hold"],
		null:["Down","Dialing","Ringing","Available","Waiting","OnCall","Call Ended","On Mute","On Hold"],
		"chan_agent_start":["Down","Dialing","Ringing","Available","Waiting","OnCall","Call Ended","On Mute","On Hold"]
	};
	var ve = ["&#8702;","&#8702;","&#8701;"];
	var s = 10;
	var t = ch[1];
	for (var i=10; i<19; i++) if (ch[i].length>1) 
	{
		if (i==CHAN_STATE_CONNECT && ch[CHAN_STATE_UP].length<1) continue; 
		s = i;
		if (i==CHAN_STATE_HANGUP) break; // chan hangup
		t = ch[i]; 
	}
	
	r[5] = ve[ch[CHAN_VECTOR]];
	r[6] = s-10;	
	r[7] = "gr";				// bg-color
	r[8] = "cr";				// fg-color
	r[9] = "call";
	r[10] = ch[CHAN_UNIQUEID];
	r[11] = ch[CHAN_TS];
	r[12] = ch[CHAN_CALLERID_2];
	r[13] = ch[CHAN_CALLERID_NUM];
	r[14] = ch[CHAN_VECTOR];
	r[15] = ss[tp][(s-10)]; 		// status-text
	r[16] = t;				// status-ts
	r[17] = "";
	r[18] = hmst (t, ["","","","","","",""]);// status-duration
	r[19] = ch[CHAN_CHAN]; // chan1
	r[20] = ch[CHAN_CHAN_2]; // chan2
	r[21] = ch[CHAN_SIPCALLID]; // callid
	r[22] = ch[CHAN_SIPCALLID].substr (0,20);

	if (s==CHAN_STATE_CONNECT) 
	{ 
		r[7] = "gg";
		r[8] = "cg";
	}
	if (s==CHAN_STATE_HOLD) 
	{ 
		r[7] = "go";
		r[8] = "co";
	}
	// console.log ("["+tp+"] "+JSON.stringify (r))
}

// ---

function call_popup_end (p)
{
	// notif closed by phone.js
	
	// toolbar
	var coll = p.childNodes[1].firstChild.firstChild.childNodes;
	coll[0].parentNode.className = "cb b";
	coll[0].innerHTML = "Call Ended";
	coll[1].innerHTML = hmst (coll[2].value, ["","","","","","",""]); // status-duration
	coll[2].id = ""; // stop call timer
	
	// todo: start wrapup timer on toolbar

	// action btns
	var p = document.getElementById ("vv").childNodes[6].childNodes[1].childNodes[1]   .firstChild.firstChild.childNodes[1].firstChild; // call_btns
	var last_status = p.childNodes[1].className;
	p.childNodes[1].className = "call_ended";
	if (last_status!="call_connected")  // auto close popup is call not connected
	{
		activity_close (); // clear
	}	
}

function call_popup_hold_state (el, f)
{
	var p = document.getElementById ("vv").childNodes[6].childNodes[1].childNodes[1] .firstChild.firstChild.childNodes[1].firstChild; // call_btns
	var a = {};
	argv (el, a);
	console.log ("call_popup_hold_state ("+f+") "+p.id+"=="+a.src_uid)
	if (p.id!=a.src_uid) return;
	var el_ = _(p,"chanholdstate", "input");
	if (el_) el_.checked = f;
}

function call_popup_upd (el, r_)
{
	var a = {};
	argv (__(el,"va"), a);
	r_[14] = a.src_vector; // use vector from phone.js
	// console.log ("call_popup_upd "+JSON.stringify (a));
	
	// notif
	var coll_ = el.parentNode.parentNode.childNodes[0].childNodes;
	coll_[1].innerHTML = r_[18];
	coll_[2].value = r_[16];
	el.parentNode.parentNode.childNodes[1].childNodes[2].innerHTML = r_[15];
		
	// toolbar
	var p = document.getElementById ("vv").childNodes[1];	
	if (p.childNodes.length<1) return -1;
	if (p.firstChild.id.length<1) return -2;
	if (p.firstChild.id!=r_[10]) return -3;
	var coll = p.firstChild.childNodes[1].firstChild.firstChild.childNodes;
	coll[0].parentNode.className = r_[7]+" "+r_[8]; // ["100","100","&#8702;","In Queue","0:48","1634123425.631578","","gp","cr",null,"1634123425.732"]
	coll[0].innerHTML = r_[15];
	coll[1].innerHTML = r_[18];
	coll[2].value = r_[16];
		
	// action btns // ["Down","Dialing","Ringing", "Available","Waiting","OnCall", "Call Ended","On Mute","On Hold"],
	var ss = ["call_ringing","call_ringing","call_ringing", "call_connected","call_connected","call_connected", "call_ended", "call_connected","call_connected"];
	p = document.getElementById ("vv").childNodes[6].childNodes[1].childNodes[1] .firstChild.firstChild.childNodes[1].firstChild;
	p.childNodes[1].className = ss[r_[6]];	
}

function call_popup (el, r_, f=0)
{
	var coll = document.getElementById ("vv").childNodes;
	
	// todo: show answer call popup
		
	if (f==0 && coll[1].childNodes.length>0 && coll[1].firstChild.id.length>0) // vw is occupied
	{
		show_notifications (2);
		return
	}

	var a = {};
	argv (__(el,"va"), a);
	r_[14] = a.src_vector; // use vector from phone.js
	console.log ("call_popup "+JSON.stringify (a));
	
	if (a.cid_name=="AgentLogin") return;
	
	__(el,"va").previousSibling.checked = true; 	// hilite call-notif
	coll[1].innerHTML = ""; 			
	coll[6].childNodes[1].firstChild.checked = true;
	coll[6].childNodes[1].childNodes[1].innerHTML = "";

	nd (coll[1], te["call_toolbar"], [], r_, [0]); // show toolbar
	nd (coll[6].childNodes[1].childNodes[1], te["activity_vw_id_"], ["noop","call_btns","On Call"], r_, [3]); 	
	url (coll[6].childNodes[1].childNodes[1] .firstChild.childNodes[1], "activity_match", "activities", ("-1?src=call&src_uid="+a.src_uid+"&src_address="+a.src_address));
	
	show_notifications (1);
}

function _call_popup () 
{
	var a = {};
	argv (this, a);
	var ch_ = re["channels"][a.src_uid];
	var r_ = [];
	ch_[CHAN_SIPCALLID] = this.previousSibling.value;
	chan_status ("chan_args", ch_, r_);
	call_popup (this.childNodes[1].lastChild.firstChild, r_, 1); 
	call_popup_upd (this.childNodes[1].lastChild.firstChild, r_); 
}

// ---

function chani (tp,p,ch,ts,k_=2,top_=0)
{
	var atr = ["className","innerHTML","value"];
	var mm = 
	{ 
	"chan_call":[[1,13],[-1,-1],[-1,-1], [1,12], [1,18],[2,16],[1,15], [1,12]],
	"chan_add":[[1,13],[-1,-1],[1,5],[1,12], [1,18],[2,16],[1,15]],
	"chan_agent":[[1,13],[-1,-1],[-1,-1], [1,12], [1,18],[2,16],[1,15], [1,12]],
	"chan_agent_start":[[1,0],[-1,-1],[1,3],[1,4], [2,5],[1,1]]
	}
	var m = mm[tp];
	var el = _(p,ch[k_]);
	if (el==null && tp==null) return null;
	if (el==null)
	{
		var a_ = [""];
		// if (tp=="chan_agent") { a_=[p.nextSibling.value];  }
		el = nd (p, te[tp], [], ch, [0]);
		el = el.parentNode.parentNode;
		chan_a[ch[2]] = { "el":el, "ts":ts }; // append chan to chan_a index
		// console.log ("chani add]ed: "+ch[2]+" |"+chan_a[ch[2]].el+" "+chan_a[ch[2]].ts);
		
		if (tp=="chan_agent" && ch[4].length==3) 
		{
			url (el.firstChild.childNodes[1].childNodes[1], "dash_agent_name", "users", ("?exten="+ch[4]));
		}
	}
	chan_a[ch[2]].ts=ts;
	var r = [];
	chan_status (tp, ch, r);
	var coll = el.firstChild.childNodes[1].childNodes; 
	for (var j=0; j<m.length; j++)
	{
		if (m[j][0]<0) continue;
		coll[j][atr[m[j][0]]] = r[m[j][1]]
	}
	el.firstChild.className = r[7] + " "+r[8];
	return el;
}

function chans_pop (ts)
{		
	var h=0, n=0;
	var k = Object.keys (chan_a);
	// console.log (" vp pops "+JSON.stringify (k))
	for (var i=0; i<k.length; i++)  // remove closed, hangup channels
	{
		var id = k[i];
		if (chan_a[id].ts==ts) continue;
		// console.log  (" vp pop : "+id+" | "+chan_a[id].el)
		if (chan_a[id].el && chan_a[id].el.parentNode) 
		{
			var pe = chan_a[id].el.parentNode;
			var el = chan_a[id].el;
			var a = {};
			argv (el, a);
			console.log ("[vp pop] "+pe.id+" > "+el.id+"("+id+") "+el.className+" | "+JSON.stringify (a))
			pe.removeChild (chan_a[id].el); 
			
			if (pe.id=="cba") // a.ctx.substr(0,4)=="_add") // show 'cbo status' (of caller) else 'call ended'
			{
				var ch = re["channels"][pe.previousSibling.id];
				var v = "agtk_hangup";
				if (ch) v = ch[CHAN_CBO_STATUS];
				console.log ("[pop] --> "+v)
				nd (pe, te["chan_add_ld"], [], [a.chan_ts,v,a.cid], [0]);
			}
		}
		delete chan_a[id];
		h++;
	}
	
	if (h>0)
	{
		var el = document.getElementById ("call_stats_hangup_status")
		if (el) rpt (el.childNodes[1]); // reload stats
		el = document.getElementById ("call_stats_disposition")
		if (el) rpt (el.childNodes[1]); // reload stats
	}
	
	return h;
}

function chans (o,k,ts)
{
	var pa = document.getElementById ("vagents");
	var pq = document.getElementById ("vqueued");
	var pi = document.getElementById ("vinbound");
	var po = document.getElementById ("voutbound");
	var ps = document.getElementById ("vstats");
	var pu = document.getElementById ("call_sessions");
	var user_cid = document.getElementById ("user_cid").value;
	var vp_add = null
	var vp_members = null;
	var ch_agent = null;
	var is_trunk = 0;
	var c = [0,0,0,0,0,0,0];
	var cn = ["","","",""];
	
	var pvp = document.getElementById ("vp");
	if (pvp.firstChild && pvp.firstChild.firstChild)
	{
		if (pvp.firstChild.firstChild.id=="vp_add") vp_add = pvp.firstChild.childNodes[1];
		if (pvp.firstChild.firstChild.id=="vp_members") vp_members = pvp.firstChild;
	}
	// k.sort ();
	for (var i=k.length-1; i>-1; i--)
	{
		var ch = o[k[i]];

		// console.log (i+"  ami "+ch[4]+" "+ ch[CHAN_SIPCALLID])
		
		if (!ch) { console.log ("[undefined chan] "+i+": "+k[i]); continue; }	
		if (ch[CHAN_STATE_HANGUP].length>0) continue; // skip hangup'ed channels
		if (ch[CHAN_STATUS]=="down") continue; // skip setup channels
		

		if (ch[CHAN_CONTEXT_MASQ]=="start-agent-login")
		{
			// chani ("chan_agent_start", pa, ch, ts); 
			//  todo: user: // if (user_cid.length>0 && user_cid==chan[4]) fn()
			continue;
		}

		if (ch[0].length>0) 		 // agent session chan
		{
			c[0]++; 
			if (user_cid.length>0 && user_cid==ch[0]) ch_agent = ch;
			chani ("chan_agent", pa, ch, ts); 
			continue;
		}		

		//if (vw_activity && vw_activity.id==ch[CHAN_EXTEN_MASQ]) // list cb members for current activty
		{
			// count active channels linked to current vw
			
			// if (vp_members) // show in vp
			{
			
			}
		}
		
		if (ch[4]==user_cid && ch[CHAN_SIPCALLID].length>0)
		{
			var el = _(pu, ch[2]); // find matching call	
			if (el==null)
			{
				var el_ = _(pu, ch[CHAN_SIPCALLID].substr (0,20));
				if (el_)
				{
					// console.log ("NEW CALL     "+ch[2]+" "+ch[38])
					ch[CHAN_SIPCALLID] = el_.firstChild.value;
					nd (el_.childNodes[1].childNodes[1].lastChild, te["chan_args"], [], ch, [0]);
					el = el_.childNodes[1].childNodes[1].lastChild.firstChild;
					if (!chan_a[ch[2]])  chan_a[ch[2]] = { "ts":ts };
					var r_ = [];
					chan_status ("chan_args", ch, r_);
					call_popup (el, r_);
				}
			}
			
			if (el) 
			{
				chan_a[ch[2]].ts=ts;
				var r_ = [];
				chan_status ("chan_args", ch, r_);
				el.childNodes[5].value = ch[CHAN_EXTEN_MASQ]; // update exten_masq
				el.childNodes[6].value = ch[CHAN_CHAN_2]; // update last peer
				el.childNodes[8].value = r_[6];
				el.childNodes[9].value = r_[16];
				call_popup_upd (el, r_);
			}
			
			if (vp_add && vp_add.id==ch[CHAN_UNIQUEID]) // ch[CHAN_EXTEN_MASQ].length>0 && ch[CHAN_EXTEN_MASQ]==vp_add.id) // update vp: call_add_main
			{
				var ch_ = re["channels"][ch[CHAN_CBO_UNIQUEID]];  // update incomplete peer
				var m_ = 0;
							
				if (vp_add.firstChild.firstChild.id=="add_ld")  // show latest status
				{
					var action_ts = vp_add.firstChild.firstChild.childNodes[2].value*1; // todo: adjust for time diff between asterisk and app servers			
					var el_ = vp_add.firstChild.firstChild.childNodes[3];
					console.log ("[add_ld] "+action_ts +" "+ch[CHAN_CBO_TS]);
					if (action_ts < (ch[CHAN_CBO_TS]*1))
					{
						el_.innerHTML = "";
						nd (el_, te["chan_action_msg"], [], [ch[CHAN_CBO_STATUS]], [0]);
					}
					m_++;
				}
				
				if (ch_ && ch[CHAN_CBO_UNIQUEID].length>0)
				{
					if (vp_add.firstChild.firstChild.id=="add_ld") vp_add.firstChild.innerHTML="<div id='add_ing'></div>"; 
					if (vp_add.firstChild.firstChild.id=="add_ing" || ch_[CHAN_XFER_STATUS].length==0)
					{
						var el_ = chani ("chan_add", vp_add.nextSibling, ch_, ts, 2, 1); 
						var tp_ = "chan_add_btns"; 
						var r_ = ch_;
						m_++;
						if (ch_[CHAN_XFER_STATUS].length==0 && el_.firstChild.lastChild.childNodes.length==0) // set oly during create
						{
							vp_add.firstChild.firstChild.id = "add_ing";
							nd (el_.firstChild.lastChild, te[tp_], [], r_, [0]);
						}
						if (ch_[CHAN_XFER_STATUS].length>0) 
						{ 

							tp_ = "chan_add_ld"; 
							r_ = [ch_[1], ch_[CHAN_XFER_STATUS],""]; 
							el_.firstChild.lastChild.innerHTML = "";
							nd (el_.firstChild.lastChild, te[tp_], [], r_, [0]);
						}
						console.log (" vp cbo "+ch_[CHAN_XFER_STATUS]+" | "+tp_); 						
					}
				}
				
				if (m_==0 && vp_add.firstChild.id!="ve" && vp_add.nextSibling.childNodes.length==0) // show form
				{
					vp_add.innerHTML = "";
					nd (vp_add, te["call_add_form"], [], ch, [0]);
				}
				
				console.log ("[vp_add] ("+ch[CHAN_CBO_UNIQUEID]+") "+ch[CHAN_CBO_STATUS]+" | "+ch[CHAN_CBO_TS]+" | "+ch[CHAN_EXTEN_MASQ]+" | "+(ch_?ch_[CHAN_XFER_STATUS] : "undefined"))
			}
			
			continue
		}

		
		is_trunk=0;
		if (ch[CHAN_CONTEXT].substr (0,5)=="trunk") is_trunk=1;

		if (is_trunk && ch[CHAN_VECTOR]!="2" && ch[CHAN_EXTEN]!="s") // inbound
		{
			if (ch[CHAN_STATE_QUEUE].length>0 && ch[CHAN_STATE_CONNECT].length==0) 		// inbound waiting
			{
				c[1]++; 				// waiting count
				c[2]+= (ts-ch[CHAN_STATE_QUEUE]);	// wait-time total
				if (ch[CHAN_STATE_QUEUE]<c[3] || c[3]==0) c[3]=ch[CHAN_STATE_QUEUE]; // wait-time max
				// remove from ivr
			}
			if (ch[CHAN_STATE_QUEUE].length>0 && ch[CHAN_STATE_CONNECT].length>0)
			{
				c[4]++; 		// inbound connected
				// remove from queue
			}
			c[5]++; 
			chani ("chan_call", pi, ch, ts); 
			continue;
		}
		
		if (is_trunk && ch[CHAN_VECTOR]=="2") // outbound
		{
			c[6]++; 
			// chani ("chan_call", po, ch, ts); 
			continue;
		}
	}

	// console.log ("[chan_agent] "+user_cid+" | "+ch_agent)

	var p_agent = document.getElementById ("agent_status");
	var id_ = "agent_onbreak";
	var r_ = [];
	if (ch_agent!=null) { id_ = "agent_available"; r_=ch_agent; }
	if (p_agent && p_agent.firstChild.id!=id_) 
	{
		p_agent.innerHTML = "";
		nd (p_agent, te[id_], [], r_, [0]);
	}

	// console.log ("active call stats: agents:"+c[0]+" waiting:"+c[1]+" inbound-tot:"+c[5]); // chan_stats ()

	pa.previousSibling.childNodes[1].innerHTML = c[0];	// agent count
	pi.previousSibling.childNodes[1].innerHTML = c[5]; 	// inbound count
	var cnk = "c x y cd";
	var cnv = "d xx y cd";
	if (c[1]>0) { cnk = "c x y cr"; cnv="d xx y gr cw bd16";  }
	pq.previousSibling.childNodes[0].className = cnk;
	pq.previousSibling.childNodes[1].className = cnv;
	pq.previousSibling.childNodes[1].innerHTML = c[1];	// waiting
}

function ldami (o)
{
        var ts = (Date.now ()/1000);
        var k = Object.keys (o);
        chans (o, k, ts);        
        chans_pop (ts);
}

function rxmsg (ev)
{
	if (document.getElementById ("user_cid")==null) return;

        var o = eval ("("+ev.data+")");
        
        // re["rx"] = ev.data;

	ra_ts=0;

        if (o.ts && o.ts>1)
        {
                var ts = Date.now ();
                ra_ts = (ts/1000)-(o.ts*1);
		// ra_ts = -990; // debug
        }
	// console.log ("[RA_TS] "+ra_ts+"  ts:" + ts +" o.ts:"+ o.ts)

        re["channels"] = o.channels;
        ldami (o.channels);
}

window.addEventListener("message", rxmsg, false);

