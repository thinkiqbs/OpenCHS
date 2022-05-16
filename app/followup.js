

te["followup_vw"] = {  c:
[

	{ followup_vw_id:[] }
]}

// ---------------------

te["followup_footer"] = { div:["x y"], c:
[
	{ div:["d y"], pg:["pgto","followup_list-followups"," dh","da dl","followup_list-followups"," dh","da dr"] },
	{ div:["e"] }
]};

te["followup_r"] = { ac:["ay w200","followup_vw-followups","_vwr","cb gw",""], c:
[
	{ div:["c w10"], s:["tt b05 h01_  xx","%0"] },
	{ div:["c w10"], s:["tt b05 h01_  xx","%2"] },
	{ div:["c w16"], s:["tt b05 h01_  xx",":d:dmyhnr:1: "] },
	{ div:["c w10"], s:["tt b05 h01_  xx",":v:followups:case_category_root_id::case_type:1"] },
	{ div:["c w25"], s:["tt b05 xx",""], uval:["",":v:followups:case_category"] }, // category
	{ div:["c w10"], s:["tt b05 h01_  xx",":v:followups:priority::case_priority:1"] },
	{ div:["c w08"], s:["tt b05 h01_  xx",":v:followups:status::case_status:2"] },
	{ div:["c w12"], s:["tt b05 h01_  xx",":v:followups:escalatedto"] },
	{ div:["c w10"], s:["tt b05 h01_ xx",":v:followups:src"] },
	{ div:["c w30"], s:["tt b05 xx",""], c:
	[
		{ s:["c",":v:followups:reporter_fullname"] },
		{ s:["c",","] },
		{ div:["c l"], uval:["",":v:followups:reporter_sex"] },
		{ s:["c",","] },
		{ div:["c l"], uval:["",":v:followups:reporter_age_group"] },
		{ div:["e"] }
	]},
	{ div:["c w50"], s:["tt b05 xx",""], uval:["",":v:followups:reporter_location"] },
	{ div:["e"], arg:["",".id","%0"] }
]};

te["followup_k"] = { div:["w200 bt bb"], s:["",""], c: // activate filter ctx
[
	{ k_a:["c w10","case_rr-cases","cd st","Case ID","da db","id",":k:followups_k:id:2"] },
	{ k_a:["c w10","case_rr-cases","cd st","Created By","da db","created_by_id",":k:followups_k:created_by_id:2"] },
	{ k_a:["c w16","case_rr-cases","cd st","Created On","da db","created_on",":k:followups_k:created_on:2"] },
	{ k_a:["c w10","case_rr-cases","cd st","Type","da db","case_category_root_id",":k:followups_k:case_category_root_id:2"] },
	{ k_a:["c w25","case_rr-cases","cd st","Category","da db","case_category_id",":k:followups_k:case_category_id:2"] },
	{ k_a:["c w10","case_rr-cases","cd","Priority","da db","priority",":k:followups_k:priority:2"] },
	{ k_a:["c w08","case_rr-cases","cd","Status","da db","status",":k:followups_k:status:2"] },
	{ k_a:["c w12","case_rr-cases","cd","Escalated To","da db","source",":k:followups_k:escalatedto:2"] },
	{ k_a:["c w10","case_rr-cases","cd","Source","da db","source",":k:followups_k:src:2"] },
	{ k_a:["c w30","case_rr-cases","cd","Reporter","da db","reporter_phone",":k:followups_k:reporter_phone:2"] },
	{ k_a:["c w40","case_rr-cases","cd","Location","da db","reporter_location",":k:followups_k:reporter_location:2"] },
	{ div:["e"], c:
	[
		{ arg:["","reporter_fullname",":k:followups_k:reporter_fullname:2"] },
		{ arg:["","_c","%1"] }
	]}
]};

te["followup_list"] = { list:["end","end","bl br ox","followup_k","followup_r","followups","followup_footer"] };

te["followup_main"] = { c:
[
	{ div:["","vb"], c:
	[
		{ div:["c x"], ac:["","","_followup_cancel","h3 x y bd16 gws micon cb","arrow_back"] },
		{ s:["c xx y07 h3 b","Case Follow Up"] },
		{ div:["c x15"], ac:["ay","case_f-cases_f","_vpf","x cd s bd_",""], c:
		[ 
			{ s:["c t04 h3_ micon","filter_alt"] },
			{ div:["c x y","","Filter"] }, 
			{ div:["e"] }
		]},
		{ div:["e"] },
		// { s:["xx yy cd","Select a Case from the List below"] },
		{ div:["e"], c:[ { arg:["","","followup_list-followups"] }, { arg:["","","0"] }, { arg:["","","0"] }, { arg:["","",""] } ] }
	]},
	{ div:["x y bd","vf"], c:[ { li:["","case_f-cases_f"], ev:["__vpf"], c:
	[
		{ f:["Reporter Phone",":k:followups_k:reporter_phone:2", " %0"," reporter_phone"," "] },
		{ div:["e"] }
	]} ]},
	{ div:[], c:
	[
		{ div:[], c:[ { input:["g","","followup_v","0","radio","1"] }, { p:["tabv x yy","vt"], followup_list:[] } ] },
		{ div:[], c:[ { input:["g","","followup_v","1","radio"] }, { p:["tabv ","vt"] } ] },	// reports?			
	]}
]};

te["followup"] = { form:[], c: 
[
	{ div:[], c:[ { input:["g","","followup_mv","0","radio","1"] }, { div:["tabv gw bd xx yy mmb bd","vftab"], followup_main:[] } ] },
	{ div:[], c:[ { input:["g","","followup_mv","1","radio"] }, { div:["tabv","vft"] } ] },
]};

function _followup_cancel ()
{
	var p_ = __(this,"vfvw");
	var p__ = __(this,"vw");
	var o = {};
	jso (p_.previousSibling, o); // reporter details
	// if (!o.reporter_id)
	//{
	//	jso (p_, o); 
	//	url (p_, "case_vw_id", "cases", (o[".id"]));
	//	return;
	//}
	p__.firstChild.style.display = "block";
	p__.lastChild.innerHTML = "";
}

