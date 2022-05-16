
// --------------------------------------------

te["voiceprompt_type_r"] = { c:
[
	{ ac:["ay","%8","_sel","xx tt b05 cb",""], c:
	[
		{ s:["c","%1"] },
		{ div:["e"], c:[ { arg:["type","","%0"] }, { arg:["type_txt","","%1"] } ] }
	]}
]};

// --------------------------------------------

te["voiceprompt_ed_api"] = { c:
[
	{ s:["c w08 x y07 cb","API Name"] },
	{ p:["c w35","o"], txt:["w30 gw ba","w30 x y07","","api","%16"] },  // todo: configured API drop down
	{ div:["e"] },
]};

te["voiceprompt_ed_extension"] = { c:
[
	{ s:["c w08 x y07 cb","Extension"] },
	{ p:["c","o"], txt:["w10 gw ba","w10 x y07","","exten","%13"] }, 
	{ div:["e"] }
]};

te["voiceprompt_ed_record"] = { c:
[
	{ s:["c w08 x y07 cb","Max. Length"] },
	{ p:["c","o"], txt:["w10 gw ba","w10 x y07","","recmaxlen","%15"] }, 
	{ s:["c w15 x y07","(in seconds)"] },
	{ div:["e"] }
]};

te["voiceprompt_ed_dtmf"] = { c:
[
	{ s:["c w08 x y07 cb","Max. Digits"] },
	{ p:["c","o"], txt:["w10 gw ba","w10 x y07","","dtmfmaxlen","%14"] }, 
	{ div:["e"] }
]};

te["voiceprompt_ed_r_"] = { div:["","ve"], c:
[
	{ div:[""], c:[ { p:["c w40","nb"], u:["nb","voiceprompt_nb"] }, { div:["e"] } ] },

	{ p:["t15","o"], c:
	[ 
		{ s:["c w08 x y07 cd","Name"] }, 
		{ txt:["c w38 gw ba","w38 x y07","","name","%7"] }, 
		{ div:["e"] } 
	]},

	{ div:["t15"], c:
	[
		{ s:["c w08 x y07 cd","Voice Files"] },
		{ div:["c w44","voicefiles"], c:
		[
			{ p:["t01","a"], u:[null,null] },
			{ ac:["w12 ay y02","vfile_new","_file_dialog","x y cbr","+ Add .wav File"] }
		]},
		{ div:["e"] }
	]},

	{ div:["t15"], c:
	[
		{ s:["c w08 x y07 cd","Type"] }, 
		{ div:["c w30"], c:
		[
			{ div:["w20 ba gw","va"], s:["",""], c:
			[
				{ txa:["c w17","w17 x y07","","type_txt","::voiceprompt_type:8:1","_dd","","_ro"] }, 
				{ div:["d w03"], ac:["aa","","_dd","x y",""],  c:[ { div:["h02 w02 awb"] } ] },
				{ p:["e","o"], arg:["","type","%8"] }
			]},			
			{ div:["dd w20 mtn1 ba gw cb","vdd"], ev:["_undd"], c:
			[
				{ uchk:["voiceprompt_type_r","","voiceprompt_type"] }
			]}
		]},
		{ div:["e"] }
	]},

	{ p:["t15","type"], u:["::voiceprompt_type:8:7"] },
	
	{ div:["t35"], c:
	[
		{ div:["c w06 r02"], c:[ { ac:["ad btn",null,"_postj","x y w05 gbl bd ba_br cw tc","Save"] }, { s:["y07 bd b savl","..."] } ] },
		{ div:["c l20","va"], ac:["ay",null,null,"x y w05 ba_bl bd tc cbr","Cancel"], c:[ { p:["g","o"], arg:["",".id","%0"] } ] },
		{ div:["e"] }
	]}
]};

te["voiceprompt_ed_r"] = { voiceprompt_ed_r_:["voicefile_ed","voicefiles",  	"voiceprompt_ed-voiceprompts","voiceprompt_vw_id-voiceprompts-vp","_u"] };

te["voiceprompt_new_r"] = { voiceprompt_ed_r_:["noop","noop",   		"voiceprompt_new-voiceprompts","","_vpclose"] };

te["voiceprompt_ed"] = { vped:["w58 ma bd sh__ gw","Edit Voice Prompt","voiceprompt_ed_r"] };

te["voiceprompt_new"] = { vped:["w58 ma bd sh__","New Voice Prompt","voiceprompt_new_r"] };

// --------------------------------------------

te["voiceprompt_vw_api"] = { div:["t15"], c:
[ 
	{ s:["c w10 x y cb","API"] }, 
	{ s:["c w30 x y07 cb","%16"] }, 
	{ div:["e"] }
]};

te["voiceprompt_vw_extension"] = { div:["t15"], c:
[ 
	{ s:["c w10 x y cb","Extension"] }, 
	{ s:["c w30 x y07 cb","%13"] }, 
	{ div:["e"] }
]};

te["voiceprompt_vw_record"] = { div:["t15"], c:
[ 
	{ s:["c w10 x y cb","Max Length"] }, 
	{ s:["c x y07 cb","%15"] }, 
	{ s:["c x y07","seconds"] },
	{ div:["e"] }
]};

te["voiceprompt_vw_dtmf"] = { div:["t15"], c:
[ 
	{ s:["c w10 x y cb ","Max Digits"] }, 
	{ s:["c x y07 cb","%14"] }, 
	{ div:["e"] }
]};

te["voiceprompt_vw_r"] = { div:["ll"], c:
[
	{ div:[], c:
	[ 
		{ div:["d w04 x"], ac:["abs y08 ad","voiceprompt_ed-voiceprompts","_vp","w04 y ba tc","Edit"], c:[ { arg:["",".id","%0"] } ] },
		{ div:["e"] }
	]},

	{ div:["t"], c:[ { u:["nb","voiceprompts_nb"] }, { div:["e"] } ] },
	{ div:["t"], c:
	[ 
		{ s:["c w10 x y ","Name"] }, 
		{ s:["w30 x y cb","%7"] }, 
		{ div:["e"] }
	]},
	{ div:["t15","voiceprompts"], c:
	[
		{ s:["c w10 x t07 b05 ","Voice Files"] },
		{ p:["c w40 t01","a"], u:["voicefile_vw_r","voicefiles"] },
		{ div:["e"] }
	]},
	{ div:["t15"], c:
	[ 
		{ s:["c w10 x y","Type"] }, 
		{ s:["w30 x y","::voiceprompt_type:8:1"] },
		{ div:["e"] }
	]},
	{ div:[""], u:["::voiceprompt_type:8:6"] },
]};

te["voiceprompt_vw_id"] = { vpvw:["w60 ma bd sh__ x15 t b30 gw",  "Voice Prompt","noop",          "noop","voiceprompt_vw_r"] };

// ------------------------------------------

te["voiceprompt_tag_vw"] = { div:["w30 gws"], c:
[
	{ s:["c x y cb","%7"] },
	{ s:["d x y cd","::voiceprompt_type:8:1"] }, 
	{ div:["e"] }
]};

te["voiceprompt_tag_txa"] = { c:
[
	{ div:["c w01_ x t07 b05"],  c:[ { img:["","","/voiceapps/images/search.png","16"] } ] },
	{ p:["c w25","txa"], c:[ { input:["w26 xx y07","name_","","","text"], ev:["","_ky","","_uky"] } ] },
	{ arg:["","voiceprompt_id",""] } // placeholder for upd
]};

te["voiceprompt_tag"] = { div:["c","va"], s:["w29 ga bd cb mb mr",""], c:
[
	{ ac:["d w02_","voiceprompt_tag_txa","_usel_tag","x y04 tc cb","&Cross;"] },
	{ s:["c x y cb","%7"] },
	{ s:["d x y cd","::voiceprompt_type:8:1"] }, 
	{ div:["e"], arg:["o","voiceprompt_id","%0"] }
]};

// ------------------------------------------

te["voiceprompt_ls_footer"] = { div:[], c:
[
	{ div:["d x y"], pg:["pgto","voiceprompt_ls-voiceprompts"," dh","da dl","voiceprompt_ls-voiceprompts"," dh","da dr"] },
	{ div:["e"] }
]};

te["voiceprompt_ls_r"] = { ac:["ay","","_sel_tag","x08 h01_ y08",""], c:
[ 
	{ s:["c cb","%7"] },
	{ s:["d r05 cd","::voiceprompt_type:8:1"] },
	{ div:["e"], c:[ { arg:["id-0","","%0"] }, { arg:["name-7","","%7"] }, { arg:["type-8","","%8"] } ] }
]};

// todo _k to capture filter

te["voiceprompt_ls"] = { list:["end","end","h30","noop","voiceprompt_ls_r","voiceprompts", "voiceprompt_ls_footer"] };


// --------------------------------------------

te["voiceprompt_lc_menu"] = { div:["c lcfmenu"], c:
[
	{ ac:["c w02_ aa","voiceprompt_new-voiceprompt_","_vp","b h2 y03 tc cb","&plus;"] },
	{ ac:["c w02_ aa","","","b h2 y03 tc cb","&equiv;"] },
]};

te["voiceprompt_lc_r"] = { div:[], c:
[
	{ input:["g","","voiceprompt_id","","checkbox"] },
	{ li:["c w01_ x y07 r"],  ev:["_chk_tag"], s:["chk",""], c:
	[
		{ arg:["id-0","","%0"] }, { arg:["name-7","","%7"] }, { arg:["type-8","","%8"] }
	]},
	{ input:["g","","vpf","","radio"] },
	{ li:["c w25 l r","voiceprompt_vw_id-voiceprompts-"], ev:["_vp"], s:["",""], c:
	[
		{ div:["c w15"], s:[" t08 h03","%7"] },
		{ div:["d w10"], s:["x t08 h03 cd tr","::voiceprompt_type:8:1"] },
		{ div:["e"], arg:["",".id","%0"] }
	]},
	{ div:["e"] }
]};

te["voiceprompt_lc_pg"] = { pg:["pgto","voiceprompt_lc-voiceprompts"," dh","da dl","voiceprompt_lc-voiceprompts"," dh","da dr"] };

te["voiceprompt_lc"] = { lst:["noop","noop","noop","noop","noop",  "h40 x07 y","voiceprompt_lc_r","voiceprompts", "x07 y07","voiceprompt_lc_menu","d","voiceprompt_lc_pg"] };

// ------------------------------------

te["voiceprompt_f_tags"] = { c: 
[
	{ f:["Name",":k:voiceprompts_f:name",			" %0"," name"] },
	{ f:["Type",":k:voiceprompts_f:type",			" %0"," type"] },
	{ f:["Duration",":k:voiceprompts_f:voicefile_duration",	" %0"," voicefile_duration"] },
	{ f:["Created On",":k:voiceprompts_f:created_on",	" :d:dmy:0: "," created_on"] },
	{ div:["e"] }
]};

te["voiceprompt_f"] = { div:["w70 ma bd sh__ xx yy gw"], c: // "vddvw"], ev:["_undd"
[
	{ s:["x12 yy b bb","Filters"] },
	{ div:["x tt b20"], c:
	[
		{ div:["xx yy"], kf_s:["Name","name",":k:voiceprompts_f:name"] },
		{ div:["xx yy"], kf_s:["Type","type",":k:voiceprompts_f:type"] },
		{ div:["xx yy"], kf_s:["Duration","voicefile_duration",":k:voiceprompts_f:voicefile_duration"] },
		{ div:["xx yy"], kf_d:["Created On"," :d:dmy:0: ","created_on",":k:voiceprompts_f:created_on","created_on",":k:voiceprompts_f:created_on"] },
	]},
	{ div:["x15 yy"], c:
	[
		{ div:["c w06 r02"], c:[ { ac:["ad btn","voiceprompt_f_tags-usergroups_f","_applyf","x y w05 gbl bd ba_br cw tc","Apply"] }, { s:["y07 bd b savl","..."] } ] },
		{ div:["c l20","va"], ac:["ay","","_vpcancel","x y w05 ba_bl bd tc cbr","Cancel"], c:[ { p:["g","o"], arg:["",".id",""] } ] },
		{ div:["e"] }
	]}
]};

// ---------------------------------------------

te["voiceprompt_r_branch"] = { c:
[
	{ ac:["c ad r05 content-hidden_","voicemap_rr-voiceprompts","_g","x y03 n ga cb ba_","&plus;"], c:[ { arg:[".id","","%0"] } ] },
	{ ac:["c ad r05 content-shown_","voicemap_rr-voiceprompts","_g","x y03 n ga cb ba_","&minus;"], c:[ { arg:[".id","","%0"] } ] },
]};

te["voiceprompt_r"] = { c:
[
	{ div:["t","vg"], s:["content-hidden",""], c:
	[
		// { s:["c w02 tt bb"," "] },
		{ u:["voiceprompt_r_branch"] }, // { u:["::voiceprompt_type:8:3"] },
		{ input:["g","","voiceprompts","%0","radio"] },
		{ div:["c r","va"], ac:["aa","voiceprompt_vw_id-voiceprompts","_vp","cb",""], c:
		[
			{ div:["c x t07 b03 "], s:["b","::voiceprompt_type:8:1"] },  
			{ div:["c w32 x t07 b03 h01_"], s:["","%7"] },
			{ arg:["",".id","%0"] } ,
			{ div:["e"] }
		]},
		{ div:["c x15 h01"], u:["nb","voiceprompts_nb"] },
		{ div:["e"] }
	]},
	{ div:["ml1 mb4 tt b15 bl g "] }
]};

te["voiceprompt_pg"] = { pg:["pgto","voiceprompt_list-voiceprompts"," dh","da dl","voiceprompt_list-voiceprompts"," dh","da dr"] };

te["voiceprompt_list"] = { c:
[
	{ div:[""], c:
	[
		{ div:["x y","va"], c:
		[
			{ div:["c","va"], ac:["","voiceprompt_list-voiceprompts-vt","_u","x y cb b n","IVR Prompts"] },
			// { u:["voiceprompt_h","voiceprompts"] },
			{ div:["e"] }
		]},
		{ p:["","vc"], c:[  { arg:["","_c","%1"] }, { div:["e"] } ] } // header
	]},
	{ div:["x"], c:
	[
		{ div:["xx yy mb1"], u:["voiceprompt_r","voiceprompts"] },
		{ div:["bt_",], c:
		[
			{ div:["c x y08","va"], c:
			[	
				{ ac:["c aa","voiceprompt_new-voiceprompt_","_vp","xx y gwd cb","&plus; New Voice Prompt"] }, 
				{ div:["e"] }
			]},
			{ div:["d y08"], u:["voiceprompt_pg"] },
			{ div:["e"] }
		]}
	]} 
]};

// ------------------------------------------

te["exit_tag_txa"] = { c:
[
	{ div:["c w01_ x t07 b05"],  c:[ { img:["","","/voiceapps/images/search.png","16"] } ] },
	{ p:["c w25","txa"], c:[ { input:["w26 xx y07","name_","","","text"], ev:["","_ky","","_uky"] } ] },
	{ arg:["","exit_id",""] } // placeholder for upd
]};

te["exit_tag"] = { div:["c l y03","va"], s:["w29 l ga bd cb",""], c:
[
	{ s:["c x y cb b","::voiceprompt_type:8:1"] }, 
	{ ac:["d w02_","exit_tag_txa","_usel_tag","x y04 tc n cb","&Cross;"] },
	{ s:["x y cb","%7"] },
	{ div:["e"], arg:["o","exit_id","%0"] }
]};

// -------------------------------------------------

te["dst_vw_menu"] = { ac:["","","","w04 x y tc","Edit"], c:[ { arg:["",".id","%0"] } ] };

te["dst_vw_id"] = { vpvw:["w60 ma bd sh__ gw","Voice Prompt (Sub)","dst_vw_menu","voiceprompt_vw_r","dst"] };

te["dst_ed_r"] = { voiceprompt_ed_r_:["noop","noop",   "dst_new-dst","","_vpcancel"] };

te["dst_new_r"] = { voiceprompt_ed_r_:["noop","noop",   "dst_new-dst","","_vpcancel"] };

te["dst_ed"] = { vped:["w58 ma bd sh__","New Voice Prompt Sub","dst_ed_r"] };

te["dst_new"] = { vped:["w58 ma bd sh__","New Voice Prompt Sub","dst_new_r"] };

te["dst_tag_txa"] = { c:
[
	{ div:["c w01_ x y"],  c:[ { img:["","","/voiceapps/images/search.png","16"] } ] },
	{ p:["c w25 b02","txa"], c:[ { input:["w26 x y04","name_","","","text"], ev:["","_ky","","_uky"] } ] },
	{ arg:["o","dst_id","0"] },
	{ ac:["d aa x b02","dst_new-voiceprompt_-#","_vp","x y04 n cb b","&plus;"] },
	{ div:["","dst_tag-dst-o"] }
]};

te["dst_tag_"] = { div:["c r02 b02","va"], s:["w29 l ga bd cb",""], c:
[
	{ s:["c x y04 cb b",null] }, 
	{ ac:["d w02_","dst_tag_txa","_usel_tag","x y04 tc n cb","&Cross;"] },
	{ s:["c x y04 cb",null] },
	{ div:["e"], arg:["o","dst_id",null] },
]};

te["dst_tag_ed"] = { dst_tag_:["::voiceprompt_type:10:1","%9","%8"] };

te["dst_tag"] = { dst_tag_:["::voiceprompt_type:8:1","%7","%0"] };


te["dst_dd_"] = { div:[null,"dst_tag-voiceprompt_--o"], c:
[
	{ li:["w34 cb","va"], c:[ { div:["","voiceprompt_ls-voiceprompts"], ev:["_dd"], c:
	[
		{ p:["l t02","o"], u:[null] },
	]} ]},			
	{ div:["dd mtn1 ba gw","vdd"], ev:["_undd"], c:
	[

	]}
]};

