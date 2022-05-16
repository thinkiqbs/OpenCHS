
te["case_reporter_ed_"] = { div:["w63 ma bd sh__ gw x15 y15"], c:
[
	{ div:["b10"], c:
	[
		{ s:["c x y h3 b",null] },
		{ ac:["d ay","","_vpclose","x y bd_ h2 cb","&Cross;"] },
		{ div:["e"] }
	]},
	{ div:["","ve"], c:
	[
		{ div:["y"], c:[ { p:["c w55","nb"], u:["nb","reporters_nb"] }, { div:["e"] } ] },

		{ p:["","contact"], case_contact_ed_:
		[
"Reporter's Name",":v:reporters:contact_fullname","Enter Reporter's Names",
":v:reporters:contact_age",":v:reporters:contact_dob",":v:reporters:contact_dob",":v:reporters:contact_age_group_id",":v:reporters:contact_age_group"," %0", 
":v:reporters:contact_location_id",":v:reporters:contact_location"," %0",
":v:reporters:contact_sex_id",":v:reporters:contact_sex"," %0",  
":v:reporters:contact_landmark",
":v:reporters:contact_lang_id",":v:reporters:contact_lang"," %0", 
"%9", //:v:reporters:contact_phone
":v:reporters:contact_phone2", 
":v:reporters:contact_email", 
":v:reporters:contact_nationality_id",":v:reporters:contact_nationality"," %0",
":v:reporters:contact_national_id_type_id",":v:reporters:contact_national_id_type"," %0",
":v:reporters:contact_national_id", 
":v:reporters:contact_tribe_id",":v:reporters:contact_tribe"," %0"
		]},
				
		{ div:["t40"], c:
		[
			{ div:["c w20"], c:
			[
				{ ac:["btn ao",null,null,"y gb bd cw tc",null] },
				{ div:["savl"], s:["w21 y go cw tc bd",null] },
			]},
			// { div:["d x20","va"], ac:["w10","reporter_vw_id-reporters-vp","_u","y04 tc cb bd ba","Cancel"], c:[ { arg:["",".id","%0"] } ] },	
			{ p:["e","o"], c:[ { arg:["",".id","%0"] } ] }
		]}
	]}
]};	

te["case_reporter_ed"] = { case_reporter_ed_:["Edit Reporter Details","reporter_ed-reporters","_postj_activity","Update","Updating"] };
te["case_reporter_new"] = { case_reporter_ed_:["New Reporter","reporter_new-reporters","_postj_activity","Next","Saving"] }; 

// --------------------------------------------------------------------------------------------

te["case_reporter_vw_id_"] = { c:
[
	
	{ div:["b10"], case_contact_vw_id_:[
":v:reporters:contact_fullname",":v:reporters:contact_age",":v:reporters:contact_age_group",":v:reporters:contact_dob",
":v:reporters:contact_location",":v:reporters:contact_sex",
":v:reporters:contact_landmark",":v:reporters:contact_lang",
":v:reporters:contact_phone",":v:reporters:contact_phone2",":v:reporters:contact_email", 
":v:reporters:contact_nationality",":v:reporters:contact_national_id_type",":v:reporters:contact_national_id", 
":v:reporters:contact_tribe"]}
	
]};

te["case_reporter_vw_id_print"] = { div:["x15"], c:
[
	{ s:["x y h3 b ","Reporter Details"] }, 
	{ case_reporter_vw_id_:[] }, 
	{ div:["page-break"] }
]};

te["case_reporter_vw_id"] = { div:["w63 ma bd sh__ gw x15 y15","vddvw"], ev:["_undd"], c:
[
	{ div:["b10"], c:
	[
		{ s:["c x y h3 b","Reporter Details"] },
		{ ac:["d ag","","_vpclose","x bd_ cb",""], c:[ { s:["c h2 y04","&Cross;"] }, { s:["c x y g","Close"] }, { div:["e"] } ] },
		{ div:["d x20","va"], ac:["ag","reporter_ed-reporters-vp","_u","xx y bd_ cb","Edit"], c:[ { arg:["",".id","%0"] } ] },
		{ div:["e"] }
	]},
	{ case_reporter_vw_id_:[] }
]};

