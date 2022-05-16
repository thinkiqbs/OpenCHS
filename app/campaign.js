
te["campaign_ed_outbound"] = { c:
[
	{ div:["g t20 "], c:
	[
		//{ s:["c w13 y","&nbsp;"] }, 
		{ s:["c y cb cd","Outbound Campaign Paramaters"] }, 
		{ div:["e"] }
	]},

	{ p:["t15","o"], c:
	[ 
		{ s:["c w14 y08 cb","Agent Wrap Up"] }, 
		{ txt:["c w12 gw ba","w12 x y07","","agent_wrapup","%20"] }, 
		{ s:["c x tt cb","Seconds"] }, 
		{ div:["e"] } 
	]},
	
	{ div:["t15"], c:
	[ 
		{ s:["c w14 y08 cb","Ring Timeout"] }, 
		{ p:["c","o"], txt:["w10 gw ba","w16 x y07","","ring_timeout","%30"] }, 
		{ s:["c x tt cb","Seconds"] }, 
		{ div:["e"] } 
	]},

	{ div:["t15"], c:
	[ 
		{ s:["c w14 y08 cb","Reattempts"] }, 
		{ p:["c","o"], txt:["w10 gw ba","w16 x y07","","reattempts","%31"] }, 
		{ div:["e"] } 
	]},

	{ div:["t15"], c:
	[ 
		{ s:["c w14 y08 cb","Reattempt Interval"] }, 
		{ p:["c","o"], txt:["w10 gw ba","w16 x y07","","reattempt_interval","%32"] }, 
		{ s:["c x tt cb","Seconds"] }, 
		{ div:["e"] } 
	]},

]};

te["campaign_ed_inbound"] = { c:
[
	{ div:["g yy"], c:
	[
		// { s:["c w13 y","&nbsp;"] }, 
		{ s:["c t15 cd","Inbound Campaign Paramaters"] }, 
		{ div:["e"] }
	]},

	{ p:["tt","o"], c:
	[ 
		{ s:["c w14 y08 cb","Agent Ring"] }, 
		{ txt:["c w12 gw ba","w12 x y07","","agent_ring_timeout","%19"] }, 
		{ s:["c x tt cb","Seconds"] }, 
		{ div:["e"] } 
	]},
	{ p:["t15","o"], c:
	[ 
		{ s:["c w14 y08 cb","Agent Wrap Up"] }, 
		{ txt:["c w12 gw ba","w12 x y07","","agent_wrapup","%20"] }, 
		{ s:["c x tt cb","Seconds"] }, 
		{ div:["e"] } 
	]},
	{ p:["t15","o"], c:
	[ 
		{ s:["c w14 y08 cb","Target SLA"] }, 
		{ txt:["c w12 gw ba","w12 x y07","","wait_sla_target","%21"] }, 
		{ s:["c x tt cb","Seconds"] }, 
		{ div:["e"] } 
	]},
	{ p:["t15","o"], c:
	[ 
		{ s:["c w14 y08 cb","Queue Timeout"] }, 
		{ txt:["c w12 gw ba","w12 x y07","","queue_timeout","%23"] }, 
		{ s:["c x tt cb","Seconds"] }, 
		{ div:["e"] } 
	]},

	{ div:["t15"], c:
	[
		{ s:["c w14 y08 cb","Music On Hold"] },
		{ div:["c w44","moh"], c: // 	// 
		[
			{ p:["t01","a"], u:["moh_ed","moh"] },
			{ ac:["w12 ay y02","vfile_moh_new","_file_dialog","x y cb tc gwd","+ Add Music File"] }
		]},
		{ div:["e"] }
	]},

	{ div:["t15"], c:
	[
		{ s:["c w14 y08 cb","Exit Prompt"] },
		{ div:["c","exit_tag-voiceprompt_--o"], c:
		[
			{ li:["w34 ba gw cb","va"], c:[ { div:["","voiceprompt_ls-voiceprompts"], ev:["_dd"], c:
			[
				{ p:["c w31","o"], c:[ { u:["exit_tag_txa","voiceprompt_"] }, { u:["exit_tag","exit","","o"] } ] },
				{ div:["d w02 x y"],  c:[ { div:["h02 w02 awb"] } ] },
				{ div:["e"] }
			]} ]},			
			{ div:["dd mtn1 w34 ba gw","vdd"], ev:["_undd"], c:
			[
	
			]}
		]},
		{ div:["e"] }
	]},

]};

te["campaign_type_r"] = { div:[], ac:["ay","%4","_sel","xx tt b05 cb",""], c:
[
	{ s:["c","%1"] },
	{ div:["e"], c:[ { arg:["campaign","","%0"] }, { arg:["campaign_txt","","%1"] } ] }
]};

te["campaign_ed_r_"] = { div:["","ve"], c:
[

	{ div:["y"], c:[ { p:["c w40","nb"], u:["nb","campaigns_nb"] }, { div:["e"] } ] },

	{ div:["g b10"], c:
	[
		// { s:["c w13 y","&nbsp;"] }, 
		{ s:["c t15 cd","General Paramaters"] }, 
		{ div:["e"] }
	]},

	{ p:["t","o"], c:
	[ 
		{ s:["c w14 y08 cb","Name:"] }, 
		{ txt:["c w42 gw ba","w42 x y07","","name","%7"] }, 
		{ div:["e"] } 
	]},

	{ div:["t15"], c:
	[ 
		{ s:["c w14 y08 cb","CallerID:"] }, 
		{ p:["c","o"], txt:["w16 gw ba","w16 x y07","","callerid","%8"] }, 
		{ div:["e"] } 
	]},

	/* { div:["t15"], c:
	[ 
		{ s:["c w14 y08 cb","Type:"] }, 
		{ div:["c w18"], c:
		[
			{ div:["w16 ba gw","va"], s:["",""], c:
			[
				{ txa:["c w12","w12 x y","","campaign_txt","::campaign:9:1","_dd","","_ro"] }, 
				{ div:["d w03"], ac:["aa","","_dd","x y",""],  c:[ { div:["h02 w02 awb"] } ] },
				{ p:["e","o"], arg:["","campaign","%9"] }
			]},			
			{ div:["dd w16 ba mtn1 gw cb","vdd"], ev:["_undd"], c:
			[
				{ uchk:["campaign_type_r","","campaign"] }
			]}
		]},
		{ div:["e"] } 
	]}, */

	{ div:["t15"], c:
	[
		{ s:["c w14 y08 cb","IVR:"] },
		{ div:["c","voiceprompt_tag-voiceprompt_--o"], c:
		[
			{ li:["w34 ba gw cb","va"], c:[ { div:["","voiceprompt_ls-voiceprompts"], ev:["_dd"], c:
			[
				{ p:["c w31","o"], c:[ { u:["voiceprompt_tag_txa","voiceprompt_"] }, { u:["voiceprompt_tag","voiceprompts","","o"] } ] },
				{ div:["d w02 x y"],  c:[ { div:["h02 w02 awb"] } ] },
				{ div:["e"] }
			]} ]},			
			{ div:["dd mtn1 w34 ba gw","vdd"], ev:["_undd"], c:
			[
	
			]}
		]},
		{ div:["e"] }
	]},

	{ div:["t15"], c:
	[
		{ s:["c w14 y08 cb","Disposition List:"] },
		{ div:["c","category_tag-category_--o"], c:
		[
			{ li:["w34 ba gw cb","va"], c:[ { div:["","category_ls-categories"], ev:["_dd"], c:
			[
				{ p:["c w31","o"], c:[ { u:["category_tag_txa","category_"] }, { u:["category_tag","categories","","o"] } ] },
				{ div:["d w02 x y"],  c:[ { div:["h02 w02 awb"] } ] },
				{ div:["e"] }
			]} ]},			
			{ div:["dd mtn1 w34 ba gw","vdd"], ev:["_undd"], c:
			[
	
			]}
		]},
		{ div:["e"] }
	]},

	{ p:["","type"], u:[null] }, // campaign-type params	

	{ div:["t35"], c:
	[
		{ div:["c w06"], c:[ { ac:["aa btn",null,"_postj","x y04 w05 gbl cw tc","Save"] }, { s:["y07 bd b savl","..."] } ] },
		{ div:["c l20","va"], ac:["ay",null,null,"x y04 w05 tc cbr","Cancel"], c:[ { p:["g","o"], arg:["",".id","%0"] } ] },
		{ div:["e"] }
	]}

]};

// ------------------------------------------------------------------------------

// te["arg_campaign_id"] = { arg:["campaign_id-10","","%0"] };

te["campaign_vw_outbound"] = { c:
[
	{ div:["tt"], c:[ { s:["c w15 y cb","Agent Wrapup:"] }, { s:["c xx y b","%20"] }, { s:["c y ","seconds"] }, { div:["e"] } ] },
	{ div:["tt"], c:[ { s:["c w15 y cb","Dial Timeout:"] }, { s:["c xx y b","%30"] },  { s:["c y ","seconds"] }, { div:["e"] } ] }, 
	{ div:["tt"], c:[ { s:["c w15 y cb","Reattempts:"] }, { s:["c xx y b","%31"] }, { div:["e"] } ] },
	{ div:["yy"], c:[ { s:["c w15 y cb","Reattempt Interval:"] }, { s:["c xx y b","%32"] }, { s:["c y ","seconds"] }, { div:["e"] } ] },
]};

te["campaign_vw_inbound"] = { c:
[
	{ div:["tt"], c:[ { s:["c w15 y cb","Agent Ring:"] }, { s:["c xx y b","%19"] },  { s:["c y ","seconds"] }, { div:["e"] } ] }, 
	{ div:["tt"], c:[ { s:["c w15 y cb","Agent Wrapup:"] }, { s:["c xx y b","%20"] }, { s:["c y ","seconds"] }, { div:["e"] } ] },
	{ div:["tt"], c:[ { s:["c w15 y cb","Target SLA:"] }, { s:["c xx y b","%21"] }, { s:["c y ","seconds"] }, { div:["e"] } ] },
	{ div:["tt"], c:[ { s:["c w15 y cb","Queue Timeout:"] }, { s:["c xx y b","%23"] }, { s:["c y ","seconds"] }, { div:["e"] } ] },
	{ div:["tt"], c:
	[ 
		{ s:["c w15 y cb","Music On Hold:"] }, 
		{ div:["c w35 x"], u:["voicefile_vw_r","moh"] }, 
		{ div:["e"] } 
	]},

	{ div:["yy"], c:
	[ 
		{ s:["c w15 y cb","Queue Exit Prompt:"] }, 
		{ div:["c"], u:["voiceprompt_tag_vw","exit"] },
		{ div:["e"] } 
	]},
]};

te["campaign_vw_r"] = { c:
[
	{ div:["t01"], c:
	[ 
		{ div:["d w04 mtn50","va"], ac:["w04 y08 ay abs",null,"_u","w04 y gwd cb tc","Edit"], c:[ { arg:["",".id","%0"] } ] },
		{ div:["e"] }
	]},

	{ div:["x"], c:
	[
		{ div:["y"], c:[ { u:["nb","campaigns_nb"] }, { div:["e"] } ] },
		{ div:[""], c:[ { s:["c w15 y cb","Name:"] }, { s:["c xx y b","%7"] },  { div:["e"] } ] }, 
		{ div:["tt"], c:[ { s:["c w15 y cb","CallerID:"] }, { s:["c xx y b","%8"] }, { div:["e"] } ] },
		{ div:["tt"], c:[ { s:["c w15 y cb","Type:"] }, { s:["c xx y b","::campaign:9:1"] }, { div:["e"] } ] },
		{ div:["tt"], c:
		[ 
			{ s:["c w15 y cb","IVR:"] }, 
			{ div:["c"], u:["voiceprompt_tag_vw","voiceprompts"] },
			{ div:["e"] } 
		]},
	
		{ div:["tt"], c:
		[ 
			{ s:["c w15 y cb","Disposition List:"] }, 
			{ div:["c"], u:["category_tag_vw","categories"] }, 
			{ div:["e"] } 
		]},
	
		/*{ div:["t15"], c:
		[ 
			{ s:["c w15 y cb","Assigned To:"] }, 
			{ div:["c w35 x"], u:["member_tag_vw","members"] }, 
			{ div:["e"] } 
		]},*/
	
		{ u:["::campaign:9:2"] }
	]}

]};

te["campaign_vw_tabs_outbound"] = { c:
[
	{ div:[], c:[ { input:["g","","tabiv","0","radio","1"] }, { div:["tabiv","vt"], campaign_vw_r:["outbound_ed-outbound-vt"] } ] }, // 
	{ div:[], c:[ { input:["g","","tabiv","1","radio"] }, { div:["tabiv","vt"], u:["workinghour_lst","workinghours_ctx"] } ] },
	{ div:[], c:[ { input:["g","","tabiv","2","radio"] }, { div:["tabiv","vt"], u:["member_lst","members_ctx"] } ] },
	{ div:[], c:[ { input:["g","","tabiv","3","radio"] }, { div:["tabiv","vt"], u:["lead_lst","leads_ctx"] } ] },
]};

te["campaign_vw_tabs_inbound"] = { c:
[
	{ div:[], c:[ { input:["g","","tabiv","0","radio","1"] }, { div:["tabiv","vt"], campaign_vw_r:["inbound_ed-inbound-vt"] } ] }, // {
	{ div:[], c:[ { input:["g","","tabiv","1","radio"] }, { div:["tabiv","vt"], u:["workinghour_lst","workinghours_ctx"] } ] },
	{ div:[], c:[ { input:["g","","tabiv","2","radio"] }, { div:["tabiv","vt"], u:["ooohour_lst","ooohours_ctx"] } ] },
	{ div:[], c:[ { input:["g","","tabiv","3","radio"] }, { div:["tabiv","vt"], u:["member_lst","members_ctx"] } ] },
	{ div:[], c:[ { input:["g","","tabiv","4","radio"] }, { div:["tabiv","vt"], u:["lead_lst","leads_ctx"] } ] },
]};

te["campaign_vw_id_menu_outbound"] = { c:
[
	{ tabi:["c w12",      "campaign_vw_id","0","1", "","_tabi", "Campaign Details"] },
	{ tabi:["c w12 mln1", "campaign_vw_id","1","", "","_tabi", "Working Hours"] },
	{ tabi:["c w07 mln1", "campaign_vw_id","2","", "","_tabi", "Agents"] },
	{ tabi:["c w07 mln1", "campaign_vw_id","3","", "","_tabi", "Leads"] },
	{ div:["e"] }
]};

te["campaign_vw_id_menu_inbound"] = { c:
[
	{ tabi:["c w12",      "campaign_vw_id","0","1", "","_tabi", "Campaign Details"] },
	{ tabi:["c w12 mln1", "campaign_vw_id","1","", "","_tabi", "Working Hours"] },
	{ tabi:["c w15 mln1", "campaign_vw_id","2","", "","_tabi", "Out of Office Messages"] },
	{ tabi:["c w07 mln1", "campaign_vw_id","3","", "","_tabi", "Agents"] },
	{ div:["e"] }
]};

te["campaign_vw_id_h"] = { c:
[
	{ s:["c xx y08 b cb","::campaign:9:7"] },
	{ div:["c t12"], c:[ { div:["h02 w02 awr"] } ] },
	{ s:["c x y08 b","%7"] },
	// { s:["c x y08","%8"] },
]};

te["campaign_vw_id"] = { div:["w100 ma bd sh__ y gw","vddvw"], ev:["_undd"], c: // { div:["w100 ma bd sh__ y gw"], c:
[
	{ div:["x y"], c:
	[
		{ u:["campaign_vw_id_h"] },
		{ ac:["d w03 ay","","_vpclose","x y tc h3 cd bd","&Cross;"] },
		{ div:["e"] }
	]},
	{ div:["x15 y gw"], u:["::campaign:9:5"] },
	{ div:["x15 b10"], u:["::campaign:9:6"] },
]};

// ------------------------------------------------------------------------------

te["campaign_lc_footer"] = { div:[], c:
[
	{ div:["d y"], pg:["pgto","campaign_lc-campaigns"," dh","da dl","campaign_lc-campaigns"," dh","da dr"] },
	{ div:["e"] }
]};

te["campaign_lc_r"] = { div:[], c: 
[
	{ div:[], c:[ { arg:["","","%7"] }, { arg:["","","%8"] }, { arg:["","","%9"] } ] },
	{ input:["g","campaign_id","","%0","checkbox",":k:campaigns_chk:campaign_id::0"] },
	{ ac:["r ay","","_chk","h01_ x y07 cb",""], c:
	[ 
		{ div:["c w01_"], s:["chk",""] },
		//{ div:["c w08"], s:["x h02","::user_role:8:1"] },
		//{ div:["d w04"], s:["x tr h02","%7"] },
		{ div:["c w25"], s:["x h02","%7"] },
		{ div:["e"] }
	]}
]};

te["campaign_lc_k"] = { div:["g"], c:
[
	// other filters
	{ p:["","e"], c:[ { arg:["","_c","%1"] }, ] }
]};

te["campaign_lc"] = { c:
[
	{ uargs:["campaigns_chk"] },
	{ list:["end","end","bt h30","campaign_lc_k","campaign_lc_r","campaigns","campaign_lc_footer"] }
]};

// ------------------------------------------------------------------------------

te["campaign_f_tags"] = { c: 
[
	{ f:["Date",":k:calls_f:chan_ts",			" :d:dmy:0: "," chan_ts"] },
	{ f:["Branch",":k:calls_f:branch",			" ::branch:0:1"," branch"] },
	{ f:["Direction",":k:calls_f:vector",			" ::vector:0:1"," vector"] },
	{ f:["Trunk",":k:calls_f:trunk",			" %0"," trunk"] },
	{ f:["Phone",":k:calls_f:phone",			" %0"," phone"] },
	{ f:["Extension",":k:calls_f:usr",			" %0"," usr"] },
	{ f:["Wait Time",":k:calls_f:wait_time_tot",		" %0"," wait_time_tot"] },
	{ f:["Talk Time",":k:calls_f:talk_time",		" %0"," talk_time"] },
	{ f:["Hangup Reason",":k:calls_f:hangup_reason",	" ::hangup_reason:0:1"," hangup_reason"] },
	{ f:["Hangup Status",":k:calls_f:hangup_status",	" ::hangup_status:0:1"," hangup_status"] },
	{ div:["e"] }
]};

te["campaign_f"] = { div:["w70 ma bd sh__ y gw"], c: // "vddvw"], ev:["_undd"
[
	{ s:["x20 yy b bb_","Filters"] },
	{ div:["x15 tt b20"], c:
	[
		//{ div:["xx yy"], kf_d:["Date"," :d:dmy:0: ","chan_ts",":k:calls_f:chan_ts","chan_ts",":k:calls_f:chan_ts"] },
		//{ div:["xx yy"], kf_c:["Branch","tag-o-branch-::branch:0:1", 	":k:calls_f:branch"," ::branch:0:1"," branch",		":k:calls_f:branch","branch", " branch"," ::branch:0:1"," "] },
		//{ div:["xx yy"], kf_c:["Direction","tag-o-vector-::vector:0:1",  	":k:calls_f:vector"," ::vector:0:1"," vector", 		":k:calls_f:vector","vector", " vector"," ::vector:0:1"," "] },		
		//{ div:["xx yy"], kf_s:["Trunk DID","trunk",":k:calls_f:trunk"] },
		//{ div:["xx yy"], kf_s:["Phone","phone",":k:calls_f:phone"] },
		//{ div:["xx yy"], kf_s:["Extension","usr",":k:calls_f:usr"] },
		//{ div:["xx yy"], kf_s:["Wait Time","wait_time_tot",":k:calls_f:wait_time_tot"] },
		//{ div:["xx yy"], kf_s:["Talk Time","talk_time",":k:calls_f:talk_time"] },
		//{ div:["xx yy"], kf_c:["Hangup Reason","tag-o-hangup_reason-::hangup_reason:0:1", 	":k:calls_f:hangup_reason"," ::hangup_reason:0:1"," hangup_reason", 	":k:calls_f:hangup_reason", "hangup_reason", " hangup_reason"," ::hangup_reason:0:1"," "] },
		//{ div:["xx yy"], kf_c:["Hangup Status","tag-o-hangup_status-::hangup_status:0:1", 	":k:calls_f:hangup_status"," ::hangup_status:0:1"," hangup_status",	":k:calls_f:hangup_status", "hangup_status", " hangup_status"," ::hangup_status:0:1"," "] },
	]},
	{ div:["x20 yy"], c:
	[
		{ div:["c w06 r02"], c:[ { ac:["ad btn","call_f_tags-calls_f","_applyf","x y w05 gbl bd ba_br cw tc","Apply"] }, { s:["y07 bd b savl","..."] } ] },
		{ div:["c l20","va"], ac:["ay","","_vpclose","x y w05 ba_bl bd tc cbr","Cancel"], c:[ { p:["g","o"], arg:["",".id",""] } ] },
		{ div:["e"] }
	]}
]};

// ------------------------------------------------------------------------------

te["outbound_ed_r"] = { campaign_ed_r_:["campaign_ed_outbound","outbound_ed-outbound","outbound_vw_id-outbound-vp","_u"] };

te["outbound_new_r"] = { campaign_ed_r_:["campaign_ed_outbound","outbound_new-outbound","","_vpclose"] };

te["outbound_ed"] = { div:["x"], outbound_ed_r:[] };

te["outbound_new"] = { vped:["w100 ma bd sh__ y gw","New Outbound Campaign","outbound_new_r"] };

te["outbound_footer"] = { div:["gw mtn08 bt"], c:
[
	{ div:["d y07"], pg:["pgto","outbound_list-outbound"," dh","da dl","outbound_list-outbound"," dh","da dr"] },
	{ div:["e"] }
]};

te["outbound_r"] = { li:["w160 gw","outbound_vw_id-outbound"], ev:["_vp"], c:
[
	{ div:["c w25 tt b05"], s:["xx","%7"] },
	{ div:["c w12 tt b05 h01_"], s:["xx","%8"] }, 
	{ div:["c w12 tt b05 h01_"], s:["xx","::campaign:9:1"] }, 
	{ div:["c w30 xx tt b05 h01_"], c:[ { s:["c r10 b","::voiceprompt_type:12:1"] }, { s:["","%11"] }, { div:["e"] } ] },
	{ div:["c w12 tt b05 h01_"], s:["xx","%16"] }, 
	{ div:["c w13 tt b05 h01_"], s:["xx",":d:dmyhn:1: "] },
	{ div:["e"], arg:["",".id","%0"] } 
]};

te["outbound_k"] =  { div:["bt bb"], s:["w160",""], c: // activate filter ctx
[
	{ k_a:["c w25","","cd","Name","da db",		"name",":k:outbound_k:name:2"] },
	{ k_a:["c w12","","cd","CallerID","da db",	"callerid",":k:outbound_k:callerid:2"] },
	{ k_a:["c w12","","cd","Type","da db",		"campaign",":k:outbound_k:campaign:2"] },
	{ k_a:["c w32","","cd","Destination","da db",	"voiceprompt_id",":k:outbound_k:voiceprompt_id:2"] },
	{ k_a:["c w12","","cd","Assigned To","da db",	"campaign",":k:outbound_k:campaign:2"] },
	{ k_a:["c w13","","cd","Created On","da db",	"created_on",":k:outbound_k:created_on:2"] },
	{ div:["e"] }
]};

te["outbound_nb"] = { div:[], c:[ { u:["nb","outbound_nb"] }, { div:["e"] } ] };

te["outbound_title"] = { div:[] }; 

te["outbound_list"] = { list:["outbound_title","outbound_nb","mtn1 bl br gw oh","outbound_k","outbound_r","outbound","outbound_footer"] },

te["outbound_main"] = { c:
[
	{ div:["tt","vb"], c:
	[
		{ div:["c t"], c:
		[
			{ arg:["","","0"] },
			{ input:["g","","outbound_t","0","radio","1"] },
			{ ac:["","outbound_list-outbound","_tab","x y03 cb b n","Outbound Campaigns"] }, 
		]},
		{ div:["d ll t bb"], ac:["ao","outbound_new-campaign_","_vp","x gbl cw",""], c:
		[ 
			//{ div:["c t"], c:[ { img:["","","/voiceapps/images/download.png", "16"] } ] },
			{ div:["c x y","","+ New"] }, 
			{ div:["e"] }
		]},
		{ div:["d ll t bb","call_rpt-calls-@:1:"], c: // loaded only when tab contents are blank
		[
			{ arg:["","","0"] },
			{ input:["g","","calls_t","0","radio"] },
			{ ac:["c aa","call_list-calls","_tab","x cd s",""], c:
			[
				{ div:["c t04"], c:[ { img:["","","/voiceapps/images/list.png", "16"] } ] },
				{ div:["c x y","","List"] }, 
				{ div:["e"] }
			]},
			// { div:["d"], ac:["aa","","_dsdd","x02 t04 b02",""],  c:[ { div:["h02 w02 awb"] } ] },
			{ div:["e"] }
		]},
		{ div:["d t aa bb"], ac:["","campaign_f-campaigns_f","_vpf","x cd s",""], c:
		[ 
			{ div:["c t04"], c:[ { img:["","","/voiceapps/images/filter.png", "16"] } ] },
			{ div:["c x y","","Filter"] }, 
			{ div:["e"] }
		]},
		{ div:["e"], c:[ { arg:["","","outbound_list-outbound"] }, { arg:["","","0"] }, { arg:["","",""] } ] }
	]},
	{ div:["","vf"] },
	{ div:[""], c:
	[
		{ div:[], c:[ { input:["g","","outbound_v","0","radio","1"] }, { p:["tabv","vt"], outbound_list:[] } ] },
		{ div:[], c:[ { input:["g","","outbound_v","1","radio"] }, { p:["tabv","vt"] } ] },	// reports			
	]}
]};

// ------------------------------------------------------------------------------

te["inbound_ed_r"] = { campaign_ed_r_:["campaign_ed_inbound","inbound_ed-inbound","inbound_vw_id-inbound-vp","_u"] };

te["inbound_new_r"] = { campaign_ed_r_:["campaign_ed_inbound","inbound_new-inbound","","_vpclose"] };

te["inbound_ed"] = { div:["x"], inbound_ed_r:[] };

te["inbound_new"] = { vped:["w100 ma bd sh__ y gw","New Inbound Campaign","inbound_new_r"] };

te["inbound_footer"] = { div:["gww mtn08 ba"], c:
[
	{ div:["d y07"], pg:["pgto","inbound_list-inbound"," dh","da dl","inbound_list-inbound"," dh","da dr"] },
	{ div:["e"] }
]};

te["inbound_r"] = { li:["w160 gww","inbound_vw_id-inbound"], ev:["_vp"], c:
[
	{ div:["c w25 tt b05"], s:["xx","%7"] },
	{ div:["c w12 tt b05 h01_"], s:["xx","%8"] }, 
	{ div:["c w12 tt b05 h01_"], s:["xx","::campaign:9:1"] }, 
	{ div:["c w30 xx tt b05 h01_"], c:[ { s:["c r10 b","::voiceprompt_type:12:1"] }, { s:["","%11"] }, { div:["e"] } ] },
	{ div:["c w12 tt b05 h01_"], s:["xx","%16"] }, 
	{ div:["c w13 tt b05 h01_"], s:["xx",":d:dmyhn:1: "] },
	{ div:["e"], arg:["",".id","%0"] } 
]};

te["inbound_k"] =  { div:["w160 bt bb"], s:["",""], c: // activate filter ctx
[
	{ k_a:["c w25","","cd","Name","da db",		"name",":k:inbound_k:name:2"] },
	{ k_a:["c w12","","cd","CallerID","da db",	"callerid",":k:inbound_k:callerid:2"] },
	{ k_a:["c w12","","cd","Type","da db",		"campaign",":k:inbound_k:campaign:2"] },
	{ k_a:["c w32","","cd","Destination","da db",	"voiceprompt_id",":k:inbound_k:voiceprompt_id:2"] },
	{ k_a:["c w12","","cd","Assigned To","da db",	"campaign",":k:inbound_k:campaign:2"] },
	{ k_a:["c w13","","cd","Created On","da db",	"created_on",":k:inbound_k:created_on:2"] },
	{ div:["e"] }
]};

te["inbound_nb"] = { div:[], c:[ { u:["nb","inbound_nb"] }, { div:["e"] } ] };

te["inbound_title"] = { div:[] }; 

te["inbound_list"] = { list:["inbound_title","inbound_nb","bl br oh","inbound_k","inbound_r","inbound","inbound_footer"] },

te["inbound_main"] = { c:
[
	{ div:["y","vb"], c:
	[
		{ div:["c t"], c:
		[
			{ arg:["","","0"] },
			{ input:["g","","inbound_t","0","radio","1"] },
			{ ac:["","inbound_list-inbound","_tab","x y03 cb b n","Campaigns"] }, 
		]},
		{ div:["d ll t"], ac:["ao","inbound_new-campaign_","_vp","x ba_bl cbl",""], c:
		[ 
			//{ div:["c t"], c:[ { img:["","","/voiceapps/images/download.png", "16"] } ] },
			{ div:["c x y04","","+ New"] }, 
			{ div:["e"] }
		]},
		
		{ div:["d t aa"], ac:["","campaign_f-campaigns_f","_vpf","x cd s",""], c:
		[ 
			{ div:["c t04"], c:[ { img:["","","/voiceapps/images/filter.png", "16"] } ] },
			{ div:["c x y","","Filter"] }, 
			{ div:["e"] }
		]},
		{ div:["e"], c:[ { arg:["","","inbound_list-inbound"] }, { arg:["","","0"] }, { arg:["","",""] } ] }
	]},
	{ div:["","vf"] },
	{ div:[""], c:
	[
		{ div:[], c:[ { input:["g","","inbound_v","0","radio","1"] }, { p:["tabv","vt"], inbound_list:[] } ] },
		{ div:[], c:[ { input:["g","","inbound_v","1","radio"] }, { p:["tabv","vt"] } ] },	// reports			
	]}
]};

// ----------------------------------------

te["campaigns"] = { c:
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

