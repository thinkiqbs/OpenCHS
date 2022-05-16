
te["rpt_new_r"] = { div:[], c:
[
	{ div:["t15"], c:
	[ 
		{ s:["c w13 y","Name"] }, { txt:["c w25 gw ba","w25 x y","","usn","%7"] }, { div:["e"] } 
	]},

	{ div:["t15"], c:
	[
		{ s:["c w13 y","Group"] }, { txt:["c w25 gw ba","w25 x y","","fname","%15"] }, { div:["e"] }
	]},

	{ div:["t15"], c:
	[
		{ s:["c w13 y","Chart Type"] },
		{ div:["c w25 gw ba"], c:
		[
			{ div:["","va"], c:
			[
				{ txt:["c w21","w21 x y","","role_txt","::user_role:8:1"] }, 
				{ div:["d w03"], ac:["aa","","_dd","x y",""],  c:[ { div:["h02 w02 awb"] } ] },
				{ p:["e","o"], arg:["","role","%8"] }
			]},			
			{ div:["dd w25 ba gw cb","vdd"], ev:["_undd"], c:
			[
				{ uchk:["user_role_r","","user_role"] }
			]}
		]},
		{ div:["e"] }
	]},

	{ div:["t15"], c:
	[ 
		{ s:["c w13 y08 cb","X Axis:"] }, 
		{ div:["c","xaxis"], c:
		[
			{ p:["w34 t02","a"], u:["noop","noop"] },
			{ ac:["w15 ay t03","dsdsd-fld-xaxis-a","_nd","x y cb bd b","+ Add Group Field"] }
		]},
		{ div:["e"] } 
	]},

	{ div:["t15"], c:
	[ 
		{ s:["c w13 y08 cb","Y Axis:"] }, 
		{ div:["c","yaxis"], c:
		[
			{ p:["w34 t02","a"], u:["noop","noop"] },
			{ ac:["w15 ay t03","dsdsd-fld-yaxis-a","_nd","x y cb bd b","+ Add Group Field"] }
		]},
		{ div:["e"] } 
	]},

	{ div:["t15"], c:
	[ 
		{ s:["c w13 y08 cb","Metric:"] }, 
		{ div:["c","yaxis"], c:
		[
			{ p:["w34 t02","a"], u:["noop","noop"] },
			{ ac:["w10 ay t03","dsdsd-fld-yaxis-a","_nd","x y cb bd b","+ Add Metric"] }
		]},
		{ div:["e"] } 
	]},


	{ div:["t35 b05"], c:
	[
		{ div:["c w06 r02"], c:[ { ac:["ad btn","","_postj","x y w05 gbb bd ba_br cw tc","Save"] }, { s:["y07 bd b savl","..."] } ] },
		{ div:["c l20","va"], ac:["ay","","_vpcancel","x y w05 ba_br bd tc cbr","Cancel"], c:[ { p:["g","o"], arg:["",".id","%0"] } ] },
		{ div:["e"] }
	]}
]};

te["rpt_new"] = { vped:["w60 ma bd","New Call Report","call_rpt_new_r"] };

// ----------------------------------

te["rpt_ctx"] = { c:[ { arg:["","measure","%10"] }, { arg:["","g1","%12"] } ] };

te["rptvtt"] = { div:["d w11"], s:["x t b02 h02 tr b","%0"] };

te["rptvt"] = { div:["c w07 br"], s:["x t b02 h02 tr","%0"] };

te["rptv"] = { div:["c w07 br"], s:["x t b02 h02 tr","%0"] };

te["rptv_"] = { div:["c w07 br_br"], s:["x t b02 h02 tr","%0"] };

te["rptrt"] = { div:["b cb"], ev:["","","","","","_hilite","_uhilite"], c:
[ 
	{ div:["c w13"], s:["x08 t b02 h02 b","%0"] }, 
	{ div:["c bl"] },
	{ div:["e"] }
]};

te["rptrh"] = { div:["bb cb b"],  c:
[ 
	{ div:["c w13"], s:["x08 t b02 h02 b","%0"] }, 
	{ div:["c bl"] },
	{ div:["e"] }
]};

te["rptr_"] = { c:
[
	{ div:["ga",""], s:["bb_br",""], ev:["","","","","","_hilite","_uhilite"], c:
	[ 
		{ div:["c w13"], s:["x08 t b02 h02",null] }, 
		{ div:["c bl_br"] },
		{ div:["e"] }
	]},
	{ div:[] }
]};

te["rptra"] = { c: // "rpt","10","_g0","user_name", "context_masq_f"], 
[
	{ div:["","va"], s:["bb",""], ev:["","","","","","_hilite","_uhilite"], c:
	[
		{ div:["c w13"], ac:["aa","%10","_g","x08 t b02 h02 cbr",null], c:[ { arg:["","u","%11"] }, { arg:["","%12","%13"] }, { arg:["","%14","%1"] }, { p:["g","ctx"] }  ] },
		{ div:["c bl"] },
		{ div:["e"] }
	]},
	{ div:["g bt bb2 ga"] }
]};

te["rptr"] = { c:
[
	{ div:["",""], s:["bb",""], ev:["","","","","","_hilite","_uhilite"], c:
	[ 
		{ div:["c w13"], s:["x08 t b02 h02",null] }, 
		{ div:["c bl"] },
		{ div:["e"] }
	]},
	{ div:[] }
]};

te["rpt_xh_legend"] = { div:["%0"], c: // 
[
	{ div:["abs","va"], ac:["aa","","_dd","w15 x t h02 cb",""], c:
	[
		{ div:["c t03 r05"], s:["w01 h01 gw","&nbsp;"], ucolor:["%3"] },
		{ div:["d"], s:["micon n cb g","show_chart"] }, // c:[ { img:["g","","/helpline/images/line_chart.png", "14"] } ] },
		{ s:["","%1"] },
		{ div:["e"] }
	]},
	{ div:["dd w20 ba sh gw ml2","vdd"], c:
	[
		{ arg:["","","%2"] },
		//{ ac:["c","","_rpt_re","x y","Hide"] }
		{ input:["g","","rpt_r_hide","%2","checkbox"] },
		{ ac:["c w10 r ay","","_rpt_upd","xx y",""], c:
		[
			{ div:["c w01_ t"], s:["chk",""] },
			{ s:["c x y ","Hide"] },
			{ div:["e"] }			
		]},
		{ input:["g","","rpt_r_line","%2","checkbox"] },
		{ ac:["c w10 r ay","","_rpt_upd","xx y",""], c:
		[
			{ div:["c w01_ t"], s:["chk",""] },
			{ s:["c x y ","Line"] },
			{ div:["e"] }			
		]},		
	]}
]};

te["rpt_xh"] = { s:["%0","%1"] };

te["utable_hdr"] = { div:["c"], c:
[
        { s:[null,null] },
        { div:[]}
]};

// ----------------------------------

te["_rpt_vw"] = { c:
[ 
	{ pivot:[] }, 
	{ div:["t20 b30"], c:[ { canvas:["","","",""], uchart:[] } ] },
	{ div:["ml bl bb"], utable:[] },
	{ div:["e"] }
]}

te["rpt_vw"] = { _rpt_vw:["%4","%5"] };

// -------------------------------

te["rpt_dist_r"] = { div:["d w05 ba mln1"], c:
[
	{ input:["g","","yaxis","%0","radio","%9"] },
	{ li:["opta x y tc cb","","%1"], ev:["_rpt_opt"] }
]};


te["rpt_axis_tag"] = { li:["c w11 ba mr_","va"], s:["",""], c:
[
	{ s:["c w08 x y ",null] }, 
	{ input:["g","",null,"%0","checkbox","1"] },
	{ ac:["c w02 aa ","","_uchk_rpt","x w01 y","&Cross;"] },
	{ div:["e"] }
]};

te["rpt_axis_r"] = { div:[], c:
[
	{ input:["g",null,"","%0","checkbox","%9"] },
	{ ac:["r ay",null,"_chk_rpt","h02 x y cb",""], c:
	[ 
		{ div:["c w01_ t"], s:["chk",""] },
		{ s:["c x y ",null] },
		{ div:["e"] }
	]}
]};

te["rpt_hdr"] = { c: 
[
	{ ac:["c","","","x y07 n cb b",null] },
	{ div:["d bd ll"], c:
	[
		{ div:["mb_ ay","va"], ac:["","","_dd","x y gws",""], c:[ { s:["h2 cb micon","more_vert"] } ] }, // { img:["","","/helpline/images/more.png", "19"] }
		{ div:["dd w15 y mln13 ba gw sh","vdd"], ev:["_undd"], c:
		[
			{ input:["g","","xax","timeseries","radio","1"] },
			{ ac:["r ay","","_rpt_opt","xx y02 cb",""], c:
			[
				{ div:["c w01_ t"], s:["opt",""] },
				{ s:["c x y ","XAxis Timeseries"] },
				{ div:["e"] }			
			]},
			{ input:["g","","xax","grouping","radio"] },
			{ ac:["r ay","","_rpt_opt","xx y02 cb",""], c:
			[
				{ div:["c w01_ t"], s:["opt",""] },
				{ s:["c x y ","XAxis Grouping"] },
				{ div:["e"] }			
			]},
			{ input:["g","","type","line","radio"] },
			{ ac:["r ay","","_rpt_opt","xx y02 cb",""], c:
			[
				{ div:["c w01_ t"], s:["opt",""] },
				{ s:["c x y ","Line Chart"] },
				{ div:["e"] }			
			]},
			{ input:["g","","type","bar","radio","1"] },
			{ ac:["r ay","","_rpt_opt","xx y02 cb",""], c:
			[
				{ div:["c w01_ t"], s:["opt",""] },
				{ s:["c x y ","Bar Chart"] },
				{ div:["e"] }			
			]},
			{ input:["g","","stacked","stacked","checkbox","1"] },
			{ ac:["r ay","","_rpt_chk","xx y02 cb",""], c:
			[
				{ div:["c w01_ t"], s:["chk",""] },
				{ s:["c x y ","Stacked"] },
				{ div:["e"] }			
			]},
			{ ac:["ay","","_rpt_dl","xx y07 cb","Download Report"] },
			{ ac:["ay","","","xx y07 cb","Save"] },
			{ ac:["ay","","","xx y07 cb","Save As"] },
		]} 
	]}, 
	{ div:["d"], s:["",""], c: // rpt_hdr:["Percent", "case_k_r","status","case_k", "case_k_tag","status", "-", "percent","%0"]  // ["Percent", "status", "status", "-", "percent", "0"]
	[
		{ div:["d"], c: // xaxis
		[
			{ div:["ba","va"], s:["",""], c:
			[	
				{ div:["d w03"], ac:["ay","","_dd","x y04",""],  c:[ { div:["h02 w02 awb"] } ] },
				{ div:["e"] }
			]},
			{ div:["dd x y mln13 w15 gw ba mt1","vdd_rpt"], ev:["_undd"], c:[ { uchk:[null,null,null] } ] }
		]},
		{ div:["d"], uchk:[null,null] },
		{ s:["d l20 r05 y07 cd","Y Axis:"] },
		{ div:[] },
	]},
	{ div:["d"], s:["",""], c:
	[
		{ uchk:["rpt_dist_r",null,null]}, // yaxis (distribution options)
		{ s:["d l20 r05 y07 cd","X Axis:"] },
		{ div:["e"] },
	]},
	{ div:["e"], c:
	[ 
		{ arg:["","metrics",null] },
		{ arg:["","mmask",null] } // metric params
	]}
]};

// -------------------------------

var COLOR = ["#3366cc","#3399FF", "#109618","#990099","#dc3912","#ff9900","#0099c6","#dd4477","#66aa00","#b82e2e","#316395","#994499","#22aa99","#aaaa11","#6633cc","#e67300","#8b0707","#651067","#329262","#5574a6", "#3b3eac","#b77322","#16d620","#b91383","#f4359e","#9c5935","#a9c413","#668d1c","#bea413","#0c5922","#743411"];

var CHARTS = {};

function _rpt_dl (ev)
{
	var s = "";
	var p = __(this,"vt");
	var co = CHARTS[p.id];
	console.log (co)
	if (co.type=="pie")
	{
		var d = co.ds[0].data;
		for (var j=0; j<d.length; j++) {  s += co.lbl[j]+","+d[j]+"\r\n"; }
	}
	else
	{
		for (var j=0; j<co.lbl.length; j++) 
		{  
			if (co.lbl[j].length==1 && co.lbl[j]==".") { s+=",TOTAL"; break; }
			s += ","+co.lbl[j];  
		}
		s += "\r\n";
		for (var i=0; i<co.ds.length; i++)
		{
			var d = co.ds[i].data;
			s += co.ds[i].label;
			for (var j=0; j<d.length; j++) {  s += ","+d[j]; }
			s += ","+co.ds[i].tot;
			s += "\r\n";
		}
	}
	
	// var file = new File([s], "Report.CSV", {type: "text/csv"});

  const blob = new Blob ([s], {type: "text/csv"});
	const blobURL = window.URL.createObjectURL(blob);
  const tempLink = document.createElement('a');
  tempLink.style.display = 'none';
  tempLink.href = blobURL;
  tempLink.setAttribute('download', "Report.csv");
  // Safari thinks _blank anchor are pop ups. We only want to set _blank
  // target if the browser does not support the HTML5 download attribute.
  // This allows you to download files in desktop safari if pop up blocking
  // is enabled.
  
  document.body.appendChild(tempLink);
  tempLink.click();
  document.body.removeChild(tempLink);
  setTimeout(() => {
    // For Firefox it is necessary to delay revoking the ObjectURL
    window.URL.revokeObjectURL(blobURL);
  }, 100);


// 	console.log ("RPT_DL "+p.id+" | "+s);
}


function uchart_vw (el, lbl, ds, cht, stacked)
{     
	var wi = 35;
	if (stacked==false) wi = 10*ds.length;
	var wn = Math.floor ((screen.width - 100)/wi); 
	if ((cht=="bar" || cht=="line") && lbl.length<wn)
	{
		for (var i=lbl.length; i<wn; i++) lbl[i]=".";
	}

	var co = { type:cht, scaleLineColor:"rgba(255,255,255,0)" };
	if (cht=="pie")
	{
		co.type="doughnut";
		co.options = { legend: { display:false } }; 
	}
	else
	{
		co.options = { scales:  // c5cad3
		{ 
			xAxes:[ { gridLines: { display:false, drawTicks:false, lineWidth:0, color:"rgba(0,0,220,1)", drawBorder:true }, stacked:false, ticks:{ padding:8 }, /*scaleLabel: { display: true, labelString: 'probability' }*/ } ],
			yAxes:[ { gridLines: { display:true,  drawTicks:false, lineWidth:1, color:"rgba(197, 193, 211, 0.5)", drawBorder:false }, stacked:false, ticks:{ "min":0 } } ]
		}, legend: { display:false } }; 

		// if (yn<1) co.options.legend.display = false;
		if (stacked) {  co.options.scales.xAxes[0].stacked=true; co.options.scales.yAxes[0].stacked=true; }
	}
	co.data = { labels:lbl, datasets:ds };	
	//co.options.responsive = true;
	co.options.maintainAspectRatio = false;
	
	//console.log ("chart-------------------")
	//console.log (co);
	
	var chart1 = new Chart (el.getContext('2d'), co);
}

function uchart (el, _u, _a, _r, _m)
{
	var xx = ra[(_r[0]+"_x")];
	var yy = ra[(_r[0]+"_y")];
	var zz = ra[(_r[0]+"_z")];
	var rr_ = ra[(_r[0]+"_pivot")];
	var tot = ra[(_r[0]+"_tot")];
	var fmt = ra[(_r[0]+"_fmt")];
	var yyn = ra[(_r[0]+"_yy_")];
	var tot = ra[(_r[0]+"_tot")];
	var ct = ra[(_r[0]+"_ct")];
	var rrxi_ = ra[(_r[0]+"_rrxi")];
	var color_ = ra[(_r[0]+"_color")];
	var mask_ = _r[7].split (";");
	var xn = xx.length;
	var yn = yy.length;
	var zn = zz.length;
	var mn = mask_.length;
	var n = (1*xn)+(1*yn);	
	var chart_type = _r[5];
	var stacked = _r[6].length>0;
	var z = 0;
	var i = 0;
	var j = 0;
	var k = 0;
	var l = 0;
	var c = 0;
	var m = 0;	
	var jn = tot.length-2;
	//if (yn==0) jn = tot.length-1;
	var _i = 0;
	var i_ = 0;
	var j_ = 0;
	var r = null;
	var r_ = null;
	var lv = null;
	var v = null;
	var v_ = null;
	var rs = null;

	var lbl = [];
	var ds = [];

	for (j=xn; j<tot.length-2; j++) // x axis labels
	{
		if (ct[j][0]==0) continue; // skip blank columns
		v = "";
		j_ = (j-xn);
		for (k=0; k<yn; k++) 
		{
			m = yyn[k];
			if (k==yn-1) m = yy[k].length;

			c = Math.floor(j_/m);
			j_ = j_%m; 
			if (k==yn-1) c = j_;

			if (k>0) v+="/"; 
			var v_ = yy[k][c];
			var fmti = (k*1)+(xn*1)
			if (fmt[fmti].length>0) v_ = valf ([v_], fmt[fmti]);
			if (v_.length<1) v_ = "(blank)" 
			v += v_;
			// console.log (j+" "+j_+" "+m+": "+c+"{"+yy[k][c]+"} ["+JSON.stringify(yy[k])+"]  "); // "("+j+","+j_+","+c+")"; 
			
		}
		lbl[l] = v;
		l++;
	}


	var rn = tot.length-xn-2;
	var h = 200; 
	var w = (rn*25)+100;
	if (stacked==false) w = (rr_.length*rn*1)+100;
	console.log ("[uchart] stacked:"+stacked+" w:"+w+" rr:"+rr_.length+" tot:"+(tot.length)+" | "+el.tagName+" "+screen.width)
	if (w<(screen.width-100)) w = screen.width - 100; 
	
	for (m=0; m<mn; m++) // todo: loop over metric-mask: _r[?]
	{
		z = 1*mask_[m];
		for (i=rr_.length-1; i>-1; i--) // generate dataset
		{
			_i = i_;
			i_ = i;
			if (xn>0 && rrxi_) i_ = rrxi_[i]; // sort by xaxis
			//if (u[3].length>0) // sort by tot
			//{
			//	i_ = rryi_[i].i
			//}
			// console.log ( "  rr_:"+i+" / "+i_)
			r_ = rr_[i_];
			if (!r_) continue;
	
			
			v = "";
			if (mn>1 && zn>1) v ="("+zz[z][6]+") "; // prefix label
			for (j=0; j<xn; j++) 
			{ 
				if (j>0) v+="/"; 
				var v_ = r_[j][0]; 
        	                if (fmt[j].length>0) v_ = valf ([v_], fmt[j]);
        	                if (v_.length<1) v_ = "(blank)"
        	                v += v_;
			}
			lv = v;
			
			
			v = ""
		 	rs = [];
			j_ = 0;
			for (j=xn; j<jn; j++)
			{
				v = 1*r_[j][z];
				if (zz[z][0]=="percent"){  v = (v*100) / (tot[j][z]*1); } 
				//if (zz[z][0]=="avg") { v = (1*r_[(j+1)][z]) / (v*1);  } 
				if (zz[z][0]=="avg" && (r_[j][0]*1)!=0) { v = ((r_[j][z]*1)/(r_[j][0]*1)); } // (1*r_[j][z]) / 
				//if (zz[z][0]=="sla") {  v = (v*100) / (tot[j][0]*1);  } 
				v = (1*v).toFixed ((zz[z][3]*1));
				rs[j_] = v;
				j_++
			}
			
			l = ds.length;
			ds[l] = { label:lv, lineTension:0.1, borderColor:color_[i_], backgroundColor:"#FFFFFF00", barPercentage:0.5,  order:2, data:rs };
			if (_r[5]!="line" || yn<1) ds[l].backgroundColor = color_[i_];
			// if (u[1]=="line" && yn>0) ds[l].borderWidth = 2.0;
			// if (lv=="Abandoned" && yn>0) { ds[l].type = "line"; ds[l].backgroundColor="#FFFFFF00"; }
			
			// console.log (i+": "+color_);
		}
	}

	if (xn>0 && yn==0) 
	{ 
		// console.log ( "[lbl] "+ JSON.stringify (lbl))
		// console.log ( "[ds] "+JSON.stringify (ds))
		chart_type = "pie"; 
		stacked=false; 
		w=200; 
		lbl_=[]; 
		ds_= [{ data: [], backgroundColor:[], borderWidth:[] }];
		for (var i=0; i<ds.length; i++)
		{
			lbl_[i] = ds[i].label;
			ds_[0].data[i] = ds[i].data[0];
			ds_[0].backgroundColor[i] = ds[i].backgroundColor;
			ds_[0].borderWidth[i] = 0;
		}
		//console.log (" [lbl_] "+JSON.stringify (lbl_))
		//console.log (" [ds_] "+JSON.stringify (ds_))
		lbl = lbl_;
		ds = ds_;
	}
	
	if (_r[8].length==0) { el.height = h; el.width = w; } // set canvas size

	CHARTS[__(el).id] = { "ds":ds, "lbl":lbl, "type":chart_type, "stacked":stacked, "h":h, "w":w };
	
	uchart_vw (el, lbl, ds, chart_type, stacked, h, w);
}

// ----------------------------------------------------------------

function table_hdr_metric (el,zz,z)
{
	for (var k=0; k<mm_.length; k++) // todo: multi-column metric
	{
		z = mm_[k];
		nd (el, te["s"], [zz[z][7],"c w08 x t h02 br bt"], [], [2]);		
	}
	nd (el, te["s"], ["","e"], [], [2]);
}

function table_hdr (el, y, xn, yy, zz, tot, fmt, mask_, yyn)
{
	var el_ = null;
	var v ="";
	var cn ="";
	var yn = yy.length;
	console.log ("YY("+y+") "+JSON.stringify (yy[y]));
	for (var j=0; j<yy[y].length; j++) 
	{
		v = yy[y][j];
		var fmti = (y*1)+(xn*1);
		if (fmt[fmti].length>0) v = valf ([v], fmt[fmti]);
		if (v.length<1) v = "(blank)";
		cn  = "x t h02";
		if (y<yn-1) cn+= " bb br";
		if (y==yn-1) cn+= " br";
		el_ = nd (el, te["utable_hdr"], [v, cn], [], [2]); 
		if (y<yn-1) 
		{
			table_hdr (el_, y+1, xn, yy, zz, tot, fmt, mask_, yyn);
			nd (el_, te["s"], ["","e"], [], [2]);
		}
		if (y==yn-1)
		{
			el_.parentNode.style.width = "91px"; // w_+"px"; // todo: multi-column metrics - width
			// if (zn>1) table_hdr_metric (el_, zz) // todo: multi-column metrics
		}
	}
}
 
function utable (el, _u, _a, _r, _m)
{
	var xx = ra[(_r[0]+"_x")];
	var yy = ra[(_r[0]+"_y")];
	var zz = ra[(_r[0]+"_z")];
	var rr_ = ra[(_r[0]+"_pivot")];
	var tot = ra[(_r[0]+"_tot")];
	var fmt = ra[(_r[0]+"_fmt")];
	var yyn = ra[(_r[0]+"_yy_")];
	var tot = ra[(_r[0]+"_tot")];
	var ct = ra[(_r[0]+"_ct")];
	var rrxi_ = ra[(_r[0]+"_rrxi")];
	var rryi_ = ra[(_r[0]+"_rryi")];	
	var color_ = ra[(_r[0]+"_color")];
	var mask_ = _r[7].split (";");
	var xn = xx.length;
	var yn = yy.length;
	var zn = zz.length;
	var mn = mask_.length;
	var n = (1*xn)+(1*yn);	
	var i = 0;
	var j = 0;
	var k = 0;
	var m = 0;
	var z = 0;
	var w = 0;
	var wy = 0;
	var i_ = 0;
	var k_ = 0;
	var _i = -1;
	var jn = tot.length-1;
	if (xn>0 && yn==0) jn = tot.length-2;
	var r = null;
	z = 1*mask_[0];
	// for (i=0; i<mask_.length; i++)  // todo: split each mask to enable multi-column pivot table
	console.log ("-[mask]-"+JSON.stringify (mask_))
	
	if (yy.length>0) wy = yy[0].length;
	for (j=1; j<yy.length; j++) wy = wy * yy[j].length;
	w = ((xn*161)+(wy*91)+(1*121));
	if (xn==0) w = (161+121+(wy*91));
	el.style.width = w+"px";

 	console.log ("UTABLE: xn:"+xn+" wy:"+wy+" zn:"+zn+" w:"+w+" | yy.length="+yy.length+" "+JSON.stringify (yy))


	// header -----------------------------------
	var el_ = nd (el, te["l"], ["bt cd gww hdr"], [], [1]); 
	var el__ = nd (el_, te["s"], ["","c br cd"], [], [2])
	var w_ = (xn*160) + (xn-1);
	if (xn==0) w_ = 161;
	el__.style.width = w_+"px";
	if (yy.length==0)  nd (el__, te["s"], ["&nbsp;","x y"], [], [2]);
	for (j=0; j<yy.length; j++) nd (el__, te["s"], ["&nbsp;","xx t h02 cd "], [], [2]); 	// y axis hdr label
	if (yy.length>0)
	{
		console.log (" [w] "+w_+" "+mn)
		table_hdr (el_, 0, xn, yy, zz, tot, fmt, mask_, yyn);
		v = "Total";
		if (zz[z][1]=="avg") v = "Average";	
		nd (el_, te["s"], [v,"c w11 x t h02 br cb tr b"], [], [2]); 	
	}
	// if (yy.length==0) table_hdr_metric (el_, zz, mm); // todo: multi-column metrics
	nd (el_, te["s"], ["","e"], [], [2]);
	
	
	// data -----------------------------------
	for (m=0; m<mn; m++) // todo: loop over metric-mask: _r[?]
	{
		z = 1*mask_[m];
		for (i=0; i<rr_.length; i++)
		{
			_i = i_;
			i_ = i;
			if (rrxi_) i_ = rrxi_[i]; // sort by xaxis
			//if (u[3].length>0) // sort by tot
			//{
			//	i_ = rryi_[i].i
			//}
			// console.log ( "  rr_:"+i+" / "+i_)
			r_ = rr_[i_];
			if (!r_) continue;
	
	
			el_ = nd (el, te["l"], [""], [], [1]); // new row
//			el_.style.width = w+"px";
	
	
			var v_label = "";
			if (j==0 && mn>1 && zn>1)
			{
				v_label ="("+zz[z][6]+") "; // prefix label
				// todo: add column
			} 
			for (j=0; j<xn; j++) 	// xaxis
			{
				cn = "c w15 x t h02 br bt";
				v = r_[j][0];
				if (fmt[j].length>0) v = valf ([v], fmt[j]);
				if (v=="") v="(blank)";
				if (j>0) v_label += "/";
				v_label += v;
				if (i>0 && r_[j][0]==rr_[_i][j][0]) 
				{
					if (j==0 || (j>0 && r_[j-1][0]==rr_[_i][j-1][0]))
					{
						cn="c w15 x t h02 br bt_ws"; 
						v=""; 
					}
				}
				var tp = "rpt_xh";
				if (j==xn-1) { tp = "rpt_xh_legend"; cn = "c w16 br bt h02_"; }
				el__ = nd (el_, te[tp], [], [cn,v,v_label,color_[i_]], [0]); 
			}
	
	
			cn = "c w08 x t h02 br tr";
			for (j=xn; j<jn; j++)	// data
			{
				el__ = nd (el_, te["s"], ["","c bt"], [], [2]); 
				w_ = "91px"; 	
				if (j==jn-1) { cn = "c w11 x t h02 br tr b"; w_="121px"; }
				el__.style.width = w_
				// for (k=0; k<zn; k++) // todo: multi-column metrics
				{
					v = 1*r_[j][z];
					if (zz[z][0]=="percent") { v = (v*100) / (tot[j][z]*1); } 
					if (zz[z][0]=="avg" && (r_[j][0]*1)!=0) { v = ((r_[j][z]*1)/(r_[j][0]*1)); } // (1*r_[j][z]) / 
					//if (zz[z][0]=="sla") {  v = (v*100) / (tot[j][0]*1);  } 
					v = (v*1).toFixed ((zz[z][3]*1));
					v = zz[z][4]+v+zz[z][5];
					// console.log (j+" | "+JSON.stringify (r_[j])+" | "+v); // r_[j][z]+" / "+r_[j][0]+"  | "+ ((r_[j][z]*1)/(r_[j][0]*1)) )
					elv = nd (el__, te["s"], [v,cn], [], [2]); 
				}
			}
	
			nd (el_, te["s"], ["","e"], [], [2]); 
		}
	}
	
	// footer -----------------------------------
	for (m=0; m<mn; m++) // loop over metric-mask: _r[?]
	{
		z = 1*mask_[m];	
		
		if (zz[z][1].length<1) continue; // skip non-htotal metrics 
		
		el_ = nd (el, te["l"], ["bt "], [], [1]); 
		for (j=0; j<xn-1; j++)  nd (el_, te["s"], ["","c w15 l08 r03 t h02"], [], [2]); 
		v = "Total";
		if (zz[z][2]=="avg") v = "Average";	
		nd (el_, te["s"], [v,"c w15 x t h02 br cb b"], [], [2]); 
		
		cn = "c w08 x t h02 br tr";
		for (j=xn; j<jn; j++)	// data
		{
			el__ = nd (el_, te["s"], ["","c"], [], [2]); 
			w_ = "91px"; 	
			if (j==jn-1) { cn = "c w11 x t h02 br tr b"; w_="121px"; }
			el__.style.width = w_
			// for (k=0; k<zn; k++) // todo: multi-column metrics
			{
				v = 1*tot[j][z];
				if (zz[z][0]=="percent") { v = (v*100) / (tot[j][z]*1); }
				if (zz[z][0]=="avg" && (tot[j][0]*1)!=0) { v = ((tot[j][z]*1)/(tot[j][0]*1)); } // (1*r_[j][z]) /  
				// if (zz[z][0]=="avg") { v = (1*tot[(j+1)][z]) / (v*1);  } 
				// if (zz[z][0]=="sla") {  v = (v*100) / (tot[j][0]*1);  } 
				v = (v*1).toFixed ((zz[z][3]*1));
				v = zz[z][4]+v+zz[z][5];
				elv = nd (el__, te["s"], [v,cn], [], [2]); 
			}
		}
		nd (el_, te["s"], ["","e"], [], [2]); 
	}	
	

	return el;
}	

// ----------------------------------------------------------------

function pivot_sort_list_y (u, rr_, n)
{
	var k = [];
	for (var i=0; i<rr_.length; i++)
	{
//		console.log ("   >> rr["+i+"] = "+JSON.stringify (rr_[i])+" |"+n)

		k[i] = { "v":rr_[i][n][0]*1, "i":i , "k":rr_[i][0][0]}
	}
	var k_ = k.sort ( function (a,b){ if (a.v==b.v) return 0; return a.v>b.v?-1:1; } );

	//	console.log ("sort by tot "+JSON.stringify (k_))

	ra[(u+"_rryi")] = k_;
}

function pivot_sort_list_x (u, xx, rrx)
{
	var ri = [];
	var i = 0;
	var _i=-1;
	var j = [];
	var rx = [];
	var xn = xx.length;
	var c = 0;
	var v = 0;

	console.log ("rrx-------------------------")
	console.log (rrx)

	for (i=0; i<=xn; i++) j[i]=[0,0];
	rx[0] = rrx;
	i=0;
	while (i>-1)
	{
		if (i>0 && rx[_i].k[j[_i][0]]!=undefined)
		{
			rk_ = rk[xx[_i]];

			if (rk_!=undefined) // sork by rk 
			{
	// console.log ("rxv "+i+"  "+j[_i][0]+" , "+j[_i][1])
				for (j[_i][1]; j[_i][1]<rk_.length; j[_i][1]++) // skip missing val
				{
					rx[i] = rx[_i].c[ rk_[j[_i][1]] ];
					if (rx[i]!=undefined) { j[_i][1]++; break; }
				}
			}

			if (i==xn) // update index
			{
				// if (!rx[i]) { console.log ("rx[i] "+i+" | "+_i+" | "+JSON.stringify (j)+" xn:"+xn+" | "+ rx.length); console.log (rx); }
				ri[ri.length] = rx[i].a
			}
		}

		if  (rx[i] && rx[i].k.length>0) // descend
		{
			// console.log ("rxd "+i+"---------->")
			_i=i;
			i++;
			j[i][0]=0;
			j[i][1]=0;
			rx[i] = rx[_i].c[ rx[_i].k[j[_i][0]] ];
			// console.log ("rx descend: "+i+" |"+JSON.stringify (rx[i]))
			continue;
		}

		if (_i>-1)  // list
		{
			// console.log ("rxn "+i)
			j[_i][0]++;
			if (j[_i][0]<rx[_i].k.length) // next sibling
			{
				rx[i] = rx[_i].c[ rx[_i].k[j[_i][0]] ];
				continue; 
			}
		}

		// console.log ("rx ascend: "+i)
		i--;
		_i=i-1; // ascend
		if (i>0)
		{
			// console.log ("rxa "+i+"  <----------")
			j[_i][0]++;
			rx[i] = rx[_i].c[ rx[_i].k[j[_i][0]] ];
			j[i][0]=0;
			j[i][1]=0;
			continue;
		}

		//console.log (" > end "+ JSON.stringify (ri) );
		break;
	}

	ra[(u+"_rrxi")] = ri;
	console.log ( "  rrxi: "+ JSON.stringify (ri))

}

function pivot_close_row (xn, ynn, zn, j_, r_)
{
	var j=0, k=0, c=0;
	var htot = [];
	var hc = [];
	for (k=0; k<zn; k++) { htot[k]=0; hc[k]=0; }

	for (j=j_; j<ynn; j++) // fill blanks
	{ 
		c = (1*xn)+(1*j);
		r_[c]=[]; 
		for (k=0; k<zn; k++) r_[c][k]=""; 
	}

	for (j=xn; j<r_.length; j++) for (k=0; k<zn; k++) if (r_[j][k].length>0) { htot[k] += (1*r_[j][k]); hc[k]++; }

	j=r_.length; 
	r_[j]=[];
	for (k=0; k<zn; k++) r_[j][k] = (""+htot[k]);
	j++;
	r_[j]=[];
	for (k=0; k<zn; k++) r_[j][k] = (""+hc[k]);
}

function pivot (el, _u, _a, _r, _m)
{
	var xx = ra[(_r[0]+"_x")];
	var yy = ra[(_r[0]+"_y")];
	var zz = ra[(_r[0]+"_z")];
	var rr = ra[_r[0]];
	var i = 0;
	var i_ = 0;
	var j = 0;	
	var j_ = 0;
	var j__ = 0;
	var k = 0;
	var g = -1;
	var xn = xx.length;
	var yn = yy.length;
	var zn = zz.length;
	var n = (1*xn)+(1*yn);
	var v = "";
	var x = 0;
	var y = 0;
	var y_ = 0;
	var yy_ = [];
	var yyn = 0;
	var r = null;
	var r_ = null;
	var rr_ = [];
	var gg = [];
	var gy = [];
	var tot = [];
	var ct = [];
	var rrx = { a:0, b:0, c:{}, k:[] };  // build an index tree of x then flatten to rrxi
	var COLOR_ = [51,102,188]; // 0x3366cc;	// start color (shade of blue)
	var color_ = [];	
	
	if (yn>0) yy_[yn-1]=0;
	if (yn>1) yy_[yn-2]=yy[yn-1].length;
	for (j=yn-3; j>-1; j--) yy_[j] = yy[j+1].length*yy_[j+1]; 

	if (yn>0) yyn = yy[0].length; 
	for (j=1; j<yn; j++) yyn = yyn*yy[j].length; 

	var ys = xn+yyn+1; // 1: total column count
	if (yyn==0 && xn>0) ys = xn+yyn+2;
	
	for (j=0; j<=ys; j++) { tot[j]=[]; ct[j]=[]; for (k=0; k<zn; k++) { tot[j][k]=0; ct[j][k]=0; } } // init totals

	if (xn==0) { rr_[0] = []; r_=rr_[0]; }
		
	console.log ("[PIVOT/"+_r[0]+"]  xn:"+xn+" yn:"+yn+" yyn:"+yyn+ " ys:"+ys+" yy_:"+JSON.stringify (yy_)+" zn:"+zn+" | yy:"+JSON.stringify (yy)+" | rr:"+rr.length);
		
	for (i=0; i<rr.length; i++)
	{
		r = rr[i];
		
		g = -1;

		for (j=0; j<xn; j++) if (r[j]!=gg[j])
		{
			g=j; 
			gg[j]=r[j];
			for (k=g+1; k<xn; k++) gg[k]=r[k];
			break; 
		}

		if (g>-1) // new row
		{
			if (i>0) // close previous row
			{
				pivot_close_row (xn, yyn, zn, j_, r_);
			}
			
			i_ = rr_.length;
			rr_[i_] = []; // new row
			r_ = rr_[rr_.length-1];
			for (j=0; j<xn; j++) r_[j] = [r[j]]; // xaxis
			j_=0;
			
			
			color_.push ("rgb("+COLOR_[0]+","+COLOR_[1]+","+COLOR_[2]+")");
			COLOR_[0] = (COLOR_[0]+21);
			COLOR_[1] = (COLOR_[1]+46);
			COLOR_[2] = (COLOR_[2]+57);
			for (var j=0; j<3; j++) if (COLOR_[j]>255) COLOR_[j]=COLOR_[j]%255;


			var rx_ = rrx; // update index
			for (j=0; j<xn; j++) 
			{
				if (rx_.c[r_[j]]==undefined) 
				{
					rx_.c[r_[j]] = { a:i_, b:i_, c:{}, k:[] };
					rx_.k[rx_.k.length] = r_[j][0];
				}
				else rx_.c[r_[j]].b = i_;
				rx_ = rx_.c[r_[j]];
			}
		}

		for (j=0; j<yn; j++) gy[j]=-1;
		for (j=0; j<yn; j++) // multiple yaxis columns
		{
			for (k=0; k<yy[j].length; k++)
			{
				y_ = (1*xn)+(1*j);
				if (yy[j][k]==r[y_]) 
				{ 
					gy[j] = k;
					break; 
				}
			}
			if (gy[j]<0) { console.log ("pivot error: no match for yaxis at r:"+i+" j:"+j+" | "+JSON.stringify (r)); break; }
		}
		if (yn>0 && j<yn && gy[j]<0) { console.log ("pivot error: no match for full yaxis"); continue; } // skip row if yaxis failed to match


		j__ = 0;
		for (k=0; k<yn-1; k++) j__ += (gy[k]*yy_[k]);
		if (yn>0) j__ += gy[(yn-1)];
		for (k=j_; k<j__; k++) 
		{ 
			r_[(k+xn)]=[]; 
			for (j=0; j<zn; j++) r_[(k+xn)][j]="";  // fill blanks
		}

		r_[(j__+xn)] = [];
		for (k=0; k<zn; k++) 
		{
			r_[(j__+xn)][k] = r[n+k];
			tot[(j__+xn)][k] += (r[n+k]*1)
			ct[(j__+xn)][k]++;

			// console.log ( "mmmmmm "+j__+" |"+xn +" "+k +"  |"+r[n+k] +" |"+tot[(j__+xn)][k])
		}
		j_ = j__;
		j_++ 
	}

	if (i>0) // close last row
	{
		pivot_close_row (xn, yyn, zn, j_, r_);
	}

	pivot_sort_list_x (_r[0], xx, rrx);
	
	pivot_sort_list_y (_r[0], rr_, tot.length-2);

	htot = [];
	hc = [];
	for (k=0; k<zn; k++) { htot[k]=0; hc[k]=0; }
	for (j=0; j<ys-1; j++) for (k=0; k<zn; k++) { htot[k] += tot[j][k]; if (j>=xn && tot[j][k]!=0) { hc[k]++; /*console.log ("("+j+","+k+") "+tot[j][k]);*/ }  }
	for (k=0; k<zn; k++) { tot[ys-1][k] = htot[k]; tot[ys][k] = hc[k]; }

	ra[(_r[0]+"_pivot")] = rr_;
	ra[(_r[0]+"_yy_")] = yy_;
	ra[(_r[0]+"_tot")] = tot;
	ra[(_r[0]+"_ct")] = ct;
	ra[(_r[0]+"_color")] = color_;

	console.log ("pivot----------------");
	console.log (rr_);
	//console.log (rr_)
	//console.log (tot)
	//console.log (color_)
	
	return el;
}

function rpt (el)
{
	var u_ = el.id.split ("-");
	var a = {"args":"?"};
	var pm = __(el,"vftab").childNodes[1];
	argv (pm, a, "name");		// get filters
	// console.log ("--------filters----"+JSON.stringify (a))
	argv (el.previousSibling, a);	// get rpt args 
	// console.log ("--------rpt----"+JSON.stringify (a))
	url (el, u_[0], u_[1], ("rpt"+a.args), null, 0);
}

// ----------------------------------------------------------------------
 
function _uchk_rpt (ev)
{
	var k = this.previousSibling.name;
	var v = this.previousSibling.value;
	var el = __(this);
	var p = el.parentNode;
	var coll = p.previousSibling.childNodes[1].getElementsByTagName ("input");
	for (var i=0; i<coll.length; i++) // find tag
	{
		if (coll[i].id==k && coll[i].value==v) 
		{ 
			coll[i].checked = false; 
			break; 
		}
	}
	var pv = __(this,"vrpt");
	p.removeChild (el);

// console.log ("  id::"+pv.id);
	rpt (pv.nextSibling);

	boo (ev)
}

function _chk_rpt ()
{
	var k = this.previousSibling.id;
	var v = this.previousSibling.value;
	var b = chk (this.previousSibling);
	var p = __(this).parentNode.nextSibling;
	var el = null;
	var coll = p.getElementsByTagName ("input");
	for (var i=0; i<coll.length; i++) // find tag
	{
		if (coll[i].name==k && coll[i].value==v) { el=coll[i]; break; }
	}
	if (b==false) // remove tag
	{
		if (el==null) return;
		el = __(el);
		p.removeChild (el);
		return;
	}
	if (el!=null) return;
	nd (p, te[this.id], [], [v], [0]);	
}

function _rpt_chk ()
{
	var b = chk (this.previousSibling);
	rpt (__(this,"vrpt").nextSibling);
}	

function _rpt_opt ()
{
	this.previousSibling.checked = true;
	rpt (__(this,"vrpt").nextSibling);
}

function _rpt_upd () // re-render chart
{
	var b = __(this);
	var p = __(b,"vt");
	var el = p.childNodes[1].firstChild;
	var co = CHARTS[p.id];
	var lbl = b.firstChild.value;
	var v = chk (this.previousSibling)
	var a = { hiderow:"", showingline:"g" }
	argv (b, a);
	
	if (a.rpt_r_hide!=undefined) a.hiderow = "cancel"
	if (a.rpt_r_line!=undefined) a.showingline = "";
	b.previousSibling.firstChild.firstChild.childNodes[2].className = a.hiderow;
	b.previousSibling.firstChild.firstChild.childNodes[1].firstChild.className = a.showingline;
	
	el.innerHTML = "";
	var el_ = document.createElementNS ("http://www.w3.org/1999/xhtml", "canvas");
	el_.className="";
	el_.id="";
	el_.width=co.w;
	el_.height=co.h;
	el.appendChild (el_);
	
	var ds_ = [];
	var lbl_ = co.lbl;
	var ds__ = [];
	var i_ = -1;
	var LL = { true:["",""], false:["",""] }
	
	if (co.type=="pie")
	{
		ds_= [{ data: [], backgroundColor:[] }];
	 	lbl_ = [];
		for (var i=0; i<co.lbl.length; i++)
		{
			if (co.rpt_r_hide==undefined) { co.rpt_r_hide=[]; co.rpt_r_line=[]; }
			if (co.lbl[i]==lbl) co[this.previousSibling.name][i] = v;
			if (co.rpt_r_hide[i]==true) continue;
			i_ = lbl_.length;
			lbl_[i_] = co.lbl[i];
			ds_[0].data[i_] = co.ds[0].data[i];
			ds_[0].backgroundColor[i_] = co.ds[0].backgroundColor[i];
		}
	}
	else
	{
		for (var i=0; i<co.ds.length; i++)
		{
			if (co.ds[i].label==lbl) 
			{
				co.ds[i][this.previousSibling.name] = v;
				if (this.previousSibling.name=="rpt_r_line" && v==true) { co.ds[i].type="line"; co.ds[i].backgroundColor="#FFFFFF00";  co.ds[i].order=1; }
				if (this.previousSibling.name=="rpt_r_line" && v==false) { co.ds[i].type="bar"; co.ds[i].backgroundColor=co.ds[i].borderColor; co.ds[i].order=2; }
			}
			if (co.ds[i].rpt_r_hide==true) continue;
			i_ = ds_.length;
			ds_[i_] = co.ds[i];
		}
	}

// ds[l].type = "line"; ds[l].backgroundColor="#FFFFFF00"; 	

	console.log ("rpt_re: ----------------------"+this.previousSibling.name+" | "+JSON.stringify (a));
	console.log (ds_);
	//console.log (co.ds);
		
	uchart_vw (el_, lbl_, ds_, co.type, co.stacked);
}	

function urpt (el, u, a, r, m) 
{
	rpt (el);
}


