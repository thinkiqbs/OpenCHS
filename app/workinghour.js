
te["dayofweek_tagv"] = { s:["c x y","::dayofweek:0:1"] };

te["dayofweek_tag"] = { div:["c b05 r05","va"], c:[ { div:["ga bd"], c:
[
	{ s:["c x07 y","::dayofweek:0:1"] },
	{ arg:["","",""] },
	{ input:["g","o","dayofweek","%0","checkbox","1"] },
	{ ac:["c aa","","_uchk","x y bdr","&Cross;"] },
	{ div:["e"] } 
]} ]}; 

te["dayofweek_lc_r"] = { div:["x"], c:
[
	{ div:[], c:[ { arg:["","","%1"] }, { arg:["","","%2"] } ] },
	{ input:["g","dayofweek","","%0","checkbox","%9"] },
	{ ac:["r ay","","_chk","h02 x y cb",""], c:
	[ 
		{ div:["c w01_ t"], s:["chk",""] },
		{ div:["c"], s:["x t h02","%2"] },
		{ div:["e"] }
	]}
]};

// ---------------------

te["workinghour_priority_r"] = { div:[], ac:["ay","","_sel","xx tt b05 cb",""], c:
[
	{ s:["c","%1"] },
	{ div:["e"], c:[ { arg:["priority","","%0"] }, { arg:["priority_txt","","%1"] } ] }
]};

// --------------------

te["workinghour_ed_r"] = { div:["","ve"], s:["gws bt_",""], c:
[
	{ div:["c"], c:
	[
		{ li:["","va"], c:[ { div:["",""], ev:["_dd"], c:
		[
			{ txa:["c w14","w14 x y08","","priority_txt","::workinghour_priority:15:1","_dd","","_ro"] }, 			
			{ div:["c h02 t"] },
			{ p:["e","o"], arg:["","priority","%15"] }
		]} ]},			
		{ div:["dd w14 y ba gw cb","vdd"], ev:["_undd"], c:
		[
			{ uchk:["workinghour_priority_r","","workinghour_priority_outbound"] }
		]}
	]},
	{ div:["c"], c:
	[
		{ div:["","calw"], c:
		[
			{ li:["w23 ay cb","va"], c:[ { div:[""], ev:["_dd"], c:
			[					
				{ p:["c w23","o"], c:[ { p:["t04 h03","calv"], ucalv:[" :d:dmy:0: ","daterange","%5"] } ] }, 
				// { s:["x y",":d:dmy:5: "] },
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
	{ ac:["d aa x y",null,null,"x y03 cb n tc","&Cross;"], c:[ {} ] },
	{ ac:["d aa x y",null,"_postj","xx y03 cb gwd tc","Save"] },
	{ p:["d t02","nb"] },
	{ p:["e","o"], c:[ { arg:["","campaign_id","%10"] }, { arg:["",".id","%0"] } ] }
]};

te["workinghour_del"] = { };

te["workinghour_ed"] = { workinghour_ed_r:["","_rm","workinghour_ed-workinghours"] };

te["workinghour_new"] = { div:["","va"], workinghour_ed_r:["","_rm","workinghour_new-workinghours"] };

// ------------------------------------------------------

te["workinghour_vw_r"] = { ac:["ay","workinghour_ed-workinghours","_u","y02 bt_ cb",""], c:
[
	{ s:["c w13 x y","::workinghour_priority:15:1"] },
	{ s:["c w22 x y",":d:dmy:5: "] },
	{ div:["c w19 x t01"], uchk:["dayofweek_tagv","%6"] },
	{ s:["c w06 x y",":p::7:"] },
	{ s:["c w06 x y",":p::8:"] },
	{ p:["d t02","nb"], u:["nb","workinghours_nb"] },
	{ div:["e"], arg:["",".id","%0"] }
]};

// -----------------------------------------------------

te["workinghour_lst_footer"] = { div:["y07"], c:
[	
	{ div:["c"], ac:["aa","workinghour_new-workinghour_-vt-whnew","_nd","x07 y03 gwd cb","&plus; Add"], c:[ { arg:["campaign_id-10","",":k:workinghours_k:campaign_id:2"] } ] }, 
	{ div:["d"], pg:["pgto","workinghour_lst-workinghours"," dh","da dl","workinghour_lst-workinghours"," dh","da dr"] },
	{ div:["e"] }
]};

te["workinghour_lst_r"] = { div:["","va"], workinghour_vw_r:[] };

te["workinghour_lst_rr"] = { c:
[
	{ u:["workinghour_lst_r","workinghours"] },
	{ p:["","whnew"] }
]}

te["workinghour_lst_k"] = {  c: 
[
	{ k_a:["c w14","","cd","Priority","da db",	"priority",":k:workinghours_k:priority:2"] },
	{ k_a:["c w23","","cd","Date Range","da db",	"daterange",":k:workinghours_k:id:2"] },
	{ k_a:["c w20","","cd","Day of Week","da db",	"dayofweek",":k:workinghours_k:id:2"] },
	{ k_a:["c w07","","cd","Start","da db",		"start",":k:workinghours_k:id:2"] },
	{ k_a:["c w07","","cd","End","da db",		"end",":k:workinghours_k:id:2"] },
	//{ k_a:["d w16","","cd","Created On","da db",	"created_on",":k:workinghours_k:created_on:2"] },
	{ arg:["","campaign_id",":k:workinghours_k:campaign_id:2"] }
]};

te["workinghour_lst_nb"] = { div:[], c:[ { u:["nb","workinghours_nb"] }, { div:["e"] } ] };

te["workinghour_lst_title"] = { div:["y","va"], c:
[
	{ div:["c","va"], ac:["","","","x y b cb","Working Hours"] }, 
	//{ div:["c l20 aa"], ac:["","call_f-calls_f","_vpf","x y cb b h3",""], c:[ { img:["","","/voiceapps/images/filter.png", "14"] } ] }, 
	{ div:["e"] }
]};

te["workinghour_lst"] = { list:["workinghour_lst_title","workinghour_lst_nb","ba ov","workinghour_lst_k","workinghour_lst_rr","workinghours_ctx", "workinghour_lst_footer"] };

