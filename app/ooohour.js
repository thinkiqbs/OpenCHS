
te["ooohour_priority_r"] = { div:[], ac:["ay","","_sel","xx tt b05 cb",""], c:
[
	{ s:["c","%1"] },
	{ div:["e"], c:[ { arg:["priority","","%0"] }, { arg:["priority_txt","","%1"] } ] }
]};

// --------------------

te["ooohour_ed_r"] = { div:["","ve"], s:["gws bt_",""], c:
[
	{ div:["c"], c:
	[
		{ li:["w09_","va"], c:[ { div:["",""], ev:["_dd"], c:
		[
			{ txa:["c w09_","w09_ x y","","priority_txt","::ooohour_priority:14:1","_dd","","_ro"] }, 			
			{ div:["c h02 y"] },
			{ p:["e","o"], arg:["","priority","%14"] }
		]} ]},			
		{ div:["dd w10 y ba gw cb","vdd"], ev:["_undd"], c:
		[
			{ uchk:["ooohour_priority_r","","ooohour_priority"] }
		]}
	]},
	{ div:["c"], c:
	[
		{ div:["","calw"], c:
		[
			{ li:["w23 ay cb","va"], c:[ { div:[""], ev:["_dd"], c:
			[					
				{ p:["c w23","o"], c:[ { p:["t04 h03","calv"], ucalv:[" :d:dmy:0: ","daterange","%5"] } ] }, 
				//{ div:["d w02 x t content-hidden_"],  c:[ { div:["h01_ w02 awb"] } ] },
				//{ div:["d w02 x t content-shown_"],  c:[ { div:["h01_ w02 awt"] } ] },
				{ div:["e"] }
			]} ]},
			{ div:["dd w40_ xx b10 ba mtn1 gw","vdd"], ev:["_undd"], c:
			[ 
				{ div:[], c:
				[
					{ ucal:["daterange","","noop","2","Start Date", "End Date"] },
					{ div:["e"] },
					{ div:["c x"], aci:["ay","_vcal0","_cal_vw","x y tc ba_w cbl","l0","Day"] },
					{ div:["c x"], aci:["ay","_vcal1","_cal_vw","x y tc ba_w cbl","l1","Range"] },						
					{ div:["e"] }
				]}
			]}
		]}
	]},
	{ div:["c","dayofweek_tag-o"], c:
	[
		{ li:["w20","va"], c:[ { div:["",""], ev:["_dd"], c:
		[
			{ p:["c l t","o"], uchk:["dayofweek_tag","%6"] }, 
			{ div:["c h02 y"] },
			{ div:["e"] }
		]} ]},			
		{ div:["dd w17 y ba gw cb","vdd"], ev:["_undd"], c:
		[
			{ uchk:["dayofweek_lc_r","%6","dayofweek"] }
		]}
	]},
	{ div:["c"], c:
	[
		{ li:["w07","va"], c:[ { div:[], ev:["_dd"], c:
		[
			{ p:["","o"], c:[ { p:["t04","timev"], tag_time:[":p::7:","start_ts","%7"] } ] }, 
		]} ]},			
		{ div:["dd w30 l y ba  gw cb","vdd"], ev:["_undd"], c:
		[
			{ utime:["start_ts","%7"] }
		]}
	]},
	{ div:["c"], c:
	[
		{ li:["w07","va"], c:[ { div:[], ev:["_dd"], c:
		[
			{ p:["","o"], c:[ { p:["t04","timev"], tag_time:[":p::8:","end_ts","%8"] } ] }, 
		]} ]},	
		{ div:["dd w30 l y ba  gw cb","vdd"], ev:["_undd"], c:
		[
			{ utime:["end_ts","%8"] }
		]}
	]},
	{ div:["c","voiceprompt_tag-voiceprompt_--o"], c:
	[
		{ li:["w30 gws","va"], c:[ { div:["","voiceprompt_ls-voiceprompts"], ev:["_dd"], c:
		[
			{ p:["c w30 l t","o"], c:[ { u:["voiceprompt_tag_txa","voiceprompt_"] }, { u:["voiceprompt_tag","voiceprompts","","o"] } ] },
			// { div:["d w02 x y"],  c:[ { div:["h02 w02 awb"] } ] },
			{ div:["e"] }
		]} ]},			
		{ div:["dd mtn1 w34 ba gw","vdd"], ev:["_undd"], c:
		[
		]}
	]},
	{ ac:["d aa x y",null,null,"x y03 n cb tc",null], c:[ {} ] },
	{ ac:["d aa x y",null,"_postj","xx y03 cb gwd tc","Save"] },
	{ p:["d t02","nb"] },
	{ p:["e","o"], c:[ { arg:["","campaign_id","%10"] }, { arg:["",".id","%0"] } ] }
]};

te["ooohour_del"] = { };

te["ooohour_ed"] = { ooohour_ed_r:["","","&Cross;","ooohour_ed-ooohours"] };

te["ooohour_new"] = { div:["","va"], ooohour_ed_r:["","_rm","&Cross;","ooohour_new-ooohours"] };

// ------------------------------------------------------

te["ooohour_vw_r"] = { ac:["ay","ooohour_ed-ooohours","_u","y02 bt_ cb",""], c:
[
	{ s:["c w08 x y","::workinghour_priority:15:1"] },
	{ s:["c w22 x y",":d:dmy:5: "] },
	{ div:["c w19 x t01"], uchk:["dayofweek_tagv","%6"] },
	{ s:["c w06 x y",":p::7:"] },
	{ s:["c w06 x y ",":p::8:"] },
	{ div:["c w29 x y  h01_"], c:[ { s:["c","%13"] }, { s:["d cd r05","::voiceprompt_type:14:1"] }, { div:["e"] } ] },
	{ p:["d t","nb"], u:["nb","ooohours_nb"] },
	{ div:["e"], arg:["",".id","%0"] }
]};

// -----------------------------------------------------

te["ooohour_lst_footer"] = { div:["y07"], c:
[	
	{ div:["c"], ac:["aa","ooohour_new-workinghour_-vt-ooonew","_nd","x07 y03 gwd cb","&plus; Add"], c:[ { arg:["campaign_id-10","",":k:ooohours_k:campaign_id:2"] } ] }, 
	{ div:["d"], pg:["pgto","ooohour_lst-ooohours"," dh","da dl","ooohour_lst-ooohours"," dh","da dr"] },
	{ div:["e"] }
]};

te["ooohour_lst_r"] = { div:["","va"], ooohour_vw_r:[] };

te["ooohour_lst_rr"] = { c:
[
	{ u:["ooohour_lst_r","ooohours"] },
	{ p:["","ooonew"] }
]}

te["ooohour_lst_k"] = { c: 
[
	{ k_a:["c w09_","","cd","Priority","da db",	"priority",":k:ooohours_k:priority:2"] },
	{ k_a:["c w23","","cd","Date Range","da db",	"daterange",":k:ooohours_k:id:2"] },
	{ k_a:["c w20","","cd","Day of Week","da db",	"dayofweek",":k:ooohours_k:id:2"] },
	{ k_a:["c w07","","cd","Start","da db",		"start",":k:ooohours_k:id:2"] },
	{ k_a:["c w07","","cd","End","da db",		"end",":k:ooohours_k:id:2"] },
	{ k_a:["c w30","","cd","IVR Prompt","da db",		"daterange",":k:workinghours_k:id:2"] },
	{ arg:["","campaign_id",":k:ooohours_k:campaign_id:2"] }
]};

te["ooohour_lst_nb"] = { div:[], c:[ { u:["nb","ooohours_nb"] }, { div:["e"] } ] };

te["ooohour_lst_title"] = { div:["y","va"], c:
[
	{ div:["c","va"], ac:["","","","x y cb b","Out of Office Messages"] }, 
	//{ div:["c l20 aa"], ac:["","call_f-calls_f","_vpf","x y cb b h3",""], c:[ { img:["","","/voiceapps/images/filter.png", "14"] } ] }, 
	{ div:["e"] }
]};

te["ooohour_lst"] = { list:["ooohour_lst_title","ooohour_lst_nb","ba ov","ooohour_lst_k","ooohour_lst_rr","ooohours_ctx", "ooohour_lst_footer"] };

