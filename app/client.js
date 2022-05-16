
rk["case_client_disabled_refered"] = ["1","0"];
re["case_client_disabled_refered"] = 
{ 
"":	["",	"","noop","noop","noop-r_va-sub"],
"0":	["0",	"No","noop","noop","noop-r_-va-sub"],
"1":	["1",	"Yes","case_client_vw_disabled_services","case_client_disabled_services","case_client_disabled_services-r_-va-sub"],
};

rk["case_client_is_disabled"] = ["1","0"];
re["case_client_is_disabled"] = 
{ 
"":	["",	"","noop","noop","noop-r_va-sub"],
"0":	["0",	"No","noop","noop","noop-r_-va-sub"],
"1":	["1",	"Yes","case_client_vw_disabled","case_client_disabled","case_client_disabled-r_-va-sub"],
};

rk["case_client_in_school"] = ["1","0"];
re["case_client_in_school"] = 
{ 
"":	["",	"","noop","noop","noop-r_-va-sub"],
"0":	["0",	"No","case_client_vw_in_school_no","case_client_in_school_no","case_client_in_school_no-r_-va-sub"],
"1":	["1",	"Yes","case_client_vw_in_school_yes","case_client_in_school_yes","case_client_in_school_yes-r_-va-sub"],
};

// --------------------------------------

te["case_client_disabled_refered_r"] = { c:
[
	{ input:["g","","is_disabled_refered","%0","radio","%9"] },
	{ ac:["c rg rc r ay bd_","%4","_opt","xx cb",""], c:
	[
		{ div:["c w01_ t"], s:["opt",""] },
		{ s:["c x y w04","%1"] },
		{ div:["e"] }			
	]}
]};

te["case_client_is_disabled_r"] = { c:
[
	{ input:["g","","is_disabled","%0","radio","%9"] },
	{ ac:["c rg rc r ay bd_","%4","_opt","xx cb",""], c:
	[
		{ div:["c w01_ t"], s:["opt",""] },
		{ s:["c x y w04","%1"] },
		{ div:["e"] }			
	]}
]};

te["case_client_in_school_r"] = { c:
[
	{ input:["g","","in_school","%0","radio","%9"] },
	{ ac:["c rg rc r ay bd_","%4","_opt","xx cb",""], c:
	[
		{ div:["c w01_ t"], s:["opt",""] },
		{ s:["c x y w04","%1"] },
		{ div:["e"] }			
	]}
]};

// ----

te["case_client_disabled_services"] = { div:["yy"], case_enum_lc:["Referal Service","taga-r_--a--%8-category_id-%0", "case_referal_lc_main-subcategories", "referals", "c w37 b02",    ":v:clients:disability",""," %1","category_id"," %0",  "236707","noop", "dd w40 ba_b gw"] };

te["case_client_disabled"] = { div:["yy"], c:
[	
	{ div:["c w20"], case_disability_enum:["Disability",":v:clients:disability_id",":v:clients:disability"," %0"] },
	{ div:["c w42 ll","va"], c: // case_txt_:["Is the Client refered for Special Services?","gws w42 x tt b05","special_services",":v:clients:special_services",""] },
	[
		{ s:["x y","Is the Client refered for Special Services?"] },
		{ p:["t03","o"], c:
		[
			{ uchk:["case_client_disabled_refered_r",":v:clients:is_disabled_refered","case_client_disabled_refered"] },
			{ div:["e"] }		
		]},
		{ p:["","sub"], u:[":v:clients:is_disabled_refered::case_client_disabled_refered:3"] }
	]},
	{ div:["e"] }
]};

te["case_client_in_school_yes"] = { div:["yy"], c:
[
	{ div:["tt"], c:
	[	
		{ div:["c w41"], case_txt_:["School Name","gws w41 x tt b05","school_name",":v:clients:school_name",""] },
		{ div:["c w21 ll"], case_school_level_enum:["School Level",":v:clients:school_level_id",":v:clients:school_level"," %0"] },
		{ div:["e"] }
	]},
	{ div:["tt"], c:
	[	
		{ div:["c w41"], case_txt_:["School Address","gws w41 x tt b05","school_address",":v:clients:school_address",""] },
		{ div:["c w21 ll"], case_school_type_enum:["School Type",":v:clients:school_type_id",":v:clients:school_type"," %0"] },
		{ div:["e"] }
	]},
	{ div:["yy"], c:
	[	
		{ div:["c w41"], case_txt_:["School Attendance","gws w41 x tt b05","school_attendance",":v:clients:school_attendance",""] },
		{ div:["e"] }
	]},
]};

te["case_client_in_school_no"] = { div:["yy"], c:
[	
	// { div:["w62"], case_txt_:["Reason for not attending school","gws w41 x tt b05","school_attendance",":v:clients:school_attendance",""] },
	// { case_not_in_school_enum:["Reason for not attending school",":v:clients:not_in_school_id",":v:clients:not_in_school"," %0"] },
	{ div:["w62"], case_txt_:["Reason for not attending school","gws w41 x tt b05","not_in_school",":v:clients:not_in_school",""] },
]};

te["case_client_spouse_detail"] = { div:["tt"], c:
[	
	{ div:["c w41"], case_txt_:["Client's Spouse Name","gws w41 x tt b05","spouse_fullname",":v:clients:spouse_fullname",""] },
	{ div:["c w21 ll"], case_spouse_employment_enum:["Client's Spouse Profession",":v:clients:spouse_profession_id",":v:clients:spouse_profession"," %0"] },
	{ div:["e"] }
]};
		
te["case_client_"] = { div:["w63 ma bd sh__ gw x15 y15"], c:
[
	{ div:["b10"], c:
	[
		{ s:["c x y h3 b",null] }, 
		{ ac:["d ay","","_vpclose","x y bd_ h2 cb","&Cross;"] },
		{ div:["e"] }
	]},
			
	{ div:["","ve"], c:
	[
		{ div:["y"], c:[ { p:["c w55","nb"], u:["nb","clients_nb"] }, { div:["e"] } ] },
			
		//{ div:["abs"], c:
		//[
		//	{ div:["c w41 tt"], case_contact:["Client's Name",":v:clients:contact_fullname"," %0",":v:clients:contact_id"] },
		//	{ div:["e"] }
		//]},

		{ p:["","contact"], case_contact_ed_:[
"Client's Name",":v:clients:contact_fullname","Enter Client's Names",
":v:clients:contact_age",":v:clients:contact_dob",":v:clients:contact_dob",":v:clients:contact_age_group_id",":v:clients:contact_age_group"," %0", 
":v:clients:contact_location_id",":v:clients:contact_location"," %0",
":v:clients:contact_sex_id",":v:clients:contact_sex"," %0",  
":v:clients:contact_landmark",
":v:clients:contact_lang_id",":v:clients:contact_lang"," %0", 
":v:clients:contact_phone",
":v:clients:contact_phone2", 
":v:clients:contact_email", 
":v:clients:contact_nationality_id",":v:clients:contact_nationality"," %0",
":v:clients:contact_national_id_type_id",":v:clients:contact_national_id_type"," %0",
":v:clients:contact_national_id", 
":v:clients:contact_tribe_id",":v:clients:contact_tribe"," %0" ]},			
		
		{ div:["tt"], c:
		[	
			{ div:["c w20"], case_rela_enum:["Reporter's Relationship with Client",":v:clients:relationship_id",":v:clients:relationship"," %0"] },
			{ div:["c w20 ll"], case_health_enum:["Health Status",":v:clients:health_id",":v:clients:health"," %0"] },
			{ div:["c w21 ll"], case_hiv_enum:["HIV Status",":v:clients:hiv_id",":v:clients:hiv"," %0"] },
			{ div:["e"] }
		]},
		
		{ div:["tt"], c:
		[	
			{ div:["c w63"], case_txt_:["Relationship Comment","gws w63 x tt b05","relationship_comment",":v:clients:relationship_comment","Enter Comments about the relationship"] },
			{ div:["e"] }
		]},
		
		{ div:["tt","_sub_"], c:
		[
			{ div:[""], c:
			[	
				{ div:["c w20"], case_marital_enum:["Client's Marital Status",":v:clients:marital_id",":v:clients:marital"," %0"] },
				{ div:["e"] }
			]},
			{ case_marital_sub:["case_client_spouse_detail",":v:cases:services","ed"] }
		]},
		
		{ div:["tt"], c:
		[
			{ div:["c w41"], case_txt_:["Parent/Guardian's Name","gws w41 x tt b05","guardian_fullname",":v:clients:guardian_fullname",""] },
			{ div:["c w21 ll"], case_txt_:["Parent/Guardian's Identification Number","gws w41 x tt b05","guardian_national_id",":v:clients:guardian_national_id",""] },
			{ div:["e"] }
		]},	
			
		{ div:["tt"], c:
		[
			{ div:["c w20"], case_guardian_marital_enum:["Parent/Guardian's Marital Status",":v:clients:guardian_marital_id",":v:clients:guardian_marital"," %0"] },
			{ div:["c w20 ll"], case_household_enum:["Household Type",":v:clients:household_id",":v:clients:household"," %0"] },
			{ div:["c w21 ll"], case_household_head_employment_enum:["Head of Household Occupation",":v:clients:household_head_occupation_id",":v:clients:household_head_occupation"," %0"] },
			{ div:["e"] }
		]},
		
		{ div:["tt"], c:
		[
			{ div:["c w20"], case_txt_:["Number of Adult in Household","gws w41 x tt b05","household_adults",":v:clients:household_adults",""] },
			{ div:["e"] }
		]},
		
		{ div:["tt","va"], c:
		[
			{ s:["x t","Is the Client Attending School?"] },
			{ p:["","o"], c:
			[
				{ uchk:["case_client_in_school_r",":v:clients:in_school","case_client_in_school"] },
				{ div:["e"] }		
			]},
			{ p:["","sub"], u:[":v:clients:in_school::case_client_in_school:3"] }
		]},
		
		{ div:["tt","va"], c:
		[
			{ s:["x t","Is the Client Disabled?"] },
			{ p:["","o"], c:
			[
				{ uchk:["case_client_is_disabled_r",":v:clients:is_disabled","case_client_is_disabled"] },
				{ div:["e"] }		
			]},
			{ p:["","sub"], u:[":v:clients:is_disabled::case_client_is_disabled:3"] }
		]},
			
		{ div:["t25 w63"], c:
		[	
			{ div:["c w20"], c:
			[
				{ ac:["btn ao",null,null,"y gb cw tc bd ",null] },
				{ div:["savl"], s:["y go cw tc bd",null] },
			]},
			// { div:["d x20","va"], ac:["w10","client_vw_id-clients-vp","_u","y04 tc cb bd ba","Cancel"], c:[ { arg:["",".id","%0"] } ] },	
			{ p:["e","o"], c:[ { arg:["",".id","%0"] }, { arg:["","case_id",":v:clients:case_id"] } ] },
		]}
	]}
]};	

te["case_client_ed"] = { case_client_:["Edit Client Details","client_ed-clients","_postj_activity","Update","Updating Client Details..."] };
te["case_client_new"] = { case_client_:["New Client","client_new-clients","_postj_activity","Add","Adding Client..."] };

// --------------------------------------------------------------------------------------------

te["case_client_vw_disabled_services"] = { div:["yy"], case_vw_val:["Referal Service",":v:clients:disability"] };

te["case_client_vw_disabled"] = { div:["yy"], c:
[	
	{ div:["c w20"], case_vw_val:["Disability",":v:clients:disability"] },
	{ div:["c w42 ll","va"], c: 
	[
		{ case_vw_val:["Is the Client refered for Special Services?",":v:clients:is_disabled_refered::case_client_disabled_refered:1"] },
		{ div:[], u:[":v:clients:is_disabled_refered::case_client_disabled_refered:2"] }
	]},
	{ div:["e"] }
]};

te["case_client_vw_in_school_yes"] = { c:
[
	{ div:["tt"], c:
	[	
		{ div:["c w41"], case_vw_val:["School Name",":v:clients:school_name"] },
		{ div:["c w21 ll"], case_vw_val_cat:["School Level","",":v:clients:school_level"] },
		{ div:["e"] }
	]},
	{ div:["tt"], c:
	[	
		{ div:["c w41"], case_vw_val:["School Address",":v:clients:school_address"] },
		{ div:["c w21 ll"], case_vw_val_cat:["School Type","",":v:clients:school_type"] },
		{ div:["e"] }
	]},
	{ div:["yy"], c:
	[	
		{ div:["c w41"], case_vw_val:["School Attendance",":v:clients:school_attendance"] },
		{ div:["e"] }
	]},
]};

te["case_client_vw_in_school_no"] = { div:["yy"], c:
[	
	{ div:["w62"], case_vw_val:["Reason for not attending school",":v:clients:not_in_school"] }
]};

te["case_client_vw_spouse_detail"] = { div:["tt"], c:
[	
	{ div:["c w41"], case_vw_val:["Client's Spouse Name",":v:clients:spouse_fullname",""] },
	{ div:["c w21 ll"], case_vw_val_cat:["Client's Spouse Profession","",":v:clients:spouse_profession"," %0"] },
	{ div:["e"] }
]};

te["case_client_vw_id_"] = { c:
[
	
	{ div:["bt_ b10"], case_contact_vw_id_:[
":v:clients:contact_fullname",":v:clients:contact_age",":v:clients:contact_age_group",":v:clients:contact_dob",
":v:clients:contact_location",":v:clients:contact_sex",
":v:clients:contact_landmark",":v:clients:contact_lang",
":v:clients:contact_phone",":v:clients:contact_phone2",":v:clients:contact_email", 
":v:clients:contact_nationality",":v:clients:contact_national_id_type",":v:clients:contact_national_id", 
":v:clients:contact_tribe"] },

	{ div:["mt t bt_"], c:
	[	
		{ div:["c w20"], case_vw_val_cat:["Reporter's Relationship with Client","",":v:clients:relationship"] },
		{ div:["c w20 ll"], case_vw_val_cat:["Health Status","",":v:clients:health"] },
		{ div:["c w21 ll"], case_vw_val_cat:["HIV Status","",":v:clients:hiv"] },
		{ div:["e"] }
	]},
		
	{ div:["tt"], c:
	[	
		{ div:["c w63"], case_vw_val:["Relationship Comment",":v:clients:relationship_comment"] },
		{ div:["e"] }
	]},
		
	{ div:["mt t bt_","_sub_"], c:
	[
		{ div:[], c:
		[	
			{ div:["c w20"], case_vw_val_cat:["Client's Marital Status","",":v:clients:marital"] },
			{ div:["e"] }
		]},
		{ case_marital_sub:["case_client_vw_spouse_detail",":v:clients:marital_id","vw"] }
	]},
		
	{ div:["bt_ mt t"], c:
	[
		{ div:["c w41"], case_vw_val:["Parent/Guardian's Name",":v:clients:guardian_fullname"] },
		{ div:["c w21 ll"], case_vw_val:["Parent/Guardian's Identification Number",":v:clients:guardian_national_id"] },
		{ div:["e"] }
	]},
			
	{ div:["tt"], c:
	[
		{ div:["c w20"], case_vw_val_cat:["Parent/Guardian's Marital Status","",":v:clients:guardian_marital"] },
		{ div:["c w20 ll"], case_vw_val_cat:["Household Type","",":v:clients:household"] },
		{ div:["c w21 ll"], case_vw_val_cat:["Head of Household Occupation","",":v:clients:household_head_occupation"] },
		{ div:["e"] }
	]},
		
	{ div:["bt_ mt t"], c:
	[
		{ div:["c w20"], case_vw_val:["Number of Adult in Household",":v:clients:household_adults"] },
		{ div:["e"] }
	]},
		
	{ div:["bt_ mt t","va"], c:
	[
		{ div:[], case_vw_val:["Is the Client attending school?",":v:clients:in_school::case_client_in_school:1"] },
		{ div:[], u:[":v:clients:in_school::case_client_in_school:2"] }
	]},
		
	{ div:["bt_ mt t","va"], c:
	[
		{ div:[], case_vw_val:["Is the Client Disabled?",":v:clients:is_disabled::case_client_is_disabled:1"] },
		{ p:[], u:[":v:clients:is_disabled::case_client_is_disabled:2"] }
	]}
]};

te["case_client_vw_id_print"] = { div:["x15"], c:
[
	{ s:["x y h3 b ","Client Details"] }, 
	{ case_client_vw_id_:[] }, 
	{ div:["page-break"] }
]};

te["case_client_vw_id"] = { div:["w63 ma bd sh__ gw x15 y15","vddvw"], ev:["_undd"], c:
[

	{ div:["b10"], c:
	[
		{ s:["c x y h3 b","Client Details"] },
		{ ac:["d ag","","_vpclose","x bd_ cb",""], c:[ { s:["c h2 y04","&Cross;"] }, { s:["c x y g","Close"] }, { div:["e"] } ] },
		{ div:["d xx","va"], ac:["r05","client_ed-clients-vp","_u","xx y bd_ cb","Edit"], c:[ { arg:["",".id","%0"] } ] },
		{ div:["e"] }
	]},
	{ case_client_vw_id_:[] }
	
]};


