
te["call_session"] = { /*p:["","%0"],*/ c: // el.childNodes[1].lastChild
[ 
	{ input:["g","","sbr","%6","radio"] },
	{ li:["sbr xx y","va"], ev:["_call_popup"], c: 
	[ 
		{ div:["abs w02_ y g"],  c:
		[ 
			{ s:["c cr h3 micon","phone_in_talk"] },
			{ p:["e","o"], c:[ { arg:["","src_address","%1"] }, { arg:["","src_vector","%2"] } ] }
		]},
		{ div:["ml4nn s"], c:
		[					
			{ div:[], c: 
			[
				{ s:["c x y","::vector:2:4"] },
				{ s:["d x y","0:00"] },
				{ arg:["ts","","%4"] }, 		// status-ts
				{ div:["e"] }
			]},
			
			{ div:[], c:
			[
				{ s:["c x y02","%1"] }, // phone
				{ s:["c x y02 n","::vector:2:5"] },
				{ s:["d x y02 gr cw bd","..."] }, // status
				{ div:["e"] }
			]},
		
			{ div:["g x tt"], u:["%3"] },  // session-buttons: hold, hangup
			
			{ div:["g x","va"] },  // cti-buttons (on connect)
			{ p:["xx","add"] }, // added chans
		
			{ p:["g"], uaudio:["%5","",""] },
			{ p:["","o"] } // this channel args from ami
		]},
		{ div:[] }
	]} 
]};

// -----------------------------

te["activity_call"] = { ufn:["ufn_call_activity"] };

function ufn_call_activity (el, u, a, r, m)
{
	url (__(el), "activity_lst", "activities", "?_c=10");
	show_notifications (1);
}

// -----------------------------

function DetectDevices()
{
    	navigator.mediaDevices.enumerateDevices().then ( function (dev) {
        // deviceInfos will not have a populated lable unless to accept the permission
        // during getUserMedia. This normally happens at startup/setup
        // so from then on these devices will be with lables.
	console.log (dev)
        for (var i = 0; i<dev.length; i++) 
	{
		console.log ("[DEVICE] Type: "+dev[i].kind+" "+JSON.stringify (dev[i]))
        }
    }).catch(function(e){
        console.error("Error enumerating devices", e);
    });
}

var CALLS = {};

var WSHOST = "wss://"+VA_SIP_HOST+":8089/ws";


var VOICEAPPS_CHANSTATE = [
[],
["","Outgoing Call","Dialing","Connected","Call Ended","Call Ended",""],
["","Incoming Call","Ringing","Connected","Call Ended","Call Ended",""]
];

function VOICEAPPS_SESSION (_leg)
{
	this.session = null;
	this.leg = _leg;
	this.remoteStream = null;
	this.mediaElement = null;
	this.el = null;
	this.ssid = null;
	this.ishold = false;

	const options = {
            requestDelegate: {
                onAccept: () => {
			console.log ("Hold accepted");
                   // this.held = hold;
                   // this.enableReceiverTracks(!this.held);
                   // this.enableSenderTracks(!this.held && !this.muted);
                   // if (this.delegate && this.delegate.onCallHold) {
                   //     this.delegate.onCallHold(this.held);
                   // }
                },
                onReject: () => {
			console.log ("Hold rejected");
                   // this.logger.warn(`[${this.id}] re-invite request was rejected`);
                   // this.enableReceiverTracks(!this.held);
                   // this.enableSenderTracks(!this.held && !this.muted);
                   // if (this.delegate && this.delegate.onCallHold) {
                   //     this.delegate.onCallHold(this.held);
                   // }
                }
            }
        };

	this.handleSessionState = function () 
	{
		console.log ("handleSessionState SESSION ID: "+this.session.id+" leg:"+this.leg);
		//console.log ("displayName: "+this.session.remoteIdentity.displayName);
		//console.log ("URI.User: "+this.session.remoteIdentity.uri.user);

		this.session.delegate = { onCallHold: function (h) { console.log ("[OnCallHold] "); } };

		var r = [];
		this.ssid = this.session.id;
		r[0] = this.ssid.substr (0,20);
		r[1] = this.session.remoteIdentity.uri.user;
		r[2] = this.leg;
		r[3] = "noop"; //this.leg==1?"call_session_btns_outbound":"call_session_btns_inbound";
		r[4] = ""+((Date.now ()/1000)-ra_ts);
		r[5] = this.leg==1?"/helpline/images/dialtone.wav":"/helpline/images/earlymedia.mp3";
		r[6] = this.ssid;
		var p = document.getElementById ("call_sessions");
		var el_ = document.createElement ("P"); 
		el_.id = r[0];
		// el_.className = "x t"
		p.insertBefore (el_, p.firstChild);
		var el = nd (el_, te["call_session"], [], r, [0]);
		el = el.parentNode.parentNode;
		this.el = el;
		var coll = el.childNodes[1].childNodes[1].childNodes;
		var cur_state = 0;

		this.mediaElement = coll[5].firstChild; // _(el, "au").firstChild;
		this.mediaElement.volume = 0.3; // this.leg==1?0.3:0.9;
		this.mediaElement.play ();
		this.mediaElement.loop = true;

		var me = this;

		this.session.stateChange.addListener (function (new_state)
		{

			console.log ("stateChange: "+new_state);
			// console.log (me.session)

			var state = cur_state;

			switch (new_state) 
			{
			case SIP.SessionState.Initial:
				state = 1;
				break;
	
			case SIP.SessionState.Establishing:
				state = 2;
				console.log ("VOICEAPPS: establishing..."+me.session.id); // Session is establishing
				break;
	
			case SIP.SessionState.Established:
				state = 3;
				console.log ("VOICEAPPS: established");
				me.mediaElement.volume = 1; // this.leg==1?0.3:0.9;
				VOICEAPPS_UA.connect_media (me.session, me.mediaElement);
				break;
	
			case SIP.SessionState.Terminating:
				state = 4;
				console.log ("VOICEAPPS: Terminating");
	
			case SIP.SessionState.Terminated:
				state = 5;
				console.log ("VOICEAPPS: Terminated "+me.session.id);
			        VOICEAPPS_UA.cleanup_media (me.mediaElement);
				// delete CALLS[me.ssid]; // dont do this -- clean up before setting up new call
				if (el) 
				{ 
					var toolbar = document.getElementById ("vv").childNodes[1].firstChild;
					var a = {}
					argv (el, a); 
					a.src_ts_end = ""+(Math.ceil ((Date.now()/1000))); // duration in seconds
					a.src = "call";
					a.src_status = a.src_vector+"-"+a.chan_state;
					if (toolbar && toolbar.id==a.src_uid) call_popup_end (toolbar);
					url (p.nextSibling.firstChild, "activity_call", "activities", "", null, 2, a, "POST");
					p.removeChild (el); 
					el=null; 
				}
				break;
	
			default:
				console.error ("VOICEAPPS: Unknown state");
				break;
			}

			if (cur_state != state) // update ts
			{
				coll[0].childNodes[1].innerHTML = "0:00";
				coll[0].childNodes[2].value = ""+(Date.now ()/1000)-ra_ts;
			}

			// coll[1].childNodes[1].innerHTML = VOICEAPPS_CHANSTATE[me.leg][state]; // update status

			if (state<3) // update ring tone
			{
				me.mediaElement.src = "/helpline/images/earlymedia.mp3";
				me.mediaElement.play ();
				me.mediaElement.loop = true;
			}

			if (state==3) // change buttons
			{
				coll[2].innerHTML = "";
				// nd (coll[2], te["call_session_btns_connected"], [], [], [0]);	
				//coll[3].innerHTML = "";
				//nd (coll[3], te["call_session_actions"], [], [], [0]);	
			}

			cur_state = state;
		});
	}
}

var VOICEAPPS_UA =
{
	UA : null,
	REG : null,
	attemptingReconnection : false,
	uao : 
	{
		userAgentString: "VoiceApps UA (SIP.js)",
		displayName: null,
		uri: null,
		authorizationUsername: null, 
		authorizationPassword: '23kdefrtgos09812100',
		delegate: { onInvite: null },
	    	transportOptions: 
		{
			server : WSHOST,
			//traceSip: true,
			log: { level:"log" },
		},
		log: { level:"log" },
	}
}

VOICEAPPS_UA.connect = function (exten)
{
	VOICEAPPS_UA.uao.displayName = exten; 
	VOICEAPPS_UA.uao.uri =  SIP.UserAgent.makeURI ("sip:"+exten+"@"+VA_SIP_HOST);
	VOICEAPPS_UA.uao.authorizationUsername = exten;
	// VOICEAPPS_UA.uao.authorizationPassword = exten;
	VOICEAPPS_UA.uao.delegate.onConnect = VOICEAPPS_UA.on_connect;
	VOICEAPPS_UA.uao.delegate.onDisconnect = VOICEAPPS_UA.on_disconnect;
	VOICEAPPS_UA.uao.delegate.onInvite = VOICEAPPS_UA.on_invite;

	VOICEAPPS_UA.UA = new SIP.UserAgent (VOICEAPPS_UA.uao);  // UserAgent
	VOICEAPPS_UA.REG = new SIP.Registerer (VOICEAPPS_UA.UA, {});
	VOICEAPPS_UA.UA.start()
	.catch((error) =>
	{
              console.log ("[UA start failed] "+error);
	 	VOICEAPPS_UA.re_connect (["xx y gp cr","Cannot connect to server. Check if server is online."])
        });
	//.then (function () 
	//{
	//	VOICEAPPS_UA.REG.register();
	//});
}

VOICEAPPS_UA.disconnect = function ()
{
	if (VOICEAPPS_UA.REG) VOICEAPPS_UA.REG.unregister();
}

VOICEAPPS_UA.re_connect = function (nbr, t=1)
{
	var p = document.getElementById ("phone_status"); // show error
	p.innerHTML = "";
	nd (p, te["nb"], [], nbr, [0])

	if (t!=1) return;

	// Reconnection attempt already in progress
	if (VOICEAPPS_UA.attemptingReconnection) { return; }
    
	// We're attempting a reconnection
	VOICEAPPS_UA.attemptingReconnection = true;
	setTimeout(() => 
	{  
		VOICEAPPS_UA.re_connect (["xx y gp cr","Retrying ..."])
      
		VOICEAPPS_UA.UA.reconnect().then(() => 
		{
			console.log ("[UA.reconnect successful] ");
			// Reconnect attempt succeeded
			VOICEAPPS_UA.attemptingReconnection = false;
			VOICEAPPS_UA.re_connect (["xx y",("Extension "+VOICEAPPS_UA.uao.authorizationUsername)], 0)
           	})
           	.catch ((error) => 
		{
			console.log ("[UA.reconnect failed] "+error);
			// Reconnect attempt failed
			VOICEAPPS_UA.attemptingReconnection = false;
			VOICEAPPS_UA.re_connect (["xx y gp cr","Reconnect Failed. Retrying in 3sec"])
           	});
	}, 3000);

}

VOICEAPPS_UA.on_connect = function ()
{
	console.log ("[connected] "+ JSON.stringify (VOICEAPPS_UA.uao));
	VOICEAPPS_UA.REG.register()
	.catch ((error) => 
	{
		console.log ("[Registration Failed] "+error)
	 	VOICEAPPS_UA.re_connect (["xx y gp cr",e], 0)
		return;
	});
	VOICEAPPS_UA.re_connect (["xx y cd",("Extension "+VOICEAPPS_UA.uao.authorizationUsername)], 0)
}

VOICEAPPS_UA.on_disconnect = function (e)
{
	console.log ("[disconnected] "+JSON.stringify (e))
	VOICEAPPS_UA.REG.unregister()
	.catch((error) =>
	{
              console.log ("[Unregister Error] "+error);
        });

	// Only attempt to reconnect if network/server dropped the connection (if there is an error)
	//if (e) 
	{
	    	 VOICEAPPS_UA.re_connect (["xx y gp cr","Disconnected"])
  	}
}

VOICEAPPS_UA.on_invite = function (session) 
{
	var dn = session.remoteIdentity.displayName;
	
	console.log ("[on_invite] "+ dn+" | "+JSON.stringify (session.remoteIdentity))

	var vs = new VOICEAPPS_SESSION (2);
	vs.session = session;
	vs.handleSessionState ();
	CALLS[vs.ssid] = vs ;


	if (dn=="Autodial" || dn=="AgentLogin")
	{
		session.accept();
	}
}

VOICEAPPS_UA.enableReceiverTracks = function (va, enable) 
{
        if (!this.session) {
            throw new Error("Session does not exist.");
        }
        const sessionDescriptionHandler = this.session.sessionDescriptionHandler;
        if (!(sessionDescriptionHandler instanceof _session_description_handler__WEBPACK_IMPORTED_MODULE_2__.SessionDescriptionHandler)) {
            throw new Error("Session's session description handler not instance of SessionDescriptionHandler.");
        }
        const peerConnection = sessionDescriptionHandler.peerConnection;
        if (!peerConnection) {
            throw new Error("Peer connection closed.");
        }
        peerConnection.getReceivers().forEach((receiver) => {
            if (receiver.track) {
                receiver.track.enabled = enable;
            }
        });
}
  
VOICEAPPS_UA.enableSenderTracks = function (va, enable) 
{
        if (!this.session) {
            throw new Error("Session does not exist.");
        }
        const sessionDescriptionHandler = this.session.sessionDescriptionHandler;
        if (!(sessionDescriptionHandler instanceof _session_description_handler__WEBPACK_IMPORTED_MODULE_2__.SessionDescriptionHandler)) {
            throw new Error("Session's session description handler not instance of SessionDescriptionHandler.");
        }
        const peerConnection = sessionDescriptionHandler.peerConnection;
        if (!peerConnection) {
            throw new Error("Peer connection closed.");
        }
        peerConnection.getSenders().forEach((sender) => {
            if (sender.track) {
                sender.track.enabled = enable;
            }
        });
}

VOICEAPPS_UA.sethold = function (va, hold) 
{
 	//const sessionDescriptionHandler = this.session.sessionDescriptionHandler;
        //if (!(sessionDescriptionHandler instanceof _session_description_handler__WEBPACK_IMPORTED_MODULE_2__.SessionDescriptionHandler)) {
        //    throw new Error("Session's session description handler not instance of SessionDescriptionHandler.");
        //}

     	const sessionDescriptionHandlerOptions = va.session.sessionDescriptionHandlerOptionsReInvite;
        sessionDescriptionHandlerOptions.hold = hold;
        va.session.sessionDescriptionHandlerOptionsReInvite = sessionDescriptionHandlerOptions;
        // Send re-INVITE
        return va.session.invite (va.options).then (() => 
        {
		va.ishold = hold;
		call_popup_hold_state (va.el,hold); // update hold state in toolbar
		console.log ("hold is: "+hold); // "  |"+el_+"="+ el_.checked+" | "+ va.el.id);
		
		// preemptively enable/disable tracks
		//  this.enableReceiverTracks(!hold);
		//this.enableSenderTracks(!hold && !this.muted);
        })
	.catch((error) => 
	{
		console.log ("hold errror: "+error);
	});
}

VOICEAPPS_UA.endcall = function (session, leg) 
{
	switch (session.state) 
	{
	case SIP.SessionState.Initial:
	case SIP.SessionState.Establishing:

	     	 if (leg==1) //session instanceOf SIP.Inviter) 
		 {
     		   session.cancel(); // outgoing session
     		 } else {
     		    session.reject();  // incoming session
     		}
     		break;

    	case SIP.SessionState.Established:
    		 session.bye();
		break;

	case SIP.SessionState.Terminating:
	case SIP.SessionState.Terminated:
      		break;
   	} 
}

VOICEAPPS_UA.cleanup_media = function (mediaElement)
{
	mediaElement.srcObject = null;
	mediaElement.pause();
}

VOICEAPPS_UA.connect_media = function (session, mediaElement) 
{
	var remoteStream = new MediaStream ();
	session.sessionDescriptionHandler.peerConnection.getReceivers().forEach (function (receiver) 
	{
	        if (receiver.track) 
		{
			// console.log (" + add track "+remoteStream + " " + mediaElement)
	            remoteStream.addTrack (receiver.track);
	        }
	});
	mediaElement.loop = false;
	mediaElement.srcObject = remoteStream;
	mediaElement.play ();
}

VOICEAPPS_UA.dial = function (dial_str)
{
	// TODO: check state of UA

	var target = SIP.UserAgent.makeURI (("sip:"+dial_str+"@"+VA_SIP_HOST));   
	if (!target) 
	{
		console.error ("VOICEAPPS:  dial failed: makeURI failed.");
		return;
    	}
	
	console.log ("VOICEAPPS:   dial start"); // INVITE sent
			
	var vs = new VOICEAPPS_SESSION (1);
	vs.session = new SIP.Inviter (this.UA, target, { sessionDescriptionHandlerOptions: { constraints: { audio: true, video: false } } } );
		console.log ("VOICEAPPS:   dial new session created"); // INVITE sent
    	vs.handleSessionState ();
    	
    			console.log ("VOICEAPPS:   dial: state handled"); // INVITE sent
    			
	CALLS[vs.ssid] = vs 
	vs.session.invite().then (function () 
	{
		console.log ("VOICEAPPS:   Invite sent"); // INVITE sent
	})["catch"](function (error) 
	{
		console.error ("VOICEAPPS:  Invite failed "+error);
		// INVITE did not send
	});
}

// ----------------------------

function _ami_action (el, o, action)
{
	var u = el.id.split ("-")
	o.action = action;
	console.log (" ami_action "+JSON.stringify (o)+" | "+el);
	url (__(el), u[0], u[1], "", null, 2, o, "POST");
}

function _kickout (ev)
{
	var o = {};
	_ami_action (this, o, "6");	
	// boo (ev)
}

function _add_action (ev)
{
	var u = this.id.split ("-"); // todo: inv
	var p = __(this,"ve")
	var el = _(document.getElementById ("call_sessions"), __(p,"vddvw").childNodes[1].id);
	var o = {}
	argv (p, o);
	argv (el, o);	
	_ami_action (this, o, u[2]);	
	boo (ev)
}

function _add_dial (ev) 
{
	var u = this.id.split ("-"); // todo: inv
	var p = __(this,"ve")
	var el = _(document.getElementById ("call_sessions"), p.parentNode.id);
	var o = {}
	argv (p, o);
	argv (el, o);	
	_ami_action (this, o, "2");	
}

function _add_dial_form ()
{
	var p = document.getElementById ("vp");
	var u = this.id.split ("-");
	var o = {};
	var r_ = ra[u[1]][0].slice (0)
	var el = null;
	argv (this, o, "id");	
	el = _(document.getElementById ("call_sessions"), o._uid);
	argv (el, o);
	console.log ("[_add_dial_form] "+JSON.stringify (o))
	r_[10] = o._uid;
	r_[19] = o._chan;
	r_[33] = o._uid; // cbid
	if (o.cbid.length>0) r_[33] = o.cbid.substr (2);
	vp (p);
	nd (p, te[u[0]], [], r_, [0]);
	ldami (re["channels"]);
}

// ------------------------------------

function phone_hangup (id)
{
	var vs = CALLS[id]
	console.log ("hangup---------------------"+id)
	VOICEAPPS_UA.endcall (vs.session, vs.leg);
}

function _hangup (ev)
{
	var id = __(this,"va").previousSibling.value;
	phone_hangup (id)
	boo (ev);
}

function _hold (ev)
{
	var id = __(this,"va").previousSibling.value;
	var vs= CALLS[id]
	console.log ("hold("+vs.ishold+")---------------------"+id)
	VOICEAPPS_UA.sethold (vs, !vs.ishold);
	boo (ev);
}

function _answer (ev)
{
	var id = __(this,"va").previousSibling.value;
	CALLS[id].session.accept ({ sessionDescriptionHandlerOptions: { constraints: { audio: true, video: false } } });
	console.log ("answer---------------------"+id)
	boo (ev);
}

function _dial (ev)
{
	VOICEAPPS_UA.dial (this.previousSibling.firstChild.value);
	boo (ev);
}

