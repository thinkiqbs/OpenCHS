var dda = [];

var aa = {};

var te = {};

var re = {};

var rk = {};

var tsu_ = 0;

var ra_ts = 0;

var elvp = null;

var elvpf = null;

var rz = {};

var FILE_UPLOAD_COUNT = 0;

var ND = ["u","uchk","ucal","ucalv","utime","uval","urpt","uhilite","pivot","uchart","utable","uaudio","uargs","ucolor","uerror","ufn","uredirect","uvw"];

aa["div"] = 	["className","id","innerHTML"];
aa["span"] = 	["className","id","innerHTML"];
aa["p"] = 	["className","id","innerHTML"];
aa["form"] = 	["className","id","innerHTML","method","action"];
aa["a"] = 	["className","id","innerHTML","href","target"];
aa["textarea"]= ["className","id","name","value"];
aa["input"] = 	["className","id","name","value","type","checked","placeholder","multiple"];
aa["canvas"] = 	["className","id","width","height"];
aa["iframe"] = 	["className","id","src","width","height","frameBorder","scrolling"];
aa["img"] = 	["className","id","src","width","height"];
aa["ul"] = 	["className","id","innerHTML"];
aa["li"] = 	["className","id","innerHTML"];
aa["label"] = 	["className","id","innerHTML","for"];
aa["pre"] = 	["className","id","innerHTML"];

te["noop"] = {};



te["ur"] = { u:[null,null] };

te["s"] = { div:[null,"",null] }; 

te["l"] = { li:[null] }; 

te["sp"] = { span:[null,"",null] }; 

te["arg"] = { input:["",null,null,null,"hidden"] };

te["argc"] = { input:[null,null,null,null,"hidden"] };

te["opt"] = { div:[null], c:[ { input:[null,null,null,null,"radio",null] } ] };

te["chk"] = { div:[null], c:[ { input:[null,null,null,null,"checkbox",null] } ] }; 

te["txt"] = { div:[null], c:[ { input:[null,null,null,null,"text"] } ] }; // ["","","","","",""]

te["passwd"] = { div:[null], c:[ { input:[null,null,null,null,"password"] } ] }; 

te["ta"] = { div:[null], c:[ { textarea:[null,null,null,null] } ] };

te["txa"] = { div:[null], c:[ { input:[null,null,null,null,"text"], ev:[null,null,null] } ] }; // txt with events

te["file"] = { div:[null], c:[ { input:[null,null,null,"","file","",null] } ] }; //, ev:["","","","",null] } ] }; 

te["ac"] = { div:[null,null], ev:[null], c:[ { a:[null,"",null,"javascript:op()"] } ] };

te["aci"] = { div:[null,null], ev:[null], c:[ { a:[null,null,null,"javascript:op()"] } ] };

te["ar"] = { div:[null,null], ev:[null], c:[ { a:[null,null,"","javascript:op()"], c:[ { div:[null] } ] } ] };

te["nb"] = { s:["%0","%1"] };

te["nbe"] = { s:["x y cr","%1"] };

te["leaf"] = { div:["c r05"], s:["w01 l07 r02  y03 n gwd cb ba_","&nbsp;"] };

te["branch_footer"] = { s:["mln2 mtn13 x y15 abs gws_",""] };

te["pgto2"] = { c:
[
	{ div:["c x t03"], s:["cgr","-"] },
	{ div:["c x t03"], s:["","%3"] }
]};

te["pgto"] = { c:
[
	{ div:["c x t03"], s:["cgr","-"] },
	{ div:["c x t03"], s:["","%3"] }
]};

te["pg"] = { c: 
[
	{ div:["c"], s:["x t03","%2"] },
	{ u:[null] },
	{ div:["c"], s:["x t03","of"] },
	{ div:["c"], s:["x t03","%4"] },
	{ div:["c l"], c:[ { aci:["nav",null,"_nav",null,"prev",""], c:[ { div:[null] }, { arg:["","_a","%0"] } ] }, { s:["navl","..."] } ] },
	{ div:["c"], c:[ { ac:["nav",null,"_nav",null,""], c:[ { div:[null] }, { arg:["","_a","%0"] } ] }, { s:["navl","..."] } ] }
]};

te["pg2"] = { c: 
[
	{ div:["c t02"], c:[ { aci:["nav",null,"_nav",null,"prev",""], c:[ { div:[null] }, { arg:["","_a","%0"] } ] }, { s:["navl","..."] } ] },
	{ div:["c"], s:["x ","%2"] },
	{ u:[null] },
	{ div:["c"], s:["x ","of"] },
	{ div:["c"], s:["x ","%4"] },
	{ div:["c t02"], c:[ { ac:["nav",null,"_nav",null,""], c:[ { div:[null] }, { arg:["","_a","%0"] } ] }, { s:["navl","..."] } ] }
]};


te["arg_a"] = { arg:["","_a","%0"] };

te["arg_c"] = { arg:["","__c","1"] };

te["argf"] = { arg:["","%3","%1"] };

// ---------------------------------------------

te["kf_d"] = { c:   // 		
[
	{ s:["c w15 y08 cb",null] }, 
	{ div:["c","calw"], c:
	[
		{ li:["w30 ba gw cb","va"], c:[ { div:[""], ev:["_dd"], c:
		[					
			{ p:["c w26 x t03","o"], c:[ { p:["","calv"], ucalv:[null,null,null] } ] }, 
			{ div:["d w02 x y content-hidden_"],  c:[ { div:["h02 w02 awb"] } ] },
			{ div:["d w02 x y content-shown_"],  c:[ { div:["h02 w02 awt"] } ] },
			{ div:["e"] }
		]} ]},
		{ div:["dd w40_ sh xx b10 ba mtn1 gw","vdd"], ev:["_undd"], c:
		[ 
			{ div:[], c:
			[
				{ ucal:[null,null,"noop","2","Start Date", "End Date"] },
				{ div:["e"] },
				{ div:["c x"], aci:["ay","_vcal0","_cal_vw","x y tc ba_w cbl","l0","Day"] },
				{ div:["c x"], aci:["ay","_vcal1","_cal_vw","x y tc ba_w cbl","l1","Range"] },						
				{ div:["e"] }
			]}
		]}
	]},
	{ div:["e"] } 
]};

te["kf_l"] = { c:
[
	{ s:["c w15 y08 cb",null] }, 
	{ div:["c",null], c:
	[
		{ li:["w30 ba gw cb","va"], c:[ { div:["",null], ev:["_dd"], c: // 
		[
			{ p:["c w26 b03 r0","o"], uchk:["tag_",null,"","", "",null,null,null,null,null] }, 
			{ div:["d w02 x y content-hidden_"],  c:[ { div:["h02 w02 awb"] } ] },
			{ div:["d w02 x y content-shown_"],  c:[ { div:["h02 w02 awt"] } ] },
			{ div:["e"], u:[null] } // dd args
		]} ]},
		{ div:["dd mtn1 ba gw","vdd"], ev:["_undd"], c:
		[ 
			
		]}
	]},
	{ div:["e"] }
]};

te["kf_c"] = { c: 
[
	{ s:["c w15 y08 cb",null] }, 
	{ div:["c",null], c:
	[
		{ li:["w30 ba gw cb","va"], c:[ { div:[""], ev:["_dd"], c:
		[
			{ p:["c w26 b03 r03","o"], uchk:["tag",null,"","", "",null,null,null] }, 
			{ div:["d w02 x y content-hidden_"],  c:[ { div:["h02 w02 awb"] } ] },
			{ div:["d w02 x y content-shown_"],  c:[ { div:["h02 w02 awt"] } ] },
			{ div:["e"] }
		]} ]},
		{ div:["dd w30 mtn1 y ba gw","vdd"], ev:["_undd"], c:
		[ 
			{ uchk:["chk_r",null,null,"", null,null,null] }
		]}
	]},
	{ div:["e"] }
]};

te["kf_n"] = { p:["","o"], c: // 	
[
	{ s:["c w15 y08 cb",null] }, 
	{ li:["c"], txt:[" ba w30"," w30 x y07","",null,null] },
	{ div:["e"] }
]};

te["kf_s"] = { p:["","o"], c: // 	
[
	{ s:["c w15 y08 cb",null] }, 
	{ li:["c"], txt:[" ba w30"," w30 x y07","",null,null] },
	{ div:["e"] }
]};

// ---------------------------------------------------------------------------

te["k_d"] = { div:[null,null], c:
[
	{ div:["ah","va"], ac:["","","_dd","xx y02 h03 cb",""], c:
	[					
		{ div:["c t08 b"], s:[null,null] }, 
		{ div:["d g l t03"], s:["x yy",""], c:[ { div:[null] } ] }, // da db
		{ div:["e"] }
	]},
	{ div:["dd t ba_g gw sh","vddk_d"], ev:["_undd"], c:
	[
		// { div:["l15"], c:[ { ucal:[null,null,null] }, { div:["e"] } ] },
		{ div:["x15 b10"], c: 
		[
			{ div:["c"], aci:["ay","","_cal_vw","x y tc ba_w cbl","l0","Day"] },
			{ div:["c"], aci:["ay","","_cal_vw","x y tc ba_w cbl","l1","Range"] },						
			{ div:["e"] }
		]}
	]}
]};

te["k_c"] = { div:[null,null], c:
[
	{ div:["ah","va"], ac:["","","_dd","xx y02  h03 cb",""], c:
	[
		{ div:["c t08 b"], s:[null,null] },
		{ div:["c g t03"], s:["x yy",null] }, // da db
		{ div:["e"], arg:["",null,null] }
	]},
	{ div:["dd yy sh ba_g gw cb","vddk_c"], ev:["_undd"], c:
	[ 
		// { div:[null], uchk:[null,null,null,null] }
	]}
]};
		
te["k_l"] = { div:[null,null], c: // todo: populate from list
[
	{ div:["ah","va"], ac:["","","_dd","xx y02  h03 cb",""], c:
	[
		{ div:["c t08 b"], s:[null,null] },
		{ div:["c g t03"], s:["x yy",null] }, // da db
		{ div:["e"], arg:["",null,null] }
	]},
	{ div:["dd yy sh ba_g gw cb","vddk_c"], ev:["_undd"], c:
	[ 
		{ div:[null], uchk:[null,null,null,null] }
	]}
]};

te["k_s"] = { div:[null,null], c: // 	
[
	{ div:["ah","va"], ac:["","","_dd","xx y02 h03 cb",""], c:
	[
		{ div:["c t08 b"], s:[null,null] }, 
		{ div:["c g t03"], s:["x yy",null] }, // da db
		{ div:["e"] }
	]},
	{ div:["dd","vddk_s"], ev:["_undd"], c:
	[ 
		{ div:["x y sh ba_g gw"], txt:["","","",null,null] } 
	]}
]};

te["k_a"] = { div:[null,null], c: // 	
[
	{ div:["ah","va"], ac:["","","","xx y02 h03",""], c:
	[
		{ div:["c t08 "], s:[null,null] }, 
		{ div:["c g t03"], s:["x yy",null] }, // da db
		{ div:["e"], arg:["",null,null] }
	]}
]};


te["sub"] = { u:["%0","%1"] };

te["btnwait"] = { c:[ { s:["%0","%1"] }, { arg:["tso","","12"] } ] };

te["uvpfn"] = { ufn:["uvpfn"] };

te["ufn_attach"] = { ufn:["ufn_attach"] };

// -------------------------

function op(){}

function _ID(id){ return  document.getElementById(id); }

function _hilite () { this.style.backgroundColor="lightyellow"; } /**/

function _uhilite () { this.style.backgroundColor="";  }

function _hiliteb () { this.style.backgroundColor="dodgerblue"; this.style.color="white"; this.style.cursor="pointer";} /*d6edf5*/

function _uhiliteb () { this.style.backgroundColor=""; this.style.color=""; }

function _rmp (ev)
{
	var el = __(this,"va").parentNode;
	var p = el.parentNode;
	p.removeChild (el);
	boo (ev)
}

function _rm (ev)
{
	var el = __(this); //,"va");
	var p = el.parentNode;
	p.removeChild (el);
	boo (ev)
}

function _mvup ()
{
	var p = __(this,"va");
	var p_ = p.parentNode;
	var el = p.previousSibling;
	if (el==null) return;
	console.log ("mvu "+p.id+" "+el);
	p_.removeChild (p);
	p_.insertBefore (p, el);
}

function _mvdown ()
{
	var p = __(this,"va");
	var p_ = p.parentNode;
	var el = p.nextSibling;
	if (el==null) return;
	console.log ("mvd "+p.id+" "+el);
	p_.removeChild (p);
	p_.insertBefore (p, el.nextSibling);
}

function _opq () 
{ 
	var s = "transparent"
	if (this.value.length>0) s = "white"; 
	this.style.background = s;
}

function _opt ()
{
	var coll = this.getElementsByTagName ("input");
	for (var i=0; i<coll.length; i++) if (coll[i].type=="radio")
	{
		coll[i].checked=true;
	}
}

function tso ()
{
	var coll = document.getElementsByTagName ("input");
	for (var i=0; i<coll.length; i++) if (coll[i].id=="tso" && coll[i].value>-1)
	{
		var p = __(coll[i],"vs2").parentNode;
		if (p.id=="vs2") p.id="vs0";
	}
}

function tsu ()
{
	var coll = document.getElementsByTagName ("input");
	for (var i=0; i<coll.length; i++) if (coll[i].id=="ts" && coll[i].value>0)
	{
		coll[i].previousSibling.innerHTML = hmst (coll[i].value, ["","h","hms","0",""]);
	}
	setTimeout(tsu, 3000);
}

function _(p,id,tn,k)
{
	if (!tn) tn="p"; 
	if (!k) k="id"; 
	var coll = p.getElementsByTagName(tn);
	for (var i=0; i<coll.length; i++)
	{
		 if (coll[i][k]==id) return coll[i];
	}
	return null;
}

function __(el,id="v")
{
	var l = id.length;
	while (el.parentNode)
	{
		if (el.parentNode.id && el.parentNode.id.length>0 && id==el.parentNode.id.substr (0,l)) break; 
		el = el.parentNode;
	}
	return el.parentNode;
}

function argv (p,a,k="name",skipid=null,b={})
{
	var v = "";
	var coll = p.getElementsByTagName ("input"); // console.log ("argv::: "+coll.length)
	for (var i=0; i<coll.length; i++)
	{
		var o = coll[i];
		// console.log ("[argv] "+k+"/"+o[k])
		if (o[k].length<1) continue;
		if (skipid!=null && o.id!=skipid) continue;
		v = o.value;
		if (o.type=="radio" || o.type=="checkbox")
		{
			if (!o.checked) continue; 
			// console.log (" >> "+o[k]+" | "+ b[o[k]]);
			if (a[o[k]]===undefined) { a[o[k]]=""; b[o[k]]=[]; }
			if (b[o[k]]===undefined) { b[o[k]]=[]; } // just incase
			b[o[k]][b[o[k]].length] = o; 
			if (a[o[k]].length>0) a[o[k]]+=",";
			a[o[k]]+=v;
			if (o.id=="_" && o.nextSibling.value.length>0) a[o[k]]+=":"+o.nextSibling.value 
			// console.log (" >> "+o[k]+"="+v+"   | "+o.id+" | "+a[o[k]]);
			continue;
		}
		if (o.type=="file" && a.append)
		{ 
			for (var j=0; j<o.files.length; j++) { a.append (o.name, o.files[j], o.files[j].name); }
			continue; 
		}
		if (a[o[k]]===null) { a[o[k]+"_"]=o; /*console.log (o[k]+"::");*/ }  // collect node
		if (o[k]==".id") 
		{
			// if (v.length>0)  v = "/"+v;
			a[o[k]]=v;
			continue;  
		}
		if (a.args) { a.args += (o[k]+"="+encodeURIComponent(v)+"&"); continue; }
		if (a.append) { a.append (o[k], v); continue; }
		a[o[k]]=v; 
	}
	coll = p.getElementsByTagName ("textarea");
	for (var i=0; i<coll.length; i++)
	{
		var o = coll[i];
		v = o.value;
		if (a[o[k]]===null) a[o[k]]=o;  // fill gaps
		if (a.append) { a.append (o[k], v); continue; }
		a[o[k]]=v; // default: collect values 
	}

	var kb = Object.keys (b);
	for (var i=0; i<kb.length; i++) // chkbox values
	{
		var vv = b[kb[i]]; 
		v = "";
		for (var j=0; j<vv.length; j++) { if (j>0) v+=","; v+=encodeURIComponent(vv[j].value); }
		if (a.args) { a.args += kb[i]+"="+v+"&";  continue; }
		if (a.append) { a.append (kb[i], v); continue; }
	}

	// console.log ( "----> {a}" + JSON.stringify (a))

	return a;
}

function rargs (r_, coll)
{
	var v = "";
	for (var i=0; i<coll.length; i++)
	{
		// console.log ("  rarg: "+coll[i].id+"="+coll[i].value);
		if (coll[i].id.length<1) continue;
		var kk = coll[i].id.split ("-");
		if (kk.length<2) continue;
		v = coll[i].value;
		r_[kk[1]] = v;
	}
	// console.log ("[rargs] "+JSON.stringify (r_));
}

function uargs (el, u_, a_, r_, m_)
{
	var k = null;
	var a = {}
	var coll = el.parentNode.previousSibling.getElementsByTagName ("input");
	for (var i=0; i<coll.length; i++)
	{
		var o = coll[i];
		if (o.name.length<1) continue;
		k = o.name;
		if (o.parentNode.id.length>0) k = o.parentNode.id;
		if (a[k]===undefined) a[k]={};
		a[k][o.value] = "1";
	}
	console.log ("[uargs] "+u_[0]+" | "+JSON.stringify (a))
	ra[u_[0]] = a;
}

function hmsr (t,a) // :r:dmyhn:17: :0:899999999:Remaining :DHm::Expred :DHm::
{
	var t_ = Math.ceil ((Date.now()/1000)); // duration in seconds
	if (ra_ts>0) t_ -= ra_ts;  	// client clock ahead
	if (ra_ts<0) t_ += (-1*ra_ts);  // client clock behind
	
	var x = Math.ceil(t-t_);  // console.log (t+" "+t_+" |"+x);
	var w = 0;
	if (x<0) { w=1; x=x*-1;}
	var x_=x; 

	if (x>31536000) return vdt (t,["","d","dmyhnr",a[3]," "]); // 24h
	
	if (x>86400) return vdt (t,["","d","dmhnr",a[3]," "]); // 24h
	
	if (x>3600) return vdt (t,["","d","hnr",a[3]," "]); 
	
	var m = Math.floor(x/60);
	return m+" minutes ago";
}

function hmsp (t,a)
{
	var t_ = (1*t)%86400;
	var h = Math.floor(t_/3600);
	var m = (t_%3600)/60;
	var r_ = [(""+h),(""+m),"am"];
	// console.log ("hmsp: "+t+" "+t_+" "+h+":"+m)
	if (m<10) r_[1]="0"+r_[1];
	if (h>11) 
	{ 
		r_[2]="pm";
		r_[0]=(""+(h-12));  
		if (h==12) r_[0]="12";
	}
	return r_[0]+":"+r_[1]+" "+r_[2];
}

function hmsf (t,a)
{
	var x = Math.ceil(t)
	var m = x%3600;
	var s = m%60;
	var v = "";
	if (x>=3600)
	{
		var h = Math.floor(x/3600);
		v += h+":";
	}
	m = Math.floor((m-s)/60);
	if (m<10) v += a[4];
	v += m;
	if (a[2] && a[2].substr(a[2].length-1)!="s") return v;
	v += ":"
	if (s<10 && s>-1) v += "0";
	v += s; 
	return v;
}

function hmst (t,a)
{
	var ts = Math.floor(Date.now ()/1000);
	if (ra_ts>0) ts -= ra_ts;  	// client clock ahead
	if (ra_ts<0) ts += (-1*ra_ts);  // client clock behind
	return hmsf (ts-t,a);
}

function vdt (x,a)
{
	// var x = r[a[3]];
        if (x.length<1) return ""; // :d:dmyhm:1:
	var vv = x.split (";");	// console.log (a);
	var na = a[2].length; 
	var kk = {"d":0, "m":1, "y":2, "h":3, "n":4, "s":5, "r":6, "x":7};
	var c = 0;
	var s = "";
	for (var i=0; i<vv.length; i++)
	{
		if (vv[i].length<1) continue;
		if (i>0) s+="&nbsp;&nbsp;to&nbsp;&nbsp;";
		var dt = new Date(1000*vv[i]);
		var v = [(""+dt.getDate()), ra["month"][(dt.getMonth()+1)][1], (""+dt.getFullYear()), (""+dt.getHours()), (""+dt.getMinutes()), (""+dt.getSeconds()), " AM", "Today "];
		if (v[3]>11) { v[6]=" PM"; }
		if (v[3]>12) { v[3]=v[3]-12; }
		//--
		for (var j=0; j<na; j++)
		{
			var k = kk[a[2].substr(j,1)];
			if (j>0 && k<4) s += a[4];
			if (k>3 && k<6) s += ":";
			if (k>3 && v[k].length==1) s += "0";
			s += v[k];
		}
		c++;
	}
	return s;
}

function vu (r,a) // ":u:f:3:4:5:6"
{
	console.log ("[VU] "+JSON.stringify (a));
	var f = 0;
	if (a[2].length>0) f = window[a[2]] (r,a); 
	if (a[2].length<1) f = r[a[3]]>a[4] ? 1 : 0;
	return a[5+(f*1)];
}

function vel (r,a) // :v:table_name:col_name::enum:enum_col
{
	var kk = ra[(a[2]+"_k")];
	if (kk==undefined)
	{
		if (a.length<5)  return "";
		return ra[a[4]][""][a[5]];
	}
	var k = kk[a[3]];
	if (k==undefined) return "";
	var v = r[k[0]];
	// console.log (a[2]+":"+a[3]+" | "+JSON.stringify (r))
	if (a.length<5) return v;
	if (a[4]=="") 
	{
		var o = ra[a[5]];
		if (o===undefined) return v;	
		var v_ = o[v];
		if (v_===undefined) return v;
		return v_[a[6]];
	};
	// todo: date
	return v;
}

function ve (r,a) // ::yesno:25:2 
{
	var v = r[a[3]];
	var o = ra[a[2]];
	if (o===undefined) return "!";	
	var v_ = o[v];
	if (v_===undefined) return v;
	return v_[a[4]];
}

function valf (r,v)
{
	if (v.length<2 || !r) return v;
	if (v.substr(0,1)=="%") return r[(1*v.substr(1))]; 
	if (v.substr(0,1)!=":") return v;
	var a = v.split (":");
	
	if (a[1]=="k") // return k value
	{
		if (!ra[a[2]]) return ""
		if (!ra[a[2]][a[3]]) return ""; 
		if (a.length==4) return ra[a[2]][a[3]]; // used by applyf
		if (a.length==5 && a[4]=="p") return hmsp ([ra[a[2]][a[3]]], [,,,0,]);
		if (a.length==5 && a[4]=="h") return hmsf ([ra[a[2]][a[3]]], ["","h","hms","0",""]);
		if (a.length==5) return ra[a[2]][a[3]][a[4]]; 
		if (a.length==6) 
		{
			var v_=  ra[a[2]][a[3]][r[a[5]]]; 
			// console.log (" valf-k: "+JSON.stringify (ra[a[2]][a[3]])+" |"+r[a[5]]+" | "+v_)
			if (v_==undefined) return "";
			return v_;
		}
		return "";
	} 
	if (a[1]=="v") return vel (r,a);
	if (a[1]=="u") return vu (r,a)
	if (a.length<4) return v;
	if (r[a[3]]===undefined) return "?.";
	if (a[1]=="f") return "" + ( (r[a[3]]*1).toFixed (a[2]*1) ); 
	if (a[1]=="d") return vdt (r[a[3]],a);
	if (a[1]=="h") return hmsf (r[a[3]],a);
	if (a[1]=="t") return hmst (r[a[3]],a);
	if (a[1]=="p") return hmsp (r[a[3]],a);
	if (a[1]=="r") return hmsr (r[a[3]],a);

	return ve (r,a);
}

function val (v, a, r, m, el, k, w)
{
	var v_ = v;
	if (v===null) { v_ = a[(m[0]-1)]; m[0]--; } // pop a stack
	if (v_===null) return null;
	if (v_.length<1) return v_;
	if (v_.length>1 && r) v_ = valf (r,v_);
	if (el && k && w!=1) 
	{
		if (k=="innerHTML") 
		{
			//v_ = v_.replace (/>/gm,"&gt;"); 
			//v_ = v_.replace (/</gm,"&lt;"); 
			//v_ = v_.replace (/\n/gm,""); // line break
		}
		el[k] = v_; 
	}
	if (el && k && w==1) 
	{
		// console.log ("-ev-"+v_+ window[v_])
		el[k] = window[v_];
	}
	return v_;
}


// -------------------

function grp (p,u,a,r,m)
{
	while (p.id=="vg") // ascend
	{	
		var v = null;
		var coll = p.previousSibling.getElementsByTagName ("input");
		for (var i=0; i<coll.length; i++) if (coll[i].id=="g") { v = coll[i].value; break; }
		if (v && r[u[2]]==v) { break; } // match
		p = p.parentNode.parentNode;
	}
	if (p.id!="vg") p = nd (p, te[u[0]], [], r, [0]);
	if (r[(u[4]*1)].length>0) p = nd (p, te[u[3]], [], r, [0]);
	return p;
}

function uhilite (el, u, a, r, m)
{
 	var txt = _(__(el,"vd").previousSibling,"txa");
 	if (!txt)
 	{
 		el.innerHTML = u[0]; // todo: replave ^
 		return;
 	}
	var v = txt.firstChild.value;
	var vv = v.split (" ");
	var cn = [];
	var w = [];
	var pk = [];
	var pos = {}
	for (var i=0; i<vv.length; i++)
	{
		if (vv[i].length<1) continue;
		var expr = new RegExp (("[ \\^]"+vv[i]),'gi');
		var mm = u[0].matchAll (expr);
		for (const m of mm) 
		{
			pos[m.index] = m.index+m[0].length;
			pk[pk.length] = m.index;
			//console.log (mm);
		}
	}
	pk.sort ();
	console.log (JSON.stringify (pk)+" | "+JSON.stringify (pos))
	/*if (v.length<1)*/ { cn=[""]; w=[u[0]]; }
 
 	var v_ = u[0]
	var a = 0;
	var b = v_.length;
	var c = 0;
	var el_ = null;
	while (a<v_.length)
	{
		if (c<pk.length) b = pk[c];
		el_ = document.createElementNS ("http://www.w3.org/1999/xhtml", "span");
		//el_.className = ""
		el_.innerHTML = v_.substring(a,b);
		el.appendChild (el_);
		//console.log ("--> "+a+","+b+" | "+v);
		
		if (c<pk.length)
		{
			a = b;
			b = pos[pk[c]];
			el_ = document.createElementNS ("http://www.w3.org/1999/xhtml", "span");
			el_.className = "n b gg cw"
			el_.innerHTML = v_.substring (a,b);
			el.appendChild (el_);
		}
		a=b;
		b = v_.length;
		c++;
	}
}

function uval (el, u, a, r, m)
{
	// console.log ("[uval]" + JSON.stringify (u))
	var vv = u[1].split ("^");
	if (vv.length==1)
	{
		el.innerHTML = u[1]
		return
	}
	var s = "";
	var cn = "c";
	if (u.length>2) cn=u[2];
	for (var j=1; j<vv.length; j++) 
	{
		if (j>1 && u[0].length==0) s+="<div class='c micon x cd'>navigate_next</div>";
		if (u[0].length==0) s+="<div class='"+cn+"'>";
		if (u[0].length>0) s+="<div class='c r15'><div class='y02 s cd'><span>"+rz[u[0]][j]+"</span><span class='x micon'>navigate_next</span></div>";
		s+="<div>"+vv[j]+"</div>";
		s+="</div>"
	}
	s += "<div class='e'></div>";
	el.innerHTML = s;
}

function ucolor (el, u, a, r, m)
{
	el.style.backgroundColor = u[0];
}

function uaudio (el, u, a, r, m)
{
	var s = u[0]+u[1]+u[2];
	console.log (s);
	el.innerHTML = "<audio style='width:240px;' src='"+s+"' controls preload='none'></audio>";
}

function uerror (el, u, a, r, m)
{

}

function ufn (el, u, a, r, m)
{
	window[u[0]] (el, u, a, r, m); 
}

function uvw (el, u, a, r, m) 
{
	var a = {args:"?", ".id":""};
	argv (el,a);
	url (el, u[0], u[1], (a[".id"]+a.args));
}

function uredirect (el, u, a, r, m)
{
	console.log (u);
	window.location.href = (HOME+u[0]+u[1]);
}

function uchk (el, u, a, r, m)
{	
	var a_ = [];
 	for (var i=u.length-1; i>3; i--) 
 	{
 		var v = u[i];
 		if (u[i].substr(0,1)==" ") v = u[i].substr(1);
 		a_[a_.length] = v;
 	}

	var vv = u[1].split (",");
	var vn = 0;
	if (u[1].length>0) vn=vv.length; 
	var dn = vn;
	var dk = null;
	var dv = {}; 
	if (u.length>2 && u[2].length>0 && ra[u[2]])
	{
		dv = ra[u[2]];
		dk = rk[u[2]];
		if (dk==undefined) { dk = Object.keys(dv).sort();  }
		dn = dk.length; 
		// console.log (u[2]+"  dk "+JSON.stringify (dk));
	}
	
	var fc_ = 9;
	// if (u.length>3 && u[3].length>0) fc_ = u[3]*1;
	
	var c = -1;
	for (var i=0; i<dn; i++)
	{
		var r_ = [];
		if (dk==null)
		{
			r_ = vv[i].split(":"); 
			if (r_.length==1) r_[1]="";  
		}
		if (dk!=null) // populated check-list
		{
			r_ = dv[dk[i]].slice (0); 		// get a copy
			r_[fc_]="";
			if (vn>0 && vv.indexOf (r_[0])>-1) r_[fc_]="1";
			// console.log ("uchk --- "+u[0]+" ["+dk[i]+"] "+vn+" "+u[1])
		}
	
		if (r_[0]=="0" && u[0].substr(0,3)=="tag") continue; // hack: dont render tag if id==0
		c++;
		if (c==0 && u.length>3 && u[3].length>0 && u[3]=="^") el.innerHTML = "";
		// if (c==0 && u[0]=="tag" && u.length>2 && u[2].length<1) el.innerHTML=""; // hack: clear txa 
	
		nd (el, te[u[0]], a_.slice(0), r_, [a_.length]);  
	}
}

function u (el, u_, a, r, m)
{
	// console.log ("/u/"+JSON.stringify (u_));

	var rr_ = [];
	var r_ = r;
	var n = 1;
	if (u_.length>1) 
	{
		n = 0;
		if (u_[1].length>0 && ra[u_[1]]) { rr_=ra[u_[1]]; n=rr_.length; }
		if (u_.length>2 && u_[2].length>0)
		{
			n=0;
			if (rr_[u_[2]]) { rr_=[rr_[u_[2]]]; n=1; }
		}		
		if (n>0 && u_.length>3 && u_[3].length>0)
		{
			if (!ra[u_[3]] || ra[u_[3]].length<1) return; 
			el.innerHTML = ""; // clear default content
		}
	}
	var el_ = el;
	for (var i=0; i<n; i++)
	{
		if (u_.length>1) r_ = rr_[i]; 		// row i
		if (!te[u_[0]]) alert ("invalid template:"+u_[0]+"|"+JSON.stringify(a_));
		var a_ = [];
		for (j=0; j<m[0]; j++) a_[j]=a[j];
	//	if (u_.length>2 && u_[2].length>0) { el_ = grp (el_, u_, a_, r_, [m[0]]);  } // grouping 
		nd (el_, te[u_[0]], a_, r_, [m[0]]); continue;
	}
}

function nd (p,o,a,r,m) 
{
	var el = p;
	var e = null;
	var t = null;
	var j = 0;
	var k = 0;
	var a_ = [];

	if (!o) console.log ("oi");

	for (var i in o)
	{
		if (aa[i]) e = i;
		if (te[i]) t = i;
	}
 
	if (e)
	{
		el = document.createElementNS ("http://www.w3.org/1999/xhtml", e);
	   	for (j=0; j<o[e].length; j++) val (o[e][j], a, r, m, el, aa[e][j]); 
		p.appendChild (el);
		if (e=="input" && el.type=="text") { el.setAttribute ("autocomplete","off"); }
		if (e=="textarea") 
		{ 
			var h = ((el.value.length/90)*25)+20; 
			// console.log ("TXA: "+el.height+" | "+el.style.height+" | "+h); 
			if (h<100) h=100; 
			el.style.height=h; 
		}
	}
	
	if (o.ev)
	{
		//console.log ("[ev] "+JSON.stringify (o.ev)+" |"+JSON.stringify (o))
		var ev = ["onclick", "oninput", "onkeydown", "onfocus", "onblur", "onmouseover", "onmouseout"]; 
		for (j=0; j<o.ev.length; j++) val (o.ev[j], a, r, m, el, ev[j], 1); 
	}

	if (t) 
	{
		for (j=0; j<o[t].length; j++) a_[j] = val (o[t][j], a, r, m);
		// console.log (t+">>> "+JSON.stringify (a_)+" | "+JSON.stringify (m));
		if (t=="f" && a_[1].length==0) return; // skip empty filters 
		for (j=o[t].length-1; j>-1; j--) { a[m[0]]=a_[j]; m[0]++; }
		el = nd (el, te[t], a, r, m);
	}

	for (var i=0; i<ND.length; i++)
	{
		k = ND[i];
		if (!o[k]) continue;
		var u_ = [];
		for (j=0; j<o[k].length; j++) u_[j] = val (o[k][j], a, r, m);
		el = window[k] (el, u_, a, r, m, o);
	}

	var c = 0;
	if (o.c) c = o.c.length;  
	var el_ = el;
	for (var i=0; i<c; i++) 
	{
		el = nd (el_, o.c[i], a, r, m);
	}

	return el;
}

function ld (p, m, http_status) 
{
	var el = document.getElementById("lds");
	el.innerHTML="";
	for (var k in ra) 
	{
		if (k.substr (0,1)==".") rk[k.substr (1)] = ra[k];
		el.innerHTML += "<div class='y'><b>"+k+"</b>:"+JSON.stringify (ra[k])+"</div>";
	}

	for (var k in re)
	{
		if (ra[k]) re[k]=ra[k]; // update re
		if (!ra[k]) ra[k]=re[k]; // update ra		
	}

	if (!UU[m])
	{
		console.log ("Invalid target! "+m);
		return;
	}

	var uu = null;

	if (UU[m][http_status]!=undefined)  // 201,202,412,401
	{ 
		uu = UU[m][http_status];  
	}

	if (http_status==401 && UU[m][401]==undefined)
	{
		p = document.getElementById ("vv"); 
		uu = UU["login"][401];
		console.log ("!!! LOGGED OFF"); 
	}

	if (uu==undefined)
	{
		console.log ("Invalid target!!"+m+" "+http_status);
		return;
	}

	console.log (http_status+" -> "+m+":"+JSON.stringify (uu)+" @"+p.id)

	for (var i=0; i<uu.length; i++)
	{		
		var u_ = uu[i];
		var p_ = p;
		// if (!ra[u_[1]]) continue;
		if (u_.length>2 && u_[2].length>0 && p_.id.substr (0,u_[2].length)!=u_[2])
		{
			console.log ("ascend "+p_.id+"("+p_.className+") -> "+u_[2]);
			p_ = __(p_, u_[2]);  // ascend 
			// console.log ("ascend: "+p_.id+" -> "+u_[2]);
		}
		if (u_.length>3 && u_[3].length>0) 
		{
			console.log ("descend "+p_.id+"("+p_.className+") -> "+u_[3]);
			p_ = _(p_, u_[3]); // descend
			if (u_[3]=="vp" && u_[0]!="noop") vp (p_);
			if (u_[3]=="vp" && u_[0]=="noop") document.getElementById ("vp").style.display = "none";
		}
		if (p.id=="vs0")
		{
			var cn  = "vs2";
			if (ra.errors) cn = "vs3";
			p.parentNode.id = cn;
			p_ = p.parentNode.firstChild;
			setTimeout (tso, 10000); // wait ten seconds for ami update, else show button for user to try 
		}
		 // console.log ("ld::nd: "+p_.id+" |"+JSON.stringify (u_));
		p_.innerHTML = ""; // clear 
		var a_ = [];
		var m_ = [0];
		// for (var j=ra.a[i].length-1; j>-1; j--) { a_[m_[0]]=ra.a[i][j]; m_[0]++; }
		// console.log (p_.id+" | "+u_[0]+" "+u_[1]);
		nd (p_, {u:[u_[0],u_[1]]}, a_, [], m_);
	}

	ra["auth_nb"] = [];

	if (tsu_==0) 	{ tsu (); tsu_=1; }
}

function ld_audio (p, u, x)
{
	console.log ("[ld audio] "+p.id+" "+u+" "+x.status) 
	const audioURL = URL.createObjectURL (x.response);
	p.innerHTML = "<audio controls></audio>";
	p.firstChild.src = audioURL;
	p.firstChild.play ()
}

function url_progress (ev)
{
//    console.log (ev.type+": "+ev.loaded+" bytes transferred");
}

function url (p, u, m, a="", data=null, l=0, o=null, meth="GET")
{
	if (l==0)
	{
		var le = document.createElementNS ("http://www.w3.org/1999/xhtml", "div"); 
		le.className = "xx t02 s go sh'";
		le.id = "loadn";
		le.innerHTML = "";
		p.insertBefore (le, p.firstChild); // todo: ajax loader on p or el?
	}
	if (l==2)
	{
		p.className="savn";
		var nb = _(p,"nb");
		if (nb) nb.innerHTML = "";
	}
	var x = new XMLHttpRequest ();	
	if (l==3)
	{
		p.className="savn";
		x.addEventListener('loadstart', url_progress);
		x.addEventListener('load', url_progress);
		x.addEventListener('loadend', url_progress);
		x.addEventListener('progress', url_progress);
		x.addEventListener('error', url_progress);
		x.addEventListener('abort', url_progress);
	}
	if (m.length>0) m+="/";
	x.open (meth, (APIPATH+m+a), true);
	x.responseType = 'blob';
	if (o && u=="login")
	{
		var s = btoa (o.user+":"+o.pass);
		x.setRequestHeader('Authorization','Basic ' + s);
		o = null;
	}
	if (o)
	{
		// console.log ("-------JJ");
		x.setRequestHeader('Content-Type','application/json');
		data = JSON.stringify (o);
	}
	x.onload = function (ev) 
	{
		if (x.getResponseHeader("Content-Type").substr (0,6)=="audio/")
		{
			// console.log (ev.target)
			ld_audio (p,u,x);
			return;
		}
		x.response.text().then (text => 
		{
			ra = JSON.parse (text);
			if (l==2 || l==3) p.className="";
			ld (p,u,x.status);
		});
	};
	x.onerror = function (ev) 
	{
   		// window.alert ("Error: " + ev.target.status);
	};
	// todo: progress bar (useful for file upload)
	x.send (data);
}

function jso (p, o, k)
{
	if (k==undefined) k="name";
	var b = {};
	var coll = p.getElementsByTagName ("p");
	for (var i=0; i<coll.length; i++)
	{
		if (coll[i].id=="a" && coll[i].parentNode.id.length>0)
		{
			var t = coll[i].parentNode.id;
			var coll_ = coll[i].childNodes;
			if (o[t]==undefined) o[t]=[];
			// console.log ("--> "+t+" :"+coll_.length)
			for (var j=0; j<coll_.length; j++)
			{
				var b_ = {}
				var n = o[t].length;
				o[t][n] = {};
				argv (coll_[j], o[t][n], k, "o", b_);
				// console.log ("  jso-a ["+t+"]["+j+","+n+"] "+ JSON.stringify (o[t][n]) +" | "+ JSON.stringify (b_) )
			}
			continue;
		}
		if (coll[i].id=="o") argv (coll[i], o, k, null, b);
	}

	console.log ("[jso]  ("+p.id+") "+JSON.stringify (o)+" | "+JSON.stringify (b));
}

function postj (el,k) 
{
	var id = "v"
	var u = el.id.split ("-");
	if (u.length>2) id=u[2] 
	var p = __(el,id);
	var o = {};
	jso (p,o,k);
	url (p, u[0], u[1], o[".id"], null, 2, o, "POST");
}

// ---

function _nd (ev)
{
	ra = [];
	for (var k in re) ra[k]=re[k]; // reset ra

	var u = this.id.split("-");
	var p = this;
	if (u.length>2 && u[2].length>0) p = __(p,u[2]);
	if (u.length>3 && u[3].length>0) p = _(p,u[3]);
	if (u.length>4 && u[4].length>0) p.innerHTML = ""; // todo: doc-fragment
	
	var r_ = ra[u[1]][0].slice(0); // get a copy
	rargs (r_, this.firstChild.lastChild.childNodes, r_);
	
	console.log ("[nd] "+u[0]+" "+u[1]+" | "+JSON.stringify (r_));
	nd (p, te[u[0]], [], r_, [0]);
	boo(ev);
}

function _ndr ()
{
        var u = this.id.split ("-");
        var p = __(this).previousSibling;
        var r_ = ra[u[1]][0].slice(0); // get a copy
        rargs (r_, this.nextSibling.childNodes);
        console.log ("[ndr_] "+u[0]+" "+u[1]+" | "+JSON.stringify (r_));
        nd (p, te[u[0]], [], r_, [0]);
}

function _u (ev) 
{
	var u = this.id.split ("-");
	var v = "v";
	if (u.length>2 && u[2].length>0) v = u[2];
	var p = __(this,v); // ascend
	if (u.length>3 && u[3].length>0) p = _(p, u[3]); // descend
	var a = {args:"?", ".id":""};
	argv (__(this),a);
	url (p, u[0], u[1], (a[".id"]+a.args));
	boo(ev);
} 

function _nav (ev) 
{
	var u = this.id.split ("-");
	var p = __(this);
	var a = {args:"?", _c:null, __c:null};
	argv (this,a);
	console.log ("[nav] "+p.id)
	//var coll = p.firstChild.getElementsByTagName ("p");
	//for (var i=0; i<coll.length; i++) if (coll[i].id=="vc") { argv (coll[i],a);  }
	argv (p.childNodes[2].firstChild, a)
	//console.log (a);
	if (a.__c_) a._c_=a.__c_; 
	var r = a._c_.value;
	if (this.firstChild.id=="prev") r = a._c_.value*-1;
	a.args += "_o="+r; // aka
	// console.log (JSON.stringify (a));
	this.parentNode.id="ld";
	url (p, u[0], u[1], a.args);
	boo(ev)
}

function _del (ev) // delete record
{
	// todo: js confirm
	var u = this.id.split ("-");
	var el = __(this,"va");
	var p = el.parentNode;
	var id = this.previousSibling.value; 
	var o = {};
	o[this.previousSibling.previousSibling.name] = this.previousSibling.previousSibling.value; 
	console.log ("del: "+id)
	if (id.length<1) 
	{
		p.removeChild (el);
		return;
	}
	url (el, u[0], u[1], id, null, 2, o, "POST");
	boo(ev);
}

function _postji (ev) 
{
	postj (this,"id");
	boo(ev);
}

function _postj (ev)
{
	postj (this,"name");
	// boo(ev);
}

// -------------------------------

function tab_ld (pvf, a)
{
	var coll = pvf.previousSibling.lastChild.childNodes;
	var u = coll[0].value.split ("-");
	var v = coll[1].value.split (",");
	var p = pvf.parentNode;
	for (var i=0; i<v.length; i++)
	{
		p = p.lastChild.childNodes[v[i]].childNodes[1];
	}
	coll[2].value =  Math.floor(Date.now ()/1000); // update ts
	
	console.log ("/tab_ld/"+coll[0].value+"/"+coll[1].value+"/"+coll[2].value+"  | "+u.length);
	
	if (coll[0].value.length<1) return;

	if (u.length==1)
	{
		p.innerHTML = "";
		nd (p, te[u[0]], [], [], [0]); 
		return;
	}
	
	argv (pvf, a);
	if (v.length>1 && p.childNodes.length>0) argv (p.firstChild, a);
	url (p, u[0], u[1], (a[".id"]+a.args));
}

// -------------------------------

function uvpfn (el, u, a, r, m)
{
	el.style.display = "none";
	el.innerHTML = "";
	if (!elvp.firstChild) { elvp=null; return; }
	var p = elvp.firstChild;
	elvp = null;
	console.log ("uvpfn ("+p.value+") ");
	var u_ = p.value.split ("-");
	if (u_.length>2 && u_[2].length>0) p = __(p, u_[2]); // ascend
	if (u_.length>3 && u_[3].length>0) p = _(p, u_[3]); // descend
	if (u_.length>4 && u_[4].length>0) p.innerHTML = "";
	nd (p, te[u_[0]], [], r, [0]);
}

function uvpf (el)
{
	var u = el.id.split ("-");
	var p = __(el);
	var o = {}; 	
	var pvf = elvpf;
	pvf.firstChild.innerHTML = "";
	jso (p, o);
	ra[u[1]] = o;
	nd (pvf.firstChild, te[u[0]], [], [], [0]);
	
	var p = document.getElementById ("vp");
	p.style.display = "none";
	p.innerHTML = "";
	
	console.log ("[uvpf] "+pvf.id+" <"+u[0]+"> "+u[1]+":"+JSON.stringify (o));
		
	var a = {args:"?", ".id":""};
	tab_ld (pvf, a);
}	

function uvp (f)
{
	if (elvp.id.length<1) { elvp=null; return; }
	var u = elvp.id.split ("-");
	var p = elvp;
	if (u.length>2 && u[2].length>0) p = __(p, u[2]); // ascend
	if (u.length>3 && u[3].length>0) p = _(p, u[3]); // descend
	if (u.length>4 && u[4].length>0) p.innerHTML = "";

	console.log ("uvp ("+elvp.id+") " + p + " | "+f)
	
        if (re[u[1]]!=undefined)
	{
		// if (f!=1) return;
		nd (p, te[u[0]], [], [], [0]);
		return;
	}

	var a = {args:"?", ".id":""};
	argv (elvp, a);
	console.log (" >> uvp "+elvp.id+" | "+ JSON.stringify (a))
	url (p, u[0], u[1], (a[".id"]+a.args));
}

function vpf (el)
{
	var p = document.getElementById ("vp");
	var u = el.id.split ("-"); 
	var o = {}; 
	jso (elvpf, o);
	ra[u[1]] = o;
	vp (p);
	nd (p, te[u[0]], [], [], [0]);
}

function vp (p)
{
	var h = window.innerHeight;
	var w = window.innerWidth;
	var h_ = document.body.scrollHeight;
	var w_ = document.body.scrollWidth;
	// console.log (h+" "+h_)
	if (h_>h) h=h_;
	if (w_>w) w=w_;
	p.style.height = h
	p.style.width = w
	p.style.display = "block";
	p.innerHTML = ""; // todo: doc-fragment	
 	window.scrollTo(0, 0); 
	// console.log (p.className)
} 

// ---

function _uvwr ()
{
	var p = __(this,"vft");
	p.parentNode.previousSibling.firstChild.checked = true;
}

function _vwr ()
{
	var u = this.id.split ("-");
	var a = {args:"?", ".id":""};
	var p = __(this,"vftab");
	argv (this, a);
	p.parentNode.nextSibling.firstChild.checked = true;
	p.parentNode.nextSibling.childNodes[1].innerHTML = "";
	url (p.parentNode.nextSibling.childNodes[1], u[0], u[1], (a[".id"]+a.args));
}

function _tab (ev)
{
	this.previousSibling.checked=true;
	var coll = __(this,"vb").parentNode.lastChild.childNodes;
	var p = coll[this.previousSibling.value];
	p.firstChild.checked = true;
	
	if (this.id.length<1) return;
	if (p.childNodes[1].childNodes.length>0) return;
	
	var u = this.id.split ("-");	
	var a = {args:"?", ".id":""};
	
	if (u.length==1)
	{
		p.childNodes[1].innerHTML = "";
		nd (p.childNodes[1], te[this.id], [], [], [0]); 
		return;
	}
	
	argv (this,a);
	url (p.childNodes[1], u[0], u[1], (a[".id"]+a.args));
}

function _tabf () // 32 92 62   
{	
	this.previousSibling.checked = true;
	var coll = __(this,"vb").parentNode.lastChild.childNodes;
	var p = coll[this.previousSibling.value];
	p.firstChild.checked = true;
	
	var u = this.id.split ("-");	
	var a = {args:"?", ".id":""};
	var p_ = __(this,"vftab");
	var coll_ = p_.firstChild.lastChild.childNodes; // set active-tab	
	coll_[0].value = this.id;
	coll_[1].value = this.previousSibling.value;
	
	if (this.parentNode.id && this.parentNode.id.length>0) // load sub-tab
	{
		var u_ = this.parentNode.id.split (":");
		coll_[0].value = u_[0];
		coll_[1].value = u_[1]+","+u_[2];	
		if (u_.length>3) coll_[3].value=u_[2]; 
		if (coll_[3].value.length>0) coll_[1].value = u_[1]+","+coll_[3].value; // maintain active tab in rpt!
		if (p.childNodes[1].childNodes.length>0) 				// if tab isloaded then load sub-tab
		{
			var v = coll_[1].value.split (",");
			u = u_[0].split ("-");
			p = p_.lastChild.childNodes[v[0]].childNodes[1].lastChild.childNodes[v[1]]; // recalc p in context of vftab!
			argv (p.childNodes[1].firstChild, a); 	// get rpt params
			console.log ("rtp-tab |"+p.className+"#"+p.id+"| "+this.parentNode.id+ " | "+a.args+"|"+u_.length+"|"+coll_[3].value)
		}
	}
	
	if (p.childNodes[1].childNodes.length>0 && p.firstChild.value>=coll_[2].value) return; // return if no filter change
	
	p.firstChild.value = Math.floor(Date.now ()/1000);
	
	console.log ("[tabf] "+this.id);
			
	if (u.length==1)
	{
		p.childNodes[1].innerHTML = "";
		nd (p.childNodes[1], te[this.id], [], [], [0]); 
		return;
	}
	
	argv (this,a);
	argv (p_.childNodes[1], a); // get filter params	
	url (p.childNodes[1], u[0], u[1], (a[".id"]+a.args));
}

// ----

function _vpclose (ev)
{
	var p = document.getElementById ("vp");
	p.style.display = "none";
	p.innerHTML = "";
	if (elvp) uvp (0);
	boo(ev);	
}

function _applyf () { uvpf (this); }

function _uvp (ev)
{	
	if (!this.firstChild) return;
	if (this.firstChild.id!="vddvw" && this.firstChild.id!="vddvf") return; // block non-vddvw from closing
	this.style.display = "none";
	if (this.firstChild.id=="vddvf") uvpf (this.firstChild.lastChild.firstChild.firstChild);
	if (elvp) uvp (0);
}

function _vp (ev)
{
	var p = document.getElementById ("vp");
	var u = this.id.split ("-");
	elvp = null;
	if (u.length>2) elvp = this.nextSibling;
	vp (p);
	boo(ev);
	
	console.log ("[vp] "+ elvp + " | "+ JSON.stringify (u))
	
	if (re[u[1]]!=undefined)
	{
		ra = [];
		for (var k in re) ra[k]=re[k]; // reset ra
		var r_ = ra[u[1]][0].slice (0)
		var coll_ = this.firstChild.getElementsByTagName ("input");
		rargs (r_, coll_);
		nd (p, te[u[0]], [], r_, [0]);
		console.log ("[vp] nd | "+JSON.stringify (r_));
		return;
	}

	var a = {args:"?", ".id":""};
	argv (this,a);
	url (p, u[0], u[1], (a[".id"]+a.args));
}

function __vpf ()
{
	elvpf = this.parentNode
	vpf (this);
}

function _vpf ()
{
	elvpf = __(this,"vb").nextSibling;
	vpf (this);
}

function _vpfb ()
{
	elvpf = __(this).childNodes[1];
	vpf (this);
}

// --------------------

function _print ()
{
	window.print ();
}

function _xlsx ()
{
	var p = __(this,"vb").nextSibling;
	var a = {args:"?", ".id":""};
	argv (this, a);
	argv (p, a);
	var s = APIPATH+this.id+a.args+"xlsx=1";
	console.log (s);
	window.location.href = s;
	//url (p.childNodes[1], u[0], u[1], (""+a.args));
}

function _csv ()
{
	var p = __(this,"vb").nextSibling;
	var a = {args:"?", ".id":""};
	argv (p, a);
	var s = APIPATH+this.id+a.args+"csv=1";
	console.log (s);
	window.location.href = s;
	//url (p.childNodes[1], u[0], u[1], (""+a.args));
}

function _file_download ()
{
	var a = {args:"?", ".id":""};
	argv (this, a);
	var s = APIPATH+this.id+"/"+a[".id"]+a.args;
	console.log ("file_download: "+s);
	window.location.href = s;
}

function ufn_attach (el, u, a, r, m)
{
	var u = el.parentNode.nextSibling.id.split ("-");
	var p = __(el)
	var o = {};
	o["file_id"] = r[0];
	jso (el.parentNode.nextSibling, o);
	console.log (JSON.stringify (o));
	url (p, u[0], u[1], "", null, 2, o, "POST");
}

function ufile (el,f)
{
	console.log("Name: " +f.name+" Type: " + f.type +"Size: " + f.size);
	el.nextSibling.innerHTML = f.name; // todo: mutliple files
	var u = el.id.split ("-");
	var data = new FormData ();
	argv (el.parentNode, data);
	url (__(el), u[0], u[1], "", data, 3, null, "POST");

	/*
	var reader = new FileReader();
	reader.onload = function (ev) 
	{
		var contents = ev.target.result;
		console.log("File contents: ||" + contents);
	};
	reader.onerror = function(ev) 
	{
	    console.error("File could not be read! Code " + ev.target.error.code);
	};
	reader.readAsDataURL (f); */
}

function _file_upload (ev)
{
	__(this,"va").className = ""; // unhide
	var ff = this.files;
	for (var i=0; i<ff.length; i++)
	{
		ufile (this, ff[i]);
	}
}

function _file_dialog (ev)
{
	var r_ = re["r_"][0].slice (0);
	var coll_ = this.firstChild.lastChild.childNodes;
	rargs (r_, coll_)
	nd (this.previousSibling, te[this.id], [], r_, [0]);
	this.previousSibling.lastChild.firstChild.firstChild.click ();
	boo (ev)
}

