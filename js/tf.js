
te["end"] = { div:["e"] };

te["vped"] = { div:[null], c: 
[
	{ div:["x20 y15 gw"], s:["b cb",null] },
	{ div:["x20 b10 gw","ve"], u:[null] },
]};

te["vpvw"] = { div:[null,"vddvw"], ev:["_undd"], c:
[
	{ div:["t"], c:
	[
		{ s:["c x07 y08 b cb",null] },
		{ u:[null] },
		{ ac:["d w03 ay","","_vpclose","x y tc h3 cbl bd","&Cross;"] },
		{ div:["e"] }
	]},
	{ u:[null] },
	{ u:[null] },
]};

te["list_rr"] = { c:
[
	{ u:[null,null] }, 	// rows
	{ u:[null] }		// footer
]};

te["list"] = { c:
[
	{ u:[null] }, // title
	{ u:[null] }, // nb
	{ div:[null], c:
	[ 
		{ p:["","vc"], c:[ { u:[null] }, { arg:["","_c","%1"] }, { div:["e"] } ] }, // header
		{ div:[], u:[null,null] }, 	// rows
	]},
	{ u:[null] }		// footer
]};

te["listb"] = { c:
[
	{ u:[null] }, // title
	{ u:[null] }, // nb
	{ div:[null], c:
	[ 
		{ p:["","vc"], c:[ { u:[null] }, { arg:["","_c","%1"] }, { div:["e"] } ] }, // header
		{ div:["g"], c:
		[
			{ div:["d w50"], s:["abs w50 h100 bl3_br bt_ mtn gw sh",""] },
			{ div:["e"] }
		]},
		{ div:["gw"], u:[null,null] }, 	// rows // todo background-grayout first col
	]},
	{ u:[null] }		// footer
]};
