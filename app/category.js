
te["category_ed_r_"] = { div:["","ve"], c:
[
	{ div:["x"], c:[ { p:["c w40","nb"], u:["nb","contacts_nb"] }, { div:["e"] } ] },
	{ p:["","o"], c:
	[
		{ div:["t15"], c:
		[
			{ s:["c w08 y","Name"] }, { txt:["c w22 gw ba","w22 x y","","name","%7"] }, { div:["e"] }
		]},
		
	]},
	{ div:["t35"], c:
	[
		{ div:["c w06 r02"], c:[ { ac:["ad btn",null,"_postj","x y w05 gbb bd ba_br cw tc","Save"] }, { s:["y07 bd b savl","..."] } ] },
		{ div:["c l20","va"], ac:["ay",null,null,"x y w05 ba_br bd tc cbr","Cancel"], c:[ { p:["g","o"], arg:["",".id","%0"] } ] },
		{ div:["e"] }
	]}
]};

te["category_ed_r"] = { category_ed_r_:["category_ed-subcategories","category_vw_id-categories-vp","_u"] };

te["category_new_r"] = { category_ed_r_:["category_new-categories","","_vpcancel"] };

te["category_ed"] = { vped:["w50 ma bd sh__ gw","Edit Category","category_ed_r"] };

te["category_new"] = { vped:["w40 ma bd sh__ gw","New Category","category_new_r"] };

// ------------------------------------------

te["category_vw_r"] = { div:["ll"], c:
[
	{ div:[], c:
	[ 
		{ div:["d w04 x"], ac:["abs y08 ad","category_ed-categories","_vp","w04 y ba tc","Edit"], c:[ { arg:["",".id","%0"] } ] },
		{ div:["e"] }
	]},
	{ div:["tt"], c:[ { u:["nb","categories_nb"] }, { div:["e"] } ] },
	{ div:[""], c:
	[ 
		{ s:["c w08 x y cb","Name"] }, 
		{ s:["c w25 x y07 cb","%7"] }, 
		{ div:["e"] }
	]},
	{ div:["t15"], c:
	[ 
		{ s:["c w08 x y cb","Parent"] }, 
		{ s:["c w25 x y07 cb","%11"] }, 
		{ div:["e"] }
	]},
	{ div:["t15"], c:
	[ 
		{ s:["c w08 x y cb","Full Name"] }, 
		{ s:["c w25 x y07 cb","%8"] }, 
		{ div:["e"] }
	]},
	{ div:["t15"], c:
	[ 
		{ s:["c w08 x y cb","Status"] }, 
		{ s:["c w25 x y07 cb","Active"] }, 
		{ div:["e"] }
	]}
]};

te["category_vw_id"] = { vpvw:["w40 ma bd sh__ x15 t b30 gw",  "Category","noop",          "noop","category_vw_r"] };

// -----------------------------------------------------

te["category_tag_vw"] = { div:["w30 gws"], c:
[
	{ s:["c xx y cb","%8"] },
	{ div:["e"] }
]};

te["category_tag"] = { div:["c l03 y03","va"], s:["w30 bd gb cw",""], c:
[
	{ ac:["d w02_","category_tag_txa","_usel_tag","x y tc n cw","&Cross;"] },
	{ s:["c x t07 b05","%8"] },
	{ div:["e"], arg:["o","category_id","%0"] }
]};

te["category_tag_txa"] = { c:
[
	{ div:["c w01_ x t07 b05"],  c:[ { img:["","","/helpline/images/search.png","16"] } ] },
	{ p:["c w25","txa"], c:[ { input:["w26 xx y07","","fullname_","","text"], ev:["","_ky","","_uky"] } ] },
	{ arg:["","category_id",""] } // placeholder for upd
]};

// -----------------------------------------------------

te["category_lc_footer"] = { div:["x gws mt"], c:
[
	{ s:["c x y cd s","%3"] },
	{ s:["c y cd s","of"] }, 
	{ s:["c x y cd s","%4"] },
	{ div:["d t03"], c:[ { ac:["nav","category_lc-subcategories","_nav","dh",""], c:[ { div:["da dr_"] }, { arg:["","_a","%0"] } ] }, { s:["navl","..."] } ] },
	{ div:["d t03"], c:[ { aci:["nav","category_lc-subcategories","_nav","dh","prev",""], c:[ { div:["da dl_"] }, { arg:["","_a","%0"] } ] }, { s:["navl","..."] } ] },
	{ div:["e"] }
]};

te["category_lc_r"] = { div:[], c: 
[
	{ input:["g","category_id","","%0","checkbox",":k:categories_chk:category_id::0"] },
	{ ac:["r ay w60","","_chk","h01_ xx y07 cb",""], c:
	[ 
		{ div:["c w01_"], s:["chk",""] },
		{ div:[""], s:["x h02","%8"] },
		{ div:["e"], c:[ { arg:["name-7","","%7"] }, { arg:["fullname-8","","%8"] }, { arg:["fullname_id-9","","%9"] } ] },
	]}
]};

te["category_lc_k"] = { div:["g"], c:
[
	{ arg:["","root_id",":k:subcategories_k:root_id:2"] },
	{ arg:["","level",":k:subcategories_k:level:2"] },
	{ p:["","e"], c:[ { arg:["","_c","%1"] }, ] }
]};

te["category_lc"] = { c:
[
	{ uargs:["categories_chk"] },
	{ list:["end","end","h30","category_lc_k","category_lc_r","subcategories","category_lc_footer"] }
]};

te["category_lc_main_"] = { c:
[
	{ div:["xx mb","va"], c:[ { div:["","category_lc-subcategories"], c:
	[ 
		{ p:["bb_b w30","txa"], c:[ { input:["w30 x tt b05","fullname_","","","text",""], ev:["","_ky","","_uky"] } ] },
		{ arg:["root_id","",null] },
		{ u:[null] } // set level option here
	]} ]},
	{ div:["","va"], category_lc:[] }
]};

// ----------------------------------------------

te["category_lsh_footer"] = { div:["x gw mt"], c:
[
	{ s:["c x y cd s","%2"] },
	{ s:["c y cd s","-"] },
	{ s:["c x y cd s","%3"] },
	{ s:["c y cd s","of"] }, 
	{ s:["c x y cd s","%4"] },
	{ div:["d t03"], c:[ { ac:["nav","category_lsh-subcategories","_nav","dh",""], c:[ { div:["da dr_"] }, { arg:["","_a","%0"] } ] }, { s:["navl","..."] } ] },
	{ div:["d t03"], c:[ { aci:["nav","category_lsh-subcategories","_nav","dh","prev",""], c:[ { div:["da dl_"] }, { arg:["","_a","%0"] } ] }, { s:["navl","..."] } ] },
	{ div:["e"] }
]};

te["category_lsh_r"] = { div:["","category_lsh-subcategories"], ac:["ay","","_sel_nest","xx cb",""], c: //
[
	{ div:["tt b05"], s:["","%7"] },
	{ div:["e"], c:[ { arg:["id-0","","%0"] }, { arg:["name-7","","%7"] }, { arg:["fullname-8","","%8"] }, { arg:["fullname_id-9","","%9"] } ] }
]};

te["category_lsh_k"] = { div:["g"], c:
[
	{ arg:["","category_id",":k:subcategories_k:category_id:2"] },
	{ p:["","e"], c:[ { arg:["","_c","%1"] }, ] }
]};

te["category_lsh"] = { c:
[
	{ list:["end","end","","category_lsh_k","category_lsh_r","subcategories","category_lsh_footer"] }
]}

te["category_lsh_nest"] = { c:
[
	{ div:["y02","va"], ac:["","category_lsh-subcategories","_ne","xx y gws cb","%7"], c:[ { arg:["category_id","","%0"] } ] },
	{ p:["l20","vd"] }
]};

te["category_lsh_root"] = { c:
[
	{ div:["y02","va"], ac:["","category_lsh-subcategories","_ne","xx y gws cb","#"], c:[ { arg:["category_id","",":k:subcategories_k:category_id:2"] } ] },
	{ p:["l20","vd"], category_lsh:[] }
]}
// ----------------------------------------------

te["category_ls_footer"] = { div:["x gw mt"], c:
[
	{ s:["c x y cd s","%2"] },
	{ s:["c y cd s","-"] },
	{ s:["c x y cd s","%3"] },
	{ s:["c y cd s","of"] }, 
	{ s:["c x y cd s","%4"] },
	{ div:["d t03"], c:[ { ac:["nav","category_ls-subcategories","_nav","dh",""], c:[ { div:["da dr_"] }, { arg:["","_a","%0"] } ] }, { s:["navl","..."] } ] },
	{ div:["d t03"], c:[ { aci:["nav","category_ls-subcategories","_nav","dh","prev",""], c:[ { div:["da dl_"] }, { arg:["","_a","%0"] } ] }, { s:["navl","..."] } ] },
	{ div:["e"] }
]};

te["category_ls_r"] = { ac:["ay","","_sel","xx cb",""], c:
[
	{ div:["tt b05"], uhilite:["%8"] },
	{ div:["e"], c:[ { arg:["id-0","","%0"] }, { arg:["fullname-8","","%8"] }, { arg:["fullname_id-9","","%9"] } ] }
]};

te["category_ls_k"] = { div:["g"], c:
[
	{ arg:["","root_id",":k:subcategories_k:root_id:2"] },
	{ arg:["","level",":k:subcategories_k:level:2"] },
	{ p:["","e"], c:[ { arg:["","_c","%1"] }, ] }
]};

te["category_ls"] = { list:["end","end","","category_ls_k","category_ls_r","subcategories","category_ls_footer"] },

// ----------------------------------------------

te["category_f_tags"] = { c: 
[
	{ f:["Name",":k:categories_f:fname",		" %0"," name"] },
	{ f:["Parent",":k:categories_f:lname",		" %0"," pname"] },
	{ div:["e"] }
]};

te["category_f"] = { div:["w70 ma bd sh__ xx yy gw"], c: // "vddvw"], ev:["_undd"
[
	{ s:["x12 yy b bb","Filters"] },
	{ div:["x tt b20"], c:
	[
		{ div:["xx yy"], kf_s:["Name","fname",":k:categories_f:name"] },
		{ div:["xx yy"], kf_s:["Parent","lname",":k:categories_f:pname"] },
		{ div:["xx yy"], kf_d:["Created On"," :d:dmy:0: ","created_on",":k:categories_f:created_on","created_on",":k:categories_f:created_on"] },
	]},
	{ div:["x15 yy"], c:
	[
		{ div:["c w06 r02"], c:[ { ac:["ad btn","category_f_tags-categories_f","_applyf","x y w05 gbl bd ba_br cw tc","Apply"] }, { s:["y07 bd b savl","..."] } ] },
		{ div:["c l20","va"], ac:["ay","","_vpcancel","x y w05 ba_bl bd tc cbr","Cancel"], c:[ { p:["g","o"], arg:["",".id",""] } ] },
		{ div:["e"] }
	]}
]};

// ----------------------------------------

te["category_r_new"] = { div:["","va"], c:
[
	{ div:["","ve"], s:["y",""], c:
	[
		{ s:["c w02 tt bb"," "] },
		{ p:["","o"], txt:["c w30 gw ba","w30 x y","","name",""] }, 
		{ div:["c l20 t02"], c:[ { ac:["ad btn","category_new-subcategories","_postj","xx y03 gbl bd ba_br cw tc","Save"] }, { s:["y07 bd b savl","..."] } ] },
		{ div:["c l20 t02"], ac:["aa","","_rm","x y03 tc n cb","&Cross;"], c:[ { p:["g","o"], arg:["",".id",""] } ] },
		{ p:["c t01 x15","nb"] },
		{ p:["e","o"], arg:["","category_id","%10"] }
	]}
]};


te["category_r"] = { c:
[
	{ div:["t","vg"], s:["content-hidden",""], c:
	[
		{ s:["c w02 tt bb"," "] },
		{ ac:["c ad r05 content-hidden_","subcategory_list-categories","_g","x y03 n ga cb ba_","&plus;"], c:[ { arg:[".id","","%0"] }, { arg:["_c","","50"] } ] },
		{ ac:["c ad r05 content-shown_","subcategory_list-categories","_g","x y03 n ga cb ba_","&minus;"], c:[ { arg:[".id","","%0"] } ] },
		{ input:["g","","category","%0","radio"] },
		{ div:["c r","va"], ac:["aa","category_vw_id-categories","_vp","x07 y cb bd","%7"], c:[ { arg:["",".id","%0"] } ] },
		{ div:["c x15 h01"], u:["nb","subcategories_nb"] },
		{ div:["e"] }
	]},
	{ div:["ml3 mb4 bl g","vs"] }
]};

te["category_rr"] = { c:
[
	{ u:["category_r","subcategories"] }, 
	{ div:[] }, // new item
	{ div:["t","va"], c: 
	[
		{ s:["c w02 tt bb"," "] },
		{ ac:["c aa","category_r_new-category_","_ndr","xx y gwd cb","&plus; New"] }, 
		{ div:["g"], c:[ { arg:["category_id-10","",":k:subcategories_k:category_id:2"] } ] },
		{ div:["e"] }
	]}
]};

te["category_pg"] = { pg:["pgto",null," dh","da dl",null," dh","da dr"] };

te["category_h"] = { uchk:["category_h",":k:categories:"] };

te["category_list_"] = { c:
[
	{ div:[null,"va"], c:
	[
		{ div:["c","va"], ac:["","category_list-categories-vftab","_u","x y cb b h3","Categories"], c:[ { arg:["",".id","0"] } ] },
		{ u:["category_h","categories"] },
		{ div:["e"] }
	]},
	{ div:[], c:[ { u:["nb","category_nb"] }, { div:["e"] } ] }, // nb
	{ div:[], c:
	[
		{ p:["","vc"], c:[  { arg:["","_c","%1"] }, { arg:["","category_id",null] }, { div:["e"] } ] }, // header
		{ div:["ml3 mb4 bl"], category_rr:[] },
	]},
	{ div:["x20 bt"], c:
	[
		{ div:["d y08"], category_pg:[null,null] },
		{ div:["e"] }
	]} 
]};

te["subcategory_list"] = { category_list_:["g",":k:subcategories_k:category_id:2","subcategory_list-subcategories","subcategory_list-subcategories"] };

te["category_list"] = { category_list_:["x y","0","category_list-subcategories","category_list-subcategories"] };

// ---------------------------------------

function _ne ()
{
	var u = this.id.split ("-");
	var a = {};
	argv (this, a, "id");
	url (this.parentNode.nextSibling, u[0], u[1], ("?category_id="+a.category_id));
}



