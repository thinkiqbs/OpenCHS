
te["activity_disposition_r"] = { div:[], c:
[
	{ input:["g","","disposition_id","%0","radio"] },
	{ ac:["rg rc r ay bd_","","_opt","xx t02 cb",""], c:
	[
		{ div:["c w01_ t"], s:["opt",""] },
		{ s:["c x y w40 n","%7"] },
		{ div:["e"] }			
	]}
]};

te["activity_disposition"] = { div:["w45 ma bd sh__ gw x15 y15","vddvw"], ev:["_undd"], c:
[
	{ s:["xx yy h2 b","Disposition"] },
	{ div:["","ve"], c:
	[
		{ p:["","o"], u:["activity_disposition_r","subcategories"] },
		{ ac:["x t20 btn","","_activity_disposition","bd y07 n b tc gb cw","Submit"] },
	]}
]};

// -------

te["lsr_dispo"] = { uval:["","%0","d gws x08 y02 bd cb"] };

te["case_dispo"] = { s:["x08 y03 gws bd",""], uval:["",":v:cases:disposition"] };

te["case_dispo_ufn"] = { ufn:["case_dispo_ufn"] };

te["activity_dispo"] = { s:["x08 y03 gws bd",""], uval:["",":v:activities:disposition"] };

te["activity_dispo_ufn"] = { ufn:["activity_dispo_ufn"] };

// ----

te["activity_close_a"] = { c:
[
	{ div:[], c:
	[
		{ div:["d"], c:
		[
			{ input:["g","","sbr","1","radio"] },
			{ ac:["x","","_activity_close","x t cb",""], c:
			[
				{ s:["d x t07 h2","&Cross;"] },
				{ s:["d x t07 s","Close"] },
				{ div:["e"] }
			]},
		]},
		{ div:["e"] }
	]},
	{ div:["t20"], c:
	[
		{ div:["d r15"], c:
		[
			{ ac:["","activity_disposition-subcategories-^","_vp","x15 y04 bd gb cw s",""], c:
			[
				{ s:["","Disposition"] },
				{ div:[], c:[ { arg:["","root_id",DISPOSITION_ROOT] }, { arg:["","_c","100"] } ] }
			]},
			{ div:[], arg:["","","activity_dispo_ufn----@"] }
		]},
		{ p:["d xx","dispo"], s:["x y04 gws bd s",""], uval:["",":v:activities:disposition"] },
		{ div:["e"] }
	]}
	
]};

// ---

te["activity_reporter_src_address"] = { input:["","","reporter_phone",":v:activities:src_address","checkbox","1"] }

te["activity_reporter_r_"] = { c: 
[
	{ ac:["ay x15 w45","reporter_ed-reporters-^","_vp","x y cb ba bdr",""], c:
	[
		{ div:[], c:
		[
			{ s:["c w20 x y n b",":v:reporters:contact_fullname"] },
			{ div:["d xx t b"], uval:["",":v:reporters:contact_age"] },
			{ div:["d x t b"], uval:["",":v:reporters:contact_sex"] },
			{ div:["e"], arg:["",".id","%0"] }
		]},
		{ div:["x t s"], uval:["",":v:reporters:contact_location"] },
		{ div:["x y s cd"], uval:["",":v:reporters:contact_phone"] },
	]},
	{ div:["g"], arg:["","","activity_reporter_r_-reporters-va--@"] }, // vp return anchor
	{ p:["","o"], arg:["","reporter_id","%0"] }
]};

te["activity_reporter_r"] = { c:
[
	{ div:["x15 t15 b10 w45"], c:
	[
			
		{ div:["c x","va"], ac:["","activity_contacts-contacts-vw","_u","",""], c:[ { s:["h3 x y bd16 gws micon cb","arrow_back"] }, { div:["e"], arg:["","phone",":v:reporters:contact_phone"] } ] },
		{ s:["c xx y07 h3 b","Reporter Details"] },
		{ div:["e"] }
	]},
	{ div:["","va"], activity_reporter_r_:[] },
	{ div:["x15 t15 b20 "], c: 
	[
			{ input:["g","","_ac_","1","radio"] },
			{ ac:["c tab ay w10","case_new-r_","_activity_case","y07 bdl ba cb tc",""], c: // this.firstChild.lastChild.childNodes
			[ 
				{ s:["","New Case"] }, 
				{ div:[], c:[ { arg:["root_id-7","","87"] } ] } 
			]},
			{ input:["g","","_ac_","2","radio"] },
			{ ac:["c tab ay w10","case_new-r_","_activity_case","y07 ba mln1 cb tc",""], c:
			[ 
				{ s:["","Counseling"] }, 
				{ div:[], c:[ { arg:["root_id-7","","361944"] } ] } 
			]},
			{ input:["g","","_ac_","3","radio"] },
			{ ac:["c tab ay w16","case_new-r_","_activity_case","y07 ba mln1 cb tc",""], c:
			[ 
				{ s:["","Information and Inquiry"] }, 
				{ div:[], c:[ { arg:["root_id-7","","362305"] } ] } 
			]},
			{ input:["g","","_ac_","0","radio"] },
			{ ac:["c tab ay w09","followup-followups","_activity_case","y07 bdr mln1 ba cb tc",""], c:
			[ 
				{ s:["","Followup"] }, 
				{ div:["g"], c:[ { input:["","","reporter_phone",":v:reporters:contact_phone","checkbox","1"] }, { u:["activity_reporter_src_address","activities"] }, { arg:["","_c","10"] } ] } 
			]},
			{ div:["e"] }
	]},
]};

te["activity_reporter"] = { c: 
[
	{ div:[], u:["activity_reporter_r","reporters"] },
	{ div:["","vfvw"] /* todo: case_activities here*/ }
]};

// ---

te["activity_contact_footer"] = { div:[""], c:
[
	{ div:["d x y07"], pg:["pgto","activity_contact_list-contacts"," dh","da dl","activity_contact_list-contacts"," dh","da dr"] },
	{ div:["e"] }
]};

te["activity_contact_r"] = { div:["","ve"], s:["w50 ba_  bdr mtn1",""], c:
[
	{ ac:["c w46 ag","","","x y03 cb bdl",""], c:
	[
		{ div:["c x t b"], uval:["",":v:contacts:fullname"] },
		{ div:["d xx t b"], uval:["",":v:contacts:sex"] },
		{ div:["d x t b"], uval:["",":v:contacts:age_group"] },
		{ div:["e"] },
		{ div:["x t s"], uval:["",":v:contacts:location"] },
		{ s:["x y s",":v:contacts:phone"] },
	]},
	{ ac:["d w04 ag","","_activity_reporter","bl_ y15 l15 cb bdr",""], c:[ { s:["w02 h02 y03 awRR",""] } ] },
	{ p:["e","o"], arg:["","contact_id","%0"] }
]};

te["activity_contact_k"] = { div:[], c:[ { arg:["","fullname",":k:contacts_k:fullname:2"] }, { arg:["","phone",":k:contacts_k:phone:2"] }, { arg:["","email",":k:contacts_k:email:2"] }, { arg:["","created_on",":k:contacts_k:created_on:2"] } ] };

te["activity_contact_nb_no_match"] = { s:["x08 y bd gp cr ","No Matching contacts"] };

te["activity_contact_nb"] = { div:["w50"], u:["activity_contact_nb_no_match","contacts_no_data"] };

te["activity_contact_list"] = { list:["end","activity_contact_nb","","activity_contact_k","activity_contact_r","contacts","activity_contact_footer"] };

te["activity_contacts"] = { c:
[
	{ div:[], c:
	[
		{ s:["x20 t20 b10 cb b h3","Matching Contacts"] },
		{ div:["e "], c:[ { arg:["","","activity_contact_list-contacts"] }, { arg:["","","0"] }, { arg:["","","0"] }, { arg:["","",""] } ] }
	]},
	{ div:["x15 bd","vf"], c:[ { li:["l02","contact_f-contacts_f"], ev:["__vpf"], contact_f_tags_k:[] } ] },
	{ div:["x20 w51"], c:
	[
		{ div:[], c:[ { input:["g","","ac_v","0","radio","1"] }, { p:["tabv yy","vt"], activity_contact_list:[]  } ] },
		{ div:[], c:[ { input:["g","","ac_v","1","radio"] }, { p:["tabv","vt"] } ] },				
		{ div:["b20"], c:
		[
			{ div:["c l03"], c:
			[
				{ ac:["","case_reporter_new-r_-^","_vp","w10 tc x y cw gb bd",""], c:
				[
					{ s:["","New Reporter"] },
					{ div:["e"], c:[ { arg:["phone-9","",":k:contacts_k:phone:2"] }, ] }
				]},
				{ div:["g"], arg:["","","activity_reporter-reporters-vw--@"] }, // vp return anchor
			]},
			{ div:["c xx"], ac:["ao","contact_f-contacts_f","_vpfb","w10 tc x y04 cb ba bd","Search Reporter"] }, // ---> opens contact filter
			{ div:["e"] }
		]},
	]}
]};

// ---

te["activity_bread_crumb"] = { c:
[
	{ div:["c t07"], c:[ { div:["h02 w02 awr"] } ] },
	{ ac:["c","","_activity_crumb","x y cb","%0"] }
]}

te["activity_match"] = { c:
[
	{ u:["activity_contacts","contacts_ctx"] },
	{ u:["activity_reporter","reporters_ctx","","reporters"] },
]};

te["activity_vw_id_"] = { div:["gw mmb bd"], c:
[
	{ div:["bb_"], c: 
	[
		{ ac:["c x15 y","","","x y n cb b",null] }, 
		// { div:["c y g"] },
		{ div:["d w55 bt"], c:[ { p:["abs w55","%10"], u:[null] } ] }, // chan status
		{ div:["e"], c:[ { p:["","o"], c:[ { arg:["","src","%9"] }, { arg:["","src_uid","%10"] }, { arg:["","src_address","%12"] }, { arg:["","src_vector","%14"] } ] } ] }
	]},
	{ p:["","vw"], u:[null] }
]};

te["activity_vw_id"] = { activity_vw_id_:[":v:activities:src::case_src:4","activity_close_a","activity_match"] };

te["activity_toolbar"] = { div:["ma w18 g","chan_id_here"], c: // 
[
	{ input:["g","","sbl__","1","radio","1"] },
	{ ac:["abs mtn45 ao t08 w13 bd","","","w13 bd tc cw",""], c:[ { div:["::case_src:9:3"], c:
	[
		{ s:["x y tc","::case_src:9:4"] },
	]} ]}
]};

// ---------------------------------------------------------------------------

te["activity_lst_footer"] = { div:["x y mt"], c:
[
	{ div:["d t03"], c:[ { ac:["nav","activity_lst-activities","_nav","dh",""], c:[ { div:["da dr_"] }, { arg:["","_a","%0"] } ] }, { s:["navl","..."] } ] },
	{ div:["d t03"], c:[ { aci:["nav","activity_lst-activities","_nav","dh","prev",""], c:[ { div:["da dl_"] }, { arg:["","_a","%0"] } ] }, { s:["navl","..."] } ] },
	{ s:["d l r15 y cd s","%4"] },
	{ s:["d  y cd s","of"] }, 
	{ s:["d x y cd s","%3"] },
	{ s:["d x y cd s","-"] },
	{ s:["d x y cd s","%2"] },
	{ div:["e"] }
]};

te["activity_lst_r"] = { div:[], c:
[
	{ input:["g","","sbr","1","radio"] },
	{ ac:["al sbr","","_activity_vw","x15 cb s y",""], c:
	[
		//{ s:["c t h3 micon","call"] },
		{ div:[""], c:
		[
			{ div:[], c:
			[
				{ s:["c t","::vector:14:4"] },  
				{ s:["c t x","::case_src:9:1"] },
				{ s:["d t",":r::11:: : ago:: : ago:"] },
				{ div:["e"] }
			]},
			{ div:[], c:
			[
				{ s:["c t","%12"] },	
				{ div:["d w15"], c:
				[
					{ p:["abs w15 gw",":v:activities:src_uid"], uval:["",":v:activities:disposition","d gws x08 y02 bd cb"] },
					{ s:["t tr","::activity_status:15:1"] }, 
				]},
				{ div:["e"] }
			]},
		]},
		
		{ div:["e"], c:[ { arg:["id-0","","%0"] }, { arg:["src-9","","%9"] }, { arg:["uniqueid-10","","%10"] }, { arg:["chan_ts-11","","%11"] }, { arg:["phone-12","","%12"] }, { arg:["vector-14","","%14"] }, { arg:["hangup_status-15","","%15"] } ] }
	]}
]};

te["activity_lst_k"] = { div:["g"], c:
[
	{ p:["","e"], c:[ { arg:["","_c","%1"] } ] }
]};

te["activity_lst"] = { list:["end","end","","activity_lst_k","activity_lst_r","activities","activity_lst_footer"] };

// --------------------------

function activity_ls_r_dispo (id, v)
{
	if (id.length<1) return;
	var p = document.getElementById ("call_sessions").nextSibling;
	var el = _(p, id);
	if (el==null) return
	el.innerHTML = "";
	nd (el, te["lsr_dispo"], [], [v], [0]);
}

function case_dispo_ufn (el, u, a, r, m)
{
	var p_ = __(el,"vw").previousSibling;
	var el_ = _(p_,"dispo");
	el_.innerHTML = "";
	nd (el_, te["case_dispo"], [], r, [0]);
	activity_ls_r_dispo (vel (r, ["","v","cases","activity_src_uid"]), vel (r, ["","v","cases","disposition"]));
}

function activity_dispo_ufn (el, u, a, r, m)
{
	var el_ = el.parentNode.parentNode.nextSibling; 
	el_.innerHTML = "";
	nd (el_, te["activity_dispo"], [], r, [0]);
	activity_ls_r_dispo (vel (r, ["","v","activities","src_uid"]), vel (r, ["","v","activities","disposition"]));
}

function activity_close ()
{	
	var coll = document.getElementById ("vv").childNodes;
	coll[1].innerHTML = ""; // toolbar
	coll[6].childNodes[1].childNodes[1].innerHTML = "";  // vw
	coll[6].childNodes[2].firstChild.checked = true; // show dash
	nd (coll[1], te["toolbar_default"], [], [], [0]); // show toolbar
	show_notifications (1);
			
	var p = document.getElementById ("vp"); // close vp (if open)
	p.style.display = "none";
	p.innerHTML = "";
}

function activity_vw (el)
{
	var r_ = ra["r_"][0].slice (0); // r_==activity
	var coll_ = el.firstChild.lastChild.getElementsByTagName ("input");
	rargs (r_, coll_);
	ra = {};
	for (var k in re) ra[k] = re[k];
	ra["activities"] = [];
	ra["activities"][0] = r_;

	var coll = document.getElementById ("vv").childNodes;		
	el.previousSibling.checked = true; 	// hilite activity_lst_r
	coll[1].innerHTML = ""; // toolbar
	coll[6].childNodes[1].firstChild.checked = true;
	coll[6].childNodes[1].childNodes[1].innerHTML = ""; // vw
	
	nd (coll[1], te["activity_toolbar"], [], r_, [0]); // show toolbar
	
	if (r_[9]=="walkin")
	{
		ra["contacts_ctx"] = [["0","20","0","0","0",""]]; 
		ra["contacts"] = [];
		nd (coll[6].childNodes[1].childNodes[1], te["activity_vw_id"], [], r_, [0]);
		return;
	}
	
	url (coll[6].childNodes[1].childNodes[1], "activity_vw_id", "activities", r_[0]); 
}

function _activity_close (ev)
{
	this.previousSibling.checked = true;
	activity_close ();
	boo (ev)
}

function _activity_crumb (ev)
{

}

function _activity_vw (ev)
{
	activity_vw (this);
	boo (ev)
}

function _activity_reporter ()
{
	var p = __(this,"ve");
	var p_ = __(p,"vw");
	var o = {};
	jso (p,o,"name"); // contact details 
	jso (p_.previousSibling.lastChild, o); // channel details
	url (p, "activity_reporter", "reporters", "", null, 2, o, "POST");
}

function _activity_case ()
{
	this.previousSibling.checked = true;
	var u = this.id.split("-");
	var p = __(this);
	// p.previousSibling.childNodes[1].innerHTML = "";
	//var crumb = ["Follow Up","New Case","New Counseling","New Inquiry"];
	//nd (p.previousSibling.childNodes[1], te["activity_bread_crumb"], [], [crumb[this.previousSibling.value]], [0]);
	p.firstChild.style.display = "none";
	p.lastChild.innerHTML = "";
	if (this.previousSibling.value=="0")
	{
		var o = {"args":"?"};
		argv (this.firstChild.lastChild, o);
		url (p.lastChild, u[0], u[1], o.args);
		return;
	}
	var r_ = ra[u[1]][0].slice(0); // get a copy
	rargs (r_, this.firstChild.lastChild.childNodes, r_);
	nd (p.lastChild, te[u[0]], [], r_, [0]); // todo load from url inorder to load reporter object (currently picking cached reporter in ra!)
}

function _activity_disposition ()
{
	var u = ["activity_disposition","actions",""]
	var p = __(this,"ve");
	var ptab = __(elvp);
	var p_ = ptab.firstChild.childNodes[1]; // vw
	var p__ = p_.childNodes[1];
	var case_form_btn = _(p_, "_case_form_");
	var o = { ".id":"" };
	var o_ = {};
	jso (p,o,"name");
	jso (p_.previousSibling.lastChild, o_);  // channel details
	jso (p__.previousSibling, o_); 	// reporter details		
	if (case_form_btn!=null)
	{
		var pvp = __(p,"vp");
		p = __(case_form_btn,"ve"),
		jso (p, o_);  // case details
		if (o_[".id"].length>0) o_["case_id"] = o_[".id"];
		pvp.style.display = "none";
		pvp.innerHTML = "";
		elvp = null;
		u = ["case_form", "cases", o_[".id"]];
		console.log (" >> "+JSON.stringify (u))
	}
	o_["disposition_id"] = o["disposition_id"];			// overrides the (default) case disposition
 	url (p, u[0], u[1], u[2], null, 2, o_, "POST");
	
	//if (o.callid.length>0) 
	//{
	//	phone_hangup (o.callid);
	//}
}

function _postj_activity (ev)
{
	var u = this.id.split ("-");
	var p = __(this,"ve");
	var p_ = __(elvp,"vfvw");
	var p__ = __(elvp,"vw");
	var o = {};
	jso (p,o,"name"); // vp details
	if (p_!=null) jso (p_.previousSibling, o);  // reporter details
	if (p__!=null) jso (p__.previousSibling.lastChild, o);  // channel details
	url (p, u[0], u[1], o[".id"], null, 2, o, "POST");
	boo (ev)
}

