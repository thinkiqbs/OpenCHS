
te["voicemap_del"] = { c:
[
	{ s:["c w02 tt bb"," "] },
	{ s:["c x y cr","Deleted"] },
	{ div:["e"] }
]}

te["voicemap_ed_r_cancel"] = { div:["c ll t02","v"], ac:["","voicemap_vw_r-voicemaps-va","_v","x y04 bd gwd tc cb","Cancel"], c:[ { arg:[".id","","%0"] } ] };

te["voicemap_ed_r"] = { div:["","ve"], s:["y",""], c:
[
	{ s:["c w02 tt bb"," "] },
	{ p:["c w10 gw ba","o"], c:[ { input:["w10 x y gw","","k","%7","text","","DTMF"] } ] },
	{ dst_dd_:["c ba mln1 gw",null] },
	{ div:["c l20 t02"], c:[ { ac:["ad btn",null,"_postj","xx y03 gbl bd ba_br cw tc","Save"] }, { s:["y07 bd b savl","..."] } ] },
	{ u:[null] }, // cancel
	{ div:["c xx t02"], ac:["aa","voicemap_del-voiceumaps",null,"x y03 tc n cb","&Cross;"], c:
	[ 
		{ p:["g","o"], c:[ { arg:[".id","","%0"] }, { arg:["voiceprompt_id","","0"] } ] } 
	]},
	{ p:["c t01 x15","nb"] },
	{ p:["e","o"], c:[ { arg:["",".id","%0"] }, { arg:["","voiceprompt_id","%11"] } ] }
]};

te["voicemap_ed"] = { voicemap_ed_r:["dst_tag_ed","voicemap_ed-voicemaps","voicemap_ed_r_cancel","_postji"] };

te["voicemap_new"] = { div:["","va"], voicemap_ed_r:["dst_tag_txa","voicemap_new-voicemaps","noop","_rm"] };

te["voicemap_r_branch"] = { c:
[
	{ ac:["c ad r05 content-hidden_","voicemap_rr-voiceprompts","_g","x y03 n ga cb ba_","&plus;"], c:[ { arg:[".id","","%8"] } ] },
	{ ac:["c ad r05 content-shown_","voicemap_rr-voiceprompts","_g","x y03 n ga cb ba_","&minus;"], c:[ { arg:[".id","","%8"] } ] },
]};

te["voicemap_vw_r"] = { c:
[
	{ div:["t","vg"], s:["content-hidden",""], c:
	[
		{ s:["c w02 tt bb"," "] },
		{ u:["::voiceprompt_type:10:5"] }, //  { u:["voicemap_r_branch"] }, 
		{ div:["c","v"], ac:["aa","voicemap_ed-voicemaps-va","_u","xx t07 b03 h01_ ga cb","%7"], c:[ { arg:["",".id","%0"] } ] },
		{ input:["g","","voiceprompts","%0","radio"] },
		{ ac:["c ay l02","voiceprompt_vw_id-voiceprompts","_vp","cb",""], c:
		[
			{ div:["c x t07 b03"], s:["cd","::voiceprompt_type:10:1"] },  
			{ div:["c w32 x t07 b03 h01_"], s:["","%9"] },
			{ arg:["",".id","%8"] } ,
			{ div:["e"] }
		]},
		{ div:["c x15 h01"], u:["nb","voiceprompts_nb"] },
		{ div:["e"] }
	]},
	{ div:["ml3 mb4 tt b15 bl g"] }
]};

te["voicemap_r"] = { div:["","va"], voicemap_vw_r:[] };

te["voicemap_rr_btn"] = { div:["abs t","va"], c:
[
	{ s:["c w02 tt bb"," "] },
	{ ac:["c aa","voicemap_new-voicemap_","_ndr","xx y gwd cb","&plus; Add"] },
	{ div:["g"], c:[ { arg:["voiceprompt_id-11","",":k:voicemaps_k:voiceprompt_id:2"] } ] },
	{ div:["e"] }
]};

te["voiceap_rr_btn_"] = { u:["::voiceprompt_type:8:4"] };

te["voicemap_rr"] = { c:
[
	{ u:["voicemap_r","voicemaps"] }, // data
	{ div:[] }, // new items
	{ u:["voiceap_rr_btn_","voiceprompts"] }
]};

