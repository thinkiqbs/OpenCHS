// ----------------------------------------------

te["case_perpetrator_spouse_details"] = {};

te["case_perpetrator_"] = { div:["w63 ma bd sh__ gw x15 y15"], c:
[
	{ div:["b10"], c:
	[
		{ s:["c x y h3 b",null] }, 
		{ ac:["d ay","","_vpclose","x y bd_ h2 cb","&Cross;"] },
		{ div:["e"] }
	]},
	
	{ div:["","ve"], c:
	[
		{ div:["y"], c:[ { p:["c w55","nb"], u:["nb","perpetrators_nb"] }, { div:["e"] } ] },
		
		//{ div:["abs"], c:
		//[
		//	{ div:["c w41 tt"], case_contact:["Perpetrator's Name",":v:perpetrators:contact_fullname"," %0",":v:perpetrators:contact_id"] },
		//	{ div:["e"] }
		//]},

		{ p:["","contact"], case_contact_ed_:[
"Perpetrator's Name",":v:perpetrators:contact_fullname","Enter Perpetrator's Names",
":v:perpetrators:contact_age",":v:perpetrators:contact_dob",":v:perpetrators:contact_dob",":v:perpetrators:contact_age_group_id",":v:perpetrators:contact_age_group"," %0", 
":v:perpetrators:contact_location_id",":v:perpetrators:contact_location"," %0",
":v:perpetrators:contact_sex_id",":v:perpetrators:contact_sex"," %0",  
":v:perpetrators:contact_landmark",
":v:perpetrators:contact_lang_id",":v:perpetrators:contact_lang"," %0", 
":v:perpetrators:contact_phone",
":v:perpetrators:contact_phone2", 
":v:perpetrators:contact_email", 
":v:perpetrators:contact_nationality_id",":v:perpetrators:contact_nationality"," %0",
":v:perpetrators:contact_national_id_type_id",":v:perpetrators:contact_national_id_type"," %0",
":v:perpetrators:contact_national_id", 
":v:perpetrators:contact_tribe_id",":v:perpetrators:contact_tribe"," %0" ]},
	
		{ div:["tt"], c:
		[
			{ div:["c w20"], case_rela_enum:["Relationship with Client?",":v:perpetrators:relationship_id",":v:perpetrators:relationship"," %0"] },
			{ div:["c w20 ll"], case_shareshome_enum:["Shares Home with Client?",":v:perpetrators:shareshome_id",":v:perpetrators:shareshome"," %0"] }, 
			{ div:["c w21 ll"], case_employment_enum:["Perpetrator's Profession",":v:perpetrators:employment_id",":v:perpetrators:employment"," %0"] },
			{ div:["e"] }
		]},
		
		{ div:["","_sub_"], c:
		[
			{ div:["tt"], c:
			[	
				{ div:["c w20"], case_marital_enum:["Perpetrator's Marital Status",":v:perpetrators:marital_id",":v:perpetrators:marital"," %0"] },
				{ div:["c w20 ll"], case_health_enum:["Health Status",":v:perpetrators:health_id",":v:perpetrators:health"," %0"] },
				{ div:["e"] }
			]},
			{ case_marital_sub:["case_perpetrator_spouse_detail",":v:cases:services","ed"] },
		]},		
			
		{ div:["tt"], c:
		[
			{ div:["c w41"], case_txt_:["Perpetrator's Guardian's Name","gws w41 x tt b05","guardian_fullname",":v:perpetrators:guardian_fullname","Enter Perpetrator's Guardian Name"] },
			
			{ div:["e"] }
		]},
			
		{ div:["tt"], c:
		[
			{ s:["x y", "Additional Details"] },
			{ p:["w63 gws bd","o"], c:[ { textarea:["gws w63 h11 x y08","","notes",":v:perpetrators:notes","Enter Additional Details"] } ] },
			{ div:["e"] }
		]},
		
		{ div:["t25 w63"], c:
		[	
			{ div:["c w20"], c:
			[
				{ ac:["btn ao",null,null,"y gb cw tc bd ",null] },
				{ div:["savl"], s:["y go cw tc bd",null] },
			]},
			// { div:["d x20","va"], ac:["w10","perpetrator_vw_id-perpetrators-vp","_u","y04 tc cb bd ba","Cancel"], c:[ { arg:["",".id","%0"] } ] },	
			{ p:["e","o"], c:[ { arg:["",".id","%0"] }, { arg:["","case_id",":v:perpetrators:case_id"] } ] },
		]}
	]}
]};

te["case_perpetrator_ed"] = { case_perpetrator_:["Edit Perpetrator Details","perpetrator_ed-perpetrators","_postj_activity","Update","Updating Perpetrator Details..."] };
te["case_perpetrator_new"] = { case_perpetrator_:["New Perpetrator","perpetrator_new-perpetrators","_postj_activity","Add","Adding Perpetrator..."] };

// --------------------------------------------------------------------------------------------

te["case_perpetrator_vw_spouse_detail"] = {};

te["case_perpetrator_vw_id_"] = { c:
[
	
	{ div:["b10"], case_contact_vw_id_:[
":v:perpetrators:contact_fullname",":v:perpetrators:contact_age",":v:perpetrators:contact_age_group",":v:reporters:contact_dob",
":v:perpetrators:contact_location",":v:perpetrators:contact_sex",
":v:perpetrators:contact_landmark",":v:perpetrators:contact_lang",
":v:perpetrators:contact_phone",":v:perpetrators:contact_phone2",":v:perpetrators:contact_email", 
":v:perpetrators:contact_nationality",":v:perpetrators:contact_national_id_type",":v:perpetrators:contact_national_id", 
":v:perpetrators:contact_tribe"]},

	{ div:["tt"], c:
	[
		{ div:["c w20"], case_vw_val_cat:["Relationship with Client?","",":v:perpetrators:relationship"] },
		{ div:["c w20 ll"], case_vw_val_cat:["Shares Home with Client?","",":v:perpetrators:shareshome"] },
		{ div:["c w21 ll"], case_vw_val_cat:["Perpetrator's Profession","",":v:perpetrators:employment"] },
		{ div:["e"] }
	]},
	
	{ div:[], c:
	[
		{ div:["tt"], c:
		[	
			{ div:["c w20"], case_vw_val_cat:["Perpetrator's Marital Status","",":v:perpetrators:marital"] },
			{ div:["c w20 ll"], case_vw_val_cat:["Health Status","",":v:perpetrators:health"] },
			{ div:["e"] }
		]},
		{ case_marital_sub:["case_perpetrator_vw_spouse_detail",":v:perpetrators:marital_id","vw"] }
	]},
	
	{ div:["tt"], c:
	[
		{ div:["c w41"], case_vw_val:["Perpetrator's Guardian's Name",":v:perpetrators:guardian_fullname"] },	
		{ div:["e"] }
	]},
			
	{ div:["yy"], c:
	[
		{ div:["w63"], case_vw_val:["Additional Details",":v:perpetrators:notes"] },
		{ div:["e"] }
	]}
]};

te["case_perpetrator_vw_id_print"] = { div:["x15"], c:
[
	{ s:["x y h3 b ","Perpetrator Details"] }, 
	{ case_perpetrator_vw_id_:[] }, 
	{ div:["page-break"] }
]};

te["case_perpetrator_vw_id"] = { div:["w63 ma bd sh__ gw x15 y15","vddvw"], ev:["_undd"], c:
[

	{ div:["b10"], c:
	[
		{ s:["c x y h3 b","Perpetrator Details"] },
		{ ac:["d ag","","_vpclose","x bd_ cb",""], c:[ { s:["c h2 y04","&Cross;"] }, { s:["c x y g","Close"] }, { div:["e"] } ] },
		{ div:["d xx","va"], ac:["r05","perpetrator_ed-perpetrators-vp","_u","xx y bd_ cb","Edit"], c:[ { arg:["",".id","%0"] } ] },
		{ div:["e"] }
	]},
	{ case_perpetrator_vw_id_:[] }
	
]};


