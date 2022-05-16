

te["sel_r"] =  { ac:["aa","","_sel","x20 y cb","%1"], c:[ { arg:[null,"","%0"] }, { arg:[null,"","%1"] } ] };

function boo (ev) { ev.stopPropagation (); }

function _ro () { return false; }

function selu (el)
{	
	var u = el.id.split("-");
	var p = __(el).parentNode;
	if (u.length>2 && u[2].length>0) p = __(p, u[2]);
	if (u.length>3 && u[3].length>0) p = _(p, u[3]);
	
	if (re[u[1]]!=undefined)
	{
	 	console.log ("[selu-nd] "+u[0]+" | "+el.id)
	 	
		var r_ = re[u[1]][0].slice (0)
		rargs (r_, el.firstChild.lastChild.childNodes);
		p.innerHTML = "";
		nd (p, te[u[0]], [], r_, [0]);
		return;
	}

 	console.log ("[selu] "+el.id)
	var a = {args:"?", ".id":""};
	argv (el.nextSibling,a,"id");
	url (p, u[0], u[1], (a[".id"]+a.args));
}

function usel (el_) // load txa
{
	var u = el_.id.split ("-");
	var el = __(el_);
	var r_ = [el.firstChild.lastChild.firstChild.value];
	var p = el.parentNode;
	p.removeChild (el);
	if (p.childNodes.length==0 && u[0].length>0)
	{
		// console.log ( "USEL: "+u[0])
		p.innerHTML = "";
		nd (p, te[u[0]], [], [], [0]);
		p.firstChild.firstChild.firstChild.focus ();
	}
	
	// todo: selu
	
	var b = __(p,"va").nextSibling; // eval fn
	if (b.nextSibling && b.nextSibling.id && b.nextSibling.id=="fn")
	{
		console.log ("usel X "+b.nextSibling.value+" | "+r_[0])
		window[b.nextSibling.value] (p, r_, false);
	}
}

function sel (el, r_) 
{
	var b = __(el,"vdd");
	var p_ = b.parentNode;
	var u_ = p_.id.split ("-");
	if (u_.length>2 && u_[2].length>0) p_ = __(p_, u_[2]);
	if (u_.length>3 && u_[3].length>0) p_ = _(p_, u_[3]);

	if (!r_) r_ = ra[u_[1]][0].slice(0); // get a copy
	var coll = el.firstChild.lastChild.childNodes;
	rargs (r_, coll);
 
 	var a_ = [];
 	for (var i=u_.length-1; i>3; i--) a_[a_.length]=u_[i];
 	
 	console.log ("[sel] "+b.id+" |"+b.nextSibling)
 	
	p_.innerHTML = "";
	nd (p_, te[u_[0]], a_, r_, [a_.length]);	
	
	if (el.id.length>0) selu (el);
	
	if (b.nextSibling && b.nextSibling.id && b.nextSibling.id=="fn")
	{
		window[b.nextSibling.value] (el, r_, true);
	}
}

function uf (b) // filter on undd // // todo: load filter tags too
{
	var u = b.parentNode.id.split("-");
	var p = __(b,"vc");
	var a = {args:"?_a=0&"};
	argv (p,a);
	url (p.parentNode.nextSibling, u[0], u[1], a.args, null, 2);
}

function undd (p_)
{
	var b = null;
	for (var i=0; i<dda.length; i++) 
	{
		// todo: remove zombie
		if (dda[i][0]==p_)
		{
			var b = dda[i][1];
			var o = {};
			b.style.display = "none";
			if (b.previousSibling && b.previousSibling.firstChild) b.previousSibling.firstChild.className = ""
			dda.splice (i,1);
			if (b.id=="vddk_c") 
			{
				chk (b,o); // update name-arg with multi-val
				uf (b,null);
			}
			if (b.id=="vddk_s")
			{
				uf (b,null);
			}
			if (b.id=="vddk_d")
			{
				uf (b,null);
			}
			if (b.id=="vdd_rpt")
			{
				// console.log ("vdd_rpt");
				rpt (__(b,"vrpt").nextSibling);
			}
			break; 
		}
	}
	return b;
}

function dd (b,f) 
{ 
	var p_ = __(b,"vdd");
	if (f==1)
	{
		var b_ = undd (p_);
		if (b_==b && f==1) { console.log ("undd self"); return; } // self
	}
	console.log ("dd ++")
	b.style.display = "block";
	if (b.previousSibling && b.previousSibling.firstChild) b.previousSibling.firstChild.className = "content-shown"
	var coll = b.previousSibling.getElementsByTagName ("p");
	var i=0;
	for (i=0; i<coll.length; i++) if (coll[i].id=="txa") { coll[i].firstChild.focus(); break; }
	var i=0;
	for (i=0; i<dda.length; i++) if (dda[i][0]==p_) break;
	dda[i] = [p_,b];
	// document.body.style.height = document.body.scrollHeight; // maintain height to reduce flicker
}

function _usel (ev) 
{
	usel (this);
	boo (ev); 
}

function _sel (ev) 
{ 
	sel (this); 
	undd (__(__(this,"vdd"),"vdd")); 
}

function _sel_nest ()
{	
	var r_ = ra["r_"][0].slice(0); 
	sel (this, r_);
 	var u = this.parentNode.id.split ("-");
	var p = __(this,"vd");	
	p.innerHTML = "";
	// console.log (" sel_nest --> "+JSON.stringify (r_))
	nd (p, te[(u[0]+"_nest")], [], r_, [0])
	url (p.childNodes[1], u[0], u[1], ("?category_id="+ r_[0]));
}

function _undd (ev) {  (this); boo (ev); } 

function _dd (ev) 
{ 
	var p = __(this,"va");
	var b = p.nextSibling;
	dd (b,1); 
	if (this.id && this.id.length>0)// && b.childNodes.length<1)
	{
		var u = this.id.split ("-");
		var a = {args:"?", ".id":""};
		argv (this,a,"id");
		url (b, u[0], u[1], (a[".id"]+a.args+"&_c=10"));
	}
	boo (ev); 
}

function _g (ev)
{
	var p = __(this,"vg");
	var b = p.nextSibling;
	console.log ("_g: "+p.firstChild.className)
	if (p.firstChild.className=="content-shown") 
	{
		p.firstChild.className = "content-hidden";                
		b.style.display = "none"; //pa.className = "g";
		return;
	}
	p.firstChild.className = "content-shown";
	b.style.display = "block"; // pa.className = "";
	if (this.id && this.id.length>0) // && b.childNodes.length<2)
	{
		var u = this.id.split ("-");
		var a = {args:"?", ".id":""};
		argv (this,a,"id");
		url (b, u[0], u[1], (a[".id"]+a.args));
	}
	boo (ev); 
}

function _uky (ev)
{
	// this.value = "";
}

function _ky (ev) // autocomplete query
{
	var p = __(this,"va");
	var u = this.parentNode.parentNode.id.split ("-");
	var a = {args:"?_c=10&", ".id":""};
	argv (this.parentNode.parentNode,a,"id");
	if (this.value.length>0) a.args+=this.id+"="+this.value+"&";
	if (p.nextSibling.id.substr (0,3)=="vdd") dd (p.nextSibling);
	console.log (JSON.stringify (a)+" | "+p.firstChild.id)
	url (p.nextSibling, u[0], u[1], (a[".id"]+a.args));
}

