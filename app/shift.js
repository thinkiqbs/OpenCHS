
rk["shift_metrics"] = ["count","percent","talktime"];
re["shift_metrics"] = 
{
"count":	["count",	"chan_usr,status,attempts","","count",	"Count","0","lead_rpt_count","lead_rpt-leads-@:1:@"],
"percent":	["percent",	"chan_usr,status,attempts","","percent",	"Percent","1","lead_rpt_percent","lead_rpt-leads-@:1:@"],
"talktime":	["talktime", 	"chan_usr,status,attempts","","talktime",	"Talk-Time","2","lead_rpt_talktime","lead_rpt-leads-@:1:@"],
};

re["shift_k"] = 
{
	"campaign_name":["campaign_name","Campaign"],
	"category":["category","Category"],
	"chan_usr":["chan_usr","Agent"],
	"status":["status","Status"],
	"attempts":["attempts","Attempts"],
	// category
};

te["shift_k_tag"] = { "rpt_axis_tag":["::lead_k:0:1","xaxis"] };

te["shift_k_r"] = { "rpt_axis_r":["xaxis","lead_k_tag","::lead_k:0:1"] };

te["shift_rpt_h"] = { rpt:["%3","::lead_metrics:3:4","lead_k_r","%1","lead_k","lead_k_tag","%1", "%2", "lead_rpt"] };

te["shift_rpt"] = { c:[ { lead_rpt_h:[] }, { div:["","rpt_vw_bar_stacked-leads"], rpt_vw_bar_stacked:[] } ] };

te["shift_rpt_talktime"] = { c:[ { u:["lead_rpt_h","lead_metrics","talktime"] }, { div:["","rpt_vw_bar_stacked-leads"], urpt:[] } ] };
te["shift_rpt_percent"] = { c:[ { u:["lead_rpt_h","lead_metrics","percent"] }, { div:["","rpt_vw_bar_stacked-leads"], urpt:[] } ] };
te["shift_rpt_count"] = { c:[ { u:["lead_rpt_h","lead_metrics","count"] }, { div:["","rpt_vw_bar_stacked-leads"], urpt:[] } ] };

te["shift_rpt_metric_tab"] = { div:["c x","%7"], c:
[
	{ arg:["","","0"] },
	{ input:["g","","lead_metric","%5","radio","%9"] },
	{ li:["opth x y tc cb","%6","%4"], ev:["_tab"] } // _rpt_chk
]};

te["shift_rpt_main"] = { c:
[
	{ div:["bb s","vb"], c:
	[
		{ s:["c x y cd","Metric:"] },
		{ uchk:["lead_rpt_metric_tab","count","lead_metrics"] },
		// { ac:["d","","","x y","Save"] },
		{ div:["e"] }
	]},
	{ div:["","vrpt"], c:
	[
		{ div:[], c:[ { input:["g","","lead_rptv","0","radio","1"] }, { p:["tabv ","vt"], lead_rpt_count:[] } ]},
		{ div:[], c:[ { input:["g","","lead_rptv","1","radio"] }, { p:["tabv","vt"] } ] },
		{ div:[], c:[ { input:["g","","lead_rptv","2","radio"] }, { p:["tabv","vt"] } ] },
		{ div:[], c:[ { input:["g","","lead_rptv","3","radio"] }, { p:["tabv","vt"] } ] },
		{ div:[], c:[ { input:["g","","lead_rptv","4","radio"] }, { p:["tabv","vt"] } ] },
		{ div:[], c:[ { input:["g","","lead_rptv","5","radio"] }, { p:["tabv","vt"] } ] },
		{ div:[], c:[ { input:["g","","lead_rptv","6","radio"] }, { p:["tabv","vt"] } ] },
		{ div:[], c:[ { input:["g","","lead_rptv","7","radio"] }, { p:["tabv","vt"] } ] },
	]}
]};

// --------------------------------------------------------------------------------

te["shift_ed_r_"] = { div:["","ve"], c:
[
	{ div:[], c:[ { p:["c w40","nb"], u:["nb","shifts_nb"] }, { div:["e"] } ] },
	{ div:["tt"], c:
	[
		{ s:["c w15 x y","Users"] },
		{ div:["c","tag-a-user_id-%1"], c:
		[
			{ li:["w30 sh ba gw cb","va"], c:[ { div:["","user_lc-users"], ev:["_dd"], c:
			[
				{ div:["c w26 l t03","shift"], c:[ { p:["","a"], uchk:["tag","","","", "",""] } ] }, 
				{ div:["d w02 x y content-hidden_"],  c:[ { div:["h02 w02 awb"] } ] },
				{ div:["d w02 x y content-shown_"],  c:[ { div:["h02 w02 awt"] } ] },
				{ div:["e"] }
			]} ]},
			{ div:["dd w29 sh x mtn1 bb bl br gw","vdd"], ev:["_undd"], c:
			[ 
				
			]}
		]},
		{ div:["e"] }
	]},
	{ div:["tt"], c:
	[
		{ s:["c w15 x y","Date"] },
		{ div:["c","calw"], c:
		[
			{ li:["w30 ay cb ba gw","va"], c:[ { div:[""], ev:["_dd"], c:
			[					
				{ p:["c w30 ","o"], c:[ { p:["x y03 h03","calv"], ucalv:[" :d:dmy:5: ","daterange","%5"] } ] }, 
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
		]},
		{ div:["e"] }
	]},
	{ div:["tt"], c:
	[
		{ s:["c w15 x y","Day of Week"] },
		{ div:["c","dayofweek_tag-o"], c:
		[
			{ li:["w30 ba gw","va"], c:[ { div:["",""], ev:["_dd"], c:
			[
				{ p:["c","o"], u:[null,null] }, 
				{ div:["c h02 y"] },
				{ div:["e"] }
			]} ]},			
			{ div:["dd w30 y ba gw cb","vdd"], ev:["_undd"], c:
			[
				{ uchk:["dayofweek_lc_r","","dayofweek"] }
			]}
		]},
		{ div:["e"] }
	]},
	{ div:["tt"], c:
	[
		{ s:["c w15 x y","Time"] },
		{ div:["c"], c:
		[
			{ li:["w08 ba gw","va"], c:[ { div:["",""], ev:["_dd"], c:
			[
				{ p:["","o"], c:[ { p:["x t04","timev"], tag_time:[":p::7:","start_ts","%7"] } ] }, 
			]} ]},			
			{ div:["dd w30 l y ba  gw cb","vdd"], ev:["_undd"], c:
			[
				{ utime:["start_ts","%7"] }
			]}
		]},
		{ s:["c xx y08","to"] },
		{ div:["c"], c:
		[
			{ li:["w08 ba gw","va"], c:[ { div:["",""], ev:["_dd"], c:
			[
				{ p:["","o"], c:[ { p:["x t04","timev"], tag_time:[":p::8:","end_ts","%8"] } ] }, 
			]} ]},	
			{ div:["dd w30 l y ba  gw cb","vdd"], ev:["_undd"], c:
			[
				{ utime:["end_ts","%8"] }
			]}
		]},
		{ div:["e"] }
	]},
	{ div:["t35"], c:
	[
		{ div:["c w06 r02"], c:[ { ac:["aa btn",null,"_postj","x y04 w05 gbl bd cw tc","Save"] }, { s:["y07 bd b savl","..."] } ] },
		{ div:["c l20","va"], ac:["ay",null,null,"x y04 w05 gwd bd tc cb","Cancel"], c:[ { p:["g","o"], arg:["",".id","%0"] } ] },
		{ div:["e"] }
	]}
]};

te["shift_ed_r"] = { shift_ed_r_:["shift_ed-shifts","user_vw_id-users-vp","_u"] };

te["shift_new_r"] = { shift_ed_r_:["noop","noop","shift_new-shifts","","_vpclose"] };

te["shift_ed"] = { vped:["w70 ma bd sh__","Edit Shift","shift_ed_r"] };

te["shift_new"] = { vped:["w70 ma bd sh__","New Shift","shift_new_r"] };

// --------------------------------------------------------------------------------

te["shift_vw_id"] = { div:["w10 ma bd sh__ y gw"], c:
[
	{ s:["x y","Shifts added"] }
]};

// --------------------------------------------------------------------------------

te["shift_f_tags"] = { c: 
[
	{ f:["User",":k:shifts_f:user_id",		" %1"," user_id"] },
	{ f:["Date",":k:shifts_f:daterange",		" :d:dmy:0: "," daterange"] },
	{ f:["Day of Week",":k:shifts_f:dayofweek",	" ::dayofweek:0:1"," dayofweek"] },
	{ f:["Start Time",":k:shifts_f:start_ts",	" :p::0:"," start_ts"] },
	{ f:["End Time",":k:shifts_f:end_ts",		" :p::0:"," end_ts"] },
	{ div:["e"] }
]};

te["shift_f"] = { div:["w70 ma bd sh__ y gw"], c: // "vddvw"], ev:["_undd"
[
	{ s:["x20 yy b bb_","Filters"] },
	{ div:["x15 tt b20"], c:
	[
		{ div:["xx yy"], kf_l:["User", "tag-o-user_id-%1", "user_lc-users",":k:shifts_f:user_id", " %1", " user_id"] },
		{ div:["xx yy"], kf_d:["Date"," :d:dmy:0: ","daterange",":k:shifts_f:daterange","daterange",":k:shifts_f:daterange"] },
		{ div:["xx yy"], kf_c:["Day of Week","tag-o-dayofweek-::dayofweek:0:1", 	":k:shifts_f:dayofweek"," ::dayofweek:0:1"," dayofweek", 	":k:shifts_f:dayofweek", "dayofweek", " dayofweek"," ::dayofweek:0:1"," "] },
		{ div:["xx yy"], c:
		[
			{ s:["c w15 y","Time"] },
			{ div:["c"], c:
			[
				{ li:["w08 ba gw","va"], c:[ { div:["",""], ev:["_dd"], c:
				[
					{ p:["","o"], c:[ { p:["x t04","timev"], tag_time:[":k:shifts_f:start_ts:p","start_ts",":k:shifts_f:start_ts"] } ] }, 
				]} ]},			
				{ div:["dd w30 l y ba  gw cb","vdd"], ev:["_undd"], c:
				[
					{ utime:["start_ts",":k:shifts_f:start_ts"] }
				]}
			]},
			{ s:["c xx y08","to"] },
			{ div:["c"], c:
			[
				{ li:["w08 ba gw","va"], c:[ { div:["",""], ev:["_dd"], c:
				[
					{ p:["","o"], c:[ { p:["x t04","timev"], tag_time:[":k:shifts_f:end_ts:p","end_ts",":k:shifts_f:end_ts"] } ] }, 
				]} ]},	
				{ div:["dd w30 l y ba  gw cb","vdd"], ev:["_undd"], c:
				[
					{ utime:["end_ts",":k:shifts_f:end_ts"] }
				]}
			]},
			{ div:["e"] }
		]}
	]},
	{ div:["x20 yy"], c:
	[
		{ div:["c w06 r02"], c:[ { ac:["ad btn","shift_f_tags-shifts_f","_applyf","x y03 w05 gbl cw ba_bl bd cb b tc","Apply"] }, { s:["y07 bd b savl","..."] } ] },
		{ div:["c l20","va"], ac:["ay","","_vpclose","x y03 w05 ba bd cb tc","Cancel"] },
		{ div:["e"] }
	]}
]};

// --------------------------------------------------------------------

te["shift_footer"] = { div:["gw mtn08 bt"], c:
[
	{ div:["d y07"], pg:["pgto","shift_list-shifts"," dh","da dl","shift_list-shifts"," dh","da dr"] },
	{ div:["e"] }
]};

te["shift_r"] = { li:["w160 gw","shift_vw_id-shifts"], ev:["_nnvp"], c:
[
	{ div:["c w15"], s:["x y","%8"] },
	{ div:["c w25"], s:["x y",":d:dmy:17: "] },
	{ div:["c w24 x t01"], uchk:["dayofweek_tagv","%18"] },
	{ div:["c w15"], s:["x y",":p::19:"] },
	{ div:["c w15"], s:["x y",":p::20:"] },
	{ div:["c w15"], s:["x y",":d:dmyhn:1: "] },
	{ div:["c w15"], s:["x y","%2"] },
	{ div:["e"] } 
]};

te["shift_k"] = { div:["w160 bt bb gw"], s:["",""], c: // activate filter ctx
[
	{ k_a:["c w15","call_rr-calls","cd","User","da db","user_id",":k:shifts_k:user_id:2"] },
	{ k_a:["c w25","call_rr-calls","cd","Date Range","da db","daterange",":k:shifts_k:daterange:2"] },
	{ k_a:["c w25","call_rr-calls","cd","Day of Week","da db","dayofweek",":k:shifts_k:dayofweek:2"] },
	{ k_a:["c w15","call_rr-calls","cd","Start Time","da db","start_ts",":k:shifts_k:start_ts:2"] },
	{ k_a:["c w15","call_rr-calls","cd","End Time","da db","end_ts",":k:shifts_k:end_ts:2"] },
	{ k_a:["c w15","call_rr-calls","cd","Created On","da db","end_ts",":k:shifts_k:created_on:2"] },
	{ k_a:["c w15","call_rr-calls","cd","Created By","da db","end_ts",":k:shifts_k:created_by:2"] },
	{ div:["e"] }
]};

te["shift_nb"] = { div:[], c:[ { u:["nb","shifts_nb"] }, { div:["e"] } ] };

te["shift_title"] = { div:[] }; 

te["shift_list"] = { list:["shift_title","shift_nb","bl br oh","shift_k","shift_r","shifts","shift_footer"] },

te["shift_main"] = { c:
[
	{ div:["tt","vb"], c:
	[
		{ div:["c t"], c:
		[
			{ arg:["","","0"] },
			{ input:["g","","shift_t","0","radio","1"] },
			{ ac:["","shift_list-shifts","_tab","x y03 cb b n","Shift"] }, 
		]},
		{ div:["d ll t bb"], ac:["ao","shift_new-shift_","_vp","x gbl cw",""], c:
		[ 
			//{ div:["c t"], c:[ { img:["","","/voiceapps/images/download.png", "16"] } ] },
			{ div:["c x y","","+ New"] }, 
			{ div:["e"] }
		]},
		/*{ div:["d l15 t bb aa"], ac:["","shifts","_csv","x cd s",""], c:
		[ 
			{ div:["c t04"], c:[ { img:["","","/voiceapps/images/download.png", "16"] } ] },
			{ div:["c x y","","CSV"] }, 
			{ div:["e"] }
		]},*/
		{ div:["d l15 t bb","shift_rpt-shifts-@:1:"], c: // loaded only when tab contents are blank
		[
			{ arg:["","","0"] },
			{ input:["g","","shift_t","1","radio"] },
			{ ac:["c aa","shift_rpt_main","_tab","x cd s",""], c:
			[
				{ div:["c t04"], c:[ { img:["","","/voiceapps/images/chart.png", "16"] } ] },
				{ div:["c x y","","Reports"] }, 
				{ div:["e"] }
			]},
			// { div:["d"], ac:["aa","","_dsdd","x02 t04 b02",""],  c:[ { div:["h02 w02 awb"] } ] },
			{ div:["e"] }
		]},
		{ div:["d l15 t bb",""], c: // loaded only when tab contents are blank
		[
			{ arg:["","","0"] },
			{ input:["g","","shift_t","0","radio"] },
			{ ac:["c aa","shift_list-shifts","_tab","x cd s",""], c:
			[
				{ div:["c t04"], c:[ { img:["","","/voiceapps/images/list.png", "16"] } ] },
				{ div:["c x y","","List"] }, 
				{ div:["e"] }
			]},
			// { div:["d"], ac:["aa","","_dsdd","x02 t04 b02",""],  c:[ { div:["h02 w02 awb"] } ] },
			{ div:["e"] }
		]},
		{ div:["d t aa bb"], ac:["","shift_f-shifts_f","_vpf","x cd s",""], c:
		[ 
			{ div:["c t04"], c:[ { img:["","","/voiceapps/images/filter.png", "16"] } ] },
			{ div:["c x y","","Filter"] }, 
			{ div:["e"] }
		]},
		{ div:["e"], c:[ { arg:["","","shift_list-shifts"] }, { arg:["","","0"] }, { arg:["","","0"] } ] }
	]},
	{ div:["","vf"] },
	{ div:[""], c:
	[
		{ div:[], c:[ { input:["g","","shift_v","0","radio","1"] }, { p:["tabv","vt_shift_list"], shift_list:[] } ] },
		{ div:[], c:[ { input:["g","","shift_v","1","radio"] }, { p:["tabv","vt"] } ] },	// reports			
	]}
]};

