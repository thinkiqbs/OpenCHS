

re["case_title"] =
{
"my_cases":["my_cases","My Cases"],
"esca_by_me":["esca_by_me","Escalated By Me"],
"esca_to_me":["esca_to_me","Escalated To Me"],
"all_cases":["all_cases","All Cases"],
"all_cases_today":["all_cases_today","All Cases Today"],
};

rk["case_metrics"] = ["count","percent"];
re["case_metrics"] = 
{
"count":	["count",	"Count","0","case_rpt_count","case_rpt-cases-@:1:0:0"],
"percent":	["percent",	"Percent","1","case_rpt_percent","case_rpt-cases-@:1:1:1"],

}; 

te["case_rpt_metric_tab"] = { div:["c x","%4"], c:
[
	{ arg:["","","0"] },
	{ input:["g","","case_metric","%2","radio","%9"] },
	{ li:["opth x y tc cb","%3","%1"], ev:["_tabf"] }
]};

rk["case_k"] = ["case_category_root_id","cat_0", "created_by", "escalatedto", "priority", "referals", "status", "services", "source", "reporter_age_group", "reporter_sex", "reporter_tribe", "reporter_lang", "reporter_location_0", "reporter_location_1", "reporter_location_2", "reporter_location_3", "reporter_location_4", "reporter_location_5", "reporter_location_6"];
re["case_k"] = 
{
	"priority":["priority","Priority"],
	"status":["status","Status"],
	"source":["source","Source"],
	"services":["services","Services Offered"],
	"referals":["referals","Refered To"],
	"case_category_root_id":["case_category_root_id","Category Type"],
	"cat_0":["cat_0","Main Category"],
	"created_by":["created_by","Created By"],
	"escalatedto":["escalatedto","Escalated To"],
	"reporter_age_group":["reporter_age_group","Reporter Age Group"],
	"reporter_sex":["reporter_sex","Reporter Sex"],
	"reporter_tribe":["reporter_tribe","Reporter Tribe"],
	"reporter_lang":["reporter_lang","Reporter Language"],
	"reporter_location_0":["reporter_location_0","Region"], //  region, district_2019, county_2019, subcounty_2019, parish_2019, lc1_2019, ec_constituency_201
	"reporter_location_1":["reporter_location_1","District"],
	"reporter_location_2":["reporter_location_2","County"],
	"reporter_location_3":["reporter_location_3","Sub County"],
	"reporter_location_4":["reporter_location_4","Parish"],
	"reporter_location_5":["reporter_location_5","Village"],
	"reporter_location_6":["reporter_location_6","Constituenct"],
};

te["case_k_tag"] = { "rpt_axis_tag":["::case_k:0:1","xaxis"] };

te["case_k_r"] = { "rpt_axis_r":["xaxis","case_k_tag","::case_k:0:1"] };

te["case_rpt_"] = { c: // todo: load rpt_hdr params from db
[ 
	{ form:["tt","vrpt"], rpt_hdr:[null, "case_k_r",null,"case_k", "case_k_tag",null,  null, "dist", null,null] }, 
	{ div:["","case_rpt_vw-cases"], urpt:[] } 
]};
te["case_rpt"] = { case_rpt_:["::case_metrics:4:1","%2","%2","%3","%4","%7"] };  
te["case_rpt_percent"] = { case_rpt_:["Percent", "status", "status", "-", "percent", "0"] };
te["case_rpt_count"] = { case_rpt_:["Count", "status", "status", "-", "count", "0"] };

te["case_rpt_main"] = { c:
[
	{ div:["xx s bb_ t15","vb"], c:
	[
		{ s:["c x y cd","Metric:"] },
		{ uchk:["case_rpt_metric_tab","count","case_metrics"] },
		// + add // todo add mutiple metrics to same canvas // then multi-metric with from different resources
		{ div:["d"], c:
		[
			{ div:["w12 ay","va"], ac:["","","_dd","x cd",""], c:
			[
				{ div:["d w02 t04"], s:["h02 w02 awb",""] },
				{ s:["d x y","Saved Reports"] }, 
				{ div:["e"] }
			]},			
			{ div:["dd mln13 w25 ba sh gw cb","vdd"], ev:["_undd"], c:
			[
				{s:["xx y cd","- Saved Reports List -"] }
			]}
		]},
		{ div:["e"] }
	]},
	{ div:["xx yy","vrpt"], c:
	[
		{ div:[], c:[ { input:["g","","case_rptv","0","radio","1"] }, { p:["tabv oh","vt"], case_rpt_count:[] } ]},
		{ div:[], c:[ { input:["g","","case_rptv","0","radio"] }, { p:["tabv oh","vt"] } ] },
		{ div:[], c:[ { input:["g","","case_rptv","0","radio"] }, { p:["tabv","vt"] } ] },
		{ div:[], c:[ { input:["g","","case_rptv","0","radio"] }, { p:["tabv","vt"] } ] },
		{ div:[], c:[ { input:["g","","case_rptv","0","radio"] }, { p:["tabv","vt"] } ] },
		{ div:[], c:[ { input:["g","","case_rptv","0","radio"] }, { p:["tabv","vt"] } ] },
		{ div:[], c:[ { input:["g","","case_rptv","0","radio"] }, { p:["tabv","vt"] } ] },
		{ div:[], c:[ { input:["g","","case_rptv","0","radio"] }, { p:["tabv","vt"] } ] },
	]}
]};

// =========================================================================================

rk["case_hivra"] = ["1","0","2"];
re["case_hivra"] = 
{
"":["","","noop","noop","noop-noop-hivre-hivra"],
"0":["0","Negative","case_vw_incience_hiv_result_pep","case_ed_incience_hiv_result_pep","case_ed_incience_hiv_result_pep-r_-hivre-hivra"],
"1":["1","Positive","case_vw_incience_hiv_result_art","case_ed_incience_hiv_result_art","case_ed_incience_hiv_result_art-r_-hivre-hivra",""],
"2":["2","Unknown","case_vw_incience_hiv_result_pep","noop","noop-r_-hivre-hivra"],
};

rk["case_hiv_tested"] = ["1","0","2"];
re["case_hiv_tested"] = 
{
"":["","","noop","noop","noop-r_-hivt-hivre"],
"0":["0","No","noop","noop","noop-r_-hivt-hivre"],
"1":["1","Yes","case_vw_incidence_hiv_result","case_ed_incidence_hiv_result","case_ed_incidence_hiv_result-r_-hivt-hivre",""],
"2":["2","Unknown","noop","noop","noop-r_-hivt-hivre"],
};

rk["case_coloc"] = ["1","0","2"];
re["case_coloc"] = 
{
"":["","","noop","noop","noop-r_-cou-coloc"],
"0":["0","No","noop","noop","noop-r_-cou-coloc"],
"1":["1","Yes","case_vw_incidence_counseling_loc","case_ed_incidence_counseling_loc","case_ed_incidence_counseling_loc-r_-cou-coloc",""],
"2":["2","Unknown","noop","noop","noop-r_-cou-coloc"],
};

rk["case_incw"] = ["1","0","2"];
re["case_incw"] = 
{
"":["","","noop","noop","noop-r_-inci-incw"],
"0":["0","No","noop","noop","noop-r_-inci-incw"],
"1":["1","Yes","case_vw_incidence_where","case_ed_incidence_where","case_ed_incidence_where-r_-inci-incw",""],
"2":["2","Unknown","noop","noop","noop-r_-inci-incw"],
};



te["case_enum_tag_txa_"] = { div:["",null], c:[ { p:["","txa"], c:  // 
[ 
	{ input:[null,null,"","","text",""], ev:["","_ky","","_uky"] }, 
	{ span:["g","",null] }, // input placeholder already in forms
	{ arg:["",null,""] }, // placeholder for upd
	{ arg:["root_id","",null] },
	{ arg:["level","",null] },

]} ]};

te["case_enum_sel"] = { c:
[
	{ div:[], c:
	[
		{ div:["c"], s:[null,null] },
		{ s:["c t h2 cr b",null] },
		{ div:["e"] }
	]},
	{ div:["",null], c:
	[
		{ li:["gws bd b05","va"], c:[ { div:[], ev:["_dd"], c: // ls
		[
			{ p:[null,"o"], uchk:["tag",null,"","","",null,null,null] },
			{ div:["d w02 x y"],  c:[ { div:["h02 w02 awb"] } ] },
			{ div:["e"] }
		]} ]},			
		{ div:[null,"vdd"], ev:["_undd"], c: // 
		[
			{ uchk:[null,"",null] }
		]}
	]}
]};

te["case_enum_ls"] = { c:  
[
        { s:["x y",null] },
        { div:["",null], c:
        [
                { li:["gws bd b02","va"], c:[ { div:["",null], ev:["_dd"], c: // ls
                [
                        { p:[null,"o"], c:
                        [ 
                        	{ u:[null,null] }, 
                        	{ uchk:["tag_cat",null,"","^", null,null,null,null] } 
                        ]},
                        { div:["d w02 x t"],  c:[ { div:["h02 w02 awb"] } ] },
                        { div:["e"], c:[ { arg:["_c","","10"] }, { arg:["root_id","",null] }, { u:[null] } ] }
                ]} ]},
                { div:[null,"vdd"], ev:["_undd"] },
                { u:[null] } 
        ]}
]};

te["case_enum_lsh"] = { c: 
[
	{ div:[], c:
	[
		{ div:["c"], s:[null,null] },
		{ s:["c t h2 cr b",null] },
		{ div:["e"] }
	]},
	{ div:["",null], c:
	[
		{ li:["gws bd b02","va"], c:[ { div:[], c:
		[
			{ p:[null,"o"], c:
			[ 
				{ u:[null,null] }, 
				{ uchk:["tag_cat",null,"","^",null,null,null,null] } 
			]},
			{ div:["d w02 x y",null], ev:["_dd"], c:
			[ 
				{ div:["h02 w02 awb"] }, 
				{ arg:["_c","","10"] }, { arg:["category_id","",null] }
			]},
			{ div:["e"] }
		]} ]},			
		{ div:[null,"vdd"], ev:["_undd"] },
		{ u:[null] }
	]}
]};

te["case_enum_lc"] = { c:
[
	{ s:["x y",null] },
	{ div:["",null], c:
	[
		{ li:["gws bd","va"], c:[ { div:["",null], ev:["_dd"], c: // ls
		[
			{ div:["",null], c:[ { p:[null,"a"], uchk:["taga",null,"","",null,null,null,null] } ] },
			{ div:["d w02 x y"],  c:[ { div:["h02 w02 awb"] } ] },
			{ div:["e"], c:[ { arg:["_c","","10"] }, { arg:["root_id","",null] }, { u:[null] } ] }
		]} ]},			
		{ div:[null,"vdd"], ev:["_undd"] },
		{ u:[null] }
	]}
]};

// ---

te["case_referal_sub"] = { c:
[
	{ arg:["","","362009"] }, //  362009:other
	{ div:[""] },
	{ ufn:["_case_sub",null,null] }
]};
te["case_referal_chk_fn"] = { arg:["fn","","_case_sub_chk"] }; 
te["case_referal_lc_main"] = { category_lc_main_:["236707","noop"] };
te["case_referal_enum"] = { case_enum_lc:[null,"taga-r_--a--%8-category_id-%0", "case_referal_lc_main-subcategories", "referals", "c w35 b02",    null,""," %1","category_id"," %0",  "236707","noop", "dd w40 ba_b gw","case_referal_chk_fn"] };

// ---

te["case_service_sub"] = { c:
[
	{ arg:["","","117,362042,362036"] }, // 117:referals,362042:others,362036:report_to_police
	{ div:["bl2_b"] },
	{ ufn:["_case_sub",null,null] }
]};
te["case_service_chk_fn"] = { arg:["fn","","_case_sub_chk"] }; 
te["case_service_lc_main"] = { category_lc_main_:["113","noop"] };
te["case_service_enum"] = { case_enum_lc:[null,"taga-r_--a--%8-category_id-%0", "case_service_lc_main-subcategories", "services", "c w37 b02",    null,""," %1","category_id"," %0",  "113","noop", "dd w40 ba_b gw","case_service_chk_fn"] };

// ---

te["case_status_r"] = { div:[], ac:["ay","","_sel","xx tt b05 cb",""], c: // 
[
	{ s:["","%1"] },
	{ div:["e"], c:[ { arg:["id-0","","%0"] } ] }
]};

te["case_status_enum"] = { case_enum_sel:[null,null,null, "tag-r_--o--::case_status:0:1-status-%0", "c w16",  null," ::case_status:0:1","status"," %0", "dd w20 ba_b gw cb","case_status_r","case_status"] };

// ---

te["case_priority_r"] = { div:[], ac:["ay","","_sel","xx tt b05 cb",""], c:
[
	{ s:["","%1"] },
	{ div:["e"], c:[ { arg:["id-0","","%0"] } ] }
]};

te["case_priority_enum"] = { case_enum_sel:[null,null,null, "tag-r_--o--::case_priority:0:1-priority-%0", "c w16",  null," ::case_priority:0:1","priority"," %0", "dd w20 ba_b gw cb","case_priority_r","case_priority"] };


// ---

te["case_loc_tag_txa"] = { case_enum_tag_txa_:["category_ls-subcategories","w38 xx tt b05","fullname_","Select Location","location_id","88","6"] };
te["case_loc_enum"] = { case_enum_lsh:["x y",null,"","tag_cat-r_--o-case_loc_tag_txa-%8-location_id-%0",  "c w38", "case_loc_tag_txa","r_", 
null, "case_loc_tag_txa",null,"location_id",null,   
"category_lsh_root-subcategories", "88", "dd w65 gw ba_b", "noop"] };

// ---

te["case_escalated_matrix_r"] = { arg:["role","","::user_role:6:3"] };
te["case_escalated_to_args"] = { u:["case_escalated_matrix_r","auth"] };

te["case_escalated_to_tag_txa"] = { div:["","user_ls-users"], c:[ { p:["","txa"], c:
[ 
	{ input:["w37 xx tt b05","usn_","","","text",""], ev:["","_ky","","_uky"] }, 
	// { arg:["","escalatedto_id",""] }, // placeholder for upd -- disable
	{ case_escalated_to_args:[] }
]} ]};

te["case_escalated_to_enum"] = { case_enum_ls:[null,"tag-r_--o-case_escalated_to_tag_txa-%5-escalatedto_id-%0", "user_ls-users", "c w17", "case_escalated_to_tag_txa","r_", null,"case_escalated_to_tag_txa",null,"escalatedto_id",null,  "", "case_escalated_to_args", "dd w29 gw ba_b", "noop"] };

// ---

te["case_knowabout116_tag_txa"] = { case_enum_tag_txa_:["category_ls-subcategories","w37 xx tt b05","fullname_","","knowabout116_id","236700",""] };

te["case_knowabout116_enum"] = { case_enum_ls:[null,"tag_cat-r_--o-case_knowabout116_tag_txa-%8-knowabout116_id-%0", "category_ls-subcategories", "c w16", "case_knowabout116_tag_txa","r_", null,"case_knowabout116_tag_txa",null,"knowabout116_id",null, "236700", "noop", "dd w40 gw ba_b", "noop"] };

// ---

te["case_justice_tag_txa"] = { case_enum_tag_txa_:["category_ls-subcategories","w30 xx tt b05","fullname_","","justice_id","236687",""] };

te["case_justice_enum"] = { case_enum_ls:[null,"tag_cat-r_--o-case_justice_tag_txa-%8-justice_id-%0", "category_ls-subcategories", "c w16", "case_justice_tag_txa","r_", null,"case_justice_tag_txa",null,"justice_id",null, "236687", "noop", "dd w30 gw ba_b", "noop"] };

// ---

te["case_assessment_tag_txa"] = { case_enum_tag_txa_:["category_ls-subcategories","w30 xx tt b05","fullname_","","assessment_id","236694",""] };

te["case_assessment_enum"] = { case_enum_ls:[null,"tag_cat-r_--o-case_assessment_tag_txa-%8-assessment_id-%0", "category_ls-subcategories", "c w16", "case_assessment_tag_txa","r_", null,"case_assessment_tag_txa",null,"assessment_id",null, "236694", "noop", "dd w30 gw ba_b", "noop"] };
			
// ---------------------------

te["case_household_tag_txa"] = { case_enum_tag_txa_:["category_ls-subcategories","w21 xx tt b05","fullname_","","household_id","236674",""] };

te["case_household_enum"] = { case_enum_ls:[null,"tag_cat-r_--o-case_household_tag_txa-%8-household_id-%0", "category_ls-subcategories", "c w17", "case_household_tag_txa","r_", null,"case_household_tag_txa",null,"household_id",null, "236674", "noop","dd w21 gw ba_b", "noop"] };

// ---

te["case_guardian_marital_tag_txa"] = { case_enum_tag_txa_:["category_ls-subcategories","w21 xx tt b05","fullname_","","guardian_marital_id","236654",""] };

te["case_guardian_marital_enum"] = { case_enum_ls:[null,"tag_cat-r_--o-case_guardian_marital_tag_txa-%8-guardian_marital_id-%0", "category_ls-subcategories", "c w17", "case_guardian_marital_tag_txa","r_", null,"guardian_marital_id",null,"guardian_marital_id",null, "236654", "noop","dd w21 gw ba_b", "noop"] };

// ---

te["case_household_head_employment_tag_txa"] = { case_enum_tag_txa_:["category_ls-subcategories","w21 xx tt b05","fullname_","Select Employment Status","household_head_occupation_id","236648",""] };

te["case_household_head_employment_enum"] = { case_enum_ls:[null,"tag_cat-r_--o-case_household_head_employment_tag_txa-%8-household_head_occupation_id-%0", "category_ls-subcategories", "c w18", "case_household_head_employment_tag_txa","r_", null,"case_household_head_employment_tag_txa",null,"household_head_occupation_id",null, "236648", "noop","dd w21 gw ba_b", "noop"] };

// ---

te["case_spouse_employment_tag_txa"] = { case_enum_tag_txa_:["category_ls-subcategories","w21 xx tt b05","fullname_","Select Employment Status","spouse_profession_id","236648",""] };

te["case_spouse_employment_enum"] = { case_enum_ls:[null,"tag_cat-r_--o-case_spouse_employment_tag_txa-%8-spouse_profession_id-%0", "category_ls-subcategories", "c w17", "case_spouse_employment_tag_txa","r_", null,"case_spouse_employment_tag_txa",null,"spouse_profession_id",null, "236648", "noop","dd w21 gw ba_b", "noop"] };

// ---

te["case_hiv_tag_txa"] = { case_enum_tag_txa_:["category_ls-subcategories","w20 xx tt b05","fullname_","","hiv_id","105",""] };

te["case_hiv_enum"] = { case_enum_ls:[null,"tag_cat-r_--o-case_hiv_tag_txa-%8-hiv_id-%0", "category_ls-subcategories", "c w17", "case_hiv_tag_txa","r_", null,"case_hiv_tag_txa",null,"hiv_id",null, "105", "noop","dd w20 gw ba_b", "noop"] };

// ---

te["case_disability_tag_txa"] = { case_enum_tag_txa_:["category_ls-subcategories","w20 xx tt b05","fullname_","","disability_id","236669",""] };

te["case_disability_enum"] = { case_enum_ls:[null,"tag_cat-r_--o-case_disability_tag_txa-%8-disability_id-%0", "category_ls-subcategories", "c w17", "case_disability_tag_txa","r_", null, "case_disability_tag_txa",null,"disability_id",null, "236669", "noop","dd w20 gw ba_b", "noop"] };

// ---

te["case_school_level_tag_txa"] = { case_enum_tag_txa_:["category_ls-subcategories","w20 xx tt b05","fullname_","","school_level_id","236712",""] };

te["case_school_level_enum"] = { case_enum_ls:[null,"tag_cat-r_--o-case_school_level_tag_txa-%8-school_level_id-%0", "category_ls-subcategories", "c w17", "case_school_level_tag_txa","r_",null, "case_school_level_tag_txa",null,"school_level_id",null, "236712", "noop","dd w20 gw ba_b", "noop"] };

// --- 

te["case_school_type_tag_txa"] = { case_enum_tag_txa_:["category_ls-subcategories","w20 xx tt b05","fullname_","","school_type_id","236711",""] };

te["case_school_type_enum"] = { case_enum_ls:[null,"tag_cat-r_--o-case_school_type_tag_txa-%8-school_type_id-%0", "category_ls-subcategories", "c w17", "case_school_type_tag_txa","r_", null, "case_school_type_tag_txa",null,"school_type_id",null, "236711", "noop","dd w20 gw ba_b", "noop"] };

// ---

te["case_employment_tag_txa"] = { case_enum_tag_txa_:["category_ls-subcategories","w21 xx tt b05","fullname_","Select Work Status","employment_id","236648",""] };

te["case_employment_enum"] = { case_enum_ls:[null,"tag_cat-r_--o-case_employment_tag_txa-%8-employment_id-%0", "category_ls-subcategories", "c w18", "case_employment_tag_txa","r_", null, "case_employment_tag_txa",null,"employment_id",null, "236648", "noop","dd w21 gw ba_b", "noop"] };

// --- 

te["case_health_tag_txa"] = { case_enum_tag_txa_:["category_ls-subcategories","w21 xx tt b05","fullname_","Select Health Status","health_id","236660",""] };

te["case_health_enum"] = { case_enum_ls:[null,"tag_cat-r_--o-case_health_tag_txa-%8-health_id-%0", "category_ls-subcategories", "c w17", "case_health_tag_txa","r_", null, "case_health_tag_txa",null,"health_id",null, "236660", "noop", "dd w21 gw ba_b", "noop"] };

// ---

te["case_marital_sub"] = { c:
[
	{ arg:["","","362019,236657,236658,362020,236656"] }, // 362019-cohabiting,236657:divoced, 236658:married, 362020:separated, 236656:widow
	{ div:["",null] },
	{ ufn:["_case_sub",null,null] }
]};

te["case_marital_sel_fn"] = { arg:["fn","","_case_sub_sel"] }; 

te["case_marital_tag_txa"] = { case_enum_tag_txa_:["category_ls-subcategories","w21 xx tt b05","fullname_","Select Marital Status","marital_id","236654",""] };

te["case_marital_enum"] = { case_enum_ls:[null,"tag_cat-r_--o-case_marital_tag_txa-%8-marital_id-%0", "category_ls-subcategories", "c w17", "case_marital_tag_txa","r_", null, "case_marital_tag_txa",null,"marital_id",null, "236654", "noop","dd w21 gw ba_b", "case_marital_sel_fn"] };

// ---- 

te["case_shareshome_tag_txa"] = { case_enum_tag_txa_:["category_ls-subcategories","w20 xx tt b05","fullname_","","shareshome_id","236631",""] };

te["case_shareshome_enum"] = { case_enum_ls:[null,"tag_cat-r_--o-case_shareshome_tag_txa-%8-shareshome_id-%0", "category_ls-subcategories", "c w17", "case_shareshome_tag_txa","r_", null, "case_shareshome_tag_txa",null, "shareshome_id", null, "236631", "noop","dd w20 gw ba_b", "noop"] };

// ---

te["case_rela_tag_txa"] = { case_enum_tag_txa_:["category_ls-subcategories","w20 xx tt b05","fullname_","Select Relationship","relationship_id","236634",""] };

te["case_rela_enum"] = { case_enum_ls:[null,"tag_cat-r_--o-case_rela_tag_txa-%8-relationship_id-%0", "category_ls-subcategories", "c w17", "case_rela_tag_txa","r_", null, "case_rela_tag_txa",null, "relationship_id", null,  "236634", "noop", "dd w20 gw ba_b", "noop"] };

// -----------------------------

te["case_lang_tag_txa"] = { case_enum_tag_txa_:["category_ls-subcategories","w21 xx tt b05","fullname_","Select Language","lang_id","123",""] };

te["case_lang_enum"] = { case_enum_ls:[null,"tag_cat-r_--o-case_lang_tag_txa-%8-lang_id-%0", "category_ls-subcategories", "c w18", "case_lang_tag_txa","r_", null, "case_lang_tag_txa", null, "lang_id", null, "123", "noop", "dd w21 gw ba_b", "noop"] };

// ---

te["case_tribe_tag_txa"] = { case_enum_tag_txa_:["category_ls-subcategories","w21 xx tt b05","fullname_","Select Tribe","tribe_id","133",""] };

te["case_tribe_enum"] = { case_enum_ls:[null,"tag_cat-r_--o-case_tribe_tag_txa-%8-tribe_id-%0", "category_ls-subcategories", "c w17", "case_tribe_tag_txa","r_", null, "case_tribe_tag_txa",null, "tribe_id",null,  "133", "noop", "dd w21 gw ba_b", "noop"] };

// ---

te["case_nationality_tag_txa"] = { case_enum_tag_txa_:["category_ls-subcategories","w21 xx tt b05","fullname_","Select Nationality","nationality_id","126",""] };

te["case_nationality_enum"] = { case_enum_ls:[null,"tag_cat-r_--o-case_nationality_tag_txa-%8-nationality_id-%0", "category_ls-subcategories", "c w17", "case_nationality_tag_txa","r_", null, "case_nationality_tag_txa",null,"nationality_id",null, "126", "noop", "dd w21 gw ba_b", "noop"] };

// ---

te["case_national_id_type_tag_txa"] = { case_enum_tag_txa_:["category_ls-subcategories","w21 xx tt b05","fullname_","Select ID Type","national_id_type_id","362409",""] };

te["case_national_id_type_enum"] = { case_enum_ls:[null,"tag_cat-r_--o-case_national_id_type_tag_txa-%8-national_id_type_id-%0", "category_ls-subcategories", "c w17", "case_national_id_type_tag_txa","r_", null, "case_national_id_type_tag_txa",null,"national_id_type_id",null,  "362409", "noop", "dd w21 gw ba_b", "noop"] };

// ---

te["case_not_in_school_tag_txa"] = { case_enum_tag_txa_:["category_ls-subcategories","w62 xx tt b05","fullname_","Select Reason","not_in_school_id","362466",""] };

te["case_not_in_school_enum"] = { case_enum_ls:[null,"tag_cat-r_--o-case_not_in_school_tag_txa-%8-not_in_school_id-%0", "category_ls-subcategories", "c w59", "case_not_in_school_tag_txa","r_", null, "case_not_in_school_tag_txa",null,"not_in_school_id",null,  "362466", "noop", "dd w62 gw ba_b", "noop"] };

// ---

te["case_sex_tag_txa"] = { case_enum_tag_txa_:["category_ls-subcategories","w21 xx tt b05","fullname_","Select Gender","sex_id","120",""] };

te["case_sex_enum"] = { case_enum_ls:[null,"tag_cat-r_--o-case_sex_tag_txa-%8-sex_id-%0", "category_ls-subcategories", "c w18", "case_sex_tag_txa","r_", null, "case_sex_tag_txa",null,"sex_id",null,  "120", "noop", "dd w21 gw ba_b", "noop"] };

// ---

te["case_age_tag_txa"] = { case_enum_tag_txa_:["category_ls-subcategories","w21 xx tt b05","fullname_","Select Age","age_group_id","101",""] };

te["case_age_enum"] = { case_enum_ls:[null,"tag_cat-r_--o-case_age_tag_txa-%8-age_group_id-%0", "category_ls-subcategories", "c w18", "case_age_tag_txa","r_", null, "case_age_tag_txa",null, "age_group_id",null,   "101", "noop", "dd w21 gw ba_b", "noop"] };

// ----

te["case_category_lsh_root"] = { c:
[
	{ div:["y02","va"], ac:["","category_lsh-subcategories","_ne","xx y gws cb","#"], c:[ { arg:["category_id","",":k:subcategories_k:category_id:2"] } ] },
	{ p:["l20","vd"], category_lsh:[] }
]}

te["case_category_sub"] = { c:
[
	{ arg:["","","362263:,362271:"] }, //  // 362263:physical violence, 362271:sexual violence
	{ div:[] },
	{ ufn:["_case_sub",null,null] }
]};

te["case_category_sel_fn"] = { arg:["fn","","_case_sub_sel"] }; 

te["case_inquiry_tag_txa"] = { case_enum_tag_txa_:["category_ls-subcategories","w38 xx tt b05","fullname_","Select Category","case_category_id","362305","1,2,3,4"] };
te["case_inquiry_enum"] = { case_enum_lsh:["x y","Inquiry Category","*","tag_cat-r_--o-case_inquiry_tag_txa-%8-case_category_id-%0", "c w37", "case_inquiry_tag_txa","r_", 
":v:cases:case_category_id", "case_inquiry_tag_txa",":v:cases:case_category","case_category_id"," %0",   
"case_category_lsh_root-subcategories","362305", "dd w60 gw ba_b","case_category_sel_fn"] };

te["case_counseling_tag_txa"] = { case_enum_tag_txa_:["category_ls-subcategories","w38 xx tt b05","fullname_","Select Category","case_category_id","361944","1,2,3,4"] };
te["case_counseling_enum"] = { case_enum_lsh:["x y","Counseling Category","*","tag_cat-r_--o-case_counseling_tag_txa-%8-case_category_id-%0", "c w37", "case_counseling_tag_txa","r_", ":v:cases:case_category_id",  "case_counseling_tag_txa",":v:cases:case_category","case_category_id"," %0",  
"case_category_lsh_root-subcategories","361944", "dd w60 gw ba_b","case_category_sel_fn"] };

te["case_abuse_tag_txa"] = { case_enum_tag_txa_:["category_ls-subcategories","w38 xx tt b05","fullname_","Select Category","case_category_id","87","2,3,4"] };
te["case_abuse_enum"] = { case_enum_lsh:["x y","Abuse Category","*","tag_cat-r_--o-case_abuse_tag_txa-%8-case_category_id-%0", "c w37", "case_abuse_tag_txa","r_", ":v:cases:case_category_id","case_abuse_tag_txa",":v:cases:case_category","case_category_id"," %0",  
"case_category_lsh_root-subcategories","87", "dd w60 gw ba_b","case_category_sel_fn"] };

// ----

te["case_txt_"] = { c:
[
	{ s:["x y",null] },
	{ p:["gws bd h03","o"], c:[ { input:[null,"",null,null,"",""] } ] },
	{ span:["g","",null] }, // input placeholder already in forms
]};
	
// ----

te["case_yesno_r"] = { c:
[
	{ input:["g","",null,"%0","radio","%9"] },
	{ ac:["c rg rc r ay bd_",null,"_opt","x cb",""], c:
	[
		{ div:["c w01_ t"], s:["opt",""] },
		{ s:["c x y wm05",null] },
		{ div:["e"] }			
	]}
]};

// ---

te["case_ed_incidence_counseling_loc"] = { case_txt_:["Which organisation was s/he referred to?","gws w30 x tt b05","counseling_org",":v:cases:counseling_org",""] };

te["case_ed_incience_hiv_result_art"] = { c:
[
	{ s:["x y ","Has the client been initiated on ART?"] },
	{ p:["","o"], c:
	[
		{ uchk:["case_yesno_r",":v:cases:is_art_given","yesno","",  "is_art_given",""," %2"] },
		{ div:["e"] }		
	]}
]};

te["case_ed_incience_hiv_result_pep"] = { c:
[
	{ s:["x y ","Was PEP Administered?"] },
	{ p:["","o"], c:
	[
		{ uchk:["case_yesno_r",":v:cases:is_pep_given","yesno","", "is_pep_given",""," %2"] },
		{ div:["e"] }		
	]}
]};

te["case_ed_incidence_hiv_result"] = { c:
[
	{ s:["x y ","What is the Result?"] },
	{ p:["","o"], c:
	[
		{ uchk:["case_yesno_r",":v:cases:hiv_test_result","case_hivra","", "hiv_test_result"," %4"," %1"] },
		{ div:["e"] }		
	]},
	{ p:["abs t15","hivra"], u:[":v:cases:hiv_test_result::case_hivra:3"] },
]};

te["case_ed_incidence_where"] = { c:
[
	{ case_txt_:["Where was the Incidence Reported?","gws w35 x tt b05","incidence_location",":v:cases:incidence_location","Enter Incidence Location"] },
	{ case_txt_:["Incidence Police Ref. No.","gws w35 x tt b05","incidence_ref_no",":v:cases:incidence_ref_no","Enter Police Ref No."] }
]};

te["case_ed_incidence"] = { c:
[
	{ div:["t15"], c:
	[
		{ div:["c w35"], c:
		[
			{ s:["x y","When did the incident take place?"] },
			{ li:["w20 gws bd","va"], c:[ { div:[""], ev:["_dd"], c: // kf_d:["Date"," :d:dmy:0: ","chan_ts",":k:calls_f:chan_ts","chan_ts",":k:calls_f:chan_ts"] },
			[					
				{ p:["c w16 x t03","o"], c:[ { p:["","calv"], ucalv:[" :d:dmy:0: ","incidence_when",":v:cases:incidence_when"] } ] }, 
				{ div:["d w02 x y content-hidden_"],  c:[ { div:["h02 w02 awb"] } ] },
				{ div:["d w02 x y content-shown_"],  c:[ { div:["h02 w02 awt"] } ] },
				{ div:["e"] }
			]} ]},
			{ div:["dd w21 sh xx b10 ba mtn1 gw","vdd"], ev:["_undd"], c:
			[ 
				{ div:[], c:
				[
					{ ucal:["incidence_when",":v:cases:incidence_when","noop","1","", ""] },
					{ div:["e"] },
				]}
			]}
        	]},
        	{ div:["e"] }
	]},
	
	{ div:["t15","inci"], c:
	[
        	{ div:["c w35"], c:
		[
			{ s:["l y","Was the Incident Reported?"] },
			{ p:["","o"], c:
			[
				{ uchk:["case_yesno_r",":v:cases:is_incidence_reported","case_incw","",  "is_incidence_reported"," %4"," %1"] },
				{ div:["e"] }		
			]}
		]},
		{ p:["d w35 ll","incw"], u:[":v:cases:is_incidence_reported::case_incw:3"] },
		{ div:["e"] }
	]},
	
	{ div:["t15","hivt"], c:
	[
		{ div:["c w35"], c:
		[
			{ s:["x y ","Has the Client been tested for HIV?"] },
			{ p:["","o"], c:
			[
				{ uchk:["case_yesno_r",":v:cases:is_hiv_tested","case_hiv_tested","",  "is_hiv_tested"," %4"," %1"] },
				{ div:["e"] }		
			]}
		]},
		{ p:["d w35 ll","hivre"], u:[":v:cases:is_hiv_tested::case_hiv_tested:3"] },
		{ div:["e"] }
	
	]},
	{ div:["t15"], c:
	[
		{ div:["c w35"], c:
		[
			{ s:["x y ","Was ECP provided to prevent Un-intended pregnancies? "] },
			{ p:["","o"], c:
			[
				{ uchk:["case_yesno_r",":v:cases:is_ecp_given","yesno","",  "is_ecp_given",""," %2"] },
				{ div:["e"] }		
			]}
		]},
	
		{ div:["e"] }	
	]},
	
	{ div:["y15","cou"], c:
	[
		{ div:["c w35"], c:
		[
			{ s:["x y ","Did the client get counselling / referred for Counselling and further psycho-social support?"] },
			{ p:["","o"], c:
			[
				{ uchk:["case_yesno_r",":v:cases:is_counselling_given","case_coloc","",  "is_counselling_given"," %4"," %1"] },
				{ div:["e"] }		
			]}
		]},
		{ p:["d w35 ll","coloc"], u:[":v:cases:is_counselling_given::case_coloc:3"] },
		{ div:["e"] }	
	]}
	
]};

te["case_ed_medical_exam"] = { c:
[
	{ div:["t15"], c:
	[
		{ div:["c w30"], c:
		[
			{ s:["x y","Has the client received medical examination?"] },
			{ p:["","o"], c:
			[
				{ uchk:["case_yesno_r",":v:cases:is_medical_exam_done","yesno","",  "is_medical_exam_done",""," %2"] },
				{ div:["e"] }		
			]}
		]},
		{ div:["e"] }
	]}
]};

te["case_ed_sub_362271:"] = { div:["xx w75_ ba_ mt15"], c: // sexual abuse ,
[
	{ case_ed_medical_exam:[] },
	{ case_ed_incidence:[] }
]};

te["case_ed_sub_362263:"] = { div:["xx w75_ ba_ mt15"], c: // physical abuse
[
	{ case_ed_medical_exam:[] }
]};

te["case_ed_sub_362009"] = { div:["t15"], c: // 362009:other
[
	{ arg:["","","362009"] },
	// { div:["w01 tt bb2_b abs"] },
	{ div:["ll"], case_txt_:["Specify Other Referal","gws w30 x tt b05","specify_referal",":v:cases:specify_referal",""] }
]};

te["case_ed_sub_362042"] = { div:["t15"], c: // 362042:others
[
	{ arg:["","","362042"] },
	{ div:["w01 tt bb2_b abs"] },
	{ div:["ll"], case_txt_:["Specify Other Service","gws w30 x tt b05","specify_service",":v:cases:specify_service",""] }
]};

te["case_ed_sub_362036"] = { div:["t15"], c: // 362036:report_to_police
[
	{ arg:["","","362036"] },
	{ div:["w01 tt bb2_b abs"] },
	{ div:["ll"], case_txt_:["Enter REF/CRB Number","gws w30 x tt b05","police_ob_no",":v:cases:police_ob_no","Enter REF/CRB Number"] }
]};

te["case_ed_sub_117"] = { div:["t15","_sub_"], c: // 117:referal
[
	{ arg:["","","117"] },
	{ div:["w01 tt bb2_b abs"] },
	{ div:["ll"], case_referal_enum:["Referals",":v:cases:referals"] },
	{ case_referal_sub:[":v:cases:referals","ed"] }
]};


te["case_ed_justice"] = { div:["tt"],  c:
[
	{ div:["c w20 r20"], case_justice_enum:["State in Justice System",":v:cases:justice_id",":v:cases:justice"," %0"] },
	{ div:["c w20"], case_assessment_enum:["General Case Assessment",":v:cases:assessment_id",":v:cases:assessment"," %0"] },
	{ div:["e"] }
]};

// -----

te["case_attachment_"] = { div:["gws mb bd","va"], c:
[
	{ div:["c w37","va"], ac:["","files","_file_download","x cb",""], c:
	[
		{ s:["c w28 x y",null] },
		{ s:["d w06 x y s tr",null] }, 
		{ arg:["",".id",null] }, { arg:["","file","1"] } 
	]},
	{ arg:["","is_delete","1"] },
	{ arg:["o",null,null] },
	{ ac:["d ao ve_",null,null,"x07 y cd tc n bdr ","&Cross;"] },
	//{ ac:["d x t aa","","_mvup","h02 w02 awt",""] },
	//{ ac:["d x t aa","","_mvdown","h02 w02 awb",""] },
	{ div:["e"], arg:["o","file_id",null] }
]};

te["case_attachment"] =  { case_attachment_:[":v:attachments:file_name",":v:attachments:file_size",":v:attachments:file_id",  "attachment_id","%0","attachment_del-attachments","_del",  ":v:attachments:file_id"] };

// te["case_attachment_new-x"] = { case_attachment_:[":v:files:name",":v:files:size","%0",  "","", "","_rm", "%0"] }; // skipped

te["case_attachment_upload"] = { div:["g","va"], c:
[
	{ div:["ba mb"], c:
	[ 
		{ input:["g","case_attachment_new-files","file[]","","file"], ev:["","_file_upload"] }, 
		{ s:["c xx y07 gw cb",""] },
		{ ac:["d x y02","","_rm","x y n","&Cross;"] },
		{ p:["d x y02","nb"], s:["x y go cw","Uploading ..."] }, // todo: show progress
		{ div:["e"] },
	]},
	{ div:["","case_attachment-attachments"], c:
	[
		{ p:["","o"], arg:["","case_id","%12"] }
	]}
]};

te["case_attachments"] = { c:
[
	{ s:["x y b","Related Files"] },
	{ div:["","attachments"], c:
	[
		{ p:["t01 e","a"], u:["case_attachment","attachments"] },
		{ ac:["c ag","case_attachment_upload","_file_dialog","x04 y04 bd32 w01_ b tc cb b gws h3","+"], c:
		[ 
			{ div:[], c:[ { arg:["case_id-12","","%0"] } ] }
		]},
		{ div:["e"] }
	]}
]};

// -----

te["case_type_ls_r"] = { div:[], c:
[
	{ input:["g","","case_category_root_id","%0","radio","%9"] },
	{ ac:["rg rc r ay bd_","","_opt","x cb y",""], c:
	[
		{ div:["c w01_ t"], s:["opt",""] },
		{ s:["c x y ","%1"] },
		{ div:["e"] }			
	]}
]};

te["case_update_type_"] = { div:["w50 ma bd sh__ gw"], c:
[
	{ div:["xx t08 bb_"], c:
	[
		{ s:["c x y n b","Change Case-Type"] },
		{ ac:["d ay","","_vpclose","x y bd_ h3 cb","&Cross;"] },
		{ div:["e"] }
	]},
	{ div:["tt x15"], c:
	[
		{ s:["c x y h3 b","UCHL -"] },
		{ s:["c x y h3 b","%0"] },		
		{ div:["e"] }
	]},
	{ div:["","ve"], s:["t x15",""], c:
	[
		{ div:["y"], c:[ { p:["c w55","nb"], u:["nb","cases_nb"] }, { div:["e"] } ] },
		{ p:["","o"], uchk:["case_type_ls_r",":v:cases:case_category_root_id","case_type"] },
		{ div:["yy"], c:
		[	
			{ ac:["c btn w15 t30 b05 ao",null,"_postj_case_vp","y gb cw tc bd ","Save"] },
			{ div:["c savl w15 ll t30 b05"], s:["y go cw tc bd","Saving ..."] },
			{ p:["e","o"], c:
			[ 
				{ arg:["",".id","%0"] } ,
				{ arg:["","case_category_id","0"] } 
			]},
			{ div:["e"] }
		]}
	]}
]};

te["followup_update_type"] = { case_update_type_:["followup_update_type-followups"] };

te["case_update_type"] = { case_update_type_:["case_update_type-cases"] };

te["case_update_"] = { div:["w64 ma bd sh__ gw"], c:
[
	{ div:["xx t08 bb_"], c:
	[
		{ s:["c x y n b","Case Update"] },
		{ ac:["d ay","","_vpclose","x y bd_ h3 cb","&Cross;"] },
		{ div:["e"] }
	]},
	{ div:["tt x15"], c:
	[
		{ s:["c x y h3 b","UCHL -"] },
		{ s:["c x y h3 b","%0"] },		
		{ div:["e"] }
	]},
	{ div:["","ve"], s:["t x15",""], c:
	[
		{ div:["y"], c:[ { p:["c w55","nb"], u:["nb","cases_nb"] }, { div:["e"] } ] },
		
		{ div:["t"], c:
		[
			{ s:["x y","Case Plan"] },
			{ p:["","o"], c:[ { textarea:["gws bd w61 h11 xx y08","","plan","","Enter Case Plan"] } ] } // :v:cases:plan
		]},
		
		{ u:[":v:cases:case_category_root_id::case_type:3"] },
		
		{ div:["t15"], c:
		[
			{ div:["c w20 r20"], case_priority_enum:["x y","Priority","*",":v:cases:priority"] },
			{ div:["c w20 r20"], case_status_enum:["x y","Status","*",":v:cases:status"] },
			{ div:["c w20"], case_escalated_to_enum:["Escalated To",":v:cases:escalatedto_id",":v:cases:escalatedto"," %0"] },
			{ div:["e"] }
		]},
		
		{ div:["yy"], c:
		[	
			{ ac:["c btn w18 t30 b05 ao",null,"_postj_case_vp","y gb cw tc bd ","Update"] },
			{ div:["c savl w18 ll t30 b05"], s:["y go cw tc bd","Updating ..."] },
			{ p:["e","o"], c:[ { arg:["",".id","%0"] }, { arg:["","case_id","%0"] } ] },
			{ div:["e"] }
		]}
	]}
]};

te["followup_update"] = { case_update_:["followup_update-followups"] };

te["case_update"] = { case_update_:["case_update-cases"] };

te["case_form_col_1"] = { c:
[
	{ div:["t15","_sub_"], c:
	[
		{ div:[], c:
		[	
			{ div:["c w42 r20"], u:[":v:cases:case_category_root_id::case_type:6"] },
			{ div:["d w30"], c:
			[
				{ s:["x y","Is Case GBV Related?"] },
				{ p:["","o"], c:
				[
					{ uchk:["case_yesno_r",":v:cases:gbv_related","yesno","",   "gbv_related",""," %2"] },
					{ div:["e"] }		
				]}
			]},
			{ div:["e"] }
		]},
		{ case_category_sub:[":v:cases:case_category_fullname_id","ed"] },
	]},

	{ div:["tt"], c:
	[
		{ div:[], c:
		[
			{ s:["c x y","Case Narrative"] },
			{ s:["c t h2 cr b","*"] },
			{ div:["e"] }
		]},
		{ p:["","o"], c:[ { textarea:["gws bd w73 h11 xx y08","","narrative",":v:cases:narrative","What Really Happened?"] } ] }
	]},
	
	{ div:["tt"], c:
	[
		{ div:[], c:
		[
			{ s:["c x y","Case Plan"] },
			{ s:["c t h2 cr b","*"] },
			{ div:["e"] }
		]},
		{ p:["","o"], c:[ { textarea:["gws bd w73 h11 xx y08","","plan",":v:cases:plan","Enter Case Plan"] } ] }
	]},
	
	{ u:[":v:cases:case_category_root_id::case_type:3"] },
	
	{ div:["t15"], c:
	[
		{ div:["c w20 r20"], case_priority_enum:["x y","Priority","*",":v:cases:priority"] },
		{ div:["c w20 r20"], case_status_enum:["x y","Status","*",":v:cases:status"] },
		{ div:["c w29"], case_escalated_to_enum:["Escalated To",":v:cases:escalatedto_id",":v:cases:escalatedto"," %0"] },
		{ div:["e"] }
	]}
]};

te["case_form_col_0"] = { c:   
[
	{ div:[""], u:[null] }, // reporter details
	
	{ p:["","o"], c:
	[
		{ arg:["","","%0"] }, // case_id 
		{ input:["g","","is_reporter_client","1","checkbox",":v:cases:is_reporter_client::reporter_is_client:6"] },
		{ ac:["r ay","","_post_reporter_is_client","h01_ x y07 cb",""], c:
		[ 
			{ div:["c w01_"], s:["chk",""] },
			{ s:["c x07 h02","Is Reporter Client?"] },
			{ div:["e"] }
		]},
		{ div:[] } // is reporter client nb space
	]},
		
	{ div:["t15","clients"], case_vw_client:[] }, // client details
	
	{ div:["t15","perpetrators"], case_vw_perpetrator:[] }, // perp details
	
	{ div:["t15"], case_attachments:[] },
		
	{ div:["t15","_sub_"], c:
	[ 
		{ div:[], case_service_enum:["Services Offered",":v:cases:services"] },
		{ case_service_sub:[":v:cases:services","ed"] },
	]},
		
	{ div:["y15"], c:
	[
		{ div:[""], case_knowabout116_enum:["How did you know about 116?",":v:cases:knowabout116_id",":v:cases:knowabout116"," %0"] }
	]},
]};

te["case_form_"] = { c:
[
	{ div:["","ve"], c: // new case
	[	
		{ div:["x15 y15"], c:
		[
			{ div:["c"], c:
			[
				{ div:["","va"], s:["",""], c:
				[
					{ s:["c l t h2 b",null] },
					{ s:["c x t h2 b",":v:cases:case_category_root_id::case_type:4"] },
					{ s:["c ll t h2 b",null] },
					{ s:["c x t h2 b","%0"] },
					{ div:[null], ac:["c ay","","_dd","h02 w02 ba_b awb",""] },
					{ div:["e"] }
				]},
				{ div:["dd x y gw ba_b sh nd w18","vdd"], c:
				[
					{ div:["","va"], ac:["ay","","","xx y cb  n","New Abuse Case"], c:[ { arg:["","",""] } ] },
					{ div:["","va"], ac:["ay","","","xx y cb  n","New Counseling"], c:[ { arg:["","",""] } ] },
					{ div:["","va"], ac:["ay","","","xx y cb  n","New Inquiry"], c:[ { arg:["","",""] } ] },
					{ div:["","va"], ac:["ay","","","xx y cb  n","Followup"], c:[ { arg:["","",""] } ] },
				]}
			]},
			{ div:["e"] }
		]},
		
		{ div:["x15"], c:[ { p:["c w100","nb"], c:[ { u:["nb","cases_nb"] }, { u:["nb","newcase_nb"] } ] }, { div:["e"] } ] },
			
		{ div:["x15 w120_ t b30"], c:
		[
			{ div:["c w40_ r40"], case_form_col_0:[null] },
			{ div:["c w75_"], case_form_col_1:[] },
			{ p:["e","o"], c:
			[ 
				{ arg:["",".id","%0"] },
				{ arg:["",null,"%7"] }
			]},
		]},
		
		{ div:["y15 w107"], c:
		[
			{ div:["c x15 w20"], c:
			[
				
				{ ac:["btn ao","case_form-cases","_postj_case","y tc bd gb b cw",""], c:
				[ 
					{ span:["l","",null] }, 
				]}, 
				{ div:["savl"], s:["yy tc bd go b n cw",""], c:
				[ 
					{ span:["l","","Saving ..."] }, 
					{ span:["","","..."] },
				]}
			]},
			{ div:["c xx"], ac:["w12 ao","","_case_cancel","y04 tc cb bd ba_b","Cancel"] },  // on cancel notify that changes will be lost	
			{ p:["","o"], arg:["","disposition_id",DISPOSITION_ID_COMPLETE] }, // default to completed
			{ p:["e","_case_form_"] }
		]}
	]}
]};

te["followup_ed"] = { div:["gw x"], case_form_:["Followup","UCHL-","g", "case_vw_reporter","","Update"] };

te["case_ed"] = { div:["gw x"], case_form_:["EDIT","UCHL-","g", "case_vw_reporter","","Update"] };

te["case_new"] = { div:["gw x"], case_form_:["NEW","","c", "case_vw_reporter","case_category_root_id","Create",""] };

// ----------------------------------------------

te["case_vw_val_cat_tr"] = { c:
[
	{ s:["x tt tr v",null] },
	{ div:["x y n mh02 bd tr"], uval:[null,null] }
]};

te["case_vw_val_cat"] = { c:
[
	{ s:["x tt v",null] },
	{ div:["x y n mh02 bd"], uval:[null,null] }
]};

te["case_vw_val_tr"] = { c:
[
	{ s:["x tt v tr",null] },
	{ s:["x y n mh02 bd tr",null] }
]};

te["case_vw_val"] = { c:
[
	{ s:["x tt v",null] },
	{ s:["x y n mh02 bd",null] }
]};

te["case_vw_incience_hiv_result_pep"] = { case_vw_val:["Was PEP Administered?",":v:cases:is_pep_given::yesno:2"] };

te["case_vw_incience_hiv_result_art"] = { case_vw_val:["Has the client been initiated on ART?",":v:cases:is_art_given::yesno:2"] };

te["case_vw_incidence_hiv_result"] = { c:
[
	{ case_vw_val:["What is the Result?",":v:cases:hiv_test_result::case_hivra:1"] },
	{ p:["abs t15","hivra"], u:[":v:cases:hiv_test_result::case_hivra:2"] },
]};

te["case_vw_incidence_counseling_loc"] = { case_vw_val:["Which organisation was s/he referred to?",":v:cases:counseling_org"] };

te["case_vw_incidence_where"] = { c:
[
	{ case_vw_val:["Where was the Incidence Reported?",":v:cases:incidence_location"] },
	{ case_vw_val:["Incidence Police Ref. No.",":v:cases:incidence_ref_no"] }
]};

te["case_vw_incidence"] = { c:
[
	{ div:["t15"], c:
	[
		{ div:["c w30"], case_vw_val:["When did the incident take place?",":v:cases:incidence_when:d:dmy:"] }, //
        	{ div:["e"] }
	]},
	
	{ div:["t15","inci"], c:
	[
        	{ div:["c w30"], case_vw_val:["Was the Incident Reported?",":v:cases:is_incidence_reported::case_incw:1"] },
		{ p:["c w30 ll","incw"], u:[":v:cases:is_incidence_reported::case_incw:2"] },
		{ div:["e"] }
	]},
	
	{ div:["t15","hivt"], c:
	[
		{ div:["c w30"], case_vw_val:["Has the Client been tested for HIV?",":v:cases:is_hiv_tested::case_hiv_tested:1"] },
		{ p:["c w30 ll","hivre"], u:[":v:cases:is_hiv_tested::case_hiv_tested:2"] },
		{ div:["e"] }
	]},
	{ div:["t15"], c:
	[
		{ div:["c w30"], case_vw_val:["Was ECP provided to prevent Un-intended pregnancies?",":v:cases:is_ecp_given::yesno:2"] },
		{ div:["e"] }	
	]},
	
	{ div:["t15","cou"], c:
	[
		{ div:["c w30"], case_vw_val:["Did the client get counselling / referred for Counselling and further psycho-social support?",":v:cases:is_counselling_given::case_coloc:1"] },
		{ p:["c w30 ll","coloc"], u:[":v:cases:is_counselling_given::case_coloc:2"] },
		{ div:["e"] }	
	]}
]};

te["case_vw_medical_exam"] = { c:
[
	{ div:["t15"], c:
	[
		{ div:["c w30"], case_vw_val:["Has the client received medical examination?",":v:cases:is_medical_exam_done::yesno:2"] },
		{ div:["e"] }
	]}
]};

te["case_vw_sub_362271:"] = { c: // sexual abuse ,
[
	{ case_vw_medical_exam:[] },
	{ case_vw_incidence:[] }
]};

te["case_vw_sub_362263:"] = { c: // physical abuse
[
	{ case_vw_medical_exam:[] }
]};

te["case_vw_category"] = { c:
[
	{ div:[], c:
	[			
		{ div:["c w41"], case_vw_val_cat:["Case Category","",":v:cases:case_category"] },
		{ div:["d w19"], case_vw_val_tr:["Is Case GBV Related?",":v:cases:gbv_related::yesno:2"] },
		{ div:["e"] }
	]},
	{ case_category_sub:[":v:cases:case_category_fullname_id","vw"] },
]};


te["case_vw_sub_362009"] = { div:["tt"], c: // 362009:other
[
	{ case_vw_val:["Specify Other Referal",":v:cases:specify_referal"] }
]};

te["case_vw_sub_362042"] = { div:["l tt bl2_b"], c: // 362042:others
[
	{ case_vw_val:["Specify Other Service",":v:cases:specify_service"] }
]};

te["case_vw_sub_362036"] = { div:["tt"], c: // 362036:report_to_police
[
	{ case_vw_val:["Police REF/CRB Number",":v:cases:police_ob_no"] }
]};

te["case_vw_sub_117"] = { div:[""], c: // 117:referal
[
	{ s:["x tt b","Referals"] },
	{ div:["r05 b05 n"], c:
	[ 
		{ uchk:["tagv",":v:cases:referals","","",  "x y bd gws"," %1"] }, 
		{ div:["e"] }
	]},
	{ case_referal_sub:[":v:cases:referals","vw"] },
]};

// ---

te["case_notif_del"] = { div:["gp"], c:
[ 
	{ s:["c x y cr","Deleted"] }, 
	{ ac:["d","","_rm","x y","&Cross;"] },
	{ div:["e"] }
]};

te["case_vw_perpetrator_r_"] = { c:
[
	{ div:["g"], c:
	[
		{ div:["d"], c:
		[
			{ arg:["","is_delete","1"] },
			{ arg:["",".id","%0"] },
			{ ac:["abs ao ve_","perpetrator_del-perpetrators","_del","x07 y07 cb h3 cd","&Cross;"] },
		]},
		{ div:["e"] }
	]},
	{ li:["","perpetrator_vw_id-perpetrators-^"], ev:["_vp"], s:["gws bl2_b bdr cb mt",""], c:
	[
		{ s:["c xx t n",":v:perpetrators:contact_fullname"] },
		{ div:["d ll"], c:
		[
			{ arg:["","is_delete","1"] },
			{ arg:["",".id","%0"] },
			{ ac:["ao ve_ x03 y03","perpetrator_del-perpetrators","_del","x04 y02 cd bd n","&Cross;"] },
		]},
		{ div:["d xx t n"], uval:["",":v:perpetrators:contact_age"] },
		{ div:["d t n"], uval:["",":v:perpetrators:contact_sex"] },
		{ div:["e"], arg:["",".id","%0"] },
		{ div:["xx t b10 s cb"], uval:["",":v:perpetrators:contact_location"] }
	]},
	{ div:["g"], arg:["","","case_vw_perpetrator_r_-perpetrators-va--@"] },
	{ div:["g"], arg:["o","perpetrator_id","%0"] }
]};

te["case_vw_client_r__"] = {  c: // 
[
	{ div:["g"], c:
	[
		{ div:["d"], c:
		[
			{ arg:["","is_delete","1"] },
			{ arg:[":v:clients:is_reporter::reporter_is_client:3",".id","%0"] },
			{ ac:["abs ao","client_del-clients","_del","x07 y07 cb h3 cd","&Cross;"] },
		]},
		{ div:["e"] }
	]},
	{ li:["",null], ev:["_vp"], s:["gws bl2_b bdr cb mt",""], c:
	[
		{ s:["c xx t n",":v:clients:contact_fullname"] },
		{ div:["d ll"], c:
		[
			{ arg:["","is_delete","1"] },
			{ arg:[":v:clients:is_reporter::reporter_is_client:3",".id","%0"] },
			{ ac:["ao ve_ x03 y03","client_del-clients","_del","x04 y02 cd bd n","&Cross;"] },
		]},
		{ div:["d xx t n"], uval:["",":v:clients:contact_age"] },
		{ div:["d t n"], uval:["",":v:clients:contact_sex"] },
		{ div:["e"], arg:["",".id","%0"] },
		{ div:["b05"], c:
		[
			{ div:["xx y s"], uval:["",":v:clients:contact_location"] },
			{ div:["d s x03"], s:[":v:clients:is_reporter::reporter_is_client:4",":v:clients:is_reporter::reporter_is_client:5"] }, 
			{ div:["e"] }
		]}
	]},
	{ div:["g"], arg:["","","case_vw_client_r_-clients-va--@"] },
	{ div:["g"], arg:["o","client_id","%0"] }
]};
te["case_vw_client_r_"] = { case_vw_client_r__:["client_vw_id-clients-^"] };

te["case_vw_reporter_r_"] = {  c:
[
	{ ac:["ay","reporter_vw_id-reporters-^","_vp","x yy gws bl2_b bdr cb mt",""], c:
	[
		{ s:["c x n",":v:reporters:contact_fullname"] },
		{ div:["d n xx"], uval:["",":v:reporters:contact_age"] },
		{ div:["d n"], uval:["",":v:reporters:contact_sex"] },
		{ div:["e"], arg:["reporter_id",".id","%0"] },
		{ div:["x t s"], uval:["",":v:reporters:contact_location"] },
		
	]},
	{ div:["g"], arg:["","","case_vw_reporter_r_-reporters-va--@"] }
]};

te["case_vw_perpetrator_r"] = { div:["","va"], case_vw_perpetrator_r_:[] };

te["case_vw_client_is_reporter_r"] = { div:["","va"], case_vw_client_r__:["client_ed-clients-^"] };
te["case_vw_client_r"] = { div:["","va"], case_vw_client_r__:["client_vw_id-clients-^"] };

te["case_vw_reporter_r"] = { div:["","va"], case_vw_reporter_r_:[] };

te["case_vw_perpetrator"] = { c:
[
	{ div:[""], c:
	[
		{ s:["c x cb b","Perpetrator Details"] },
		{ div:["e"] }
	]},
	{ p:["","a"], u:["case_vw_perpetrator_r","perpetrators"] },
	{ div:["t ve_"], c:
	[
		{ div:["c"], c:
		[
			{ ac:["ag","case_perpetrator_new-r_-^","_vp","x04 y04 bd32 w01_ b tc cb b gws",""], c:
			[ 
				{ s:["h3","+"] }, 
				{ div:[], c:[ { arg:["case_id-40","","%0"] } ] } 
			]},
			{ div:["g"], arg:["","","case_vw_perpetrator_r-perpetrators-perpetrators-a"] }
		]},
		{ div:["e"] } 
	]}
]};

te["case_vw_client"] = { c:
[
	{ div:[], c:
	[
		{ s:["c x cb b","Client Details"] },
		{ div:["e"] }
	]},
	{ p:["","a"], u:["case_vw_client_r","clients"] },
	{ div:["t ve_"], c:
	[
		{ div:["c"], c:
		[
			{ ac:["ag","case_client_new-r_-^","_vp","x04 y04 bd32 w01_ b tc cb b gws",""], c:
			[ 
				{ s:["h3","+"] }, 
				{ div:[], c:[ { arg:["case_id-40","","%0"] } ] } 
			]},
			{ div:["g"], c:[ { arg:["","","case_vw_client_r-clients-clients-a"] } ] }
		]},
		{ div:["e"] }
	]}
]};

te["case_vw_reporter"] = { c:
[
	{ div:["t15"], c:
	[
		{ s:["c x t b cb ","Reporter Details"] },
		{ div:["e"] }
	]},
	{ div:["","a"], u:["case_vw_reporter_r","reporters"] },
]};

// ---

te["case_vw_knowabout116"] = { case_vw_val_cat:["Know About 116","",":v:cases:knowabout116"] };

te["case_vw_narrative"] = { c:
[
	{ s:["x tt v","Case Narrative"] },
	{ pre:["x y n mh02 bd w60","",":v:cases:narrative"] }
]};

te["case_vw_justice"] = { div:["tt"], c:
[
	{ div:["c w30 r10"], case_vw_val_cat:["Status in Justice System","",":v:cases:justice"] },
	{ div:["d w19"], case_vw_val_cat:["General Case Assessment","",":v:cases:assessment"] },
	{ div:["e"] }
]};

te["case_vw_col_1"] = { c:
[
	{ div:["tt"], case_vw_category:[] }, 
	{ div:["tt"], case_vw_narrative:[] },
	{ div:["tt"], c:
	[
		{ s:["x tt v","Case Plan"] },
		{ pre:["x y n mh02 bd w60","",":v:cases:plan"] }
	]},
	
	{ u:[":v:cases:case_category_root_id::case_type:2"] },
		
	{ div:["tt"], c:
	[
		{ div:["c w25 r10"], case_vw_val:["Priority",":v:cases:priority::case_priority:1"] }, 
		{ div:["c w15 r10"], case_vw_val:["Status",":v:cases:status::case_status:1"] }, 
		{ div:["d w19"],  case_vw_val_tr:["Escalated To",":v:cases:escalatedto"] },
		{ div:["e"] }
	]},
]};

te["case_vw_col_0"] = { c:
[
	{ div:[], case_vw_reporter:[] },
	{ div:["y cb s g"], c:
	[
		{ s:["c x y","Reporter"] },
		{ s:["c y",":v:cases:is_reporter_client::reporter_is_client:2"] },
		{ s:["c x y","Client"] },
		{ div:["e"] }
	]},
	
	{ div:["t20","clients"], case_vw_client:[] },
	
	{ div:["t20","perpetrators"], case_vw_perpetrator:[] },

	{ div:["t20"], case_attachments:[] },
	
	{ div:["tt"], c:
	[
		{ s:["x tt b","Services Offered"] },
		{ div:["r05 b05 n"], c:
		[ 
			{ uchk:["tagv",":v:cases:services","","",  "x y bd gws mr"," %1"] }, 
			{ div:["e"] } 
		]},
		{ case_service_sub:[":v:cases:services","vw"] }
	]},
	
	{ div:["yy"], case_vw_knowabout116:[] },
]};

te["case_vw_id_"] = { div:["section-to-print","va"], c: 
[	
	{ div:["x20 t15 g"], c:
	[
		{ s:["c y h2 b","UCHL -"] },
		{ s:["c x y h2 b","%0"] },
		{ div:["e"] }
	]},
	{ div:["x15 t15 b05","vb"], c:
	[
		{ div:["c x"], ac:["","","_uvwr","h3 x y bd16 gws micon cb","arrow_back"] },
		{ s:["c ll t07 h2 b","UCHL -"] },
		{ s:["c x t07 h2 b","%0"] },

		//{ div:["c xx y g"], s:["y h2 b bb5_b",":v:cases:case_category_root_id::case_type:4"] },
		{ div:["c l20 r05","va"], c:
		[ 
			{ input:["g","","case_vw_t","0","radio","1"] },
			{ ac:["ao tab","","_tab","x08 y04 h02 n gws bd cb",""], c:[ { s:["c micon h3","feed"] }, { s:["c xx s","Case Details"] }, { div:["e"] } ] }
		]},
		{ div:["c r05","va"],  c:
		[ 
			{ input:["g","","case_vw_t","1","radio"] },
			{ ac:["ao tab","","_tab","x08 y04 h02 n gws bd cb",""], c:[ { s:["c micon h3","history"] }, { s:["c xx s","Case History"] }, { div:["e"] } ] }
		]},
		{ div:["c r05"], c:
		[
			{ div:["w14 gws bd","va"], s:["",""], c:
			[
				{ div:["c w11","va"], c:
				[
					{ ac:["ao br_w",null,"_vp","x08 y04 h02 n gws bd cb",""], c:
					[ 
						{ s:["c micon h3","edit"] }, { s:["c xx s","Update"] }, { div:["e"], arg:["",".id","%0"] }
					]},
					{ div:["g"], c:[ { arg:["","",null] } ] } 
				]},	
				{ ac:["c ao","","_dd","x y04",""], c:[ { div:["h02 w02 awb"] }] },
				{ div:["e"] }
			]},
			{ div:["dd w14 gws mt3","vdd"], c:
			[
				{ div:["","va"], ac:["ao",null,"_u","xx y cb","Edit"], c:[ { arg:["",".id","%0"] } ] },
				{ div:["","va"], c:
				[
					{ ac:["ao",null,"_vp","xx y cb","Change Case Type"], c:[ { arg:["",".id","%0"] } ] },
					{ div:["g"], c:[ { arg:["","",null] } ] } 
				]}
			]}
		]},
		{ div:["c r05","va"], ac:["ao","","_print","x08 y04 h02 n gws bd cb",""], c:
		[ 
			{ s:["c micon h3","print"] }, { s:["c xx s","Print"] }, { div:["e"] } 
		]},
		{ div:["e"] }
	]},

	{ div:["x15 t15"], c:[ { p:["c l w100","nb"], c:[ { u:["nb","cases_nb"] }, { u:["nb","newcase_nb"] } ] }, { div:["e"] } ] },
		
	{ div:[], c:
	[
		{ div:[], c:
		[
			{ input:["g","","case_vw_tv","0","radio","1"] },
			{ div:["tabv x20 b20"], c:
			[
				{ div:["c w40 r50"], case_vw_col_0:[] },
				{ div:["c w61"], case_vw_col_1:[] },
				{ div:["e"] },
			]},
		]},
	
	 	{ div:[], c:
	 	[
			{ input:["g","","case_vw_tv","1","radio"] },
	 		{ div:["tabv x15","vs"], u:["case_history","case_activities_ctx"] }
	 	]},
	 	
	 	{ div:["print-only"], c:
		[ 
			{ div:["page-break"] },
			{ u:["case_reporter_vw_id_print","reporters"] },
			{ u:["case_client_vw_id_print","clients"] },
			{ u:["case_perpetrator_vw_id_print","perpetrators"] },
			{ div:["x15","vs"], u:["case_history","case_activities_ctx"] }
	 	]}
	 	
	 ]}
]};

te["followup_vw_id"] = { case_vw_id_:["followup_update-followups-^","followup_vw_id-followups-vf--@","followup_ed-followups-vf","followup_update_type-followups-^","followup_ed-followups-vf--@"] };

te["case_vw_id"] = { case_vw_id_:["case_update-cases-^","case_vw_id-cases-vf--@","case_ed-cases-vf","case_update_type-cases-^","case_ed-cases-vf--@"] };

te["case_vw"] = { div:["gw mmb bd"], c:
[
	{ div:["bb_"], c:
	[
		{ s:["c x15 yy n b","Case View"] },
		{ div:["d w09 x y"], c:
		[
			{ input:["g","","sbr","1","radio"] },
			{ ac:["d x","","_uvwr","x t07 h2 cb","&Cross;"] },
			{ s:["d x t07 s cb tc","Close"] },
			{ div:["e"] },
			{ p:["g abs","dispo"] }
		]},
		{ div:["e"] }
	]},
	{ div:["","vw"], c:
	[
		{ div:[] },
		{ div:["","vfvw"], case_vw_id:[] }
	]}
]};

// -------------------------------------------

te["case_location_lc_main"] = { category_lc_main_:["88","noop"] };
te["case_location_root_id"] = { arg:["root_id","","88"] };

te["case_category_lc_main"] = { category_lc_main_:["87,361944,362305","noop"] };
te["case_category_root_id"] = { arg:["root_id","","87,361944,362305"] };

// -------------------------------------------

te["case_f_tags"] = { c: 
[
	{ f:["CaseID",":k:cases_f:id",				" %0"," id"," "] },
	{ f:["Created On",":k:cases_f:created_on",		" :d:dmy:0: "," created_on"," "] },
	{ f:["Created By",":k:cases_f:created_by_id",		" %1"," created_by_id"," %1"] },
	{ f:["Category",":k:cases_f:case_category_id",		" %1"," case_category_id"," %1"] },
	{ f:["Priority",":k:cases_f:priority",			" ::case_priority:0:1"," priority"," %1"] },
	{ f:["Status",":k:cases_f:status",			" ::case_status:0:1"," status"," "] },
	{ f:["Escalated To",":k:cases_f:escalatedto_id",	" %1"," escalatedto_id"," %1"] },
	{ f:["Source",":k:cases_f:src",				" %0"," src"," "] },
	{ f:["Reporter Name",":k:cases_f:reporter_fullname",	" %0"," reporter_fullname"," "] },
	{ f:["Reporter Phone",":k:cases_f:reporter_phone",	" %0"," reporter_phone"," "] },
	{ f:["Reporter Location",":k:cases_f:reporter_location"," %0"," reporter_location"," "] },
	{ p:["g","o"], arg:["","_title",":k:cases_f:_title"] },
	{ div:["e"] }
]};

te["case_f"] = { div:["w55 ma bd sh__ y gw","vddvf"], ev:["_undd"], c: 
[
	{ s:["x20 yy b bb_","Filters"] },
	{ div:["x15 tt b20"], c:
	[
		{ div:["xx yy"], kf_s:["CaseID","id",":k:cases_f:id"] },
			
		{ div:["xx yy"], kf_d:["Created On"," :d:dmy:0: ","created_on",":k:cases_f:created_on","created_on",":k:cases_f:created_on"] },
		{ div:["xx yy"], kf_l:["Created By","tag_-r_--o--%5-user_id-created_by_id-%0-%5",   "user_lc_main-users",":k:cases_f:created_by_id", " %1","user_id","created_by_id"," %0"," %1", "noop"] },
		{ div:["xx yy"], kf_l:["Category","tag_-r_--o--%8-category_id-case_category_id-%0-%8",   "case_category_lc_main-subcategories",":k:cases_f:case_category_id", " %1","category_id","case_category_id"," %0"," %1", "case_category_root_id"] },
		{ div:["xx yy"], kf_c:["Priority","tag-r_--o--::case_priority:0:1-priority-%0",  ":k:cases_f:priority"," ::case_priority:0:1"," priority"," %0", 		":k:cases_f:priority","case_priority", " priority"," ::case_priority:0:1"," "] },		
		{ div:["xx yy"], kf_c:["Status", "tag-r_--o--::case_status:0:1-status-%0",  	":k:cases_f:status"," ::case_status:0:1"," status"," %0", 		":k:cases_f:status","case_status", " status"," ::case_status:0:1"," "] },
		{ div:["xx yy"], kf_l:["Escalated To","tag_-r_--o--%5-user_id-escalatedto_id-%0-%5",   "user_lc_main-users",":k:cases_f:escalatedto_id", " %1","user_id","escalatedto_id"," %0", " %1","noop"] },	
		{ div:["xx yy"], kf_c:["Source","tag-r_--o--::case_src:0:1-src-%0",  	":k:cases_f:src"," %0"," src"," %0", 		":k:cases_f:src","case_src", " src"," %0"," "] },		
		{ div:["xx yy"], kf_s:["Reporter Name","reporter_fullname",":k:cases_f:reporter_fullname"] },
		{ div:["xx yy"], kf_s:["Reporter Phone","reporter_phone",":k:cases_f:reporter_phone"] },
		//{ div:["xx yy"], kf_l:["Reporter Location","tag-r_--o--%8-location_id-%0",   "category_lc-subcategories",":k:cases_f:location_id"," %1"," location_id","root_id","88"] }
		{ p:["g","o"], arg:["","_title",":k:cases_f:_title"] }
	]},
	{ vp_apply:["case_f_tags-cases_f"] }
]};

// ----------------------------------------------

te["case_footer"] = { div:["x gw ba"], c:
[
	{ div:["d y07"], pg:["pgto","case_list-cases"," dh","da dl","case_list-cases"," dh","da dr"] },
	{ div:["e"] }
]};

te["case_r"] ={ ac:["ay w200","case_vw-cases","_vwr","cb gw",""], c:
[
	{ div:["c w10"], s:["tt b05 h01_  xx","%0"] },
	{ div:["c w10"], s:["tt b05 h01_  xx","%2"] },
	{ div:["c w16"], s:["tt b05 h01_  xx",":d:dmyhnr:1: "] },
	{ div:["c w10"], s:["tt b05 h01_  xx",":v:cases:case_category_root_id::case_type:1"] },
	{ div:["c w25"], s:["tt b05 xx",""], uval:["",":v:cases:case_category"] }, // category
	{ div:["c w10"], s:["tt b05 h01_  xx",":v:cases:priority::case_priority:1"] },
	{ div:["c w08"], s:["tt b05 h01_  xx",":v:cases:status::case_status:2"] },
	{ div:["c w12"], s:["tt b05 h01_  xx",":v:cases:escalatedto"] },
	{ div:["c w10"], s:["tt b05 h01_ xx",":v:cases:src"] },
	{ div:["c w30"], s:["tt b05 xx",""], c:
	[
		{ s:["c",":v:cases:reporter_fullname"] },
		{ s:["c",","] },
		{ div:["c l"], uval:["",":v:cases:reporter_sex"] },
		{ s:["c",","] },
		{ div:["c l"], uval:["",":v:cases:reporter_age_group"] },
		{ div:["e"] }
	]},
	{ div:["c w50"], s:["tt b05 xx",""], uval:["",":v:cases:reporter_location"] },
	{ div:["e"], arg:["",".id","%0"] }
]};

te["case_k"] = { div:["w200 bt bb"], s:["",""], c: // activate filter ctx
[
	{ k_a:["c w10","case_rr-cases","cd st","Case ID","da db","id",":k:cases_k:id:2"] },
	{ k_a:["c w10","case_rr-cases","cd st","Created By","da db","created_by_id",":k:cases_k:created_by_id:2"] },
	{ k_a:["c w16","case_rr-cases","cd st","Created On","da db","created_on",":k:cases_k:created_on:2"] },
	{ k_a:["c w10","case_rr-cases","cd st","Type","da db","case_category_root_id",":k:cases_k:case_category_root_id:2"] },
	{ k_a:["c w25","case_rr-cases","cd st","Category","da db","case_category_id",":k:cases_k:case_category_id:2"] },
	{ k_a:["c w10","case_rr-cases","cd","Priority","da db","priority",":k:cases_k:priority:2"] },
	{ k_a:["c w08","case_rr-cases","cd","Status","da db","status",":k:cases_k:status:2"] },
	{ k_a:["c w12","case_rr-cases","cd","Escalated To","da db","source",":k:cases_k:escalatedto:2"] },
	{ k_a:["c w10","case_rr-cases","cd","Source","da db","source",":k:cases_k:src:2"] },
	{ k_a:["c w30","case_rr-cases","cd","Reporter","da db","reporter_phone",":k:cases_k:reporter_phone:2"] },
	{ k_a:["c w40","case_rr-cases","cd","Location","da db","reporter_location",":k:cases_k:reporter_location:2"] },
	{ div:["e"], c:
	[
		{ arg:["","reporter_fullname",":k:cases_k:reporter_fullname:2"] },
		{ arg:["","_title","%5"] }
	]}
]};

te["case_nb"] = { div:[], c:[ { u:["nb","cases_nb"] }, { div:["e"] } ] };

te["case_title"] = { div:[] }; 

te["case_list"] = { list:["case_title","case_nb","bl br ox","case_k","case_r","cases","case_footer"] };

te["case_main"] = { c:
[
	{ div:["yy","vb"], c:
	[
		{ div:["c"], c:
		[
			{ div:["","va"], s:["",""], c:
			[
				{ input:["g","","cases_t_","0","radio","1"] },
				{ ac:["c","case_main-cases-vftab","_u","x y cb b h2","::case_title:5:1"] }, 
				{ ac:["c t02 x ay","","_dd","h02 w02 ba_b awb",""] },
				{ div:["e"], arg:["","_title","%5"] }
			]},
			{ div:["dd x y gw ba sh nd w14","vdd"], c:
			[
				{ div:["","va"], ac:["ay","case_main-cases-vftab","_u","xx y cb  n","My Cases"], c:[ { arg:["","_title","my_cases"] } ] },

				{ div:["","va"], ac:["ay","case_main-cases-vftab","_u","xx y cb  n supervisor_","Escalated By Me"], c:[ { arg:["","_title","esca_by_me"] } ] },
				{ div:["","va"], ac:["ay","case_main-cases-vftab","_u","xx y cb  n supervisor_","Escalated To Me"], c:[ { arg:["","_title","esca_to_me"] } ] },	

				{ div:["","va"], ac:["ay","case_main-cases-vftab","_u","xx y cb  n casemanager_","Escalated By Me"], c:[ { arg:["","_title","esca_by_me"] } ] },
				{ div:["","va"], ac:["ay","case_main-cases-vftab","_u","xx y cb  n casemanager_","Escalated To Me"], c:[ { arg:["","_title","esca_to_me"] } ] },	
											
				{ div:["","va"], ac:["ay","case_main-cases-vftab","_u","xx y cb  n caseworker_","Escalated To Me"], c:[ { arg:["","_title","esca_to_me"] } ] },	

				// { div:["","va"], ac:["ay","case_main-cases-vftab","_u","xx y cb  n","Unread Cases"], c:[ { arg:["","_title","unread_cases"] } ] },
				{ div:["","va"], ac:["ay","case_main-cases-vftab","_u","xx y cb  n","All Cases"], c:[ { arg:["","_title","all_cases"] } ] },
				// { div:["","va"], ac:["ay","case_main-cases-vftab","_u","xx y cb  n","All Cases Today"], c:[ { arg:["","_title","all_cases_today"] } ] },
			]}
		]},
		{ div:["d","case_rpt-cases-@:1:0"], c: 
		[
			{ arg:["","","0"] },
			{ input:["g","","cases_t_","1","radio"] },
			{ li:["opto x ba gw bdr s cb","case_rpt_main"], ev:["_tabf"], c:
			[
				{ s:["c l t h3_ micon","bar_chart"] },
				{ s:["c xx y","Reports"] }, 
				{ div:["e"] }
			]}
		]},
		{ div:["d"], c: 
		[
			{ arg:["","","0"] },
			{ input:["g","","cases_t_","0","radio","1"] },
			{ li:["opto x bl bt bb gw bdl s cb","case_list-cases"], ev:["_tabf"], c:
			[
				{ s:["c l t h3_ micon","list"] },
				{ div:["c xx y","","List"] }, 
				{ div:["e"] }
			]}
		]},
		{ div:["d x15 ay"], ac:["","cases","_xlsx","x t01 bd_ cd s",""], c:
		[ 
			{ s:["c t04 h3_ micon","download"] },
			{ div:["c x y","","XLSX"] }, 
			{ div:["e"], arg:["","join","services,referals,clients,perpetrators"] }
		]},
		{ div:["d"], ac:["ay","case_f-cases_f","_vpf","x t01 cd s bd_",""], c:
		[ 
			{ s:["c t04 h3_ micon","filter_alt"] },
			{ div:["c x y","","Filter"] }, 
			{ div:["e"] }
		]},
		{ div:["e"], c:[ { arg:["","","case_list-cases"] }, { arg:["","","0"] }, { arg:["","","0"] }, { arg:["","",""] } ] }
	]},
	{ div:["x bd","vf"], c:[ { li:["","case_f-cases_f"], ev:["__vpf"], c:
	[
		{ p:["g","o"], arg:["","_title","%5"] }
	]} ]},
	{ div:[], c:
	[
		{ div:[], c:[ { input:["g","","cases_v","0","radio","1"] }, { p:["tabv yy","vt"], case_list:[] } ] },
		{ div:[], c:[ { input:["g","","cases_v","1","radio"] }, { p:["tabv","vt"] } ] },				
	]}
]};
	
te["cases"] = { c:
[
	{ div:["x25 tt s g","vb"], c:
	[
		{ div:["c"], tab:["cases_mt","0","1",  "x02 y mr1 cd tab","case_main-cases",  "","Cases"] },
		{ div:["e"] }
	]},
	{ div:[], c: // tabs
	[
		{ div:[], c:[ { input:["g","","cases_mv","0","radio","1"] }, { div:["tabv gw bd x15 yy mmb bd","vftab"], case_main:[] } ] },
		{ div:[], c:[ { input:["g","","cases_mv","1","radio"] }, { div:["tabv","vftab"] } ] },
		{ div:[], c:[ { input:["g","","cases_mv","2","radio"] }, { div:["tabv","vftab"] } ] },
		{ div:[], c:[ { input:["g","","cases_mv","3","radio"] }, { div:["tabv","vftab"] } ] },
		{ div:[], c:[ { input:["g","","cases_mv","4","radio"] }, { div:["tabv","vftab"] } ] },
	]}
]};


te["ufn_reporter_is_client"] = { ufn:["ufn_reporter_is_client"] };

function case_sub (p,v,r,m)
{
	var v_ = v.split (",");
	var a_ = p.lastChild.previousSibling.value.split (",");
	for (var i=0; i<v_.length; i++)
	{
		for (var j=0; j<a_.length; j++)
		{
			if (v_[i].substr (0,a_[j].length)==a_[j])
			{
				var t=("case_"+m+"_sub_"+a_[j]);
				if (p.lastChild.id) t=p.lastChild.id;
				console.log ("[sub] ("+t+") "+v_[i]+" "+a_[j])
				nd (p.lastChild, te[t], [], r, [0]);
				break;
			}
		}
	}
}

function _case_sub (el, u, a, r, m)
{
	case_sub (el, u[1], r, u[2]);
}

function _case_sub_sel  (el, r, f)
{
	var r_ = ra["r_"][0].slice(0);
	var p = __(el,"_sub_");
	p.lastChild.innerHTML = "";
	if (f==false) return;
	case_sub (p, r[9], r_, "ed");
}

function _case_sub_chk  (el, r, f)
{
	var p = __(el,"_sub_");
	if (f==false)
	{
		var coll = p.lastChild.childNodes; 
		for (var i=0; i<coll.length; i++) if (coll[i].firstChild.value==r[0]) { p.lastChild.removeChild (coll[i]); break; }
		return;
	}
	var r_ = ra["r_"][0].slice(0);
	case_sub (p, r[9], r_, "ed");
}

function _case_cancel ()
{
	var p_ = __(this,"vfvw");
	var p__ = __(this,"vw");
	var o = {};
	jso (p_.previousSibling, o); // reporter details
	if (!o.reporter_id)
	{
		jso (p_, o); 
		url (p_, "case_vw_id", "cases", (o[".id"]));
		return;
	}
	p__.firstChild.style.display = "block";
	p__.lastChild.innerHTML = "";
}

function ufn_reporter_is_client (el, u, a, r, m)
{
	var p = _(__(el,"o").nextSibling, "a");
	var el = nd (p, te["case_vw_client_is_reporter_r"], [], r, [0]);
	el.parentNode.parentNode.childNodes[1].click ();
}

function _post_reporter_is_client ()
{
	var f = chk (this.previousSibling)
	var p = __(this,"o");
	var o = { "is_reporter_client":"1" };
	this.previousSibling.checked = f;
	if (f==false)
	{
		var el = _( p.nextSibling, "is_reporter", "input"); // delete client
		// console.log (el)
		if (el) el.nextSibling.click ();
		return;
	}
	argv (p.previousSibling, o, "id");
	if (!o.reporter_id)
	{
		var p_ = __(this,"vfvw");
		var p__ = __(p_,"vw");
		jso (p__.childNodes[0], o, "name"); // reporter details
		// console.log ("+ check activity+")
	}
	o["case_id"] = this.previousSibling.previousSibling.value;
	url (this.nextSibling, "reporter_is_client", "clients", "", null, 2, o, "POST"); // create client (from reporter_id)
}

function postj_case (el, el_) 
{
	var u = el.id.split ("-");
	var p = __(el,"ve");
	var p_ = __(el_,"vfvw");
	var p__ = __(el_,"vw");
	var o = {};
	jso (p__.previousSibling.lastChild, o);  // channel details
	jso (p_.previousSibling, o); // reporter details
	jso (p,o); // case details
	url (p, u[0], u[1], o[".id"], null, 2, o, "POST");
}

function _postj_case (ev) { postj_case (this, __(this,"ve")); boo(ev); }

function _postj_case_vp (ev) { postj_case (this, elvp); boo(ev); }

/*
    { vftab    // activity_vw_id (case_new|ed)
    [
       { -toolbar- }
       { vw
       [
          { reporter }
          { case_btns }
          { vfvw }
       ]}
    ]}
    
    { vftab    // case_vw
    [
        { -toolbar- } 
        { vw
        [
        	vfwv
        ]}
    ]}
    
    
    { vftab    // activity_vw_id (case_followup)
    [
       { -toolbar- }
       { vw
       [
          { reporter }
          { 
          [
              {}
              { vftab } // case_vw_id 
          ]}
       ]}
    ]}

*/
