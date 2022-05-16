
rk["lead_metrics"] = ["count","percent","talktime"];
re["lead_metrics"] = 
{
"count":	["count",	"chan_usr,status,attempts","","count",	"Count","0","lead_rpt_count","lead_rpt-leads-@:1:@"],
"percent":	["percent",	"chan_usr,status,attempts","","percent",	"Percent","1","lead_rpt_percent","lead_rpt-leads-@:1:@"],
"talktime":	["talktime", 	"chan_usr,status,attempts","","talktime",	"Talk-Time","2","lead_rpt_talktime","lead_rpt-leads-@:1:@"],
};

re["lead_k"] = 
{
	"campaign_name":["campaign_name","Campaign"],
	"category":["category","Category"],
	"chan_usr":["chan_usr","Agent"],
	"status":["status","Status"],
	"attempts":["attempts","Attempts"],
	// category
};

te["lead_k_tag"] = { "rpt_axis_tag":["::lead_k:0:1","xaxis"] };

te["lead_k_r"] = { "rpt_axis_r":["xaxis","lead_k_tag","::lead_k:0:1"] };

te["lead_rpt_h"] = { rpt:["%3","::lead_metrics:3:4","lead_k_r","%1","lead_k","lead_k_tag","%1", "%2", "lead_rpt"] };

te["lead_rpt"] = { c:[ { lead_rpt_h:[] }, { div:["","rpt_vw_bar_stacked-leads"], rpt_vw_bar_stacked:[] } ] };

te["lead_rpt_talktime"] = { c:[ { u:["lead_rpt_h","lead_metrics","talktime"] }, { div:["","rpt_vw_bar_stacked-leads"], urpt:[] } ] };
te["lead_rpt_percent"] = { c:[ { u:["lead_rpt_h","lead_metrics","percent"] }, { div:["","rpt_vw_bar_stacked-leads"], urpt:[] } ] };
te["lead_rpt_count"] = { c:[ { u:["lead_rpt_h","lead_metrics","count"] }, { div:["","rpt_vw_bar_stacked-leads"], urpt:[] } ] };

te["lead_rpt_metric_tab"] = { div:["c x","%7"], c:
[
	{ arg:["","","0"] },
	{ input:["g","","lead_metric","%5","radio","%9"] },
	{ li:["opth x y tc cb","%6","%4"], ev:["_tab"] } // _rpt_chk
]};

te["lead_rpt_main"] = { c:
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

// ---------------------------------------------------

te["lead_upload_r"] = { div:["gws bb_"], c:
[
	{ div:["c w16 br_"], s:["x y ","%0"] },
	{ div:["c w16 br_"], s:["x y ","%1"] },
	{ div:["c w16 br_"], s:["x y ","%2"] },
	{ div:["e"] }
]};

te["lead_upload_header"] = { div:["gws bb_"], c:
[
	{ div:["c w16 br_"], s:["x y cd",":k:csv_data_k:0:2"] },
	{ div:["c w16 br_"], s:["x y cd",":k:csv_data_k:1:2"] },
	{ div:["c w16 br_"], s:["x y cd",":k:csv_data_k:2:2"] },
	{ div:["e"] }
]};

te["lead_field_r"] = { div:[], ac:["ay","","_sel","xx tt b05 cb",""], c:
[
	{ s:["c","%1"] },
	{ div:["e"], c:[ { arg:["field","","%0"] }, { arg:["field_txt","","%1"] } ] }
]};

te["lead_field_map"] = { c:
[
	{ div:["w16 ba_bl","va"], s:["",""], c:
	[
		{ txa:["c w12","w12 x y cb","","field_txt",null,"_dd","","_ro"] }, 
		{ div:["d w03"], ac:["aa","","_dd","x y",""],  c:[ { div:["h02 w02 awb"] } ] },
		{ div:["e"], arg:["o","field",null] }
	]},			
	{ div:["dd w16 ba mtn1 gw cb","vdd"], ev:["_undd"], c:
	[
		{ uchk:["lead_field_r","","contact_fields"] }
	]}
]};

te["lead_arg_campaign__id"] = { arg:["",".id","%0"] };

te["lead_arg_campaign_id"] = { arg:["","campaign_id","%0"] };

te["lead_arg_file_id"] = { arg:["","csv_id","%0"] };

te["lead_upload_confirm"] = { div:["","ve"], c:
[
	
	{ div:["tt"], c: // nb and stats
	[
		{ u:["nb","csv_data_nb"] },
		{ div:["e"] }
	]},
	{ s:["x y15 cb b n","Match Field Name to CSV"] },
	{ div:["","csv_field_map"], c: // header
	[
		{ p:["","a"], c: 
		[
			{ div:["c"], lead_field_map:["First Name","fname"] },
			{ div:["c mln1"], lead_field_map:["Last Name","lname"] },
			{ div:["c mln1"], lead_field_map:["Phone","phone"] },
		]},
		{ div:["e"] }
	]},
	//{ s:["x t20 b05 bb_ cd","CSV Headers"] },
	{ u:["lead_upload_header"] }, // csv headers
	//{ s:["x t20 b05 bb_ cd","CSV Data"] },
	{ u:["lead_upload_r","csv_data"] }, // csv data
	{ div:["t20"], c: // footer
	[
		{ div:["c w06"], c:[ { ac:["aa btn","lead_lst-leads_csv","_postj","x y03 w05 gbl cw tc","Save"] }, { s:["y07 bd b savl","..."] } ] },
		{ div:["c l20","va"], ac:["ay","lead_lst-campaigns-vt","_u","x y03 w05 tc cbr","Cancel"], c:[ { u:["lead_arg_campaign__id","campaigns"] }  ] },
		{ p:["e","o"], c:
		[ 
			{ u:["lead_arg_campaign_id","campaigns"] },
			{ u:["lead_arg_file_id","csv"] } 
		]}
	]}
]};

te["lead_upload_new"] = { div:["g","va"], s:["ba mtn1",""], c:
[ 
	{ input:["g","lead_upload_confirm-csv","file[]","","file"], ev:["","_file_upload"] }, 
	{ s:["c xx y07 gw cb",""] },
	{ ac:["d x y02","","_rm","x y n","&Cross;"] },
	{ p:["d x y02","nb"], s:["x y go cw","Uploading ..."] }, // todo: show progress
	{ div:["e"] },
]};

// ------------------------------------------------------------------------------

// 	this.previousSibling.lastChild.firstChild.firstChild.click ();

te["lead_lst_footer"] = { div:["y"], c:
[	
	{ div:["c"], c:
	[
		{ div:[], arg:["","campaign_id",":k:leads_k:campaign_id:2"] },
		{ div:[] },
		{ ac:["aa w10 y02","lead_upload_new","_file_dialog","x y03 tc gwd cb","Upload CSV"] }
	]},
	{ div:["d y"], pg:["pgto","lead_lst-leads"," dh","da dl","lead_lst-leads"," dh","da dr"] },
	{ div:["e"] }
]};

te["lead_lst_r"] = { div:["bb_"], c:
[
	{ div:["c w30 y"], c:[ { span:["x ","","%9"] }, { span:["x ","","%10"] } ] },
	{ div:["c w15"], s:["x y ","%11"] },
	{ div:["c w15"], s:["x y ","%32"] },
	{ div:["c w15"], s:["x y ","%31"] },
	{ div:["e"] }
]};

te["lead_lst_rr"] = { c:
[
	{ u:["lead_lst_r","leads"] },
	{ p:["","whnew"] }
]}

te["lead_lst_k"] = { div:["bb_ "], s:["",""], c: 
[
	{ k_a:["c w15","","cd","First Name","da db",	"priority",":k:leads_k:priority:2"] },
	{ k_a:["c w15","","cd","Last Name","da db",	"daterange",":k:leads_k:id:2"] },
	{ k_a:["c w15","","cd","Phone","da db",	"dayofweek",":k:leads_k:id:2"] },
	{ k_a:["c w15","","cd","Attempts","da db",	"dayofweek",":k:leads_k:id:2"] },
	{ k_a:["c w15","","cd","Status","da db",	"dayofweek",":k:leads_k:id:2"] },
	// { k_a:["d w15","","cd","Created On","da db",	"created_on",":k:members_k:created_on:2"] },
	{ div:["e"], c:[ { arg:["","campaign_id",":k:leads_k:campaign_id:2"] } ] }
]};

te["lead_lst_nb"] = { div:[], c:
[ 
	{ div:[], c:[ { u:["nb","leads_nb"] }, { div:["e"] } ] },
	{ u:["nbe","errors"] }
]};

te["lead_lst_title"] = { div:["y","va"], c:
[
	{ div:["c","va"], ac:["","","","x y b cb","Leads"] }, 
	//{ div:["c l20 aa"], ac:["","call_f-calls_f","_vpf","x y cb b h3",""], c:[ { img:["","","/voiceapps/images/filter.png", "14"] } ] }, 
	{ div:["e"] }
]};

te["lead_lst"] = { list:["lead_lst_title","lead_lst_nb","ba ov","lead_lst_k","lead_lst_rr","leads_ctx", "lead_lst_footer"] };

// --------------------------------------------------------------------------------

te["lead_f_tags"] = { c: 
[
	{ f:["Campaign",":k:leads_f:campaign_id",		" %1"," campaign_id"] },
	{ f:["First Name",":k:leads_f:contact_fname",		" %0"," contact_fname"] },
	{ f:["Last Name",":k:leads_f:contact_lname",		" %0"," contact_lname"] },
	{ f:["Phone",":k:leads_f:contact_phone",		" %0"," contact_phone"] },
	{ f:["Extension",":k:leads_f:chan_usr",			" %0"," chan_usr"] },
	{ f:["Attempts",":k:leads_f:attempts",			" %0"," attempts"] },
	{ f:["Status",":k:leads_f:status",			" ::lead_status:0:1"," status"] },
	{ f:["Category",":k:leads_f:category_id",		" %1"," category_id"] },
	{ f:["Schedule Date",":k:leads_f:activity_sched_ts",	" :d:dmy:0: "," activity_sched_ts"] },
	{ f:["Updated On",":k:leads_f:updated_on",		" :d:dmy:0: "," updated_on"] },
	{ div:["e"] }
]};

te["lead_f"] = { div:["w70 ma bd sh__ y gw"], c: // "vddvw"], ev:["_undd"
[
	{ s:["x20 yy b bb_","Filters"] },
	{ div:["x15 tt b20"], c:
	[
		{ div:["xx yy"], kf_l:["Campaign", "tag-o-campaign_id-%1", "campaign_lc-campaigns",":k:leads_f:campaign_id", " %1", " campaign_id"] },
		{ div:["xx yy"], kf_s:["First Name","contact_fname",":k:leads_f:contact_fname"] },
		{ div:["xx yy"], kf_s:["Last Name","contact_lname",":k:leads_f:contact_lname"] },
		{ div:["xx yy"], kf_s:["Phone","contact_phone",":k:leads_f:contact_phone"] },
		{ div:["xx yy"], kf_s:["Extension","chan_usr",":k:leads_f:chan_usr"] },
		{ div:["xx yy"], kf_s:["Attempts","attempts",":k:leads_f:attempts"] },
		{ div:["xx yy"], kf_c:["Status","tag-o-status-::lead_status:0:1", 	":k:leads_f:status"," ::lead_status:0:1"," status", 	
		":k:leads_f:status", "lead_status", " status"," ::lead_status:0:1"," "] },
		{ div:["xx yy"], kf_l:["Category","tag-o-category_id-%1",   "category_lc-categories",":k:leads_f:category_id"," %1"," category_id"] },
		{ div:["xx yy"], kf_d:["Schedule Date"," :d:dmy:0: ","activity_sched_ts",":k:leads_f:activity_sched_ts","activity_sched_ts",":k:leads_f:activity_sched_ts"] },
		// { div:["xx yy"], kf_d:["Updated On"," :d:dmy:0: ","updated_on",":k:leads_f:updated_on","updated_on",":k:leads_f:updated_on"] },
	]},
	{ div:["x20 yy"], c:
	[
		{ div:["c w06 r02"], c:[ { ac:["ad btn","lead_f_tags-leads_f","_applyf","x y w05 gbl bd ba_br cw tc","Apply"] }, { s:["y07 bd b savl","..."] } ] },
		{ div:["c l20","va"], ac:["ay","","_vpclose","x y w05 ba_bl bd tc cbr","Cancel"], c:[ { p:["g","o"], arg:["",".id",""] } ] },
		{ div:["e"] }
	]}
]};

// --------------------------------------------------------------------

te["lead_footer"] = { div:["gw mtn08 bt"], c:
[
	{ div:["d y07"], pg:["pgto","lead_list-leads"," dh","da dl","lead_list-leads"," dh","da dr"] },
	{ div:["e"] }
]};

te["lead_r"] = { li:["w160 gw","lead_vw_id-leads"], ev:["_nnvp"], c:
[
	{ div:["c w25"], s:["x y ","%16"] },
	{ div:["c w30 y"], c:[ { span:["x ","","%9"] }, { span:["x ","","%10"] } ] },
	{ div:["c w15"], s:["x y ","%11"] },
	{ div:["c w15"], s:["x y ","%32"] },
	{ div:["c w15"], s:["x y ","%31"] },
	{ div:["c w15"], s:["x y ","%25"] },
	{ s:["d x y",":d:dmyhn:1: "] },
	{ div:["e"] } 
]};

te["lead_k"] = { div:["w160 bt bb"], s:["",""], c: // activate filter ctx
[
	{ k_a:["c w25","call_rr-calls","cd","Campaign Name","da db","phone",":k:leads_k:campaign_id:2"] },
	{ k_a:["c w15","call_rr-calls","cd","First Name","da db","chan_ts",":k:leads_k:contact_fname:2"] },
	{ k_a:["c w15","call_rr-calls","cd","Last Name","da db","vector",":k:leads_k:contact_lname:2"] },
	{ k_a:["c w15","call_rr-calls","cd","Phone","da db","branch",":k:leads_k:contact_phone:2"] },
	{ k_a:["c w15","call_rr-calls","cd","Attempts","da db","usr",":k:leads_k:contact_attempts:2"] },
	{ k_a:["c w15","call_rr-calls","cd","Status","da db","usr",":k:leads_k:contact_status:2"] },
	{ k_a:["c w15","call_rr-calls","cd","Category","da db","usr",":k:leads_k:created_on:2"] },
	{ div:["e"] }
]};

te["lead_nb"] = { div:[], c:[ { u:["nb","leads_nb"] }, { div:["e"] } ] };

te["lead_title"] = { div:[] }; 

te["lead_list"] = { list:["lead_title","lead_nb","bl br oh","lead_k","lead_r","leads","lead_footer"] },

te["lead_main"] = { c:
[
	{ div:["tt","vb"], c:
	[
		{ div:["c t"], c:
		[
			{ arg:["","","0"] },
			{ input:["g","","lead_t","0","radio","1"] },
			{ ac:["","lead_list-leads","_tab","x y03 cb b n","Leads"] }, 
		]},
		{ div:["d l15 t bb aa"], ac:["","leads","_csv","x cd s",""], c:
		[ 
			{ div:["c t04"], c:[ { img:["","","/voiceapps/images/download.png", "16"] } ] },
			{ div:["c x y","","CSV"] }, 
			{ div:["e"] }
		]},
		{ div:["d l15 t bb","lead_rpt-leads-@:1:"], c: // loaded only when tab contents are blank
		[
			{ arg:["","","0"] },
			{ input:["g","","lead_t","1","radio"] },
			{ ac:["c aa","lead_rpt_main","_tab","x cd s",""], c:
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
			{ input:["g","","lead_t","0","radio"] },
			{ ac:["c aa","lead_list-leads","_tab","x cd s",""], c:
			[
				{ div:["c t04"], c:[ { img:["","","/voiceapps/images/list.png", "16"] } ] },
				{ div:["c x y","","List"] }, 
				{ div:["e"] }
			]},
			// { div:["d"], ac:["aa","","_dsdd","x02 t04 b02",""],  c:[ { div:["h02 w02 awb"] } ] },
			{ div:["e"] }
		]},
		{ div:["d t aa bb"], ac:["","lead_f-leads_f","_vpf","x cd s",""], c:
		[ 
			{ div:["c t04"], c:[ { img:["","","/voiceapps/images/filter.png", "16"] } ] },
			{ div:["c x y","","Filter"] }, 
			{ div:["e"] }
		]},
		{ div:["e"], c:[ { arg:["","","lead_list-leads"] }, { arg:["","","0"] }, { arg:["","","0"] } ] }
	]},
	{ div:["","vf"] },
	{ div:[""], c:
	[
		{ div:[], c:[ { input:["g","","lead_v","0","radio","1"] }, { p:["tabv","vt"], lead_list:[] } ] },
		{ div:[], c:[ { input:["g","","lead_v","1","radio"] }, { p:["tabv","vt"] } ] },	// reports			
	]}
]};


te["getcampaignid"] = { ufn:["getcampaignid"] };

function getcampaignid (el)
{
	var a = {};
	argv (el.parentNode.previousSibling, a);
	console.log ("[getcampaignid] "+JSON.stringify (a)+" |"+el.id+" "+el.className)
	ra["campaigns"] = [[a["campaign_id"]]];
}

