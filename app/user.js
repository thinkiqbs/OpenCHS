
te["user_role_r"] = { div:[], ac:["ay","","_sel","xx tt b05 cb",""], c:
[
	{ s:["","%1"] },
	{ div:["e"], c:[ { arg:["id-0","","%0"] } ] }
]};

te["user_ed_r_"] = { div:["","ve"], c:
[
	{ div:[], c:[ { p:["c w40","nb"], u:["nb","users_nb"] }, { div:["e"] } ] },
	{ p:["","o"], c:
	[
		{ div:["t15"], c:
		[ 
			{ s:["c w13 y","Username"] }, { txt:["c w25 gw ba","w25 x y","","usn","%5"] }, { div:["e"] } 
		]},
		{ div:["t15"], c:
		[
			{ s:["c w13 y","First Name"] }, { txt:["c w25 gw ba","w25 x y","","fname","%13"] }, { div:["e"] }
		]},
		{ div:["t15"], c:
		[
			{ s:["c w13 y","Last Name"] }, { txt:["c w25 gw ba","w25 x y","","lname","%14"] }, { div:["e"] }
		]},
		{ div:["t15"], c:
		[
			{ s:["c w13 y","Phone"] }, { txt:["c w25 gw ba","w25 x y","","phone","%15"] }, { div:["e"] }
		]},
		{ div:["t15"], c:
		[
			{ s:["c w13 y","Email"] }, { txt:["c w25 gw ba","w25 x y","","email","%16"] }, { div:["e"] }
		]},
		//{ div:["t15"], c:
		//[
		//	{ s:["c w13 y","Location"] }, { txt:["c w25 gw ba","w25 x y","","location","%19"] }, { div:["e"] }
		//]},
		{ div:["t15"], c:
		[
			{ s:["c w13 y","Extension"] }, { txt:["c w25 gw ba","w25 x y","","exten","%7"] }, { div:["e"] }
		]},
	]},
	{ div:["y15"], c:
	[
		{ s:["c w13 y","Role"] },
		{ div:["c","tag-r_--o--::user_role:0:1-role-%0"], c:
		[
			{ li:["ba w25 gw","va"], c:[ { div:[], ev:["_dd"], c: // ls
			[
				{ p:["c w21","o"], uchk:["tag","%6","","",""," ::user_role:0:1","role"," %0"] },
				{ div:["d w02 x y"],  c:[ { div:["h02 w02 awb"] } ] },
				{ div:["e"] }
			]} ]},			
			{ div:["dd w25 ba gw cb","vdd"], ev:["_undd"], c: // 
			[
				{ uchk:["user_role_r","","user_role"] }
			]}
		]},
		{ div:["e"] }
	]},

	{ div:["t35"], c:
	[
		{ div:["c w06 r02"], c:[ { ac:["aa btn",null,"_postj","x y04 w05 gbl cw tc","Save"] }, { s:["y07 bd b savl","..."] } ] },
		{ div:["c l20","va"], ac:["ay",null,null,"x y04 w05 gwd tc cbr","Cancel"], c:[ { p:["g","o"], arg:["",".id","%0"] } ] },
		{ div:["e"] }
	]}
]};

te["user_ed_r"] = { user_ed_r_:["user_ed-users","user_vw_id-users-vp","_u"] };

te["user_new_r"] = { user_ed_r_:["user_new-users","","_vpclose"] };

te["user_ed"] = { vped:["w60 ma bd sh__","Edit User","user_ed_r"] };

te["user_new"] = { vped:["w60 ma bd sh__","New User","user_new_r"] };

// ------------------------------------------

te["user_vw_r"] = { div:["","ve"], c:
[
	{ div:["bt"], c:
	[ 
		{ div:["d w10"], s:["abs tt",""], c:
		[
			{ div:["","va"], s:["",""], c:
			[
				{ ac:["c w07 ad","user_ed-users","_vp","y ba tc","Edit"], c:[ { arg:["",".id","%0"] } ] },
				{ div:["d w03"], ac:["aa","","_dd","x y04 ba",""],  c:[ { div:["h02 w02 awb"] } ] },
				{ div:["e"] }
			]},
			{ div:["dd ba gw w10 sh",""], c:
			[
				{ div:["",""], ac:[" aa","reset_passwd-resetAuth","_postj","x y tc","Reset Password"], c:[ { p:["","o"], arg:["",".id","%0"] } ] }
			]}
		]},
		{ div:["e"] }
	]},
	{ div:[], c:
	[
		{ p:["tt b05","nb"], c:[ { u:["nb","users_nb"] }, { u:["nb","errors"] } ] },
		{ div:["e"] }
	]},
	{ div:[""], c:
	[ 
		{ s:["c w08 x y cb b","Username"] }, 
		{ s:["c w30 x y07 cb","%5"] }, 
		{ div:["e"] }
	]},
	{ div:["t15"], c:
	[ 
		{ s:["c w08 x y cb b","Full Names"] }, 
		{ s:["c w30 x y07 cb","%12"] }, 
		{ div:["e"] }
	]},
	{ div:["t15"], c:
	[ 
		{ s:["c w08 x y cb b","Phone"] }, 
		{ s:["c w30 x y07 cb","%15"] }, 
		{ div:["e"] }
	]},
	{ div:["t15"], c:
	[ 
		{ s:["c w08 x y cb b","Email"] }, 
		{ s:["c w30 x y07 cb","%16"] }, 
		{ div:["e"] }
	]},
	{ div:["t15"], c:
	[ 
		{ s:["c w08 x y cb b","Extension"] }, 
		{ s:["c w30 x y07 cb","%7"] }, 
		{ div:["e"] }
	]},
	{ div:["t15"], c:
	[ 
		{ s:["c w08 x y cb b","Role"] }, 
		{ s:["c w30 x y07","::user_role:6:1"] },
		{ div:["e"] }
	]},
]};

te["user_vw_id"] = { vpvw:["w60 ma bd sh__ x15 t b30 gw",  "User","noop",          "noop","user_vw_r"] };

// -----------------------------------------------------------------------

te["user_la"] = { div:["","ve"], c: 
[
	{ div:["t","va"], ac:["","","","x y cb b","Assign Agents"] }, 
        { div:["","member_add-a"], c:
        [
       		{ div:["","va"], c:
        	[
	                { div:["","members"], c:[ { p:["","a"], u:["member_ed","members"] } ] },
	                { p:["e","o"], arg:["",".id",":k:members_k:campaign_id:2"] }
	        ]},
	        { div:["t","vr"], c:
        	[ 
        	        { user_lc:[] }
		]},
		{ div:["mtn30"], c: // footer
        	[
        	      	{ div:["c w06"], c:[ { ac:["aa btn","member_lst-campaigns","_postj","x y03 w05 gbl cw tc","Save"] }, { s:["y07 bd b savl","..."] } ] },
        	       	{ div:["c l20","va"], ac:["ay","member_lst-campaigns-vt","_u","x y03 w05 tc cbr","Cancel"], c:[ { arg:["",".id",":k:members_k:campaign_id:2"] } ] },
        	    //   	{ div:["d"], pg:["pgto","user_lc-users"," dh","da dl","user_lc-users"," dh","da dr"] },
        	       	{ div:["e"] }
        	]}
        ]}
]};

// ----------------------------------------	

te["user_lc_footer"] = { div:["y"], c:
[
	{ div:["d x"], pg:["pgto","user_lc-users"," dh","da dl","user_lc-users"," dh","da dr"] },
	{ div:["e"] }
]};

te["user_lc_r"] = { div:[], c: 
[
	{ input:["g","user_id","","%0","checkbox",":k:users_chk:user_id::0"] },
	{ ac:["r ay","","_chk","h01_ xx y07 cb",""], c:
	[ 
		{ div:["c t03 w01_"], s:["chk",""] },
		{ div:["c w12"], s:["x t02 h02","%5"] },
		{ div:["d"], s:["x h02 tr","::user_role:6:1"] },
		{ div:["d"], s:["x tr h02","%7"] },
		{ div:["e"], c:[ { arg:["name-5","","%5"] }, { arg:["role-6","","%6"] }, { arg:["exten-7","","%7"] } ] },
	]}
]};

te["user_lc_k"] = { div:["g"], c:
[
	// other filters
]};

te["user_lc"] = { c:
[
	{ uargs:["users_chk"] },
	{ list:["end","end","h30","user_lc_k","user_lc_r","users","user_lc_footer"] }
]};

te["user_lc_main"] = { c:
[
	{ div:["xx mb","va"], c:[ { div:["","user_lc-users"], c:
	[ 
		{ p:["bb_b w30","txa"], c:[ { input:["w30 x tt b05","usn_","","","text",""], ev:["","_ky","","_uky"] } ] } 
		//{ arg:["root_id","",null] },
		//{ div:[], c: [ { arg:["level","",null] }, ] }
	]} ]},
	{ div:["","va"], user_lc:[] }
]};

// -----------------------------------------------------------------------

te["user_ls_footer"] = { div:["x gws mt"], c:
[
	{ s:["c x y cd s","%3"] },
	{ s:["c y cd s","of"] }, 
	{ s:["c x y cd s","%4"] },
	{ div:["d t03"], c:[ { ac:["nav","users_ls-users","_nav","dh",""], c:[ { div:["da dr_"] }, { arg:["","_a","%0"] } ] }, { s:["navl","..."] } ] },
	{ div:["d t03"], c:[ { aci:["nav","users_ls-users","_nav","dh","prev",""], c:[ { div:["da dl_"] }, { arg:["","_a","%0"] } ] }, { s:["navl","..."] } ] },
	{ div:["e"] }
]};

te["user_ls_r"] = { ac:["ay ","","_sel","x cb",""], c:
[
	{ div:["c"], s:["x h01_ y07","%5"] },
	{ div:["d"], s:["x h01_ y07 tr","::user_role:6:1"] },
	// { div:["d"], s:["x h01_ y07 tr","%7"] },
	{ div:["e"], c:[ { arg:["id-0","","%0"] }, { arg:["usn-5","","%5"] }, { arg:["role-6","","%6"] }, { arg:["exten-7","","%7"] } ] }
]};

te["user_ls_k"] = { div:["g"], c:
[
	{ p:["","e"], c:[ { arg:["","_c","%1"] } ] }
]};

te["user_ls"] = { list:["end","end","","user_ls_k","user_ls_r","users","user_ls_footer"] };

// -----------------------------------------------------------------------

te["user_f_tags"] = { c: 
[
	{ f:["Username",":k:users_f:username",		" %0"," username"] },
	{ f:["First Name",":k:users_f:fname",		" %0"," fname"] },
	{ f:["Last Name",":k:users_f:lname",		" %0"," lname"] },
	{ f:["Phone",":k:users_f:phone",		" %0"," phone"] },
	{ f:["Email",":k:users_f:email",		" %0"," email"] },
	{ f:["Extension",":k:users_f:exten",		" %0"," exten"] },
	{ f:["Role",":k:users_f:role",			" ::user_role:0:1"," role"] },
	// { f:["Created On",":k:users_f:created_on",	" :d:dmy:0: "," created_on"] },
	{ div:["e"] }
]};

te["user_f"] = { div:["w70 ma bd sh__ xx yy gw"], c: // "vddvw"], ev:["_undd"
[
	{ s:["x12 yy b bb","Filters"] },
	{ div:["x tt b20"], c:
	[
		{ div:["xx yy"], kf_s:["Username","username",":k:users_f:username"] },
		{ div:["xx yy"], kf_s:["First Name","fname",":k:users_f:fname"] },
		{ div:["xx yy"], kf_s:["Last Name","lname",":k:users_f:lname"] },
		{ div:["xx yy"], kf_s:["Phone","phone",":k:users_f:phone"] },
		{ div:["xx yy"], kf_s:["Email","email",":k:users_f:email"] },
		{ div:["xx yy"], kf_s:["Extension","exten",":k:users_f:exten"] },
		{ div:["xx yy"], kf_s:["Role","role",":k:users_f:role"] },
		//{ div:["xx yy"], kf_d:["Created On"," :d:dmy:0: ","created_on",":k:users_f:created_on","created_on",":k:users_f:created_on"] },
	]},
	{ div:["x15 yy"], c:
	[
		{ div:["c w06 r02"], c:[ { ac:["aa btn","user_f_tags-users_f","_applyf","x y04 w05 gbl cw tc bd","Apply"] }, { s:["y07 bd b savl","..."] } ] },
		{ div:["c l20","va"], ac:["ay","","_vpclose","x y04 w05 gwd tc cbr bd","Cancel"], c:[ { p:["g","o"], arg:["",".id",""] } ] },
		{ div:["e"] }
	]}
]};

// -------------------------------------

te["user_footer"] = { div:["gww mtn08 ba"], c:
[
	{ div:["d y07"], pg:["pgto","user_list-users"," dh","da dl","user_list-users"," dh","da dr"] },
	{ div:["e"] }
]};

te["user_r"] = { li:["w160 gww","user_vw_id-users"], ev:["_vp"], c:
[
	{ div:["c w15 tt b05 h01_"], s:["xx","%5"] },
	{ div:["c w15 tt b05 h01_"], s:["xx","%13"] }, 
	{ div:["c w15 tt b05 h01_"], s:["xx","%14"] }, 
	{ div:["c w15 tt b05 h01_"], s:["xx","%15"] },
	{ div:["c w15 tt b05 h01_"], s:["xx","%16"] },
	{ div:["c w10 tt b05 h01_"], s:["xx","%7"] },
	{ div:["c w10 tt b05 h01_"], s:["xx","::user_role:6:1"] },
	{ div:["c w15 tt b05 h01_"], s:["xx",":d:dmyhn:1: "] },
	{ div:["c w10"], s:["tt b05 h01_  xx","%2"] },
	{ div:["e"], arg:["",".id","%0"] } 
]};

te["user_k"] = { div:["w160 bt bb gww"], s:["",""], c: // activate filter ctx
[
	{ k_a:["c w15","","cd","Username","da db",	"username",":k:users_k:username:2"] },
	{ k_a:["c w15","","cd","First Name","da db",	"fname",":k:users_k:fname:2"] },
	{ k_a:["c w15","","cd","Last Name","da db",	"lname",":k:users_k:lname:2"] },
	{ k_a:["c w15","","cd","Phone","da db",		"phone",":k:users_k:phone:2"] },
	{ k_a:["c w15","","cd","Email","da db",		"email",":k:users_k:email:2"] },
	{ k_a:["c w10","","cd","Extension","da db",	"exten",":k:users_k:exten:2"] },
	{ k_a:["c w10","","cd","Role","da db",		"role",":k:users_k:role:2"] },
	{ k_a:["c w15","","cd","Created On","da db",	"created_on",":k:users_k:created_on:2"] },
	{ k_a:["c w10","case_rr-cases","cd st","Created By","da db","created_by_id",":k:users_k:created_by_id:2"] },
	{ div:["e"] }
]};

te["user_nb"] = { div:[], c:[ { u:["nb","users_nb"] }, { div:["e"] } ] };

te["user_title"] = { div:[] }; 

te["user_list"] = { list:["user_title","user_nb","bl br oh","user_k","user_r","users","user_footer"] },

te["user_main"] = { c:
[
	{ div:["y","vb"], c:
	[
		{ div:["c"], c:
		[
			{ input:["g","","users_t_","0","radio","1"] },
			{ ac:["","user_list-users","_tab","x y cb b n","Users"] }, 
		]},
		{ div:["d ll t"], ac:["ao","user_new-user_","_vp","x ba_bl cbl",""], c:
		[ 
			//{ div:["c t"], c:[ { img:["","","/voiceapps/images/download.png", "16"] } ] },
			{ div:["c x y04","","+ New"] }, 
			{ div:["e"] }
		]},
		{ div:["d t aa"], ac:["","user_f-users_f","_vpf","x cd s",""], c:
		[ 
			{ div:["c t04"], c:[ { img:["","","/voiceapps/images/filter.png", "16"] } ] },
			{ div:["c x y","","Filter"] }, 
			{ div:["e"] }
		]},
                { div:["e"], c:[ { arg:["","","user_list-users"] }, { arg:["","","0"] }, { arg:["","",""] } ] }
	]},
	{ div:["","vf"] },
	{ div:[], c:
        [
                { div:[], c:[ { input:["g","","user_v","0","radio","1"] }, { p:["tabv","vt"], user_list:[] } ] },
                { div:[], c:[ { input:["g","","user_v","1","radio"] }, { p:["tabv","vt"] } ] }, // reports
        ]}
]};

te["users"] = { c:
[
        { div:["x25 yy s","vb"], c:
	[
		{ div:["c"], tab:["campaigns_mt","0","1",  "x02 y mr1 cd tab","inbound_main-inbound",  	"","Users"] },
		{ div:["c"], tab:["campaigns_mt","1","",  "x02 y mr1 cd tab","inbound_main-inbound",  	"","Campaigns"] },
		{ div:["c"], tab:["campaigns_mt","2","",   "x02 y mr1 cd tab","voiceprompt_list-voiceprompts",  	"","IVR Prompts"] },
		{ div:["c"], tab:["campaigns_mt","3","",   "x02 y mr1 cd tab","category_list-categories",  	"","Categories"], c:[ { arg:["",".id","0"] } ] },
		{ div:["e"] }
	]},
	{ div:["x20 mt ml mb mr"], c: // tabs
	[
		{ div:[], c:[ { input:["g","","campaigns_mv","0","radio","1"] }, { div:["tabv ","vftab"], user_main:[] } ] },
		{ div:[], c:[ { input:["g","","campaigns_mv","1","radio"] }, { div:["tabv","vftab"] } ] },
		{ div:[], c:[ { input:["g","","campaigns_mv","2","radio"] }, { div:["tabv","vftab"] } ] },
		{ div:[], c:[ { input:["g","","campaigns_mv","3","radio"] }, { div:["tabv","vftab"] } ] },
		{ div:[], c:[ { input:["g","","campaigns_mv","4","radio"] }, { div:["tabv","vftab"] } ] },
	]}
]};

