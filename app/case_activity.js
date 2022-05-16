// ----------------------------------------------

te["case_history_footer"] = { div:["bt_ y"], c:
[
	{ div:["d t03"], c:[ { ac:["nav","case_history-case_activities","_nav","dh",""], c:[ { div:["da dr_"] }, { arg:["","_a","%0"] } ] }, { s:["navl","..."] } ] },
	{ div:["d t03"], c:[ { aci:["nav","case_history-case_activities","_nav","dh","prev",""], c:[ { div:["da dl_"] }, { arg:["","_a","%0"] } ] }, { s:["navl","..."] } ] },
	{ s:["d x y cd s","%4"] },
	{ s:["d y cd s","of"] }, 
	{ s:["d x y cd s","%3"] },
	{ s:["d y cd s","-"] },
	{ s:["d x y cd s","%2"] },
	{ div:["e"] }
]};

te["case_history_r"] = { div:["bt_"], c:  // case_new, case_update, case_edit, case_type_update, reporter_edit, client_add, client_edit, perp_add, perp_edit
[
	{ s:["c w14 x y",":d:dmyhnr:1: "] },
	{ s:["c w08 x y","%2"] },
	{ div:["c w13"], c:
	[
		{ ac:["","","","x y",":v:case_activities:activity::case_activity:1"] }
	]},
	{ s:["c x t w50",":v:case_activities:detail"] },
	{ s:["c x t w08",":v:case_activities:priority::case_priority:2"] },
	{ s:["c x t w08",":v:case_activities:status::case_status:1"] },
	{ s:["c l t cd",":u::12:0::Escalated to"] },
	{ s:["c l t ",":v:case_activities:escalatedto_role::user_role:1"] },
	{ s:["c l t ",":v:case_activities:escalatedto"] },
	{ s:["d x t cd s","Changes"] },
	{ s:["d x t cd w04 tr s",":v:case_activities:change_count"] },
	{ s:["d x y",":v:case_activities:src"] },
	{ div:["e"] },
]};


te["case_history_k"] = { div:["g"], c:
[
	{ k_a:["g","case_rr-cases","cd st","Case ID","da db","case_id",":k:case_activities_k:case_id:2"] },
]};

te["case_history_title"] = { div:["y"], c:
[
	{ div:["c","va"], ac:["","case_history-case_activities-vs","_u","x y b cb h3","Case History"], c:[ { arg:["","case_id",":k:case_activities_k:case_id:2"] } ] },
	{ div:["e"] }
]};

te["case_history"] = { list:["case_history_title","end","","case_history_k","case_history_r","case_activities","case_history_footer"] };
