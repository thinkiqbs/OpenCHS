
te["case_contact_ed_age"] = { c:
[
	{ div:["","vb"], c:[ { p:["","o"], c:
	[
		{ input:["g","","age_t","0","radio","1"] },
		{ ac:["c w07 rc_","","_tab","x03 y cd","Age"] },
		{ input:["g","","age_t","1","radio"] },
		{ ac:["c w07 rc_","","_tab","xx y cd","DOB"] },
		{ input:["g","","age_t","2","radio"] },
		{ ac:["d w07 rc_","","_tab","y cd tr","Age Group"] },
		{ div:["e"] }
	]} ]},
	{ div:["","vaa"], c: 
	[
        	{ div:[], c:
        	[
        		{ input:["g","","age_vw","0","radio","1"] },
	        	{ p:["tabiv gws bd h03","o"], c:[ { input:["w21 x tt b05 gws b","","age",null,"",""], ev:["","_contact_age"] } ] },
	        ]},
	        { div:[], c:
	        [
		        { input:["g","","age_vw","2","radio"] },
			{ div:["tabiv"], c:
			[
				{ li:["w21 gws bd","va"], c:[ { div:[""], ev:["_dd"], c: 
				[					
					{ p:["c w17 x t03","o"], c:[ { p:["","calv"], ucalv:[" :d:dmy:0: ","dob",null] } ] }, 
					{ div:["d w02 x y content-hidden_"],  c:[ { div:["h02 w02 awb"] } ] },
					{ div:["d w02 x y content-shown_"],  c:[ { div:["h02 w02 awt"] } ] },
					{ div:["e"] }
				]} ]},
				{ div:["dd w21 sh xx b10 ba mtn1 gw","vdd"], ev:["_undd"], c:
				[ 
					{ div:[], c:
					[
						{ ucal:["dob",null,"noop","1","", ""] },
						{ div:["e"] },
					]}
				]},
				{ arg:["fn","","_contact_dob"] }
        		]}
        	]},
        	{ div:[], c:
		[
			{ input:["g","","age_vw","1","radio"] },
			{ div:["tabiv","tag-r_--o-case_age_tag_txa-%8-age_group_id-%0"], c: 
        		[
        	        	{ li:["gws bd b02","va"], c:[ { div:["","category_ls-subcategories"], ev:["_dd"], c: // ls
        	        	[
        	        		{ p:["c w18","o"], c:[ { u:["case_age_tag_txa","r_"] }, { uchk:["tag",null,"","","case_age_tag_txa",null,"age_group_id",null] } ] },
					{ div:["d w02 x y"],  c:[ { div:["h02 w02 awb"] } ] },
					{ div:["e"], c:[ { arg:["_c","","10"] }, { arg:["root_id","","101"] } ] }
        	        	]} ]},
        	        	{ div:["dd w21 gw ba_b","vdd"], ev:["_undd"] },
        	        	{ arg:["fn","","_contact_age_group"] }
        		]},
        	]}	
        ]}
]};

te["case_contact_ed_"] = { c:  // 
[
	{ div:["tt"], c:
	[
		{ div:["c w41"], case_txt_:[null,"gws w41 x tt b05 b","fname",null,null] }, 
		{ div:["c w21 ll"], case_contact_ed_age:[null,null,null,null,null,null] },
		{ div:["e"] }
	]},
	{ div:["tt"], c:
	[
		{ div:["c w41"], case_loc_enum:["Location",null,null,null] },
		{ div:["c w21 ll"], case_sex_enum:["Sex",null,null,null] },
		{ div:["e"] }
	]},
	{ div:["tt"], c:
	[
		//{ div:["c w41"], case_txt_:["Residence","gws w41 x tt b05 b","residence",null,"Enter Reporter's Residence"] },
		{ div:["c w41"], case_txt_:["Nearest Landmark","gws w41 x tt b05 b","landmark",null,"Enter Nearest Landmark"] },
		{ div:["c w21 ll"], case_lang_enum:["Language",null,null,null] },
		{ div:["e"] }
	]},
	{ div:["tt"], c:
	[
		{ div:["c w20"], case_txt_:["Phone Number","gws w20 x tt b05 b","phone",null,"Enter Reporter's Phone Number"] },
		{ div:["c w20 ll"], case_txt_:["Alternative Contact","gws w20 x tt b05 b","phone2",null,"Enter Alternate Contact"] },
		{ div:["c w21 ll"], case_txt_:["Email","gws w21 x tt b05 b ","email",null,"Enter Reporter's Email Address"] },
		{ div:["e"] }
	]},
	{ div:["tt"], c:
	[
		{ div:["c w20"], case_nationality_enum:["Nationality",null,null,null] },
		{ div:["c w20 ll"], case_national_id_type_enum:["ID Type",null,null,null] },
		{ div:["c w21 ll"], case_txt_:["ID Number","gws w21 x tt b05 b","national_id",null,"Enter Reporter's ID Number"] },
		{ div:["e"] }
	]},
	
	{ div:["tt"], c:
	[
		{ div:["c w20"], case_tribe_enum:["Tribe",null,null,null] },
		{ div:["e"] }
	]},
]};
	
te["case_contact_ed"] = { case_contact_ed_:[

":v:contacts:age",":v:contacts:dob",":v:contacts:dob",":v:contacts:age_group_id",":v:contacts:age_group"," %0", 
":v:contacts:location_id",":v:contacts:location"," %0",
":v:contacts:sex_id",":v:contacts:sex"," %0",  
":v:contacts:landmark",
":v:contacts:lang_id",":v:contacts:lang"," %0", 
":v:contacts:phone", 
":v:contacts:phone2", 
":v:contacts:email", 
":v:contacts:nationality_id",":v:contacts:nationality"," %0",
":v:contacts:national_id_type_id",":v:contacts:national_id_type"," %0",
":v:contacts:national_id", 
":v:contacts:tribe_id",":v:contacts:tribe"," %0"
]};

// -----------------

te["case_contact_vw_id_"] = { c:
[
	{ div:["tt"], c:
	[
		{ div:["c w41"], case_vw_val:["Fullname",null] },
		{ div:["c w21 ll"], c: 
		[
			{ s:["x tt v","Age"] },
			{ div:["x y02 n mh02"], c:
			[
				{ s:["c y03 b",null] }, // age
				{ div:["d x07 y03 bd gws"], uval:["",null] }, // age_group
				{ s:["d cd g",null] }, // dob
				{ div:["e"] }
			]}
		]},
		{ div:["e"] }
	]},
	{ div:["tt"], c:
	[
		{ div:["c w41"], case_vw_val_cat:["Location","location",null] },
		{ div:["c w21 ll"], case_vw_val_cat:["Sex","",null] },
		{ div:["e"] }
	]},
	{ div:["tt"], c:
	[
		{ div:["c w41"], case_vw_val:["Nearest Landmark",null] },
		{ div:["c w21 ll"], case_vw_val_cat:["Language","",null] },
		{ div:["e"] }
	]},
	{ div:["tt"], c:
	[
		{ div:["c w20"], case_vw_val:["Phone Number",null] },
		{ div:["c w20 ll"], case_vw_val:["Alternative Contact",null] },
		{ div:["c w21 ll"], case_vw_val:["Email",null] },
		{ div:["e"] }
	]},
	{ div:["tt"], c:
	[
		{ div:["c w20"], case_vw_val_cat:["Nationality","",null] },
		{ div:["c w20 ll"], case_vw_val_cat:["ID Type","",null] },
		{ div:["c w21 ll"], case_vw_val:["ID Number",null] },
		{ div:["e"] }
	]},
	
	{ div:["tt"], c:
	[
		{ div:["c w20"], case_vw_val_cat:["Tribe","",null] },
		{ div:["e"] }
	]},
]};

// ---------------------------------------------------

te["contact_ed_r_"] = { div:["","ve"], c:
[
	{ div:["x"], c:[ { p:["c w40","nb"], u:["nb","contacts_nb"] }, { div:["e"] } ] },
	{ p:["","o"], c:
	[
		{ div:["t15"], c:
		[
			{ s:["c w13 y","First Name"] }, { txt:["c w25 gw ba","w25 x y","","fname","%8"] }, { div:["e"] }
		]},
		{ div:["t15"], c:
		[
			{ s:["c w13 y","Last Name"] }, { txt:["c w25 gw ba","w25 x y","","lname","%9"] }, { div:["e"] }
		]},
		{ div:["t15"], c:
		[
			{ s:["c w13 y","Phone"] }, { txt:["c w25 gw ba","w25 x y","","phone","%10"] }, { div:["e"] }
		]},
		{ div:["t15"], c:
		[
			{ s:["c w13 y","Email"] }, { txt:["c w25 gw ba","w25 x y","","email","%11"] }, { div:["e"] }
		]},
		{ div:["t15"], c:
		[
			{ s:["c w13 y","Membership"] }, { txt:["c w25 gw ba","w25 x y","","membership","%13"] }, { div:["e"] }
		]},
		{ div:["t15"], c:
		[
			{ s:["c w13 y","DNC Status"] }, { txt:["c w25 gw ba","w25 x y","","dnc","%13"] }, { div:["e"] }
		]},
		
	]},
	{ div:["t35"], c:
	[
		{ div:["c w06 r02"], c:[ { ac:["aa btn",null,"_postj","x y04 w05 gbl cw tc","Save"] }, { s:["y07 bd b savl","..."] } ] },
		{ div:["c l20","va"], ac:["ay",null,null,"x y04 w05 gwd tc cbr","Cancel"], c:[ { p:["g","o"], arg:["",".id","%0"] } ] },
		{ div:["e"] }
	]}
]};

te["contact_ed_r"] = { contact_ed_r_:["contact_ed-contacts","contact_vw_id-contacts-vp","_u"] };

te["contact_new_r"] = { contact_ed_r_:["contact_new-contacts","","_vpclose"] };

te["contact_ed"] = { vped:["w60 ma bd sh__ gw","Edit Contact","contact_ed_r"] };

te["contact_new"] = { vped:["w60 ma bd sh__ gw","New Contact","contact_new_r"] };

// ------------------------------------------

te["contact_vw_r"] = { div:["ll bt_"], c:
[
	{ div:[], c:
	[ 
		{ div:["d w04 x"], ac:["abs y08 ad","contact_ed-contacts","_vp","w04 y ba tc","Edit"], c:[ { arg:["",".id","%0"] } ] },
		{ div:["e"] }
	]},
	{ div:["t"], c:[ { u:["nb","contacts_nb"] }, { div:["e"] } ] },
	{ div:["tt"], c:
	[ 
		{ s:["c w10 x y cb b","First Name"] }, 
		{ s:["c w30 x y07 cb",":v:contacts:fname"] }, 
		{ div:["e"] }
	]},
	{ div:["t15"], c:
	[ 
		{ s:["c w10 x y cb b","Last Name"] }, 
		{ s:["c w30 x y07 cb",":v:contacts:lname"] }, 
		{ div:["e"] }
	]},
	{ div:["t15"], c:
	[ 
		{ s:["c w10 x y cb b","Phone"] }, 
		{ s:["c w30 x y07 cb",":v:contacts:phone"] }, 
		{ div:["e"] }
	]},
	{ div:["t15"], c:
	[ 
		{ s:["c w10 x y cb b","Email"] }, 
		{ s:["c w30 x y07 cb",":v:contacts:email"] }, 
		{ div:["e"] }
	]},
	{ div:["g t15"], c:
	[ 
		{ s:["c w10 x y cb b","Location"] }, 
		// { s:["c w30 x y07 cb","%13"] }, 
		{ div:["e"] }
	]},
]};

te["contact_vw_id"] = { vpvw:["w57 ma bd sh__ x15 t b30 gw",  "Contact","noop",          "noop","contact_vw_r"] };

// --------------------------------

te["contact_tag_vw"] = { div:["w30 gws"], c:
[
	{ s:["c xx y cb","%8"] },
	{ div:["e"] }
]};

te["contact_tag_txa"] = { div:["","contact_ls-contacts"], c:[ { p:["","txa"], c:
[ 
	{ input:["w38 xx y07","fullname_","fullname_","","text"], ev:["","_ky","","_uky"] }, 
	{ arg:["","contact_id",""] } // placeholder for upd
]} ]};

// ----------------------------------------

te["contact_lc_menu"] = { div:["c lcfmenu"], c:
[
	{ ac:["c w02_ aa","contact_new-r_","_vp","b h2 y03 tc cb","&plus;"] },
	{ ac:["c w02_ aa","","","b h2 y03 tc cb","&equiv;"] },
]};

te["contact_lc_r"] = { div:[], c:
[
	{ input:["g","","contact_id","","checkbox"] },
	{ li:["c w01_ x y08 r"],  ev:["_chk_tag"], s:["chk",""], c:
	[
		{ arg:["id-0","","%0"] }, { arg:["fullname-7","","%7"] }, { arg:["phone-10","","%10"] }
	]},
	{ input:["g","","vpf","","radio"] },
	{ li:["c w25 x r","contact_vw_id-contacts-"], ev:["_vp"], s:["",""], c:
	[
		{ div:["c w17"], s:[" tt h02","%7"] },
		{ div:["d w08"], s:[" tt h02 tr","%10"] },
		{ div:["e"], arg:["",".id","%0"] }
	]},
	{ div:["e"] }
]};

te["contact_lc_pg"] = { pg:["pgto","contact_lc-contacts"," dh","da dl","contact_lc-contacts"," dh","da dr"] };

te["contact_lc"] = { lst:["noop","noop","noop","noop","noop",  "h30 x07 y","contact_lc_r","contacts", "x07 y07","contact_lc_menu","d","contact_lc_pg"] };

// -------------------------------------

te["contact_ls_footer"] = { div:["x gws"], c:
[
	{ s:["c x y cd s","%3"] },
	{ s:["c y cd s","of"] }, 
	{ s:["c x y cd s","%4"] },
	{ div:["d t03"], c:[ { ac:["nav","contact_ls-contacts","_nav","dh",""], c:[ { div:["da dr_"] }, { arg:["","_a","%0"] } ] }, { s:["navl","..."] } ] },
	{ div:["d t03"], c:[ { aci:["nav","contact_ls-contacts","_nav","dh","prev",""], c:[ { div:["da dl_"] }, { arg:["","_a","%0"] } ] }, { s:["navl","..."] } ] },
	{ div:["e"] }
]};

te["contact_ls_r"] = { div:[], c:
[
	{ ac:["ay","case_contact_ed-contacts-ve-contact","_sel","x t07 b05 cb  bb_",""], c:
	[
		{ div:["s"], c:
		[
			{ s:["c w16 x n","%8"] },
			{ s:["d x","%19"] },
			{ s:["d x","%17"] },
			{ div:["e"] }
		]},
		{ div:["s"], c:
		[
			{ s:[" x t","%11"] },
			{ s:[" x t","%24"] },
			{ div:["e"] }
		]},
		{ div:["e"], c:[ { arg:["id-0","","%0"] }, { arg:["fullname-8","","%8"] } ] } // no need for other field coz selu will populate fields
	]},
	{ div:[], arg:[".id","","%0"] }
]};

te["contact_ls"] = { list:["end","end","","noop","contact_ls_r","contacts", "contact_ls_footer"] };

// ---------------------------

te["contact_f_tags_"] = { c: 
[
	{ f:["Name",null,		" %0"," fullname"] },
	{ f:["Phone",null,		" %0"," phone"] },
	{ f:["Email",null,		" %0"," email"] },
	// age
	// gender 
	// location
	// { f:["Created By",null,		" %0"," created_by"] },
	{ f:["Created On",null,		" :d:dmy:0: "," created_on"] },
	{ div:["e"] }
]};

te["contact_f_tags_k"] = { contact_f_tags_:[":k:contacts_k:fullname:2", ":k:contacts_k:phone:2", ":k:contacts_k:email:2", ":k:contacts_k:created_by:2", ":k:contacts_k:created_on:2"] };

te["contact_f_tags"] = { contact_f_tags_:[":k:contacts_f:fullname", ":k:contacts_f:phone",":k:contacts_f:email",":k:contacts_f:created_by",":k:contacts_f:created_on"] };

te["contact_f"] = { div:["w55 ma bd sh__ y gw","vddvf"], ev:["_undd"], c: 
[
	{ s:["x20 yy b bb_","Search Contact"] },
	{ div:["x15 tt b20"], c:
	[
		{ div:["xx yy"], kf_s:["First Name","fullname",":k:contacts_f:fullname"] },
		{ div:["xx yy"], kf_s:["Phone","phone",":k:contacts_f:phone"] },
		{ div:["xx yy"], kf_s:["Email","email",":k:contacts_f:email"] },
		{ div:["xx yy"], kf_d:["Created On"," :d:dmy:0: ","created_on",":k:contacts_f:created_on","created_on",":k:contacts_f:created_on"] },
	]},
	{ vp_apply:["contact_f_tags-contacts_f"] }
]};

// ---------------------------------------------

te["contact_footer"] = { div:["x gw mtn08 ba"], c:
[
	{ div:["d y07"], pg:["pgto","contact_list-contacts"," dh","da dl","contact_list-contacts"," dh","da dr"] },
	{ div:["e"] }
]};

te["contact_r"] = { li:["w160 gw","contact_vw_id-contacts"], ev:["_vp"], c:
[
	{ div:["c w20 tt b05 h01_"], s:["xx",":v:contacts:fullname"] },
	{ div:["c w15 tt b05 h01_"], s:["xx",":v:contacts:phone"] }, 
	{ div:["c w20 tt b05 h01_"], s:["xx",":v:contacts:email"] }, 
	{ div:["c w15 tt b05 h01_"], s:["xx",":v:contacts:created_by"] },
	{ div:["c w15 tt b05 h01_"], s:["xx",":d:dmyhn:1: "] },
	{ div:["e"], arg:["",".id","%0"] } 
]};

te["contact_k"] = { div:["w160 bt bb gw"], s:["",""], c: // activate filter ctx
[
	{ k_a:["c w20","","cd","Full Name","da db","fname",":k:contacts_k:fullname:2"] },
	{ k_a:["c w15","","cd","Phone","da db","phone",":k:contacts_k:phone:2"] },
	{ k_a:["c w20","","cd","Email","da db","email",":k:contacts_k:email:2"] },
	{ k_a:["c w15","","cd","Created By","da db","created_by",":k:contacts_k:created_by:2"] },
	{ k_a:["c w15","","cd","Created On","da db","created_on",":k:contacts_k:created_on:2"] },
	{ div:["e"] }
]};

te["contact_nb"] = { div:[], c:[ { u:["nb","contacts_nb"] }, { div:["e"] } ] };

te["contact_title"] = { div:[] }; 

te["contact_list"] = { list:["contact_title","contact_nb","bl br ox","contact_k","contact_r","contacts","contact_footer"] };

te["contact_main"] = { c:
[
	{ div:["y","vb"], c:
	[
		{ div:["c"], c:
		[
			{ input:["g","","contacts_t_","0","radio","1"] },
			{ ac:["","contact_list-contacts","_tab","x y cb b h2","Contacts"] }, 
		]},
		{ div:["d","contact_rpt-contacts-@:1:0"], c: 
		[
			{ arg:["","","0"] },
			{ input:["g","","contacts_t_","1","radio"] },
			{ li:["opto x ba gw bdr s cb","contact_rpt_main"], ev:["_tab"], c:
			[
				{ s:["c l t h3_ micon","bar_chart"] },
				{ s:["c xx y","Reports"] }, 
				{ div:["e"] }
			]}
		]},
		{ div:["d "], c: 
		[
			{ arg:["","","0"] },
			{ input:["g","","contacts_t_","0","radio","1"] },
			{ li:["opto x bl bt bb gw bdl s cb","contact_list-contacts"], ev:["_tab"], c:
			[
				{ s:["c l t h3_ micon","list"] },
				{ div:["c xx y","","List"] }, 
				{ div:["e"] }
			]}
		]},
		{ div:["d x15 ay"], ac:["","contacts","_csv","x t01 bd_ cd s",""], c:
		[ 
			{ div:["c t04"], c:[ { img:["","","/helpline/images/download.png", "16"] } ] },
			{ div:["c x y","","CSV"] }, 
			{ div:["e"] }
		]},
		{ div:["d"], ac:["ay","contact_f-contacts_f","_vpf","x t01 cd s bd_",""], c:
		[ 
			{ div:["c t04"], c:[ { img:["","","/helpline/images/filter.png", "16"] } ] },
			{ div:["c x y","","Filter"] }, 
			{ div:["e"] }
		]},
		{ div:["e"], c:[ { arg:["","","contact_list-contacts"] }, { arg:["","","0"] }, { arg:["","","0"] }, { arg:["","",""] } ] }
	]},
	{ div:["x bd","vf"], c:[ { li:["","contact_f-contacts_f"], ev:["__vpf"], c:
	[

	]} ]},
	{ div:[], c:
	[
		{ div:[], c:[ { input:["g","","contacts_v","0","radio","1"] }, { p:["tabv yy","vt"], contact_list:[] } ] },
		{ div:[], c:[ { input:["g","","contacts_v","1","radio"] }, { p:["tabv","vt"] } ] },				
	]}
]};

te["contacts"] = { c:
[
	{ div:["x25 tt s g","vb"], c:
	[
		{ div:["c"], tab:["contacts_mt","0","1",  "x02 y mr1 cd tab","contact_main-contacts",  "","Contacts"] },
		
		{ div:["e"] }
	]},
	{ div:["x y mt ml mb mr gw"], c: // tabs
	[
		{ div:[], c:[ { input:["g","","contacts_mv","0","radio","1"] }, { div:["tabv gw bd x15 yy","vftab"], contact_main:[] } ] },
		{ div:[], c:[ { input:["g","","contacts_mv","1","radio"] }, { div:["tabv","vftab"] } ] },
		{ div:[], c:[ { input:["g","","contacts_mv","2","radio"] }, { div:["tabv","vftab"] } ] },
		{ div:[], c:[ { input:["g","","contacts_mv","3","radio"] }, { div:["tabv","vftab"] } ] },
		{ div:[], c:[ { input:["g","","contacts_mv","4","radio"] }, { div:["tabv","vftab"] } ] },
	]}
]};

function contact_dob (p, v)
{
	var today = new Date ();
	var year = today.getFullYear ();
	var month = today.getMonth();
	var day = today.getDate();
	var dob = new Date (year-v, month, day);
	var el = _(p.childNodes[1].childNodes[1].firstChild,"calv");
	el.innerHTML = "";
	nd (el, te["tag_calv"], ["%0", "dob",":d:dmy:0: "], [(""+(Math.floor(dob.getTime() / 1000)))], [3]);
	// todo: load cal 
}

function contact_age_group (p, v)
{
	var el = _(p.childNodes[2].childNodes[1].firstChild,"o");
	el.innerHTML = "";
	// case_age_tag_txa
	var a = re["age_groups"];
	for (var i=0; i<a.length; i++)
	{
		var vv = a[i][7].split ("-");
		if (vv.length!=2) continue;
		if ((vv[0]*1)<=v && (vv[1]*1)>=v)
		{
			el.innerHTML = "";
			nd (el, te["tag_cat"], ["%0","age_group_id","%8","case_age_tag_txa"], a[i], [4]);
			break
		}
	}
}

function contact_age (p, v)
{
	var el = p.firstChild.childNodes[1].firstChild;
	el.value = v;
}

function _contact_dob (el, r)
{
	var today = new Date ();
	var dob = new Date (r[0]*1000);
	var age = today.getFullYear()-dob.getFullYear();
	// console.log ("_contact_dob="+r[0]+" | "+age+" | "+today.getFullYear()+" "+dob);
	if (today.getMonth()>dob.getMonth()) age++;
	if (today.getMonth()==dob.getMonth() && today.getDate()>=dob.getDate()) age++;
	contact_age (__(el,"vaa"), age);
	contact_age_group (__(el,"vaa"), age); 
}

function _contact_age_group (el, r)
{
	var vv = r[8].split ("^")[1].split("-");
	var age = Math.floor ((vv[0]*1) + ((vv[1]-vv[0])/2));
	contact_age (__(el,"vaa"), age);
	contact_dob (__(el,"vaa"), age); 
}

function _contact_age ()
{
	var age = this.value*1; // age;
	contact_dob (__(this,"vaa"), age); 
	contact_age_group (__(this,"vaa"), age);
}

