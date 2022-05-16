
te["taga_cat"] = { div:["c","va"], s:["mtag gb cw bd_",""], c:
[
	{ div:["d w02_"], ac:["abs w02_ ag",null,"_usel","x y04 cs bdr_ tc","&Cross;"] },
	{ div:["x y04 mr3"], uval:["",null] },
	{ div:["e"], c:[ { input:["g","o",null,null,"checkbox","1"] } ] }
]};

te["tag_cat"] = { div:["c","va"], s:["mtag gb cw bd_",""], c:
[
	{ div:["d w02_"], ac:["abs w02_ ag",null,"_usel","x y04 cs bdr_ tc","&Cross;"] },
	{ div:["x y04 mr3"], uval:["",null] },
	{ div:["e"], c:[ { input:["g","",null,null,"checkbox","1"] } ] }
]};

te["tagv"] = { div:["c mtag"], s:[null,null] };

te["taga"] = { div:["c","va"], s:["mtag gb cw bd_",""], c:
[
	{ div:["d w02_"], ac:["abs w02_ ag",null,"_usel","x y04 cs bdr_ tc","&Cross;"] },
	{ s:["x y04 mr3",null] },
	{ div:["e"], c:[ { input:["g","o",null,null,"checkbox","1"] } ] }
]}; 

te["tag"] = { div:["c","va"], s:["mtag gb cw bd_",""], c: 
[
	{ div:["d w02_"], ac:["abs w02_ ag",null,"_usel","x y04 cs bdr_ tc","&Cross;"] },
	{ s:["x y04 mr3",null] },
	{ div:["e"], c:[ { input:["g","",null,null,"checkbox","1"] } ] }
]};

te["tag_"] = { div:["c","va"], s:["mtag gb cw bd_",""], c:
[
	{ div:["d w02_"], ac:["abs w02_ ag",null,"_usel","x y04 cs bdr_ tc","&Cross;"] },
	{ s:["x y04 mr3",null] },
	{ div:["e",null], c:[ { input:["g","_",null,null,"checkbox","1"] }, { arg:["","",null] } ] }
]}; 

te["tagf"] = { div:["c mb mr gg cw","va"], c: // [ { div:["ba bd"], c:
[
	{ s:["c x07 y",null] },
	{ ac:["c ag","","_uchkf","x y bdr cw","&Cross;"] },
	{ input:["g","_",null,"%0","checkbox","1"] },
	{ arg:["","",null] },
	{ div:["e"] } 
]};

te["f"] = { div:["c"], c: // 
[
	{ div:["c y"], s:["x y cb",null] }, 
	{ ac:["c y ag","","_uchkp","x y cb","&Cross;"] },
	{ p:["c l r10 t","o"], uchk:["tagf",null,"","",null,null,null] },
]};

te["chk_r"] = { div:[], c: 
[
	{ input:["g",null,"","%0","checkbox","%9"] },
	{ ac:["r ay","","_chk","xx cb",""], c:
	[ 
		{ div:["c w01_ t"], s:["chk",""] },
		{ s:["c x y ",null] },
		{ s:["d x y ",null] },
		{ div:["e"], c:[ { arg:["id-0","","%0"] } ] }
	]}
]};

// ------------------------------

function chk_del (el)
{
	var u = el.id.split ("-");
	var o = {};
	jso (el,o,"id");
	console.log ("[chk del] "+JSON.stringify (u)+" "+JSON.stringify (o))
	url (__(el), u[0], u[1], o[".id"], null, 0, o, "POST");
}

function chk (el)
{
	var v = true
	if (el.checked) v = false;
	el.checked = v;
	return v;
}

function _uchkp (ev)
{
	var el = this.parentNode;
	var p = el.parentNode;
	var pv = __(this,"vf");
	p.removeChild (el);

	console.log ("[uchkp] "+p.id);

	var a = {args:"?", ".id":""};
	tab_ld (pv, a);
	boo(ev)
}

function _uchkf (ev)
{
	var el = this.parentNode;
	var p = el.parentNode;
	var pv = __(this,"vf");
	p.removeChild (el);
	if (p.childNodes.length==0) pv.firstChild.removeChild (p.parentNode);

	console.log ("[uchkf] "+p.id);

	var a = {args:"?", ".id":""};
	tab_ld (pv, a);
	boo(ev)
}

function _chk_all (ev)
{
	var el = this.firstChild.firstChild;
	var p = __(this);
	var coll = p.getElementsByTagName("input");
	for (var i=0; i<coll.length; i++)
	{
		// chk (coll[]);
	}
	boo (ev);
}

function _uchk (ev)
{
	var k = this.previousSibling.name;
	var v = this.previousSibling.value;
	var el = __(this);
	var p = el.parentNode;
	var coll = __(p).nextSibling.getElementsByTagName ("input");
	// console.log ( "uchk: "+k+":"+v)
	for (var i=0; i<coll.length; i++) // find tag
	{
		if (coll[i].id==k && coll[i].value==v) 
		{ 
			coll[i].checked = false; 
			break; 
		}
	}
	p.removeChild (el);
	if (this.id.length>0)
	{
		chk_del (this);
	}
	boo (ev)
}

function _chk ()
{
	var p = __(this,"vdd").previousSibling;
	var u_ = p.parentNode.id.split ("-"); 
	var p_ = _(p, u_[3]);
	
	var a_ = [];
 	for (var i=u_.length-1; i>3; i--) a_[a_.length]=u_[i];
 	
	console.log ("[chk] "+ JSON.stringify (u_))
	
	var k = this.previousSibling.id;
	var v = this.previousSibling.value;
	var r_ = re[u_[1]][0].slice (0)
	r_[0] = v;
	rargs (r_, this.firstChild.lastChild.childNodes);
	
	var f = chk (this.previousSibling);
	var el = null;
	var coll = p_.getElementsByTagName ("input");
	for (var i=0; i<coll.length; i++) // find tag
	{
		if (coll[i].name==k && coll[i].value==v) { el=coll[i]; break; }
		if (coll[i].parentNode.id==k && coll[i].value==v) { el=coll[i]; break; }
		// console.log ("  --> "+coll[i].name+":"+coll[i].value+" | "+el)
	}
	
	if (p.nextSibling.nextSibling && p.nextSibling.nextSibling.id && p.nextSibling.nextSibling.id=="fn")
	{
	 	window[p.nextSibling.nextSibling.value] (this, r_, f);
	}
	
	if (f==false) // remove tag
	{
		if (el==null) return;
		
		if (el.nextSibling && el.nextSibling.id && el.nextSibling.id.length>0)
		{
			chk_del (el.nextSibling);
			return;
		}
		
		el = __(el);
		p_.removeChild (el);
		return;
	}
	
	if (el!=null) return;
	
	nd (p_, te[u_[0]], a_, r_, [a_.length]);	
}

function _chkg ()
{
	var f = chk (this.previousSibling);
	var s = "none";
	if (f==true) s="block";
	this.parentNode.nextSibling.style.display = s;
}

function _opt ()
{
	this.previousSibling.checked = true;
	// console.log ("OPT "+this.id)
	if (this.id.length>0) 
	{
		var u = this.id.split ("-")
		var r_ = ra[u[1]][0].slice (0)
		var coll_ = this.firstChild.lastChild.childNodes;
		var p = this;
		if (u.length>2 && u[2].length>0) p = __(p,u[2]);
		if (u.length>3 && u[3].length>0) p = _(p,u[3]);
		p.innerHTML = "";
		rargs (r_, coll_)
		nd (p, te[u[0]], [], r_, [0]);
	}
}
