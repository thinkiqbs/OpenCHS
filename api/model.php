<?php

/*
update kase set final_status=status;
update kase set final_status=3 where status!=2 and escalatedto_id!=0;

update kase set assigned_to_id=created_by_id;
update kase set assigned_to_id=escalatedto_id WHERE escalatedto_id!=0;

update kase set escalatedby_id= ///
*/

$RESOURCES = array 
(
	"au"=>			array ("au","",			"1","0","0",	"Audit Trail", 		"","",			""), 
	"addr"=>		array ("addr","",		"1","0","0",	"Registered Address", 	"id DESC","",		""), 
	"otp"=>			array ("otp","",		"1","0","0",	"OTP", 			"","",			""), 
	"auth"=>		array ("auth","",		"0","0","0",	"Auth", 		"","",			""),
	"users"=>		array ("auth","user",		"3","0","0",	"User", 		"","",			""),
	"contacts"=>		array ("contact","",		"3","0","0",	"Contact", 		"fullname","",			""), 
	"profile"=>		array ("contact","profile",	"0","0","0",	"Profile", 		"","",			"contacts"), 
	
	"campaigns"=>		array ("campaign","",		"3","0","0",	"Campaign", 		"","",			""),
	"inbound"=>		array ("campaign","",		"3","0","0",	"Inbound Campaign", 	"","",			"campaigns"),
	"outbound"=>		array ("campaign","",		"3","0","0",	"Outbound Campaign", 	"","",			"campaigns"),

	"workinghours"=>	array ("workinghour","",	"3","0","0",	"Working Hours", 	"id DESC","",		""), 
	"ooohours"=>		array ("workinghour","",	"3","0","0",	"Out of Office Hours", 	"dayofweek,start_ts","","workinghours"), 
	"shifts"=>		array ("shift","",		"3","0","0",	"Shift", 		"","",			""), 
		
	"members"=>		array ("member","",		"3","0","0",	"Member", 		"","",			""), 		

	"voicemaps"=>		array ("voicemap","",		"3","0","0",	"Sub Menu", 		"id ASC","1000",	""), 
 	"voiceumaps"=>		array ("voicemap","",		"2","0","0",	"Sub Menu", 		"id ASC","1000",	"voicemaps"), 
	"voiceprompts"=>	array ("voiceprompt","",	"3","0","0",	"VoicePrompt", 		"","",			""),
	"dst"=>			array ("voiceprompt","dst",	"3","0","0",	"Destination", 		"","",			"voiceprompts"),
	"exit"=>		array ("voiceprompt","exit",	"3","0","0",	"Exit", 		"","",			"voiceprompts"),
	"voicefiles"=>		array ("voicefile","",		"3","0","0",	"VoiceFile", 		"pos ASC","",		""),
	"moh"=>			array ("moh","",		"3","0","0",	"Music On Hold", 	"pos ASC","",		"voicefiles"),
	"attachments"=>		array ("attachment","",		"3","0","0",	"Attachment",		"","",			""), 			
	
	"files"=>		array ("file","",		"1","0","0",	"File", 		"","",			""),
	"vfiles"=>		array ("file","",		"1","0","0",	"File", 		"","",			"files"),
	"csv"=>			array ("file","",		"1","0","0",	"File", 		"","",			"files"),
	
	"categories"=>		array ("category","",		"3","0","0",	"Category", 		"name","",		""), 
	"subcategories"=>	array ("category","subcategory","3","0","0",	"Category", 		"name","",		"categories"), 
	"age_groups"=>		array ("category","age_group",	"1","0","0",	"Age-group", 		"name","",		"categories"), 
	
	"tasks"=>		array ("task","",		"3","0","0",	"Task", 		"","",			""), 
	"activities"=>		array ("activity","",		"1","0","0",	"Activity", 		"src_ts DESC","",	""), 
	"actions"=>		array ("action","",		"1","0","0",	"Actions", 		"id DESC","",		""), // also ivr prompt 
	"qas"=>			array ("qa","",			"1","0","0",	"Quality Assessment",	"","",			""), 

	"calls"=>		array ("chan","",		"0","0","0",	"Call", 		"","",			""), 
	"locals"=>		array ("chani","",		"0","0","0",	"Internal Call", 	"","",			"calls"), 
	"chanss"=>		array ("chan_ss","",		"0","0","0",	"Agent Session", 	"","",			""), 
	// "emails"=>		array ("email","",		"0","0","0",	"Email", 		"","",			""), 

	"reporters"=>		array ("reporter","",		"3","0","0",	"Reporter", 		"","",			""), 
	"clients"=>		array ("client","",		"3","0","0",	"Client", 		"","",			""), 
	"perpetrators"=>	array ("perpetrator","",	"3","0","0",	"Perpetrator", 		"","",			""), 
	"cases"=>		array ("kase","case",		"3","0","0",	"Case", 		"","",			""), 
	"followups"=>		array ("kase","case",		"3","0","0",	"Followup", 		"","",			"cases"), 
	"case_activities"=>	array ("kase_activity","ca",	"1","0","0",	"Case Activity", 	"","",			""), 
	"services"=>		array ("service","",		"3","0","0",	"Services Offered", 	"","",			""), 
	"referals"=>		array ("referal","",		"3","0","0",	"Referals", 		"","",			""), 

	"today"=>		array ("stats_today","",	"0","3","0",	"Today",		"","",			""), 
);

$RIGHTS_1 = array // sel:0,add:1,upd:2 // agent rights
(
	"au"=>		array ("0","0","0"),
	"addr"=>	array ("0","0","0"),
	"otp"=>		array ("0","0","0"),
	"auth"=>	array ("1","0","0","id=","auth_id"),
	"users"=>	array ("1","0","0"),
	"contacts"=>	array ("1","1","1"),
	"profile"=>	array ("1","0","1","id=","profile_id"),
	
	"campaigns"=>	array ("1","0","0"),
	"inbound"=>	array ("1","0","0"),
	"outbound"=>	array ("1","0","0"),
	
	"workinghours"=>array ("1","0","0"),
	"ooohours"=>	array ("1","0","0"),	
	"shifts"=>	array ("1","0","0","user_id=","auth_id"),

	"members"=>	array ("1","0","0"),
	
	"voicemaps"=>	array ("1","0","0"),
	"voiceumaps"=>	array ("1","0","0"),
	"voiceprompts"=>array ("1","0","0"),
	"dst"=>		array ("1","0","0"),
	"exit"=>	array ("1","0","0"),
	"voicefiles"=>	array ("1","0","0"), 
	"moh"=>		array ("1","0","0"),
	"attachments"=>	array ("1","1","1"),

	"csv"=>		array ("1","1","0"),  
	"vfiles"=>	array ("1","1","0"), 
	"files"=>	array ("1","1","0"),

	"categories"=>	array ("1","0","0"),
	"subcategories"=>array ("1","0","0"),
	"age_groups"=>array("1","0","0"),

	"tasks"=>	array ("1","1","1"),
	"activities"=>	array ("1","1","1","created_by_id=","auth_id"),
	"actions"=>array ("1","1","1"),
	"qas"=>		array ("1","0","0","chan_user_id=","auth_id"), 

	"calls"=>	array ("1","0","0","user_id=","auth_id"), 
	"locals"=>	array ("1","0","0","usr=","auth_exten"),  
	"chanss"=>	array ("1","0","0","user_id=","auth_id"),  
	"prompts"=>	array ("1","0","0"),
//	"emails"=>	array ("1","1","0"), 
	
	"reporters"=>	array ("1","1","1"),
	"clients"=>	array ("1","1","1"),
	"perpetrators"=>array ("1","1","1"),
	"cases"=>	array ("1","1","1","created_by_id=","auth_id"),
	"followups"=>	array ("1","1","1"),
	"case_activities"=>array ("1","1","0"),
	"services"=>	array ("1","1","1"),
	"referals"=>	array ("1","1","1"),
			
	"today"=>	array ("1","0","0"),   
);

$RIGHTS_2 = array // sel:0,add:1,upd:2 // supervisor rights
(
	"au"=>		array ("0","0","0"),
	"addr"=>	array ("0","0","0"),
	"otp"=>		array ("0","0","0"),
	"auth"=>	array ("1","0","0","id=","auth_id"),
	"users"=>	array ("1","0","0"),
	"contacts"=>	array ("1","1","1"),
	"profile"=>	array ("1","0","1","id=","profile_id"), // 1177
	
	"campaigns"=>	array ("1","0","0"),
	"inbound"=>	array ("1","0","0"),
	"outbound"=>	array ("1","0","0"),

	"workinghours"=>array ("1","0","0"),
	"ooohours"=>	array ("1","0","0"),	
	"shifts"=>	array ("1","0","0","user_id=","auth_id"),

	"members"=>	array ("1","0","0"),

	"voicemaps"=>	array ("1","0","0"),
	"voiceumaps"=>	array ("1","0","0"),
	"voiceprompts"=>array ("1","0","0"),
	"dst"=>		array ("1","0","0"),
	"exit"=>	array ("1","0","0"),
	"voicefiles"=>	array ("1","0","0"), 
	"moh"=>		array ("1","0","0"),
	"attachments"=>	array ("1","1","1"),
		
	"csv"=>		array ("1","1","0"),  
	"vfiles"=>	array ("1","1","0"), 
	"files"=>	array ("1","1","0"),

	"categories"=>	array ("1","0","0"),
	"subcategories"=>array ("1","0","0"),
	"age_groups"=>array("1","0","0"),
		
	"tasks"=>	array ("1","1","1"),
	"activities"=>	array ("1","1","1","created_by_id=","auth_id"),	
	"actions"=>array ("1","1","1"),
	"qas"=>		array ("1","1","0"), 

	"calls"=>	array ("1","0","0"), 
	"locals"=>	array ("1","0","0","usr=","auth_exten"),  
	"chanss"=>	array ("1","0","0","user_id=","auth_id"),  
	"prompts"=>	array ("1","0","0"),
//	"emails"=>	array ("1","1","0"), 

	"reporters"=>	array ("1","1","1"),
	"clients"=>	array ("1","1","1"),
	"perpetrators"=>array ("1","1","1"),
	"cases"=>	array ("1","1","1"), // "created_by_id=","auth_id","created_by_role=1",""),
	"followups"=>	array ("1","1","1"),
	"case_activities"=>	array ("1","1","0"),
	"services"=>	array ("1","1","1"),
	"referals"=>	array ("1","1","1"),
	
	"today"=>	array ("1","0","0"),  
);

$RIGHTS_3 = array // sel:0,add:1,upd:2 // casemanger rights
(
	"au"=>		array ("0","0","0"),
	"addr"=>	array ("0","0","0"),
	"otp"=>		array ("0","0","0"),
	"auth"=>	array ("1","0","0","id=","auth_id"),
	"users"=>	array ("1","0","0"),
	"contacts"=>	array ("1","1","1"),
	"profile"=>	array ("1","0","1","id=","profile_id"),

	"campaigns"=>	array ("1","0","0"),
	"inbound"=>	array ("1","0","0"),
	"outbound"=>	array ("1","0","0"),

	"workinghours"=>array ("1","0","0"),
	"ooohours"=>	array ("1","0","0"),	
	"shifts"=>	array ("1","0","0","user_id=","auth_id"),	

	"members"=>	array ("1","0","0"),

	"voicemaps"=>	array ("1","0","0"),
	"voiceumaps"=>	array ("1","0","0"),
	"voiceprompts"=>array ("1","0","0"),
	"dst"=>		array ("1","0","0"),
	"exit"=>	array ("1","0","0"),
	"voicefiles"=>	array ("1","0","0"), 
	"moh"=>		array ("1","0","0"),
	"attachments"=>	array ("1","1","1"),  
	
	"csv"=>		array ("1","1","0"),  
	"vfiles"=>	array ("1","1","0"), 
	"files"=>	array ("1","1","0"),

	"categories"=>	array ("1","0","0"),
	"subcategories"=>array ("1","0","0"),
	"age_groups"=>array("1","0","0"),
		
	"tasks"=>	array ("1","1","1"),
	"activities"=>	array ("1","1","1","created_by_id=","auth_id"),	
	"actions"=>array ("1","1","1"),
	"qas"=>		array ("1","0","0","id=","0"), 

	"calls"=>	array ("1","0","0","id=","0"), 
	"locals"=>	array ("1","0","0","usr=","auth_exten"),  
	"chanss"=>	array ("1","0","0","user_id=","auth_id"),  
	"prompts"=>	array ("1","0","0"),
//	"emails"=>	array ("1","1","0"), 
	
	"reporters"=>	array ("1","1","1"),
	"clients"=>	array ("1","1","1"),
	"perpetrators"=>array ("1","1","1"),
	"cases"=>	array ("1","1","1","created_by_id=","auth_id","escalatedto_id=","auth_id","created_by_role=4","","escalatedto_role=4",""),
	"followups"=>	array ("1","1","1"),
	"case_activities"=>	array ("1","1","0"),
	"services"=>	array ("1","1","1"),
	"referals"=>	array ("1","1","1"),

	"today"=>	array ("1","0","0"), 
);

$RIGHTS_4 = array // sel:0,add:1,upd:2 // case workerr
(
	"au"=>		array ("0","0","0"),
	"addr"=>	array ("0","0","0"),
	"otp"=>		array ("0","0","0"),
	"auth"=>	array ("1","0","0","id=","auth_id"),
	"users"=>	array ("1","0","0"),
	"contacts"=>	array ("1","1","1"),
	"profile"=>	array ("1","0","1","id=","profile_id"),

	"campaigns"=>	array ("1","0","0"),
	"inbound"=>	array ("1","0","0"),
	"outbound"=>	array ("1","0","0"),

	"workinghours"=>array ("0","0","0"),
	"ooohours"=>	array ("0","0","0"),	
	"shifts"=>	array ("0","0","0","user_id=","auth_id"),	

	"members"=>	array ("0","0","0"),
		
	"voicemaps"=>	array ("0","0","0"),
	"voiceumaps"=>	array ("0","0","0"),
	"voiceprompts"=>array ("0","0","0"),
	"dst"=>		array ("0","0","0"),
	"exit"=>	array ("0","0","0"),
	"voicefiles"=>	array ("0","0","0"), 
	"moh"=>		array ("0","0","0"),  
	"attachments"=>	array ("1","1","1"),
	
	"csv"=>		array ("1","1","0"),  
	"vfiles"=>	array ("1","1","0"), 
	"files"=>	array ("1","1","0"),
	
	"categories"=>	array ("1","0","0"),
	"subcategories"=>array ("1","0","0"),
	"age_groups"=>array("1","0","0"),
		
	"tasks"=>	array ("1","1","1"),
	"activities"=>	array ("1","1","1","created_by_id=","auth_id"),	
	"actions"=>array ("1","1","1"),
	"qas"=>		array ("0","0","0","id="," 0"), 

	"calls"=>	array ("0","0","0","id="," 0"), 
	"locals"=>	array ("0","0","0","usr=","auth_exten"),  
	"chanss"=>	array ("0","0","0","user_id=","auth_id"),  
	"prompts"=>	array ("0","0","0"),
//	"emails"=>	array ("1","1","0"), 
	
	"reporters"=>	array ("1","1","1"),
	"clients"=>	array ("1","1","1"),
	"perpetrators"=>array ("1","1","1"),
	"cases"=>	array ("1","1","1","created_by_id=","auth_id","escalatedto_id=","auth_id"),
	"followups"=>	array ("1","1","1"),
	"case_activities"=>	array ("1","1","0"),
	"services"=>	array ("1","1","1"),
	"referals"=>	array ("1","1","1"),
		
	"today"=>	array ("1","0","0"), 
);

$RIGHTS_5 = $RIGHTS_4;

$RIGHTS_99 = array // sel:0,add:1,upd:2 // admin rights (same as supervisor+add/edit users)
(
	"au"=>		array ("0","0","0"),
	"addr"=>	array ("0","0","0"),
	"otp"=>		array ("0","0","0"),
	"auth"=>	array ("1","0","0","id=","auth_id"),
	"users"=>	array ("1","1","1"),
	"contacts"=>	array ("1","1","1"),
	"profile"=>	array ("1","0","1","id=","profile_id"),
	
	"campaigns"=>	array ("1","0","0"),
	"inbound"=>	array ("1","0","0"),
	"outbound"=>	array ("1","0","0"),
	
	"workinghours"=>array ("1","0","0"),
	"ooohours"=>	array ("1","0","0"),	
	"shifts"=>	array ("1","0","0","user_id=","auth_id"),
	
	"members"=>	array ("1","0","0"),
	
	"voicemaps"=>	array ("1","0","0"),
	"voiceumaps"=>	array ("1","0","0"),
	"voiceprompts"=>array ("1","0","0"),
	"dst"=>		array ("1","0","0"),
	"exit"=>	array ("1","0","0"),
	"voicefiles"=>	array ("1","0","0"), 
	"moh"=>		array ("1","0","0"),  
	"attachments"=>	array ("1","1","1"),
		
	"csv"=>		array ("1","1","0"),  
	"vfiles"=>	array ("1","1","0"), 
	"files"=>	array ("1","1","0"),
	
	"categories"=>	array ("1","1","1"),
	"subcategories"=>array ("1","1","1"),
	"age_groups"=>array("1","0","0"),

	"tasks"=>	array ("1","1","1"),
	"activities"=>	array ("1","1","1","created_by_id=","auth_id"),	
	"actions"=>array ("1","1","1"),
	"qas"=>		array ("1","1","0"), 

	"calls"=>	array ("1","0","0"), 
	"locals"=>	array ("1","0","0","usr=","auth_exten"),  
	"chanss"=>	array ("1","0","0","user_id=","auth_id"),  
	"prompts"=>	array ("1","0","0"),
//	"emails"=>	array ("1","1","0"), 
	
	"reporters"=>	array ("1","1","1"),
	"clients"=>	array ("1","1","1"),
	"perpetrators"=>array ("1","1","1"),
	"cases"=>	array ("1","1","1"),
	"followups"=>	array ("1","1","1"),
	"case_activities"=>	array ("1","1","0"),
	"services"=>	array ("1","1","1"),
	"referals"=>	array ("1","1","1"),

	"today"=>	array ("1","0","0"), 
);

// ---------------------------------

$METRICS = array 
(
	"count"=>array ("count"),
	"percent"=>array ("percent"),
	"uniquecallers"=>array ("uniquecallers"),
	"repeatcallers"=>array ("repeatcallers"),

	"waittime"=>array ("count","wait_avg","wait_max","wait_min"),
	"talktime"=>array ("count","talk_avg","talk_max","talk_min"),
	"holdtime"=>array ("count","hold_avg","hold_max","hold_min"),
	"billing"=>array ("billing"),
	
	"available"=>array ("available"),
	"occupied"=>array ("occupied"),
	"occupancy"=>array ("occupancy"),
);

$METRIC = array // [sql_clause, value_metric,xtot_metric,ytot_metric,precision,pre_fmt_str,post_fmt_str]
(
	"count"=>array ("COUNT(id)",			"","tot","tot","0","","","Count"),
	"percent"=>array ("COUNT(id)",			"percent","avg","tot","0","","%","Percentage"),
	"uniquecallers"=>array ("COUNT(DISTINCT phone)",  "","tot","tot","0","","","Unique Callers"),
	"repeatcallers"=>array ("COUNT(DISTINCT fca_dt)", "","tot","tot","0","","","Repeat Callers"),

	"wait_avg"=>array ("SUM(wait_time_tot)",	"avg","avg","avg","0","","","Avg Wait Time"), 
	"wait_sum"=>array ("SUM(wait_time_tot)",	"","tot","tot","0","","","Total Wait Time"), 
	"wait_max"=>array ("MAX(wait_time_tot)",	"","avg","avg","0","","","Max Wait Time"), 
	"wait_min"=>array ("MIN(wait_time_tot)",	"","avg","avg","0","","","Min Wait Time"), 

	"talk_avg"=>array ("SUM(talk_time)",		"avg","avg","avg","0","","","Avg Talk Time"), 
	"talk_sum"=>array ("SUM(talk_time)",		"","tot","tot","0","","","Total Talk Time"), 
	"talk_max"=>array ("MAX(talk_time)",		"","avg","avg","0","","","Max Talk Time"), 
	"talk_min"=>array ("MIN(talk_time)",		"","avg","avg","0","","","Min Talk Time"), 

	"hold_avg"=>array ("SUM(hold_time)",		"avg","avg","avg","0","","","Avg Hold Time"), 
	"hold_sum"=>array ("SUM(hold_time)",		"","tot","tot","0","","","Total Hold Time"), 
	"hold_max"=>array ("MAX(hold_time)",		"","avg","avg","0","","","Max Hold Time"), 
	"hold_min"=>array ("MIN(hold_time)",		"","avg","avg","0","","","Min Hold Time"), 

	"billing"=>array ("SUM(IF(vector=2,talk_time*call_rate,0))",		"","tot","tot","2","","","Billing"),
	
	"available"=>array ("ROUND(SUM(available)/3600,1)",			"count","tot","tot","0","","","Available"),
	"occupied"=>array ("ROUND(SUM(occupied)/3600,1)",			"count","tot","tot","0","","","Occupied"),
	"occupancy"=>array ("ROUND((SUM(occupied)*100/SUM(available)))",	"count","avg","tot","0","","%","Occupancy"),
);

// ---------------------------------

$au_def = array 
(
	array ("id","",			"0","2","","",	"","","", 	"",""),
	array ("created_on","",		"0","3","","",	"","","", 	"",""),
	array ("created_by","",		"0","2","","",	"","","", 	"",""),
	array ("created_by_id","",	"0","2","","",	"","","", 	"",""),

	array ("aub_id","",		"1","2","","",	"","","", 	"",""), 
	array ("row_id","",		"1","2","","",	"","","", 	"",""), 
	array ("t","",			"1","2","","",	"","","", 	"",""), 
	array ("k","",			"1","2","","",	"","","", 	"",""), 
	array ("v","",			"1","1","","",	"","","", 	"",""), 

);

$addr_def = array 
(
	array ("id","",				"0","2","","",	"","","", 	"",""),
	array ("created_on","",			"0","3","","",	"","","", 	"",""),
	array ("created_by","",			"0","2","","",	"","","", 	"",""),
	array ("created_by_id","",		"0","2","","",	"","","", 	"",""),

	array ("addr","",			"1","2","u","",	"","","", 	"",""), 
	array ("type","",			"1","2","","",	"","","", 	"",""), 

	array ("auth_id","",			"1","2","u","",	"","","", 	"",""), 
	array ("contact_id","",			"1","2","u","",	"","","", 	"",""), 
	array ("contact_fullname","",		"1","2","","",	"","","", 	"",""), 

);

$otp_def = array 
(
	array ("id","",				"0","2","","",	"","","", 	"",""),
	array ("created_on","",			"0","3","","",	"","","", 	"",""),
	array ("created_by","",			"0","2","","",	"","","", 	"",""),
	array ("created_by_id","",		"0","2","","",	"","","", 	"",""),

	array ("otp","",			"1","2","","",		"","","", 	"",""), 
	array ("expiry","",			"1","3","","",		"","","", 	"",""), 
	array ("action","",			"1","2","","",		"","","", 	"",""), 

	array ("addr_id","",			"1","2","m","f", 	"","","", 	"",""), 
	array ("addr_addr","",			"1","2","m","",		"","","", 	"",""), // /[1-9][0-9]{9,12}/
	array ("addr_type","",			"1","2","","",		"","","", 	"",""), 

	array ("auth_id","",			"1","2","m","f",	"","","", 	"",""), // 'm' flag means users cannot selfregister / if self-register will be null forn new
	array ("contact_id","",			"1","2","","", 		"","","", 	"",""), 
	array ("contact_fullname","",		"1","2","","",	"","","", 	"",""), 
);

$auth_def = array 
(
	array ("id","",				"0","2","","", "","","", "ID",""),
	array ("created_on","",			"0","3","","", "","","", "Created On",""),
	array ("created_by","",			"0","2","","", "","","", "Created By",""),
	array ("created_by_id","",		"0","2","","", "","","", "Created By ID",""),
	array ("created_by_role","",		"0","2","","", "","","", "Created By Role",""),

	array ("usn","",			"3","2","u","", "","","", "Username",""),
	array ("role","",			"3","2","m","", "","","", "Role",""),
	array ("exten","",			"3","2","m","", "","","", "Extension",""),
	array ("agentno","",			"1","2","","", "","","", "AgentNo",""),
	array ("chatid","",			"1","2","","", "","","", "Extension",""),
	array ("mac","",			"1","2","","", "","","", "Phone MAC Address",""), // for dhcp autoprovisioning

	array ("contact_id","contact_id",	"1","2","m","f", "","","", "Contact ID",""),
	array ("contact_fullname","",		"4","2","","", "contacts","fullname","", "First Name",""),
	array ("contact_fname","",		"4","2","","", "contacts","fname","", "Last Name",""),
	array ("contact_lname","",		"4","2","","", "contacts","lname","", "Fullname",""),
	array ("contact_phone","",		"4","2","","", "contacts","phone","", "Phone",""),
	array ("contact_email","",		"4","2","","", "contacts","email","", "Email",""),
	array ("contact_location","",		"4","2","","", "contacts","location","", "Location",""),
	
	array ("last_break","",			"0","2","","", "","","", "Last Break ",""),
	array ("last_break_ts","",		"0","2","","", "","","", "Last Break Time",""),
	array ("available","",			"0","2","","", "","","", "Available Duration",""),
);
$users_def = $auth_def;

$contacts_def = array 
(
	array ("id","",				"0","2","","", "","","",	"",""),
	array ("created_on","",			"0","3","","", "","","",	"",""),
	array ("created_by","",			"0","2","","", "","","",	"",""),
	array ("created_by_id","",		"0","2","","", "","","",	"",""),
	array ("created_by_role","",		"0","2","","", "","","", 	"Created By Role",""),
	
	array ("fullname","",			"4","1","","", "contacts","CONCAT(TRIM(fname),' ',TRIM(lname))","",	"Fullname",""),
	array ("fname","",			"3","1","m","", "","","",	"Name",""),
	array ("lname","",			"3","1","","",  "","","",	"Last Name",""),

	array ("phone","",			"3","1","","", "","","",	"Phone",""), // todo: regex
	array ("email","",			"3","2","","", "","","",	"Email",""),
	array ("phone2","",			"3","2","","", "","","",	"Alternative Contact",""),

	array ("dob","",			"3","2","","", "","","",	"Date of Birth",""),
	array ("age","",			"3","2","","", "","","",	"Age",""),
	array ("age_group_id","",		"3","2","","f", "","","",	"Age Group ID",""),
	array ("age_group","",			"3","2","","", "","","",	"Age Group",""),
	array ("sex_id","",			"3","2","","f", "","","",	"Gender ID",""),
	array ("sex","",			"3","2","","", "","","",	"Gender",""),

	array ("national_id_type_id","",	"3","2","","", "","","",	"ID Type",""),
	array ("national_id_type","",		"3","2","","", "","","",	"ID Type",""),
	array ("national_id","",		"3","2","","", "","","",	"National ID",""),
	array ("address","",			"3","1","","", "","","",	"Address",""),
	array ("residence","",			"3","2","","", "","","",	"Residence",""),
	
	array ("location_id","",		"3","2","","f", "","","",	"Location ID",""),
	array ("location","",			"3","2","","", "","","",	"Location",""),
	array ("nationality_id","",		"3","2","","f", "","","",	"Nationality ID",""),
	array ("nationality","",		"3","2","","", "","","",	"Nationality",""),
	array ("tribe_id","",			"3","2","","f", "","","",	"Tribe ID",""),
	array ("tribe","",			"3","2","","", "","","",	"Tribe",""),
	array ("lang_id","",			"3","2","","f", "","","",	"Language ID",""),
	array ("lang","",			"3","2","","", "","","",	"Language",""),
	
	array ("landmark","",			"3","1","","", "","","",	"Nearest Landmark",""),
	
	array ("location_0","",			"3","2","","", "","","",	"",""),
	array ("location_1","",			"3","2","","", "","","",	"",""),
	array ("location_2","",			"3","2","","", "","","",	"",""),
	array ("location_3","",			"3","2","","", "","","",	"",""),
	array ("location_4","",			"3","2","","", "","","",	"",""),
	array ("location_5","",			"3","2","","", "","","",	"",""),
	array ("location_6","",			"3","2","","", "","","",	"",""),
	
	array ("reporter_count","",		"0","4","","", "","","", 	"Is Reporter",""),
	array ("perp_count","",			"0","4","","", "","","", 	"Is Perpetrator",""),
	array ("client_count","",		"0","4","","", "","","", 	"Is Client",""),

);
$profile_def = $contacts_def;


$tasks_def = array 
(
	array ("id","",				"0","2","","", "","","",	"",""),
	array ("created_on","",			"0","3","","", "","","",	"",""),
	array ("created_by","",			"0","2","","", "","","",	"",""),
	array ("created_by_id","",		"0","2","","", "","","",	"",""),
	array ("created_by_role","",		"0","2","","", "","","", 	"Created By Role",""),

	array ("task","",			"1","2","m","",	"","","", 	"Task Type",""),
	
	array ("activity_count","",		"4","4","","",	"activities","COUNT(id)","", 			"Activity Count",""),
	array ("activity_ids","",		"4","1","","",	"activities","GROUP_CONCAT(id)","", 		"Activity IDs",""),
	array ("activity_last_id","",		"4","2","","f",	"activities","MAX(id)","activity_last_id", 	"Last Activity ID",""),

	array ("activity_on","",		"5","3","","",	"activities","created_on","", 			"Last Activity On",""),	
	array ("activity_by","",		"5","2","","",	"activities","created_by","", 			"Last Activity By",""),	
	array ("activity_by_id","",		"5","2","","",	"activities","created_by_id","", 		"Last Activity By ID",""),	
	array ("activity_by_role","",		"5","2","","",	"activities","created_by_role","", 		"Last Activity By Role",""),	
	
	/*
	array ("chan_uniqueid","uniqueid",	"1","2","","", "","","",	"UniqueID",""),  
	array ("chan_ts","",			"1","3","","", "","","",	"Channel Timestamp",""),
	array ("chan_phone","phone",		"1","2","","", "","","",	"Phone",""),  
	array ("chan_usr","usr",		"1","2","","", "","","",	"Extension",""),  
	array ("chan_vector","vector",		"1","2","","", "","","",	"Direction",""),  
	array ("chan_state","",			"1","2","","", "","","",	"State",""),  // last state
	array ("chan_state_ts","",		"1","3","","", "","","",	"State Timestamp",""),  
	array ("chan_state_ts_end","",		"1","3","","", "","","",	"State End",""),  
	array ("chan_chan1","chan1",		"1","2","","", "","","",	"Channel",""),  
	array ("chan_chan2","chan2",		"1","2","","", "","","",	"Peer Channel",""), 	
	array ("chan_callid","callid",		"1","2","","", "","","",	"CallID",""),  
	array ("chan_cbid","cbid",		"1","2","","", "","","",	"Confbridge ID",""),  
	array ("chan_actionid","actionid",	"1","2","","", "","","",	"Action ID",""),  
	*/
	
);

$activities_def = array 
(
	array ("id","",				"0","2","","", "","","",	"",""),
	array ("created_on","",			"0","3","","", "","","",	"",""),
	array ("created_by","",			"0","2","","", "","","",	"",""),
	array ("created_by_id","",		"0","2","","", "","","",	"",""),
	array ("created_by_role","",		"0","2","","", "","","", 	"Created By Role",""),

	array ("activity","",			"1","2","","",	"","","",	"",""),
	array ("activity_ts","",		"1","3","","",	"","","",	"",""),
	array ("activity_duration","",		"1","2","","",	"","","",	"",""),
	array ("is_read","",			"1","2","","",	"","","",	"",""),
		
	array ("src","",			"1","2","","",	"","","", 	"Channel",""),
	array ("src_uid","",			"1","2","","F",	"","","", 	"Channel Uniqueid",""),
	array ("src_ts","",			"1","2","","",	"","","", 	"Channel Timestamp",""),
	array ("src_address","",		"1","2","","F",	"","","", 	"Channel Address",""),
	array ("src_usr","",			"1","2","","",	"","","", 	"Channel User",""),
	array ("src_vector","",			"1","2","","",	"","","", 	"Channel Direction",""),
	array ("src_status","",			"1","2","","",	"","","", 	"Channel Status",""),

	array ("disposition_id","",		"5","2","","f", "actions","disposition_id","",	"Disposition ID",""), 
	array ("disposition","",		"5","2","","",  "actions","disposition","",	"Disposition",""),  

	array ("last_disposition_id","",	"4","2","","f", "actions","MAX(id)","last_disposition_id",	"Last Disposition ID",""), 
	
	// campaign
	
	// task
	
	// contact
	
	// comments, category, status
	
	array ("yr","",				"4","2","","",   "activities","UNIX_TIMESTAMP(CONCAT(YEAR(FROM_UNIXTIME(created_on)),'-01-01'))","",   "Year",":d:y:0: "), 
        array ("mn","",				"4","2","","",   "activities","UNIX_TIMESTAMP(CONCAT(YEAR(FROM_UNIXTIME(created_on)),'-',MONTH(FROM_UNIXTIME(created_on)),'-01'))","",   "Month",":d:my:0: "), 
        array ("wk","",				"4","2","","",   "activities","UNIX_TIMESTAMP(DATE(FROM_UNIXTIME(created_on))) - (DAYOFWEEK(FROM_UNIXTIME(created_on))*86400)","",   "Week",":d:dmy:0: "), 
        array ("dt","",				"4","2","","",   "activities","UNIX_TIMESTAMP(DATE(FROM_UNIXTIME(created_on)))","",   "Date",":d:dmy:0: "), 
	array ("hr","",				"4","2","","",   "activities","UNIX_TIMESTAMP(DATE(FROM_UNIXTIME(created_on))) + (HOUR(FROM_UNIXTIME(created_on))*3600)","",   "Hour",":d:dmyh:0: "), 
        array ("h","hour",			"4","2","","",   "activities","HOUR(FROM_UNIXTIME(created_on))","",   "Hour",""), 
	
);

$actions_def = array  // NB: must match order of activity
(
	array ("id","",				"0","2","","", "","","",	"",""),
	array ("created_on","",			"0","3","","", "","","",	"",""),
	array ("created_by","",			"0","2","","", "","","",	"",""),
	array ("created_by_id","",		"0","2","","", "","","",	"",""),
	array ("created_by_role","",		"0","2","","", "","","", 	"Created By Role",""),
	
	array ("activity","",			"1","2","","",	"","","",	"",""),
	array ("activity_ts","",		"1","3","","",	"","","",	"",""),
	array ("activity_duration","",		"1","2","","",	"","","",	"",""),
	array ("is_read","",			"1","2","","",	"","","",	"",""),
		
	array ("src","",			"1","2","","",	"","","", 	"Channel",""),
	array ("src_uid","",			"1","2","","F",	"","","", 	"Channel Uniqueid",""),
	array ("src_ts","",			"1","2","","",	"","","", 	"Channel Timestamp",""),
	array ("src_address","",		"1","2","","F",	"","","", 	"Channel Address",""),
	array ("src_usr","",			"1","2","","",	"","","", 	"Channel User",""),
	array ("src_vector","",			"1","2","","",	"","","", 	"Channel Direction",""),
	array ("src_status","",			"1","2","","",	"","","", 	"Channel Status",""),

	array ("disposition_id","",		"1","2","","f", "","","",	"Disposition ID",""), 
	array ("disposition","",		"1","2","","",  "","","",	"Disposition",""),  

	array ("action","",			"1","2","","",	"","","",	"",""),
);
	
$qas_def = array
(
	array ("id","",				"0","2","","", "","","",	"ID",""),
	array ("created_on","",			"0","3","","", "","","",	"Created On",""),
	array ("created_by","",			"0","2","","", "","","",	"Supervisor",""),
	array ("created_by_id","",		"0","2","","", "","","",	"Supervisor ID",""),
	array ("created_by_role","",		"0","2","","", "","","", 	"Supervisor Role",""),
	
	array ("chan_uniqueid","",		"1","2","m","f","","","",	"Call ID",""),
	array ("chan_chan_ts","",		"1","4","","",	"","","",	"Call Date time",""),
	array ("chan_vector","",		"1","4","","",	"","","",	"Direction",""),
	array ("chan_phone","",			"1","2","","",	"","","",	"Phone",""),
	array ("chan_usr","",			"1","2","","",	"","","",	"Extension",""),
	array ("chan_wait_time","",		"1","4","","",	"","","",	"Wait Time",""),
	array ("chan_talk_time","",		"1","4","","",	"","","",	"Talk Time",""),
	array ("chan_hold_time","",		"1","4","","",	"","","",	"Hold Time",""),
	array ("chan_hangup_reason","",		"1","2","","",	"","","",	"Hangup Reason",""),
	array ("chan_hangup_status","",		"1","2","","",	"","","",	"Hangup Status",""),
	array ("chan_user_id","",		"1","4","","", "","","", 	"User ID",""),
	array ("chan_user_name","",		"1","2","","", "","","", 	"Username",""),
	array ("chan_user_role","",		"1","2","","", "","","", 	"User Role",""),
	
	array ("opening_phrase","",		"1","4","m","", "","","", "Opening",""),
	array ("non_interrupting","",		"1","4","m","", "","","", "Non Interruption",""),
	array ("empathy","",			"1","4","m","", "","","", "Empathy",""),
	array ("paraphrasing","",		"1","4","m","", "","","", "Paraphrasing",""),
	array ("courteous","",			"1","4","m","", "","","", "Courteous",""),
	array ("nonhesitant","",		"1","4","m","", "","","", "Non Hesitant",""),
	array ("extra_mile_willingness","",	"1","4","m","", "","","", "Extra Mile Willingness",""),
	array ("confirms_client_satisfaction","",	"1","4","m","", "","","", "Checks Clients Satisfaction",""),
	array ("follows_up_on_case_updates","",		"1","4","m","", "","","", "Follows up",""),
	array ("accuracy","",			"1","4","m","", "","","", "Accuracy",""),
	array ("grammar","",			"1","4","m","", "","","", "Gramma",""),
	array ("consults","",			"1","4","m","", "","","", "Consults",""),
	array ("procedure_adherance","",	"1","4","m","", "","","", "Procedure Adherance",""),
	array ("educative","",			"1","4","m","", "","","", "Educative",""),
	array ("notifies_hold","",		"1","4","m","", "","","", "Notifies Hold",""),
	array ("updates_hold","",		"1","4","m","", "","","", "Updates Hold",""),
	array ("call_closing_coutesy","",	"1","4","m","", "","","", "Call Closing",""),
		
	array ("opening_phrase_comments","",	"1","4","","", "","","", "Call Opening Comments",""),
	array ("listening_comments","",		"1","4","","", "","","", "Listening Comments",""),
	array ("pro_active_comments","",	"1","4","","", "","","", "Proactive Comments",""),
	array ("resolution_comments","",	"1","4","","", "","","", "Resolution Comments",""),
	array ("hold_comments","",		"1","4","","", "","","", "Hold Comments",""),
	array ("call_closing_comments","",	"1","4","","", "","","", "Call Closing Comments",""),
	array ("feedback","",			"1","4","m","", "","","", "Feedback",""),

	array ("greeting_score","",		"4","4","","", "qas","opening_phrase","", "Greeting Score",""),
	array ("listening_score","",		"4","4","","", "qas","non_interrupting+empathy+paraphrasing+courteous+nonhesitant","", "Listening Score",""),
	array ("proactive_score","",		"4","4","","", "qas","extra_mile_willingness+confirms_client_satisfaction+follows_up_on_case_updates","", "Proactive Score",""),
	array ("resolution_score","",		"4","4","","", "qas","accuracy+grammar+consults+procedure_adherance+educative","", "Resolution Score",""),
	array ("holding_score","",		"4","4","","", "qas","notifies_hold+updates_hold","", "Holding Score",""),
	array ("closing_score","",		"4","4","","", "qas","call_closing_coutesy","", "Closing Score",""),
	array ("total_score","",		"5","4","","", "qas","greeting_score+listening_score+proactive_score+resolution_score+holding_score+closing_score","", "Total Score",""),
	
	array ("greeting_score_p","",		"5","4","","", "qas","ROUND((opening_phrase*100/2),0)","", "Greeting Score",""),
	array ("listening_score_p","",		"5","4","","", "qas","ROUND(((non_interrupting+empathy+paraphrasing+courteous+nonhesitant)*100/10),0)","", "Listening Score %",""),
	array ("proactive_score_p","",		"5","4","","", "qas","ROUND(((extra_mile_willingness+confirms_client_satisfaction+follows_up_on_case_updates)*100/6),0)","", "Proactive Score %",""),
	array ("resolution_score_p","",		"5","4","","", "qas","ROUND(((accuracy+grammar+consults+procedure_adherance+educative)*100/10),0)","", "Resolution Score %",""),
	array ("holding_score_p","",		"5","4","","", "qas","ROUND(((notifies_hold+updates_hold)*100/4),0)","", "Holding Score %",""),
	array ("closing_score_p","",		"5","4","","", "qas","ROUND(((call_closing_coutesy)*100/2),0)","", "Closing Score %",""),
	array ("total_score_p","",		"5","4","","", "qas","ROUND(((greeting_score+listening_score+proactive_score+resolution_score+holding_score+closing_score)*100/34) )","", "Total Score %",""),
	
	array ("yr","",				"4","2","","",   "qas","UNIX_TIMESTAMP(CONCAT(YEAR(FROM_UNIXTIME(chan_chan_ts)),'-01-01'))","",   "Year",":d:y:0: "), 
        array ("mn","",				"4","2","","",   "qas","UNIX_TIMESTAMP(CONCAT(YEAR(FROM_UNIXTIME(chan_chan_ts)),'-',MONTH(FROM_UNIXTIME(chan_chan_ts)),'-01'))","",   "Month",":d:my:0: "), 
        array ("wk","",				"4","2","","",   "qas","UNIX_TIMESTAMP(DATE(FROM_UNIXTIME(chan_chan_ts))) - (DAYOFWEEK(FROM_UNIXTIME(chan_chan_ts))*86400)","",   "Week",":d:dmy:0: "), 
        array ("dt","",				"4","2","","",   "qas","UNIX_TIMESTAMP(DATE(FROM_UNIXTIME(chan_chan_ts)))","",   "Date",":d:dmy:0: "), 
	array ("hr","",				"4","2","","",   "qas","UNIX_TIMESTAMP(DATE(FROM_UNIXTIME(chan_chan_ts))) + (HOUR(FROM_UNIXTIME(chan_chan_ts))*3600)","",   "Hour",":d:dmyh:0: "), 
        array ("h","",				"4","2","","",   "qas","HOUR(FROM_UNIXTIME(chan_chan_ts))","",   "Hour",""), 
);


// ----------------------------

$campaigns_def = array 
(
	array ("id","",				"0","2","","", "","","", "ID",""),
	array ("created_on","",			"0","3","","", "","","", "Created On",""),
	array ("created_by","",			"0","2","","", "","","", "Created By",""),
	array ("created_by_id","",		"0","2","","", "","","", "Created By ID",""),
	array ("created_by_role","",		"0","2","","", "","","", "Created By Role",""),

	array ("name","",			"3","2","u","", "","","", 	"Name",""),
	array ("callerid","",			"3","2","m","",	"","","", 	"CallerID",""),
	array ("campaign","",			"1","2","m","", "","","",	"Type",""),

	array ("voiceprompt_id","voiceprompt_id","3","2","m","f", "","","", 	"IVR",""), // if queue -> fallback to queue voice menu acts as preprocessor
	array ("voiceprompt_name","",		"3","2","","", "","","", 	"IVR Name",""), // destination
	array ("voiceprompt_type","",		"3","2","","", "","","", 	"IVR Type",""), // destination

	array ("category_id","",		"3","2","m","f", "","","",	"Disposition List",""),
	array ("category_name","",		"3","1","","", "","","", 	"Category Name",""),
	array ("category_fullname","",		"3","1","","", "","","", 	"Category Full Name",""),

	array ("member_count","",		"4","4","","", 	"members","COUNT(id)","", 	"Member Count",""),
	array ("members","",			"4","1","","", 	"members","GROUP_CONCAT(user_usn ORDER BY user_usn)","", 	"Members",""),

	array ("agent_ring_strategy","",	"3","2","","", "","","",	"Agent Ring Strategy",""), // ringall, roundrobin, did-first
	array ("agent_ring_timeout","",		"3","4","","", 	"","","", 	"Agent Ring Timeout",""),
	array ("agent_wrapup","",		"3","4","","", 	"","","", 	"Agent Wrapup",""), 
	array ("wait_sla_target","",		"3","4","","", 	"","","", 	"SLA Target",""),
	array ("hold_sla_target","",		"3","4","","", 	"","","", 	"SLA Target",""),
	array ("queue_timeout","",		"3","4","","", 	"","","", 	"Queue Timeout",""),

	array ("moh_ids","",			"4","2","","",	"moh","GROUP_CONCAT(file_id ORDER BY id)","", 	"Voice File IDs",""),
	array ("moh_names","",			"4","1","","",	"moh","GROUP_CONCAT(file_name ORDER BY pos)","", "Voice File",""),
	array ("moh_duration","",		"4","5","","", 	"moh","SUM(file_duration)","", 	"Voice Duration",""),

	array ("exit_id","",			"3","2","","f", "","","", 	"Exit ID",""),
	array ("exit_name","",			"3","1","","",   "","","", 	"Exit",""),
	array ("exit_type","",			"3","2","","",   "","","", 	"Exit Type",""),

	array ("ring_timeout","",		"3","4","","", 	"","","", 	"Ring Timeout",""),
	array ("reattempts","",			"3","4","","", 	"","","", 	"Reattempts",""),
	array ("reattempt_interval","",		"3","4","","", 	"","","", 	"Reattempt Duration",""),

	array ("lead_count","",			"4","4","","",   "leads","COUNT(id)","", 	"Lead Count",""),
	
	array ("answered","",				"0","4","","", "","","", "Answered",""), 
	array ("resched","",				"0","4","","", "","","", "Rescheduled",""), 
	array ("unreachable","",			"0","4","","", "","","", "Unreachable",""),
	array ("progress","",				"0","4","","", "","","", "Progress",""),
	array ("avg_talk","",				"0","4","","", "","","", "Avg Talk Time",""), 
	array ("avg_hold","",				"0","4","","", "","","", "Avg Hold Time",""),
	array ("max_talk","",				"0","4","","", "","","", "Max Talk Time",""), 
	array ("max_hold","",				"0","4","","", "","","", "Max Hold Time",""),
	array ("not_dialed","",				"0","4","","", "","","", "Not Dialed",""),
	
	array ("ans_count","",				"0","4","","", "","","", "Answered",""),
	array ("ab_count","",				"0","4","","", "","","", "Abandoned",""),
	array ("ivr_count","",				"0","4","","", "","","", "IVR",""),
	array ("sla_wait","",				"0","4","","", "","","", "SLA",""),
	array ("ans_avg_talk_time","",			"0","4","","", "","","", "Avg Talk",""),
	array ("hold_avg","",				"0","4","","", "","","", "Avg Hold",""),
	
	array ("occupied","",			"0","2","","",   "","","",   "Occupied",""),  
        array ("occupancy","",			"0","2","","",   "","","",   "Occupancy",""),  
        array ("available","",			"0","2","","",   "","","",   "Available",""),  
        array ("availability","",		"0","2","","",   "","","",   "Availability",""),  
	array ("agents_online","",		"0","2","","",   "","","",   "Agents Online",""),  

);
$inbound_def = $campaigns_def;
$outbound_def = $campaigns_def;

$workinghours_def = array 
(
	array ("id","",				"0","2","","", "","","", "ID",""),
	array ("created_on","",			"0","3","","", "","","", "Created On",""),
	array ("created_by","",			"0","2","","", "","","", "Created By",""),
	array ("created_by_id","",		"0","2","","", "","","", "Created By ID",""),
	array ("created_by_role","",		"0","2","","", "","","", "Created By Role",""),

	array ("daterange","",			"3","2","","", "","","",	"Date Range",""),
	array ("dayofweek","",			"3","2","","", "","","",	"Day of Week",""), // todo: generate wh record for each day of the week
	array ("start_ts","",			"3","2","","", "","","", 	"Start",""),
	array ("end_ts","",			"3","2","","", "","","", 	"End",""),
	array ("dt0","",			"3","2","","", "","","",	"dt0",""),
	array ("dt1","",			"3","2","","", "","","",	"dt1",""),
	array ("sun","",			"3","2","","", "","","",	"sun",""),
	array ("mon","",			"3","2","","", "","","",	"mon",""),
	array ("tue","",			"3","2","","", "","","",	"tue",""),
	array ("wed","",			"3","2","","", "","","",	"wed",""),
	array ("thu","",			"3","2","","", "","","",	"thu",""),
	array ("fri","",			"3","2","","", "","","",	"fri",""),
	array ("sat","",			"3","2","","", "","","",	"sat",""),

	array ("source","",			"3","2","m","", "","","", 	"Source",""),
	array ("priority","",			"3","2","m","", "","","", 	"Priority",""),
	
	array ("campaign_id","",		"3","2","m","f", "","","",	"Campaign ID",""), 
	array ("campaign_campaign","",		"3","2","m","", "","","",	"Campaign Type",""), 
	array ("campaign_iid","",		"1","2","m","", "","","",	"Campaign ID (on Insert)",""), 
			
	array ("voiceprompt_id","",		"3","2","m","f", "","","", 	"Voiceprompt",""), 
	array ("voiceprompt_name","",		"3","2","","", "","","", 	"Voiceprompt Name",""), 
	array ("voiceprompt_type","",		"3","2","","", "","","", 	"Voiceprompt Type",""), 

);
$ooohours_def = $workinghours_def;

$shifts_def = array 
(
	array ("id","",				"0","2","","", "","","", "ID",""),
	array ("created_on","",			"0","3","","", "","","", "Created On",""),
	array ("created_by","",			"0","2","","", "","","", "Created By",""),
	array ("created_by_id","",		"0","2","","", "","","", "Created By ID",""),
	array ("created_by_role","",		"0","2","","", "","","", "Created By Role",""),

	array ("daterange","",			"3","2","","", "","","",	"Date Range",""),
	array ("dayofweek","",			"3","2","","", "","","",	"Day of Week",""), // todo: generate wh record for each day of the week
	array ("start_ts","",			"3","2","","", "","","", 	"Start",""),
	array ("end_ts","",			"3","2","","", "","","", 	"End",""),
	array ("dt0","",			"3","2","","", "","","",	"dt0",""),
	array ("dt1","",			"3","2","","", "","","",	"dt1",""),
	array ("sun","",			"3","2","","", "","","",	"sun",""),
	array ("mon","",			"3","2","","", "","","",	"mon",""),
	array ("tue","",			"3","2","","", "","","",	"tue",""),
	array ("wed","",			"3","2","","", "","","",	"wed",""),
	array ("thu","",			"3","2","","", "","","",	"thu",""),
	array ("fri","",			"3","2","","", "","","",	"fri",""),
	array ("sat","",			"3","2","","", "","","",	"sat",""),

	array ("user_id","",			"1","2","m","f", "","","", 	"Auth ID",""),
	array ("user_usn","",			"1","2","","", "","","", 	"Username",""),
	array ("user_role","",			"1","2","","", "","","", 	"Role",""),
	array ("user_exten","",			"1","2","","", "","","", 	"Extension",""),

	array ("contact_id","",			"1","2","m","f", "","","", 	"Contact ID",""),
	array ("contact_fullname","",		"1","2","","", "","","", 	"First Name",""),
	array ("contact_fname","",		"1","2","","", "","","", 	"Last Name",""),
	array ("contact_lname","",		"1","2","","", "","","", 	"Fullname",""),
	array ("contact_phone","",		"1","2","","", "","","", 	"Phone",""),
	array ("contact_email","",		"1","2","","", "","","", 	"Email",""),	
);

$members_def = array 
(
	array ("id","",				"0","2","","", "","","",	"",""),
	array ("created_on","",			"0","3","","", "","","",	"",""),
	array ("created_by","",			"0","2","","", "","","",	"",""),
	array ("created_by_id","",		"0","2","","", "","","",	"",""),
	array ("created_by_role","",		"0","2","","", "","","", 	"Created By Role",""),

	array ("user_id","",			"1","2","m","f", "","","", 	"Auth ID",""),
	array ("user_usn","",			"1","2","","", "","","", 	"Username",""), // same as otp handle
	array ("user_role","",			"1","2","","", "","","", 	"Role",""),
	array ("user_exten","",			"1","2","","", "","","", 	"Extension",""),

	array ("contact_id","",			"1","2","m","f", "","","", 	"Contact ID",""),
	array ("contact_fullname","",		"1","2","","", "","","", 	"First Name",""),
	array ("contact_fname","",		"1","2","","", "","","", 	"Last Name",""),
	array ("contact_lname","",		"1","2","","", "","","", 	"Fullname",""),
	array ("contact_phone","",		"1","2","","", "","","", 	"Phone",""),
	array ("contact_email","",		"1","2","","", "","","", 	"Email",""),	

	array ("campaign_id","",		"3","2","m","", "","","", 	"Campaign ID",""),
	// array ("campaign_name","",		"1","2","","", "","","", "Campaign Name",""),
	// array ("campaign_campaign","",		"1","2","","", "","","", "Campaign Type",""),
	// array ("campaign_campaign","",		"1","2","","", "","","", "Campaign Type",""),
	// array ("campaign_campaign","",		"1","2","","", "","","", "Campaign Type",""),
);

// -----------------------

$categories_def = array 
(
	array ("id","",				"0","2","","", "","","", "ID",""),
	array ("created_on","",			"0","3","","", "","","", "Created On",""),
	array ("created_by","",			"0","2","","", "","","", "Created By",""),
	array ("created_by_id","",		"0","2","","", "","","", "Created By ID",""),
	array ("created_by_role","",		"0","2","","", "","","", "Created By Role",""),
	array ("session_id","",			"0","2","","", "","","",	"Session ID",""),
	array ("session_ip","",			"0","2","","", "","","", 	"Session IP",""),

	array ("name","",			"3","1","u","", "","","",	"Category Name",""),
	array ("fullname","",			"4","1","","", "categories","CONCAT(category_fullname, '^', name)","", 			"Fullname",""),
	array ("fullname_id","",		"4","1","","", "categories","CONCAT(category_fullname_id, id, ':', name, '^')","", 	"Fullname ID",""),

	array ("category_id","",		"1","2","","", "","","",	"Parent ID",""),
	array ("category_name","",		"1","1","","", "","","", 	"Parent Name",""),
	array ("category_fullname","",		"1","1","","", "","","", 	"Parent Full Name",""),
	array ("category_fullname_id","",	"1","1","","", "","","", 	"Parent Full Name ID",""),
	array ("category_level","",		"1","2","","", "","","", 	"Parent Level",""),
	array ("category_category_id","",	"1","2","","", "","","", 	"Parent Category ID",""),
	array ("category_root_id","",		"1","2","","", "","","", 	"Root ID",""),
	array ("category_root_name","",		"1","1","","", "","","", 	"Root Name",""),

	array ("level","",			"4","2","","", "categories","category_level+1","", "Level",""),
	array ("root_id","",			"4","2","","", "categories","IF(category_category_id=0,category_id,category_root_id)","", 	"Root ID",""),
	array ("root_name","",			"4","2","","", "categories","IF(category_category_id=0,category_name,category_root_name)","", 	"Root Name",""),
);
$subcategories_def = $categories_def; //  
$age_groups_def = $categories_def; //  

// ----------------------------

$voicemaps_def = array // 
(
	array ("id","",				"0","2","","", "","","", 	"ID",""),
	array ("created_on","",			"0","3","","", "","","", 	"Created On",""),
	array ("created_by","",			"0","2","","", "","","", 	"Created By",""),
	array ("created_by_id","",		"0","2","","", "","","", 	"Created By ID",""),
	array ("created_by_role","",		"0","2","","", "","","", 	"Created By Role",""),
	array ("session_id","",			"0","2","","", "","","",	"Session ID",""),
	array ("session_ip","",			"0","2","","", "","","", 	"Session IP",""),

	array ("k","",				"3","2","","",  "","","", 	"Key",""),
	array ("dst_id","",			"3","2","m","f", "","","", 	"Destination ID",""),
	array ("dst_name","",			"3","1","","",   "","","", 	"Destination",""),
	array ("dst_type","",			"3","2","","",   "","","", 	"Destination Type",""),

	array ("voiceprompt_id","",		"3","2","m","f", "","","",	"VoicePrompt ID",""), 
	array ("voiceprompt_name","",		"3","1","","", "","","",	"VoicePrompt",""), 
	array ("voiceprompt_type","",		"3","2","","", "","","",	"VoicePrompt Type",""), 
);

$voiceumaps_def = array // 
(
	array ("id","",				"0","2","","", "","","", 	"ID",""),
	array ("voiceprompt_id","",		"3","2","m","", "","","",	"VoicePrompt ID",""), 
);

$voiceprompts_def = array // 
(
	array ("id","",				"0","2","","", "","","", 	"ID",""),
	array ("created_on","",			"0","3","","", "","","", 	"Created On",""),
	array ("created_by","",			"0","2","","", "","","", 	"Created By",""),
	array ("created_by_id","",		"0","2","","", "","","", 	"Created By ID",""),
	array ("created_by_role","",		"0","2","","", "","","", 	"Created By Role",""),
	array ("session_id","",			"0","2","","", "","","",	"Session ID",""),
	array ("session_ip","",			"0","2","","", "","","", 	"Session IP",""),

	array ("name","",			"3","2","u","", "","","", 	"Name",""),
	array ("type","",			"3","2","m","", "","","",	"Type",""), 
	
	array ("voicefile_ids","",		"4","2","","",	"voicefiles","GROUP_CONCAT(CONCAT('vapps/',file_id) ORDER BY pos)","", 	"Voice File IDs",""),
	array ("voicefile_names","",		"4","1","","",	"voicefiles","GROUP_CONCAT(file_name)","", "Voice File",""),
	array ("voicefile_duration","",		"4","5","","", 	"voicefiles","SUM(file_duration)","", 	"Voice Duration",""),
	array ("voicefile_concat","",		"4","1","","",	"voicefiles","GROUP_CONCAT(concat('voiceapps/',file_id) ORDER BY pos SEPARATOR '&')","", "Voice File",""),

	array ("exten","",			"3","2","","", 	"","","", 	"Extension",""),
	array ("dtmfmaxlen","",			"3","4","","", 	"","","", 	"DTMF Max Len",""),
	array ("recmaxlen","",			"3","4","","", 	"","","", 	"Recording Max Len",""),
	array ("api","",			"3","2","","", 	"","","", 	"API",""),

	array ("lvl","",			"1","2","","", 	"","","", 	"LVL",""),
	
);
$dst_def = $voiceprompts_def;
$exit_def = $voiceprompts_def;

$voicefiles_def = array // 
(
	array ("id","",				"1","2","","", "","","", 	"ID",""),
	array ("created_on","",			"0","3","","", "","","", 	"Created On",""),
	array ("created_by","",			"0","2","","", "","","", 	"Created By",""),
	array ("created_by_id","",		"0","2","","", "","","",	 "Created By ID",""),
	array ("created_by_role","",		"0","2","","", "","","", 	"Created By Role",""),
	array ("session_id","",			"0","2","","", "","","",	"Session ID",""),
	array ("session_ip","",			"0","2","","", "","","", 	"Session IP",""),

	array ("file_id","",			"1","2","m","f", "","","", 	"File ID",""),
	array ("file_name","",			"1","2","","", "","","", 	"Name",""),
	array ("file_mime","",			"1","2","","",	"","","", 	"Mime",""),
	array ("file_size","",			"1","2","","", 	"","","", 	"Size",""),
	array ("file_uploadstatus","",		"1","2","","", 	"","","", 	"Upload Status",""),
	array ("file_movestatus","",		"1","2","","", 	"","","", 	"Move Status",""),
	array ("file_channels","",		"1","2","","", 	"","","", 	"Channels",""),
	array ("file_sample_rate","",		"1","2","","", 	"","","", 	"Sample Rate",""),
	array ("file_duration","",		"1","2","","", 	"","","", 	"Duration",""),

	array ("pos","i_",			"3","2","m","", "","","",	"Position",""), 
	array ("source","",			"1","2","m","", "","","",	"Source",""), 
	array ("source_id","",			"3","2","m","f", "","","",	"Source ID",""), // on unlink value will be captured in audit trail
);
$moh_def = $voicefiles_def;

$attachments_def = array // 
(
	array ("id","",				"1","2","","", "","","", 	"ID",""),
	array ("created_on","",			"0","3","","", "","","", 	"Created On",""),
	array ("created_by","",			"0","2","","", "","","", 	"Created By",""),
	array ("created_by_id","",		"0","2","","", "","","",	 "Created By ID",""),
	array ("created_by_role","",		"0","2","","", "","","", 	"Created By Role",""),
	
	array ("file_id","",			"1","2","m","f", "","","", 	"File ID",""),
	array ("file_name","",			"1","2","","", "","","", 	"Name",""),
	array ("file_mime","",			"1","2","","",	"","","", 	"Mime",""),
	array ("file_size","",			"1","2","","", 	"","","", 	"Size",""),
	array ("file_uploadstatus","",		"1","2","","", 	"","","", 	"Upload Status",""),
	array ("file_movestatus","",		"1","2","","", 	"","","", 	"Move Status",""),

	array ("pos","i_",			"3","2","","", "","","",	"Position",""), 
	array ("case_id","",			"3","2","","f", "","","",	"Case ID",""),
	//array ("source","",			"1","2","","", "","","",	"Source",""), 
	//array ("source_id","",		"1","2","","f", "","","",	"Source",""), 
	array ("is_delete","",			"3","2","","", "","0","",	"Is Deleted",""),		
);

// ----------------------------

$files_def = array   
(
	array ("id","",				"1","2","","", "","","",	"ID",""),
	array ("created_on","",			"0","3","","", "","","",	"Created On",""),
	array ("created_by","",			"0","2","","", "","","",	"Created By",""),
	array ("created_by_id","",		"0","2","","f", "","","",	"Created By ID",""),
	array ("created_by_role","",		"0","2","","", "","","", 	"Created By Role",""),
	array ("session_id","",			"0","2","","", "","","",	"Session ID",""),
	array ("session_ip","",			"0","2","","", "","","", 	"Session IP",""),

	array ("name","",			"1","1","","", "","","",	"",""), 
	array ("mime","",			"1","1","","", "","","",	"",""),
	array ("size","",			"1","5","","", "","","",	"",""),
	array ("uploadstatus","",		"1","2","","", "","","",	"",""),
	array ("movestatus","",			"1","2","","", "","","",	"",""),

	array ("channels","",			"1","2","","", "","","",	"",""),
	array ("sample_rate","",		"1","2","","", "","","",	"",""),
	array ("duration","",			"1","2","","", "","","",	"",""),

	array ("batch_id","",			"1","2","","", "","","",	"",""),
);
$vfiles_def = $files_def;
$csv_def = $files_def;

// ----------------------------

$calls_def = array // SELECT phone, hangup_reason, hangup_status
(
	array ("uniqueid","",			"0","2","","",   "","","",   "ID",""), 
        array ("chan_ts","",			"0","3","","",   "","","",   "Date","d M Y H:i:s"),
        array ("context","",			"0","2","","",   "","","",   "",""),
        array ("context_masq","",		"0","2","","",   "","","",   "",""),
        array ("trunk","",			"0","2","","",   "","","",   "Trunk DID",""),
        array ("phone","",			"0","1","","",   "","","",   "Phone",""),  
        array ("usr","",			"0","2","","",   "","","",   "Extension",""), 
        array ("ring_time","",			"0","4","","",   "","","",   "",""),  
        array ("wait_time","",			"0","4","","",   "","","",   "",""),  
        array ("queue_time","",			"0","4","","",   "","","",   "",""),  
        array ("wait_time_tot","",		"0","4","","",   "","","",   "Wait Time",""),  
        array ("talk_time","",			"0","4","","",   "","","",   "Talk Time",""),  
        array ("hangup_reason","",		"0","2","","",   "","","",   "Hangup By",""),  
        array ("hangup_status","",		"0","2","","",   "","","",   "Hangup Status","::hangup_status:0:1"),  
        array ("sla_wait_target","",		"0","2","","",   "","","",   "",""), 
        array ("sla_wait","sla_wait_band",	"0","2","","",   "","","",   "SLA Band","::sla:0:1:"), 
        array ("sla_hold","sla_hold_band",	"0","2","","",   "","","",   "SLA Band","::sla:0:1:"), 
        array ("hr","",				"0","2","","",   "","","",   "Hour",":d:dmyh:0: "), 
        array ("dt","",				"0","2","","",   "","","",   "Date",":d:dmy:0: "), 
        array ("wk","",				"0","2","","",   "","","",   "Week",":d:dmy:0: "), 
        array ("mn","",				"0","2","","",   "","","",   "Month",":d:my:0: "), 
        array ("yr","",				"0","2","","",   "","","",   "Year",":d:y:0: "), 
        array ("vector","",			"0","2","","",   "","","",   "Direction","::vector:0:1:"),  
        array ("chan_status_masq","",		"0","2","","",   "","","",   "",""),  
        array ("exten","",			"0","2","","",   "","","",   "",""),  
        array ("branch","",			"0","2","","",   "","","",   "Branch",""),  
        array ("category","",			"0","2","","",   "","","",   "Category",""),  
        array ("uid2","",			"0","2","","",   "","","",   "UID2",""),  
        array ("hold_time","",			"0","2","","",   "","","",   "Hold Time",""),  
        array ("hour","",			"0","2","","",   "","","",   "Hour",""), 
	array ("cid_name","",			"0","2","","",   "","","",   "CID",""), 
	array ("user_id","",			"3","4","","",   "","","",   "User ID",""),
	array ("user_name","",			"3","2","","",   "","","",   "Username",""),
	array ("qa_done","",			"3","2","","",   "","","",   "QA Done",""), 
	array ("fca_dt","",			"0","2","","",   "","","",   "First Call UID",""), // nb if first call then fca_dt=NULL
	// todo: first call agent
);
$calls_csv = array ("uniqueid","chan_ts","vector","trunk","phone","usr","wait_time_tot","talk_time","hangup_reason","hangup_status");
$locals_def = $calls_def; 

$chanss_def = array // SELECT phone, hangup_reason, hangup_status
(
	array ("uniqueid","",			"0","2","","",   "","","",   "ID",""), 
        array ("chan_ts","",			"0","3","","",   "","","",   "Date","d M Y H:m"),  
        array ("usr","",			"0","2","","",   "","","",   "Extension",""), 

        array ("state_hangup","",		"0","2","","",   "","","",   "End Time",""),  
	array ("last_call","",			"0","2","","",   "","","",   "Last Call",""),  
        array ("occupied","",			"0","2","","",   "","","",   "Occupied",""),  
        array ("occupancy","",			"0","2","","",   "","","",   "Occupancy",""),  
        array ("available","",			"0","2","","",   "","","",   "Available",""),  
        array ("availability","",		"0","2","","",   "","","",   "Availability",""),  
        
        array ("yr","",				"0","2","","",   "","","",   "Year",":d:y:0: "),      
        array ("mn","",				"0","2","","",   "","","",   "Month",":d:my:0: "), 
        array ("wk","",				"0","2","","",   "","","",   "Week",":d:dmy:0: "), 
        array ("dt","",				"0","2","","",   "","","",   "Date",":d:dmy:0: "), 
        array ("hr","",				"0","2","","",   "","","",   "DateHour",":d:dmyh:0: "), 
	array ("hour","",			"0","2","","",   "","","",   "Hour",""), 
);

// updated_on | _ivr_count | _ivr_avg_time | _ivr_min_time | _ivr_max_time | _ab_count | _ab_avg_queue_time | _ab_min_queue_time | _ab_max_queue_time | _ans_count | _ans_avg_queue_time | _ans_min_queue_time | _ans_max_queue_time | _ans_avg_talk_time | _ans_min_talk_time | _ans_max_talk_time | _sla_wait_target | _sla_hold_target | _sla_wait | _sla_hold | _hold_count | _avg_hold | _hold_min | _hold_max
$today_def = array
(
	array ("id","",				"1","2","","", "","","",	"ID",""),
	array ("updated_on","",			"0","3","","", "","","",	"Created On",""),

	array ("_ivr_count","",			"0","4","","", "","","",	"",""), 
	array ("_ivr_avg_time","",			"0","4","","", "","","",	"",""),
	array ("_ivr_min_time","",			"0","4","","", "","","",	"",""),
	array ("_ivr_max_time","",			"0","4","","", "","","",	"",""), 
	array ("_ab_count","",			"0","4","","", "","","",	"",""),
	array ("_ab_avg_queue_time","",			"0","4","","", "","","",	"",""),
	array ("_ab_min_queue_time","",			"0","4","","", "","","",	"",""), 
	array ("_ab_max_queue_time","",			"0","4","","", "","","",	"",""),
	array ("_ans_count","",			"0","4","","", "","","",	"",""),
	array ("_ans_avg_queue_time","",			"0","4","","", "","","",	"",""), 
	array ("_ans_min_queue_time","",			"0","4","","", "","","",	"",""),
	array ("_ans_max_queue_time","",			"0","4","","", "","","",	"",""),
	array ("_ans_avg_talk_time","",			"0","4","","", "","","",	"",""), 
	array ("_ans_min_talk_time","",			"0","4","","", "","","",	"",""),
	array ("_ans_max_talk_time","",			"0","4","","", "","","",	"",""),
	array ("_sla_wait_target","",			"0","4","","", "","","",	"",""), 
	array ("_sla_hold_target","",			"0","4","","", "","","",	"",""),
	array ("_sla_wait","",			"0","4","","", "","","",	"",""),
	array ("_sla_wait_count","",			"0","4","","", "","","",	"",""),
	array ("_sla_hold","",			"0","4","","", "","","",	"",""), 
	array ("_hold_count","",			"0","4","","", "","","",	"",""),
	array ("_avg_hold","",			"0","4","","", "","","",	"",""),
	array ("_hold_min","",			"0","4","","", "","","",	"",""), 
	array ("_hold_max","",			"0","4","","", "","","",	"",""),
);

// ------------------------------

$reporters_def = array 
(
	array ("id","",				"0","2","","", "","","",	"",""),
	array ("created_on","",			"0","3","","", "","","",	"",""),
	array ("created_by","",			"0","2","","", "","","",	"",""),
	array ("created_by_id","",		"0","2","","", "","","",	"",""),
	array ("created_by_role","",		"0","2","","", "","","", 	"Created By Role",""),
	
	array ("contact_id","",			"3","1","m","f", "","","",	"Contact ID",""),
	array ("contact_fullname","",		"3","1","","", "","","",	"Fullname",""),
	array ("contact_fname","",		"3","1","m","", "","","",	"First Name",""),
	array ("contact_lname","",		"3","1","","",  "","","",	"Last Name",""),
	array ("contact_phone","",		"3","2","","p", "","","",	"Phone",""),
	array ("contact_email","",		"3","2","","", "","","",	"Email",""),
	array ("contact_phone2","",		"3","2","","", "","","",	"Alternative Contact",""),
	array ("contact_dob","",		"3","2","","", "","","",	"Date of Birth",""),
	array ("contact_age","",		"3","2","","", "","","",	"Age",""),
	array ("contact_age_group_id","",	"3","2","","f", "","","",	"Age Group ID",""),
	array ("contact_age_group","",		"3","2","","", "","","",	"Age Group",""),
	array ("contact_sex_id","",		"3","2","","f", "","","",	"Gender ID",""),
	array ("contact_sex","",		"3","2","","", "","","",	"Gender",""),
	array ("contact_national_id_type_id","","3","2","","", "","","",	"ID Type",""),
	array ("contact_national_id_type","",	"3","2","","", "","","",	"ID Type",""),
	array ("contact_national_id","",	"3","2","","", "","","",	"National ID",""),
	array ("contact_address","",		"3","1","","", "","","",	"Address",""),
	array ("contact_residence","",		"3","2","","", "","","",	"Residence",""),
	array ("contact_nationality_id","",	"3","2","","f", "","","",	"Nationality ID",""),
	array ("contact_nationality","",	"3","2","","", "","","",	"Nationality",""),
	array ("contact_tribe_id","",		"3","2","","f", "","","",	"Tribe ID",""),
	array ("contact_tribe","",		"3","2","","", "","","",	"Tribe",""),
	array ("contact_lang_id","",		"3","2","","f", "","","",	"Language ID",""),
	array ("contact_lang","",		"3","2","","", "","","",	"Language",""),
	array ("contact_location_id","",	"3","2","","f", "","","",	"Location ID",""),
	array ("contact_location","",		"3","2","","", "","","",	"Location",""),
	array ("contact_landmark","",		"3","2","","", "","","",	"Nearest Landmark",""),
	array ("contact_location_0","",		"3","2","","", "","","",	"Location Level 0",""),
	array ("contact_location_1","",		"3","2","","", "","","",	"Location Level 1",""),
	array ("contact_location_2","",		"3","2","","", "","","",	"Location Level 2",""),
	array ("contact_location_3","",		"3","2","","", "","","",	"Location Level 3",""),
	array ("contact_location_4","",		"3","2","","", "","","",	"Location Level 4",""),
	array ("contact_location_5","",		"3","2","","", "","","",	"Location Level 5",""),
	array ("contact_location_6","",		"3","2","","", "","","",	"Location Level 6",""),
	
	array ("src","",			"1","2","m","F","","","", 	"Channel",""),
	array ("src_uid","",			"1","2","","F",	"","","", 	"Channel Uniqueid",""),
	array ("src_address","",		"1","2","","",	"","","", 	"Channel Address",""),
	array ("src_vector","",			"1","2","","",	"","","", 	"Channel Direction",""),
);

$perpetrators_def = array 
(
	array ("id","",				"0","2","","", "","","",	"",""),
	array ("created_on","",			"0","3","","", "","","",	"",""),
	array ("created_by","",			"0","2","","", "","","",	"",""),
	array ("created_by_id","",		"0","2","","", "","","",	"",""),
	array ("created_by_role","",		"0","2","","", "","","", 	"Created By Role",""),
	
	array ("contact_id","",			"3","1","m","f", "","","",	"Contact ID",""),
	array ("contact_fullname","",		"3","1","","", "","","",	"Perp Fullname",""),
	array ("contact_fname","",		"3","1","m","", "","","",	"First Name",""),
	array ("contact_lname","",		"3","1","","",  "","","",	"Last Name",""),
	array ("contact_phone","",		"3","2","","p", "","","",	"Perp Phone",""), // todo: regex
	array ("contact_email","",		"3","2","","", "","","",	"Perp Email",""),
	array ("contact_phone2","",		"3","2","","", "","","",	"Perp Alternative Contact",""),
	array ("contact_dob","",		"3","2","","", "","","",	"Perp Date of Birth",""),
	array ("contact_age","",		"3","2","","", "","","",	"Perp Age",""),
	array ("contact_age_group_id","",	"3","2","","f", "","","",	"Age Group ID",""),
	array ("contact_age_group","",		"3","2","","", "","","",	"Perp Age Group",""),
	array ("contact_sex_id","",		"3","2","","f", "","","",	"Gender ID",""),
	array ("contact_sex","",		"3","2","","", "","","",	"Perp Gender",""),
	array ("contact_national_id_type_id","","3","2","","", "","","",	"ID Type",""),
	array ("contact_national_id_type","",	"3","2","","", "","","",	"Perp ID Type",""),
	array ("contact_national_id","",	"3","2","","", "","","",	"Perp National ID",""),
	array ("contact_address","",		"3","1","","", "","","",	"Perp Address",""),
	array ("contact_residence","",		"3","2","","", "","","",	"Perp Residence",""),
	array ("contact_nationality_id","",	"3","2","","f", "","","",	"Nationality ID",""),
	array ("contact_nationality","",	"3","2","","", "","","",	"Perp Nationality",""),
	array ("contact_tribe_id","",		"3","2","","f", "","","",	"Tribe ID",""),
	array ("contact_tribe","",		"3","2","","", "","","",	"Perp Tribe",""),
	array ("contact_lang_id","",		"3","2","","f", "","","",	"Language ID",""),
	array ("contact_lang","",		"3","2","","", "","","",	"Perp Language",""),
	array ("contact_location_id","",	"3","2","","f", "","","",	"Location ID",""),
	array ("contact_location","",		"3","2","","", "","","",	"Perp Location",""),
	array ("contact_landmark","",		"3","2","","", "","","",	"Perp Nearest Landmark",""),
	array ("contact_location_0","",		"3","2","","", "","","",	"Perp Region",""),
	array ("contact_location_1","",		"3","2","","", "","","",	"Perp District",""),
	array ("contact_location_2","",		"3","2","","", "","","",	"Perp County",""),
	array ("contact_location_3","",		"3","2","","", "","","",	"Perp SubCounty",""),
	array ("contact_location_4","",		"3","2","","", "","","",	"Perp Parish",""),
	array ("contact_location_5","",		"3","2","","", "","","",	"Perp Village",""),
	array ("contact_location_6","",		"3","2","","", "","","",	"Perp Constituency",""),
	
	array ("task_id","",			"1","2","","f", "","","",	"Task ID",""),
	array ("case_id","",			"1","2","M","f", "","","",	"Case ID",""),  // link once
		
	array ("relationship_id","",		"3","2","","f", "","","",	"Perp Relationship with Client ID",""),
	array ("relationship","",		"3","2","","", "","","",	"Perp Relationship with Client",""),
	array ("shareshome_id","",		"3","2","","f", "","","",	"Shares Home ID",""),
	array ("shareshome","",			"3","2","","", "","","",	"Perp Shares Home",""),
	array ("marital_id","",			"3","2","","f", "","","",	"Marital Status ID",""),
	array ("marital","",			"3","2","","", "","","",	"Perp Marital Status",""),
	array ("health_id","",			"3","2","","f", "","","",	"Health Status ID",""),
	array ("health","",			"3","2","","", "","","",	"Perp Health Status",""),
	array ("employment_id","",		"3","2","","f", "","","",	"Employment Status ID",""),
	array ("employment","",			"3","2","","", "","","",	"Perp Employment Status",""),
	array ("guardian_fullname","",		"3","1","","", "","","",	"Perp Guardian Name",""),
	array ("notes","",			"3","1","","", "","","",	"Perp Additional Details",""),	
	
	array ("src_uid","",			"1","2","","F",	"","","", 	"Channel Uniqueid",""),	
	
	array ("is_delete","",			"3","2","","", "","0","",	"Client Is Deleted",""),		
);

$clients_def = array 
(
	array ("id","",				"0","2","","", "","","",	"",""),
	array ("created_on","",			"0","3","","", "","","",	"",""),
	array ("created_by","",			"0","2","","", "","","",	"",""),
	array ("created_by_id","",		"0","2","","", "","","",	"",""),
	array ("created_by_role","",		"0","2","","", "","","", 	"Created By Role",""),
	
	array ("contact_id","",			"3","1","m","f", "","","",	"Contact ID",""),
	array ("contact_fullname","",		"3","1","","", "","","",	"Client Fullname",""),
	array ("contact_fname","",		"3","1","m","", "","","",	"First Name",""),
	array ("contact_lname","",		"3","1","","",  "","","",	"Last Name",""),
	array ("contact_phone","",		"3","2","","p", "","","",	"Client Phone",""), // todo: regex
	array ("contact_email","",		"3","2","","", "","","",	"Client Email",""),
	array ("contact_phone2","",		"3","2","","", "","","",	"Client Alternative Contact",""),
	array ("contact_dob","",		"3","2","","", "","","",	"Client Date of Birth",""),
	array ("contact_age","",		"3","2","","", "","","",	"Client Age",""),
	array ("contact_age_group_id","",	"3","2","","f", "","","",	"Age Group ID",""),
	array ("contact_age_group","",		"3","2","","", "","","",	"Client Age Group",""),
	array ("contact_sex_id","",		"3","2","","f", "","","",	"Gender ID",""),
	array ("contact_sex","",		"3","2","","", "","","",	"Client Gender",""),
	array ("contact_national_id_type_id","","3","2","","", "","","",	"ID Type ID",""),
	array ("contact_national_id_type","",	"3","2","","", "","","",	"Client ID Type",""),
	array ("contact_national_id","",	"3","2","","", "","","",	"Client National ID",""),
	array ("contact_address","",		"3","1","","", "","","",	"Client Address",""),
	array ("contact_residence","",		"3","2","","", "","","",	"Client Residence",""),
	array ("contact_nationality_id","",	"3","2","","f", "","","",	"Nationality ID",""),
	array ("contact_nationality","",	"3","2","","", "","","",	"Client Nationality",""),
	array ("contact_tribe_id","",		"3","2","","f", "","","",	"Tribe ID",""),
	array ("contact_tribe","",		"3","2","","", "","","",	"Client Tribe",""),
	array ("contact_lang_id","",		"3","2","","f", "","","",	"Language ID",""),
	array ("contact_lang","",		"3","2","","", "","","",	"Client Language",""),
	array ("contact_location_id","",	"3","2","","f", "","","",	"Location ID",""),
	array ("contact_location","",		"3","2","","", "","","",	"Client Location",""),
	array ("contact_landmark","",		"3","2","","", "","","",	"Client Nearest Landmark",""),
	array ("contact_location_0","",		"3","2","","", "","","",	"Client Region",""),
	array ("contact_location_1","",		"3","2","","", "","","",	"Client District",""),
	array ("contact_location_2","",		"3","2","","", "","","",	"Client County",""),
	array ("contact_location_3","",		"3","2","","", "","","",	"Client SubCounty",""),
	array ("contact_location_4","",		"3","2","","", "","","",	"Client Parish",""),
	array ("contact_location_5","",		"3","2","","", "","","",	"Client Village",""),
	array ("contact_location_6","",		"3","2","","", "","","",	"Client Constituency",""),

	array ("task_id","",			"1","2","","f", "","","",	"Task ID",""),
	array ("case_id","",			"1","2","M","f", "","","",	"Case ID",""),		// link once
	array ("category_id","",		"3","2","","f", "","","",	"Category ID",""), 	// todo: multiple categories
	array ("category","",			"3","2","","", "","","",	"Category",""),	
	array ("gbv_related","",		"3","2","","", "","","",	"GBV Related",""),	// if not set by set automaticaly if age>17
	
	array ("relationship_id","",		"3","2","","f", "","","",	"Report Relationship to Client ID",""),
	array ("relationship","",		"3","2","","", "","","",	"Report Relationship to Client",""),
	array ("relationship_comment","",	"3","1","","", "","","",	"Relationship Comment",""),

	array ("is_disabled","",		"3","2","","", "","","",	"Client IsDisability",""),
	array ("disability_id","",		"3","2","","f", "","","",	"Disability ID",""),
	array ("disability","",			"3","2","","", "","","",	"Client Disability",""),
	array ("health_id","",			"3","2","","f", "","","",	"Health Status ID",""),
	array ("health","",			"3","2","","", "","","",	"Client Health Status",""),
	array ("hiv_id","",			"3","2","","f", "","","",	"HIV ID",""),
	array ("hiv","",			"3","2","","", "","","",	"Client HIV",""),
	array ("special_services","",		"3","1","","", "","","",	"Client Registered for Special Services",""),

	array ("in_school","",			"3","2","","", "","","",	"Client In School",""),
	array ("school_type_id","",		"3","2","","f", "","","",	"School Type ID",""),
	array ("school_type","",		"3","2","","", "","","",	"Client School Type",""),
	array ("school_level_id","",		"3","2","","f", "","","",	"School Level ID",""),
	array ("school_level","",		"3","2","","", "","","",	"Client School Level",""),
	array ("school_attendance","",		"3","1","","", "","","",	"Client School Attendance",""),	
	array ("school_name","",		"3","1","","", "","","",	"Client School Name",""),	
	array ("school_address","",		"3","1","","", "","","",	"Client School Address",""),	
	array ("not_in_school_reason","",	"3","1","","", "","","",	"Client Not In School Reason",""),	
	
	array ("is_married","",			"3","2","","", "","","",	"Client Is Married",""),
	array ("marital_id","",			"3","2","","f", "","","",	"Marital Status ID",""),
	array ("marital","",			"3","2","","", "","","",	"Client Marital Status",""),
	array ("spouse_profession_id","",	"3","2","","f", "","","",	"Spouse Profession ID",""),
	array ("spouse_profession","",		"3","2","","", "","","",	"Client Spouse Profession",""),
	array ("spouse_fullname","",		"3","1","","", "","","",	"Client Spouse Fullname",""),

	array ("is_guardian_known","",		"3","2","","", "","","",	"Client Is Guardian Known?",""),
	array ("guardian_marital_id","",	"3","2","","f", "","","",	"Guardian's Marital Status ID",""),
	array ("guardian_marital","",		"3","2","","", "","","",	"Client Guardian's Marital Status",""),
	array ("guardian_fullname","",		"3","1","","", "","","",	"Client Guardian's Name",""),
	array ("guardian_national_id","",	"3","1","","", "","","",	"Client Guardian's National ID",""),

	array ("household_id","",		"3","2","","f", "","","",	"Household Type ID",""),
	array ("household","",			"3","2","","", "","","",	"Client Household Type",""),	
	array ("household_adults","",		"3","4","","", "","","",	"Client Number of Adults in Household",""),	
	array ("household_head_occupation_id","","3","2","","f", "","","",	"Client Occupation of Household Head ID",""),	
	array ("household_head_occupation","",	"3","2","","", "","","",	"Client Occupation of Household Head",""),	
	
	array ("src_uid","",			"1","2","","F",	"","","", 	"Channel Uniqueid",""),	
	
	array ("is_disabled_refered","",	"3","2","","", "","","",	"Refered for Special services",""),	
	array ("is_disabled_referals","",	"4","1","","",	"referals","GROUP_CONCAT(DISTINCT CONCAT(category_id,':',category_name))","",	"Referals",""),	
	
	array ("not_in_school_id","",		"3","2","","f", "","","",	"Reason for not attending School ID",""),
	array ("not_in_school","",		"3","2","","", "","","",	"Client Reason for not attending School",""),
	
	array ("is_delete","",			"3","2","","", "","0","",	"Client Is Deleted",""),
	array ("is_reporter","",		"1","2","","", "","","",	"Is Reporter",""),

);

$cases_def = array 
(
	array ("id","",				"0","2","","", "","","",	"CASE ID",""),
	array ("created_on","",			"0","3","","", "","","",	"Created On","d M Y H:i:s"),
	array ("created_by","",			"0","2","","", "","","",	"Created By",""),
	array ("created_by_id","",		"0","2","","", "","","",	"Created By ID",""),
	array ("created_by_role","",		"0","2","","", "","","", 	"Created By Role","::role:0:1"),
			
	array ("case_category_id","",		"3","2","","f", "","","", 	"Case Category ID",""),	
	array ("case_category","",		"3","2","","", "","","", 	"Case Category",""),
	array ("case_category_root_id","",	"3","2","","", "","","",	"Case Type","::case_type:0:1"),
	array ("case_category_fullname_id","",	"3","2","","", "","","",	"Case Category Fullname ID",""),
	array ("gbv_related","",		"3","2","","", "","","", 	"GBV Related","::yesno:0:1"),
	array ("cat_0","",			"3","2","","", "","","",	"Main Category",""),
	array ("cat_1","",			"3","2","","", "","","",	"Sub Category",""),
	array ("cat_2","",			"3","2","","", "","","",	"Sub Category 2",""),
	array ("cat_3","",			"3","2","","", "","","",	"Sub Category 3",""),
	array ("cat_4","",			"3","2","","", "","","",	"Sub Category 4",""),
	
	array ("knowabout116_id","",		"3","2","","f", "","","",	"Know about 116 Id",""),
	array ("knowabout116","",		"3","2","","",  "","","",	"Know about 116",""),					
	array ("justice_id","",			"3","2","","f",	"","","", 	"Justice ID",""), 
	array ("justice","",			"3","2","","",	"","","", 	"Justice",""),
	array ("assessment_id","",		"3","2","","f",	"","","", 	"Assessment ID",""),
	array ("assessment","",			"3","2","","",	"","","", 	"Assessment",""),
				
	array ("escalatedby_id","",		"3","2","","f",	"","","",	"Escalated By ID",""),
	array ("escalatedto_id","",		"3","2","","f",	"","","",	"Escalated To ID",""),
	array ("escalatedto","",		"3","2","","",	"","","", 	"Escalated To",""),	
	array ("escalatedto_role","",		"3","2","","",	"","","", 	"Escalated To Role",""),	
	array ("assigned_to_id","",		"3","2","","",	"","","", 	"Assigned To ID",""),	

	array ("priority","",			"3","2","","",	"","","", 	"Priority","::case_priority:0:1"), 
	array ("status","",			"3","2","","",	"","","", 	"Status","::case_status:0:1"),
	array ("police_ob_no","",		"3","2","","",  "","","",	"Police Ref Number",""),

	array ("services","",			"4","1","","",	"services","GROUP_CONCAT(DISTINCT CONCAT(category_id,':',category_name))","",	"Services Offered",""),
	array ("referals","",			"4","1","","",	"referals","GROUP_CONCAT(DISTINCT CONCAT(category_id,':',category_name))","",	"Referals",""),			

	array ("narrative","",			"3","1","","",	"","","", 	"Narrative",""), 		
	array ("plan","",			"3","1","","",	"","","", 	"Plan",""), 	

	array ("is_medical_exam_done","",	"3","2","","",  "","","",	"Is Medical Exam Done?","::yesno:0:1"),
	array ("is_incidence_reported","",	"3","2","","",  "","","",	"Is Incidence Reported?","::yesno:0:1"),
	array ("is_hiv_tested","",		"3","2","","",  "","","",	"Is HIV Tested?","::charge:0:1"),
	array ("is_pep_given","",		"3","2","","",  "","","",	"Is PEP Given?","::yesno:0:1"),
	array ("is_art_given","",		"3","2","","",  "","","",	"Is ART Given?","::yesno:0:1"),
	array ("is_ecp_given","",		"3","2","","",  "","","",	"Is ECP Given?","::yesno:0:1"),
	array ("is_counselling_given","",	"3","2","","",  "","","",	"Is Counselling Given?","::yesno:0:1"),
	
	array ("incidence_when","",		"3","3","","", "","","",	"Date of Incident","d M Y H:i:s"),
	array ("incidence_location","",		"3","1","","", "","","",	"Incidence Reported Where",""),
	array ("hiv_test_result","",		"3","2","","", "","","",	"HIV Test Result",""),
	array ("counseling_org","",		"3","2","","", "","","",	"Counseling Organisation",""),	
	array ("incidence_ref_no","",		"3","1","","", "","","",	"Incidence Police Ref. No.",""),
 
 	array ("src","",			"1","2","","",	"","","", 	"Channel",""),
	array ("src_uid","",			"1","2","","F",	"","","", 	"Channel Uniqueid",""),
	array ("src_address","",		"1","2","","",	"","","", 	"Channel Address",""),
	array ("src_vector","",			"1","2","","",	"","","", 	"Channel Direction",""),

	array ("reporter_id","",		"1","1","","f", "","","",	"Reporter ID",""),
	array ("reporter_contact_id","",	"1","2","","",	"","","",	"Reporter Contact ID",""),
	array ("reporter_fullname","",		"1","1","","",  "","","",	"Reporter Fullname",""),
	array ("reporter_phone","",		"1","2","","",  "","","",	"Reporter Phone",""),
	array ("reporter_email","",		"1","2","","",  "","","",	"Reporter Email",""),
	array ("reporter_phone2","",		"1","2","","",  "","","",	"Reporter Alternative Contact",""),
	array ("reporter_dob","",		"1","2","","",  "","","",	"Reporter Date of Birth",""),
	array ("reporter_age","",		"1","2","","",  "","","",	"Reporter Age",""),
	array ("reporter_age_group","",		"1","2","","",  "","","",	"Reporter Age Group",""),
	array ("reporter_sex","",		"1","2","","",  "","","",	"Reporter Gender",""),
	array ("reporter_national_id","",	"1","2","","",  "","","",	"Reporter National ID",""),
	array ("reporter_nationality","",	"1","2","","",  "","","",	"Reporter Nationality",""),
	array ("reporter_tribe","",		"1","2","","",  "","","",	"Reporter Tribe",""),
	array ("reporter_lang","",		"1","2","","",  "","","",	"Reporter Language",""),
	array ("reporter_landmark","",		"1","2","","",  "","","",	"Reporter Nearest Landmark",""),
	array ("reporter_location","",		"1","2","","",  "","","",	"Reporter Location",""),
	array ("reporter_location_0","",	"1","2","","",  "","","",	"Reporter Region",""),
	array ("reporter_location_1","",	"1","2","","",  "","","",	"Reporter District",""),
	array ("reporter_location_2","",	"1","2","","",  "","","",	"Reporter County",""),
	array ("reporter_location_3","",	"1","2","","",  "","","",	"Reporter Sub County",""),
	array ("reporter_location_4","",	"1","2","","",  "","","",	"Reporter Parish",""),
	array ("reporter_location_5","",	"1","2","","",  "","","",	"Reporter Village",""),
	
	array ("is_reporter_client","",         "4","2","","",  "clients","MAX(IF(is_reporter=1,1,0))","",      "Is Reporter Client?","::yesno:0:1"),
	
	array ("activity_count","",		"4","4","","",	"case_activities","COUNT(id)","", 			"Activity Count",""),
	array ("activity_ids","",		"4","1","","",	"case_activities","GROUP_CONCAT(id)","", 		"Activity IDs",""),
	array ("activity_last_id","",		"4","2","","f",	"case_activities","MAX(IF(disposition_id>0,id,0))","activity_last_id", 	"Last Activity ID",""),
	// array ("disposition_last_id","",	"4","2","","f",	"case_activities","MAX(IF(disposition_id>0,id,0))","disposition_last_id", 	"Last Disposition ID",""),

	array ("activity_on","",		"5","3","","",	"case_activities","created_on","", 			"Last Activity On",""),	
	array ("activity_by","",		"5","2","","",	"case_activities","created_by","", 			"Last Activity By",""),	
	array ("activity_by_id","",		"5","2","","",	"case_activities","created_by_id","", 			"Last Activity By ID",""),	
	array ("activity_by_role","",		"5","2","","",	"case_activities","created_by_role","", 		"Last Activity By Role",""),	
	array ("activity_source","",		"5","2","","",	"case_activities","src","", 				"Last Activity Source",""), 	
	array ("activity_src_uid","",		"5","2","","",	"case_activities","src_uid","", 			"Last Activity Source UID",""), 	
	array ("disposition_id","",		"5","2","","f", "case_activities","disposition_id","",			"Disposition ID",""), 
	array ("disposition","",		"5","2","","",  "case_activities","disposition","",			"Disposition",""),  
	
	array ("final_status","",		"4","2","","",   "cases","IF(status!=2 && escalatedto_id>0,3,status)","",	"Final Status",""),  
	array ("yr","",				"4","2","","",   "cases","UNIX_TIMESTAMP(CONCAT(YEAR(FROM_UNIXTIME(created_on)),'-01-01'))","",   "Year",":d:y:0: "), 
        array ("mn","",				"4","2","","",   "cases","UNIX_TIMESTAMP(CONCAT(YEAR(FROM_UNIXTIME(created_on)),'-',MONTH(FROM_UNIXTIME(created_on)),'-01'))","",   "Month",":d:my:0: "), 
        array ("wk","",				"4","2","","",   "cases","UNIX_TIMESTAMP(DATE(FROM_UNIXTIME(created_on))) - (DAYOFWEEK(FROM_UNIXTIME(created_on))*86400)","",   "Week",":d:dmy:0: "), 
        array ("dt","",				"4","2","","",   "cases","UNIX_TIMESTAMP(DATE(FROM_UNIXTIME(created_on)))","",   "Date",":d:dmy:0: "), 
	array ("hr","",				"4","2","","",   "cases","UNIX_TIMESTAMP(DATE(FROM_UNIXTIME(created_on))) + (HOUR(FROM_UNIXTIME(created_on))*3600)","",   "Hour",":d:dmyh:0: "), 
        array ("h","hour",			"4","2","","",   "cases","HOUR(FROM_UNIXTIME(created_on))","",   "Hour",""), 
);

$followups_def = $cases_def; 

$case_activities_def = array 
(
	array ("id","",				"0","2","","", "","","",	"ID",""),
	array ("created_on","",			"0","3","","", "","","",	"Created On",""),
	array ("created_by","",			"0","2","","", "","","",	"Created By",""),
	array ("created_by_id","",		"0","2","","", "","","",	"Created By ID",""),
	array ("created_by_role","",		"0","2","","", "","","", 	"Created By Role",""),

	array ("case_id","",			"1","2","","",	"","","", 	"Case ID",""), 	
	array ("aub_id","",			"1","2","","",	"","","", 	"Case ID",""), 	
	array ("activity","",			"1","2","","",	"","","", 	"Activity",""), 		
	array ("activity_ref","",		"1","2","","",	"","","", 	"Activity",""), 		
	array ("detail","",			"1","1","","",	"","","", 	"Detail",""), 				
	array ("priority","",			"1","2","","",	"","","", 	"Priority",""), 
	array ("status","",			"1","2","","",	"","","", 	"Status",""), 		
	array ("escalatedto_id","",		"1","2","","f",	"","","",	"Escalated To ID",""),
	array ("escalatedto","",		"1","2","","",	"","","", 	"Escalated To",""),	
	array ("escalatedto_role","",		"1","2","","",	"","","", 	"Escalated To Role",""),
	array ("disposition_id","",		"1","2","","",  "","","",	"Disposition ID",""),  // for case only
	array ("disposition","",		"1","2","","",  "","","",	"Disposition",""),  
				
	array ("src","",			"1","2","","",	"","","", 	"Channel",""),
	array ("src_uid","",			"1","2","","F",	"","","", 	"Channel Uniqueid",""),
	array ("src_address","",		"1","2","","",	"","","", 	"Channel Address",""),
	array ("src_vector","",			"1","2","","",	"","","", 	"Channel Direction",""),

	array ("reporter_id","",		"1","2","","f", "","","",	"Reporter ID",""),
	array ("reporter_contact_id","",	"1","2","","",	"","","",	"Reporter Contact ID",""),
	array ("reporter_fullname","",		"1","1","","",  "","","",	"Reporter Fullname",""),
	array ("reporter_phone","",		"1","2","","",  "","","",	"Reporter Phone",""), // todo: regex
	array ("reporter_email","",		"1","2","","",  "","","",	"Reporter Email",""),
	array ("reporter_phone2","",		"1","2","","",  "","","",	"Reporter Alternative Contact",""),
	array ("reporter_dob","",		"1","2","","",  "","","",	"Reporter Date of Birth",""),
	array ("reporter_age","",		"1","2","","",  "","","",	"Reporter Age",""),
	array ("reporter_age_group","",		"1","2","","",  "","","",	"Reporter Age Group",""),
	array ("reporter_sex","",		"1","2","","",  "","","",	"Reporter Gender",""),
	array ("reporter_national_id","",	"1","2","","",  "","","",	"Reporter National ID",""),
	array ("reporter_nationality","",	"1","2","","",  "","","",	"Reporter Nationality",""),
	array ("reporter_tribe","",		"1","2","","",  "","","",	"Reporter Tribe",""),
	array ("reporter_lang","",		"1","2","","",  "","","",	"Reporter Language",""),
	array ("reporter_landmark","",		"1","2","","",  "","","",	"Reporter Nearest Landmark",""),
	array ("reporter_location_0","",	"1","2","","",  "","","",	"Reporter Region",""),
	array ("reporter_location_1","",	"1","2","","",  "","","",	"Reporter District",""),
	array ("reporter_location_2","",	"1","2","","",  "","","",	"Reporter County",""),
	array ("reporter_location_3","",	"1","2","","",  "","","",	"Reporter Sub County",""),
	array ("reporter_location_4","",	"1","2","","",  "","","",	"Reporter Parish",""),
	array ("reporter_location_5","",	"1","2","","",  "","","",	"Reporter Village",""),
	
	array ("change_count","",		"4","1","","",  "au","COUNT(id)","", 	"Fields Affected",""), 		

	array ("yr","",				"4","2","","",   "case_activities","UNIX_TIMESTAMP(CONCAT(YEAR(FROM_UNIXTIME(created_on)),'-01-01'))","",   "Year",":d:y:0: "), 
        array ("mn","",				"4","2","","",   "case_activities","UNIX_TIMESTAMP(CONCAT(YEAR(FROM_UNIXTIME(created_on)),'-',MONTH(FROM_UNIXTIME(created_on)),'-01'))","",   "Month",":d:my:0: "), 
        array ("wk","",				"4","2","","",   "case_activities","UNIX_TIMESTAMP(DATE(FROM_UNIXTIME(created_on))) - (DAYOFWEEK(FROM_UNIXTIME(created_on))*86400)","",   "Week",":d:dmy:0: "), 
        array ("dt","",				"4","2","","",   "case_activities","UNIX_TIMESTAMP(DATE(FROM_UNIXTIME(created_on)))","",   "Date",":d:dmy:0: "), 
	array ("hr","",				"4","2","","",   "case_activities","UNIX_TIMESTAMP(DATE(FROM_UNIXTIME(created_on))) + (HOUR(FROM_UNIXTIME(created_on))*3600)","",   "Hour",":d:dmyh:0: "), 
        array ("h","",				"4","2","","",   "case_activities","HOUR(FROM_UNIXTIME(created_on))","",   "Hour",""), 
);

$services_def = array 
(
	array ("id","",				"0","2","","", "","","",	"ID",""),
	array ("created_on","",			"0","3","","", "","","",	"Created On",""),
	array ("created_by","",			"0","2","","", "","","",	"Created By",""),
	array ("created_by_id","",		"0","2","","", "","","",	"Created By ID",""),
	array ("created_by_role","",		"0","2","","", "","","", 	"Created By Role",""),

	array ("case_id","",			"1","2","","",	"","","", 	"Case ID",""), 		
	array ("caseupd_id","",			"1","2","","",	"","","", 	"Case Update ID",""), 		
	array ("category_id","",		"1","2","","f",	"","","",	"Service ID",""), 
	array ("category_name","",		"1","2","","",	"","","", 	"Service Offered",""),
	array ("category_fullname","",		"1","2","","",	"","","", 	"Fullname",""),
);

$referals_def = array 
(
	array ("id","",				"0","2","","", "","","",	"ID",""),
	array ("created_on","",			"0","3","","", "","","",	"Created On",""),
	array ("created_by","",			"0","2","","", "","","",	"Created By",""),
	array ("created_by_id","",		"0","2","","", "","","",	"Created By ID",""),
	array ("created_by_role","",		"0","2","","", "","","", 	"Created By Role",""),

	array ("case_id","",			"1","2","","",	"","","", 	"Case ID",""), 		
	array ("caseupd_id","",			"1","2","","",	"","","", 	"Case Update ID",""), 		
	array ("category_id","",		"1","2","","f",	"","","",	"Referal ID",""), 
	array ("category_name","",		"1","2","","",	"","","", 	"Referal",""),
	array ("category_fullname","",		"1","2","","",	"","","", 	"Fullname",""),
);

// ------------------------

$addr_dup = array ("addr","dup","addr","addr", NULL,"id"); 
$otp_dup = array ("otp","dup","addr","addr","expiry",":>now",NULL,"id"); // check if already pending
$otpv_dup = array ("otp","dup","addr","addr","expiry",":>now", "otp","otp", NULL,"id", "addr_id", "addr"); // verify otp
$auth_dup = array ("users","dup","usn","email",NULL, "id","contact_id","contact_fullname"); 
$contact_dup = array ("contacts","dup","email","email",NULL, "id","fullname","role","phone","email"); 

$users_api = array
(
	array ("users","dup","usn","usn","id",":!=:user_id:",NULL,"usn"), // check duplicate usn
	array ("users","params","usn","user_usn"),
	array ("users","dup","id","user_id",NULL,"contact_id"), // get contact_id for user
	// array ("users","try"), // test if will succeed
	array ("contacts",""), 
	array ("contacts","agg4","contacts","", "id","contact_id"),
	array ("users",""),
	array ("users","agg4","contacts","", "id","contact_id") 
);

$contacts_api = array
(
	array ("categories","dup","id","age_group_id",NULL, "id:age_group_id", "fullname:age_group"),
	array ("categories","dup","id","sex_id",NULL, "id:sex_id", "fullname:sex"),
	array ("categories","dup","id","location_id",NULL, "id:location_id", "fullname:location"),
	array ("categories","dup","id","tribe_id",NULL, "id:tribe_id", "fullname:tribe"),
	array ("categories","dup","id","lang_id",NULL, "id:lang_id", "fullname:lang"),
	array ("categories","dup","id","nationality_id",NULL, "id:nationality_id", "fullname:nationality"),
	array ("contacts","caret","location","location_0","location_1","location_2","location_3","location_4","location_5","location_6"), // update cat
	
	array ("contacts",""), // create | update contact
	array ("contacts","agg4","contacts","", "id","contact_id"),

);

$inbound_api = array
(
	array ("campaigns","dup","id",":!=:campaign_id:","name","name",NULL,"name"), // check duplicate
	array ("voiceprompts","dup","id","voiceprompt_id",NULL,"id","name","type"),
	array ("exit","dup","id","exit_id",NULL,"id","name","type"),
	array ("categories","dup","id","category_id",NULL,"id","name","fullname","fullname_id"),
	array ("campaigns",""),
	array ("campaigns","params","source_id","campaign_id","source"," campaign"),
	array ("members","array"),
	array ("moh","array"),
        array ("campaigns","agg4","members","", "campaign_id","campaign_id"),
        array ("campaigns","agg4","moh","", "source_id","campaign_id","source"," campaign"),
);

$shift_api = array
(
	array ("users","dup","id","user_id",NULL,"id","usn","role","exten","contact_id"),
	array ("contacts","dup","id","contact_id",NULL,"id","fname","lname","phone","email","fullname"), 
	array ("shift",""),
);

$shifts_api = array
( 
	array ("shift","array") 
);

$members_api = array
(
	array ("users","dup","id","user_id",NULL,"id","usn","role","exten","contact_id"),
	array ("contacts","dup","id","contact_id",NULL,"id","fname","lname","phone","email","fullname"), 
	array ("members","dup","user_id","user_id","campaign_id","campaign_id",NULL,"id"), // check duplicate
	array ("members",""), 
);

$subcategories_api = array
(
	array ("subcategories","dup","name","name","category_id","category_id",NULL,"name:name"), // check duplicate
	array ("categories","dup","id","category_id",NULL,"id","name","fullname","fullname_id","level","root_id","root_name","category_id"), 
	array ("subcategories",""),
	array ("subcategories","agg4","categories","", "id","subcategory_id","category_id",":>: 0"),
);

$workinghours_api = array
(
	array ("campaigns","dup","id","campaign_id",NULL,"id","campaign","voiceprompt_id"),
	array ("voiceprompts","dup","id","voiceprompt_id",NULL,"id","name","type"),
	array ("workinghours","params","campaign_iid","campaign_id"),
	array ("workinghours",""),
);

$ooohours_api = array
(
	array ("campaigns","dup","id","campaign_id",NULL,"id","campaign"),
	array ("voiceprompts","dup","id","voiceprompt_id",NULL,"id","name","type"),
	array ("ooohours","params","campaign_iid","campaign_id"),
	array ("ooohours","")
);

$voiceprompts_api = array
(
	array ("voiceprompts","dup","name","name","id",":!=:voiceprompt_id:",NULL,"name"), // check duplicate name
	array ("voiceprompts","params","name","voiceprompt_name"),
	array ("voiceprompts",""),
	array ("voicefiles","params", "source"," voiceprompt", "source_id","voiceprompt_id"),
	array ("voicefiles","array"), 
	array ("voicemaps","array"),
	array ("voiceprompts","agg4","voicefiles","", "source"," voiceprompt","source_id","voiceprompt_id")
);

$dst_api = array
(
        array ("dst","dup","name","name","id",":!=:voiceprompt_id:",NULL,"name"), // check duplicate name
        array ("dst","params","name","voiceprompt_name"),
        array ("dst",""),
        array ("voicefiles","params","source"," voiceprompt","source_id","voiceprompt_id"),
        array ("voicefiles","array"),
        array ("voiceprompts","agg4","voicefiles","", "source"," voiceprompt","source_id","voiceprompt_id")
);

$voicemaps_api = array
(
	array ("voiceprompts","dup","id","voiceprompt_id",NULL,"id","name","type"),
	array ("dst","dup","id","dst_id",NULL,"id","name","type"),
	array ("voicemaps","")
);

$voiceumaps_api = array
(
	array ("voiceumaps","")
);

$voicefiles_api = array
(
	array ("files","dup","id","file_id",NULL,"id","name","mime","size","uploadstatus","movestatus","channels","sample_rate","duration"),
	array ("voicefiles",""),
);

$moh_api = array
(
	array ("files","dup","id","file_id",NULL,"id","name","mime","size","uploadstatus","movestatus","channels","sample_rate","duration"),
	array ("moh",""),
);

$files_api = array
(
	array ("files","file"),
);

$vfiles_api = array
(
	array ("vfiles","file"),
);

$csv_api = array
(
	array ("csv","file"),
);

// -----------------

$reporters_api = array 
(
	array ("reporters","dup","id","reporter_id", "contact_id","contact_id", NULL, "contact_id:contact_id"), // get contact_id
	array ("contacts","include"),
	
	array ("contacts","dup","id","contact_id",NULL, "fullname", "fname", "lname", "phone", "email", "phone2", "dob", "age", "age_group_id", "age_group", "sex_id", "sex", "national_id", "address", "residence", "location_id", "location:contact_location", "nationality_id", "nationality", "tribe_id", "tribe", "lang_id", "lang", "location_0", "location_1", "location_2", "location_3", "location_4", "location_5", "location_6", "landmark"),
		
	array ("reporters",""),

	array ("reporters","dup","id","reporter_id", NULL, "id", "contact_id", "contact_fullname:reporter_fullname", 
"contact_phone:reporter_phone", "contact_phone2:reporter_phone2", "contact_email:reporter_email", "contact_national_id:reporter_national_id",
"contact_age_group_id:reporter_age_group_id", "contact_age_group:reporter_age_group",
"contact_sex_id:reporter_sex_id", "contact_sex:reporter_sex", 
"contact_lang_id:reporter_lang_id", "contact_lang:reporter_lang",
"contact_nationality_id:reporter_nationality_id", "contact_nationality:reporter_nationality",  
"contact_tribe_id:reporter_tribe_id", "contact_tribe:reporter_tribe", 
"contact_location_id:reporter_location_id", "contact_location:reporter_location", 
"contact_location_0:reporter_location_0", "contact_location_1:reporter_location_1", "contact_location_2:reporter_location_2", "contact_location_3:reporter_location_3", "contact_location_4:reporter_location_4", "contact_location_5:reporter_location_5", "contact_location_6:reporter_location_6", "contact_landmark:reporter_landmark"),	
	array ("cases","dup","reporter_id","reporter_id", NULL, "id:case_id:cases"),
	array ("cases","array","_reporters"), // update reporter details in matching cases
);

$cases_reporters_api = array 
(
	array ("case_activities","aub"),
	array ("cases","","1"), // update case_reporter
	array ("case_activities","params", "activity_ref","reporter_id", "detail","contact_fullname"),
	array ("case_activities","include")
);

$perpetrators_api = array 
(	
	array ("perpetrators","dup","id","perpetrator_id",NULL, "contact_id:contact_id"), // get contact_id
	array ("contacts","include"),	
	
 	array ("contacts","dup","id","contact_id",NULL, "fullname", "fname", "lname", "phone", "email", "phone2", "dob", "age", "age_group_id", "age_group", "sex_id", "sex", "national_id", "address", "residence", "location_id", "location:contact_location", "nationality_id", "nationality", "tribe_id", "tribe", "lang_id", "lang", "location_0", "location_1", "location_2", "location_3", "location_4", "location_5", "location_6", "landmark"),
	array ("categories","dup","id","relationship_id",NULL, "id:relationship_id", "fullname:relationship"),
	array ("categories","dup","id","shareshome_id",NULL, "id:shareshome_id", "fullname:shareshome"),
	array ("categories","dup","id","marital_id",NULL, "id:marital_id", "fullname:marital"),
	array ("categories","dup","id","health_id",NULL, "id:health_id", "fullname:health"),
	array ("categories","dup","id","employment_id",NULL, "id:employment_id", "fullname:employment"),
	array ("cases","dup","id","case_id",NULL, "id"),	
		
	array ("case_activities","aub"),	
	array ("perpetrators",""),
	
	array ("perpetrators","dup","id","perpetrator_id",NULL, "case_id:case_id"), // needed by delete to link to case audit trail
	array ("reporters","dup","id","reporter_id", NULL, "id", "contact_id", "contact_fullname:reporter_fullname", 
"contact_phone:reporter_phone", "contact_phone2:reporter_phone2", "contact_email:reporter_email", "contact_national_id:reporter_national_id",
"contact_age_group_id:reporter_age_group_id", "contact_age_group:reporter_age_group",
"contact_sex_id:reporter_sex_id", "contact_sex:reporter_sex", 
"contact_lang_id:reporter_lang_id", "contact_lang:reporter_lang",
"contact_nationality_id:reporter_nationality_id", "contact_nationality:reporter_nationality",  
"contact_tribe_id:reporter_tribe_id", "contact_tribe:reporter_tribe", 
"contact_location_id:reporter_location_id", "contact_location:reporter_location", 
"contact_location_0:reporter_location_0", "contact_location_1:reporter_location_1", "contact_location_2:reporter_location_2", "contact_location_3:reporter_location_3", "contact_location_4:reporter_location_4", "contact_location_5:reporter_location_5", "contact_location_6:reporter_location_6", "contact_landmark:reporter_landmark"),	
	array ("case_activities","params","activity_ref","perpetrator_id","detail","contact_fullname"),	
	array ("case_activities","include")
);

$perpetrators_cases_api = array 
( 
	array ("perpetrators","","1"), // update case_id - link
	// array ("case_activities","dup","ref"," perpetrators","ref_id","client_id","case_id"," 0",NULL, "id:ca_id:case_activities"),	
	// todo: link case_activity overkill (maybe _^(..)^_)-- also no audit trail during create activities before are rarely edits
);

$clients_api = array 
(	
	array ("clients","dup","id","client_id", NULL, "contact_id:contact_id"), // get contact_id
	array ("contacts","include"),
	
 	array ("contacts","dup","id","contact_id",NULL, "fullname", "fname", "lname", "phone", "email", "phone2", "dob", "age", "age_group_id", "age_group", "sex_id", "sex", "national_id", "address", "residence", "location_id", "location:contact_location", "nationality_id", "nationality", "tribe_id", "tribe", "lang_id", "lang", "location_0", "location_1", "location_2", "location_3", "location_4", "location_5", "location_6", "landmark"),
	array ("categories","dup","id","relationship_id",NULL, "id:relationship_id", "fullname:relationship"),
	array ("categories","dup","id","health_id",NULL, "id:health_id", "fullname:health"),
	array ("categories","dup","id","hiv_id",NULL, "id:hiv_id", "fullname:hiv"),
	array ("categories","dup","id","disability_id",NULL, "id:disability_id", "fullname:disability"),
	array ("categories","dup","id","school_level_id",NULL, "id:school_level_id", "fullname:school_level"),
	array ("categories","dup","id","school_type_id",NULL, "id:school_type_id", "fullname:school_type"),
	array ("categories","dup","id","marital_id",NULL, "id:marital_id", "fullname:marital"),
	array ("categories","dup","id","spouse_profession_id",NULL, "id:spouse_profession_id", "fullname:spouse_profession"),
	array ("categories","dup","id","guardian_marital_id",NULL, "id:guardian_marital_id", "fullname:guardian_marital"),
	array ("categories","dup","id","household_id",NULL, "id:household_id", "fullname:household"),
	array ("categories","dup","id","household_head_occupation_id",NULL, "id:household_head_occupation_id", "fullname:household_head_occupation"),
	array ("categories","dup","id","not_in_school_id",NULL, "id:not_in_school_id", "fullname:not_in_school"),
	array ("cases","dup","id","case_id",NULL, "id"),	
	
	array ("case_activities","aub"),	
	array ("clients",""),
	
	array ("clients","dup","id","client_id",NULL, "case_id:case_id"), // needed by delete to link to case audit trail
	array ("reporters","dup","id","reporter_id", NULL, "id", "contact_id", "contact_fullname:reporter_fullname", 
"contact_phone:reporter_phone", "contact_phone2:reporter_phone2", "contact_email:reporter_email", "contact_national_id:reporter_national_id",
"contact_age_group_id:reporter_age_group_id", "contact_age_group:reporter_age_group",
"contact_sex_id:reporter_sex_id", "contact_sex:reporter_sex", 
"contact_lang_id:reporter_lang_id", "contact_lang:reporter_lang",
"contact_nationality_id:reporter_nationality_id", "contact_nationality:reporter_nationality",  
"contact_tribe_id:reporter_tribe_id", "contact_tribe:reporter_tribe", 
"contact_location_id:reporter_location_id", "contact_location:reporter_location", 
"contact_location_0:reporter_location_0", "contact_location_1:reporter_location_1", "contact_location_2:reporter_location_2", "contact_location_3:reporter_location_3", "contact_location_4:reporter_location_4", "contact_location_5:reporter_location_5", "contact_location_6:reporter_location_6", "contact_landmark:reporter_landmark"),	
	array ("case_activities","params", "activity_ref","client_id","detail","contact_fullname"),	
	array ("case_activities","include"),
		
	array ("cases","agg4","clients","case_id", "case_id","case_id","is_delete",":!=: 1"),  // update case.is_reporter_client
);

$clients_cases_api = array 
( 
	array ("clients","","1"), // update case_id - link
	// array ("case_activities","dup","ref"," clients","ref_id","client_id","case_id"," 0",NULL, "id:ca_id:case_activities"),	
	// todo: link case_activity
);

$cases_api = array 
(
	array ("categories","dup","id","case_category_id",NULL, "id:case_category_id", "fullname:case_category","root_id:case_category_root_id","fullname_id:case_category_fullname_id"),
	array ("categories","dup","id","justice_id",NULL, "id:justice_id", "fullname:justice"),
	array ("categories","dup","id","assessment_id",NULL, "id:assessment_id", "fullname:assessment"),
	array ("categories","dup","id","knowabout116_id",NULL, "id:knowabout116_id", "fullname:knowabout116"),
	array ("categories","dup","id","disposition_id",NULL, "id:disposition_id", "fullname:disposition"),
	array ("cases","caret","case_category","cat_0","cat_1","cat_2","cat_3","cat_4"), // update cat
	array ("users","dup","id","escalatedby_id",NULL, "id:escalatedby_id", "usn:escalatedby", "role:escalatedby_role"),
	array ("users","dup","id","escalatedto_id",NULL, "id:escalatedto_id", "usn:escalatedto", "role:escalatedto_role"),	
	array ("reporters","dup","id","reporter_id", NULL, "id", "contact_id", "contact_fullname:reporter_fullname", 
"contact_phone:reporter_phone", "contact_phone2:reporter_phone2", "contact_email:reporter_email", "contact_national_id:reporter_national_id",
"contact_age_group_id:reporter_age_group_id", "contact_age_group:reporter_age_group",
"contact_sex_id:reporter_sex_id", "contact_sex:reporter_sex", 
"contact_lang_id:reporter_lang_id", "contact_lang:reporter_lang",
"contact_nationality_id:reporter_nationality_id", "contact_nationality:reporter_nationality",  
"contact_tribe_id:reporter_tribe_id", "contact_tribe:reporter_tribe", 
"contact_location_id:reporter_location_id", "contact_location:reporter_location", 
"contact_location_0:reporter_location_0", "contact_location_1:reporter_location_1", "contact_location_2:reporter_location_2", "contact_location_3:reporter_location_3", "contact_location_4:reporter_location_4", "contact_location_5:reporter_location_5", "contact_location_6:reporter_location_6", "contact_landmark:reporter_landmark"),

	array ("cases","aub"),
	array ("cases",""), 
	
	array ("clients","array","_cases","1",""),		// update case_id during case create only
	array ("perpetrators","array","_cases","1",""), 	// update case_id during case create only
	array ("attachments","array","_cases","1",""),		// update case_id during case create only
	array ("referals","array"),
	array ("services","array"),
	
	array ("case_activities","params", "activity_ref","case_id", "detail","plan"),
	array ("case_activities","include"),
		
	array ("activities","dup","src","src","src_uid","src_uid",NULL,"id"), // get activity_id (if exists)
	array ("actions",""),
	array ("activities","agg4","actions","activity_id", "action"," disposition", "src","src", "src_uid","src_uid"),
	array ("activities","agg5","actions","activity_id", "id","last_disposition_id"),

	array ("cases","agg4","cases","case_id", "id","case_id"), // update dt		
	array ("cases","agg4","clients","case_id", "case_id","case_id","is_delete",":!=: 1"),  // update case.is_reporter_client
	array ("cases","agg4","services","case_id", "case_id","case_id"),
	array ("cases","agg4","referals","case_id", "case_id","case_id"),
	array ("cases","agg4","case_activities","case_id", "case_id","case_id"),
	array ("cases","agg5","case_activities","case_id", "id","activity_last_id"),
);

$followups_api = array 
(
	array ("categories","dup","id","case_category_id",NULL, "id:case_category_id", "fullname:case_category","root_id:case_category_root_id","fullname_id:case_category_fullname_id"),
	array ("categories","dup","id","justice_id",NULL, "id:justice_id", "fullname:justice"),
	array ("categories","dup","id","assessment_id",NULL, "id:assessment_id", "fullname:assessment"),
	array ("categories","dup","id","knowabout116_id",NULL, "id:knowabout116_id", "fullname:knowabout116"),
	array ("categories","dup","id","disposition_id",NULL, "id:disposition_id", "fullname:disposition"),
	array ("followups","caret","case_category","cat_0","cat_1","cat_2","cat_3","cat_4"), // update cat
	array ("users","dup","id","escalatedby_id",NULL, "id:escalatedby_id", "usn:escalatedby", "role:escalatedby_role"),
	array ("users","dup","id","escalatedto_id",NULL, "id:escalatedto_id", "usn:escalatedto", "role:escalatedto_role"),	
	array ("reporters","dup","id","reporter_id", NULL, "id", "contact_id", "contact_fullname:reporter_fullname", 
"contact_phone:reporter_phone", "contact_phone2:reporter_phone2", "contact_email:reporter_email", "contact_national_id:reporter_national_id",
"contact_age_group_id:reporter_age_group_id", "contact_age_group:reporter_age_group",
"contact_sex_id:reporter_sex_id", "contact_sex:reporter_sex", 
"contact_lang_id:reporter_lang_id", "contact_lang:reporter_lang",
"contact_nationality_id:reporter_nationality_id", "contact_nationality:reporter_nationality",  
"contact_tribe_id:reporter_tribe_id", "contact_tribe:reporter_tribe", 
"contact_location_id:reporter_location_id", "contact_location:reporter_location", 
"contact_location_0:reporter_location_0", "contact_location_1:reporter_location_1", "contact_location_2:reporter_location_2", "contact_location_3:reporter_location_3", "contact_location_4:reporter_location_4", "contact_location_5:reporter_location_5", "contact_location_6:reporter_location_6", "contact_landmark:reporter_landmark"),

	array ("followups","aub"),
	array ("followups",""), 
	
	array ("clients","array","_cases","1",""),		// update case_id during case create only
	array ("perpetrators","array","_cases","1",""), 	// update case_id during case create only
	array ("attachments","array","_cases","1",""),		// update case_id during case create only
	array ("referals","array"),
	array ("services","array"),
	
	array ("case_activities","params", "activity_ref","case_id", "detail","plan"),
	array ("case_activities","include"),
		
	array ("activities","dup","src","src","src_uid","src_uid",NULL,"id"), // get activity_id (if exists)
	array ("actions",""),
	array ("activities","agg4","actions","activity_id", "action"," disposition", "src","src", "src_uid","src_uid"),
	array ("activities","agg5","actions","activity_id", "id","last_disposition_id"),

	array ("followups","agg4","followups","case_id", "id","case_id"), // update dt		
	array ("followups","agg4","clients","case_id", "case_id","case_id","is_delete",":!=: 1"),  // update case.is_reporter_client
	array ("followups","agg4","services","case_id", "case_id","case_id"),
	array ("followups","agg4","referals","case_id", "case_id","case_id"),
	array ("followups","agg4","case_activities","case_id", "case_id","case_id"),
	array ("followups","agg5","case_activities","case_id", "id","activity_last_id"),
);

$case_activities_api = array 
(
	array ("case_activities",""),
	array ("case_activities","agg4","au","ca_id", "aub_id","aub_id"),
);

$services_api = array 
(
	array ("services","dup","category_id","category_id","case_id","case_id", NULL, "id"), // check for duplicate
	array ("categories","dup","id","category_id",NULL, "id", "name", "fullname"),
	array ("services","")
);

$referals_api = array 
(
	array ("referals","dup","category_id","category_id","case_id","case_id", NULL, "id"), // check for duplicate
	array ("categories","dup","id","category_id",NULL, "id", "name", "fullname"),
	array ("referals","")
);

$attachments_api = array
(
	array ("attachments","dup","id","attachment_id","case_id",":>: 0",NULL, "case_id:case_id","file_id:file_id"), // need for delete to audit trail
	array ("cases","dup","id","case_id",NULL,"id"),
	array ("files","dup","id","file_id",NULL,"id","name","mime","size","uploadstatus","movestatus","channels","sample_rate","duration"),
	
	array ("cases","aub"),	
	array ("attachments",""),
	
	array ("cases","dup","id","case_id",NULL, "id"),	
	array ("reporters","dup","id","reporter_id", NULL, "id", "contact_id", "contact_fullname:reporter_fullname", 
"contact_phone:reporter_phone", "contact_phone2:reporter_phone2", "contact_email:reporter_email", "contact_national_id:reporter_national_id",
"contact_age_group_id:reporter_age_group_id", "contact_age_group:reporter_age_group",
"contact_sex_id:reporter_sex_id", "contact_sex:reporter_sex", 
"contact_lang_id:reporter_lang_id", "contact_lang:reporter_lang",
"contact_nationality_id:reporter_nationality_id", "contact_nationality:reporter_nationality",  
"contact_tribe_id:reporter_tribe_id", "contact_tribe:reporter_tribe", 
"contact_location_id:reporter_location_id", "contact_location:reporter_location", 
"contact_location_0:reporter_location_0", "contact_location_1:reporter_location_1", "contact_location_2:reporter_location_2", "contact_location_3:reporter_location_3", "contact_location_4:reporter_location_4", "contact_location_5:reporter_location_5", "contact_location_6:reporter_location_6", "contact_landmark:reporter_landmark"),	
	array ("case_activities","params", "activity_ref","attachment_id","detail","file_name"),	
	array ("case_activities","include"),
);


$attachments_cases_api = array 
( 
	array ("attachments",""),
	// array ("case_activities","dup","ref"," attachment","ref_id","client_id","case_id"," 0",NULL, "id:ca_id:case_activities"),	
	// todo: link case_activity
);

$activities_api = array
(
	array ("categories","dup","id","disposition_id",NULL, "id:disposition_id", "fullname:disposition"),
	array ("activities","dup","src","src","src_uid","src_uid",NULL,"id"), // get activity_id (if exists)
	array ("activities",""),
	array ("actions",""),
	array ("activities","agg4","actions","activity_id", "action"," disposition", "src","src", "src_uid","src_uid"),
	array ("activities","agg5","actions","activity_id", "id","last_disposition_id"),
	
	array ("activities","agg4","activities","activity_id", "id","activity_id"), // update dt
);

$actions_api = array
(
	array ("categories","dup","id","disposition_id",NULL, "id:disposition_id", "fullname:disposition"),
	array ("activities","dup","src","src","src_uid","src_uid",NULL,"id"), // get activity_id (if exists)
	array ("actions",""),
	array ("activities","agg4","actions","activity_id", "action"," disposition", "src","src", "src_uid","src_uid"),
	array ("activities","agg5","actions","activity_id", "id","last_disposition_id"),
);

$qas_api = array 
(
	array ("calls","dup","uniqueid","chan_uniqueid",NULL,"uniqueid","chan_ts","usr","phone","ring_time","wait_time","talk_time","hold_time","hangup_status","vector","user_id","user_name"),
	array ("qas",""),
	array ("qas","agg4","qas","qa_id", "id","qa_id"), 
	array ("qas","agg5","qas","qa_id", "id","qa_id"), 
);


// ------------------------

$activities_subs = [
["contacts","phone","src_address"],
["reporters","src_uid","src_uid"],
["case_activities","src_uid","src_uid"]
];

$actions_subs = [
["contacts","phone","src_address"],
["reporters","src_uid","src_uid"],
["case_activities","src_uid","src_uid"]
];

$cases_subs = [
["reporters","id","reporter_id"],
["perpetrators","case_id","case_id","is_delete"," 0"],
["clients","case_id","case_id","is_delete"," 0"],
["attachments","case_id","case_id","is_delete"," 0"],
["case_activities","case_id","case_id"],
];
$followups_subs = $cases_subs;

$reporters_subs = [
["case_activities","reporter_id","reporter_id"],
["activities","src_uid","src_uid"],
];


$campaigns_subs = [
["voiceprompts","id","voiceprompt_id"],
["exit","id","exit_id"],
["categories","id","category_id"],
["members","campaign_id","campaign_id"],
["moh","source_id","campaign_id","source"," campaign"],
["workinghours","campaign_id","campaign_id","source"," 1"],
["ooohours","campaign_id","campaign_id","source"," 2"],
["leads","campaign_id","campaign_id","task"," lead"],
["users"]
];

$inbound_subs = [
["voiceprompts","id","voiceprompt_id"],
["exit","id","exit_id"],
["categories","id","category_id"],
["members","campaign_id","campaign_id"],
["moh","source_id","campaign_id","source"," campaign"],
["workinghours","campaign_id","campaign_id","source"," 1"],
["ooohours","campaign_id","campaign_id","source"," 2"],
["users"]
];

$outbound_subs = [
["voiceprompts","id","voiceprompt_id"],
["exit","id","exit_id"],
["categories","id","category_id"],
["members","campaign_id","campaign_id"],
["workinghours","campaign_id","campaign_id","source"," 1"],
["leads","campaign_id","campaign_id","task"," lead"],
["users"]
];

$ooohours_subs = [
["voiceprompts","id","voiceprompt_id"],
];

$voiceprompts_subs = [
["voicefiles","source_id","voiceprompt_id","source"," voiceprompt"],
["voicemaps","voiceprompt_id","voiceprompt_id"],
];

$categories_subs = [
["subcategories","category_id","category_id"]
];

$calls_subs = [
["activities","chan_uniqueid","chan_uniqueid"],
["qas","chan_uniqueid","chan_uniqueid"],
];


// ------------------------

$qas_rel = [
["calls","uniqueid","chan_uniqueid"],
];



// ---------------------------

$cases_join = [
"services"=>["services", "service", "service.case_id=kase.id"],
"referals"=>["referals", "referal", "referal.case_id=kase.id"],
"clients"=>["clients",  "client", "client.case_id=kase.id"],
"perpetrators"=>["perpetrators", "perpetrator", "perpetrator.case_id=kase.id"]
];

// ----------------------------

$cases_csv=array(
"id",
"created_on",
"created_by",
"created_by_role",
"src",
"case_category_root_id",
"cat_0",
"cat_1",
"cat_2",
"gbv_related",
"is_reporter_client",
"is_medical_exam_done",
"is_incidence_reported",
"is_hiv_tested",
"is_pep_given",
"is_art_given",
"is_ecp_given",
"is_counselling_given",
"police_ob_no",
"incidence_when",
"incidence_location",
"hiv_test_result",
"counseling_org",
"justice",
"assessment",
"escalatedto",
"priority",
"status",
"knowabout116",
"reporter_fullname",
"reporter_phone",
"reporter_phone2",
"reporter_dob",
"reporter_age",
"reporter_age_group",
"reporter_sex",
"reporter_national_id",
"reporter_nationality",
"reporter_tribe",
"reporter_lang",
"reporter_landmark",
"reporter_location_0",
"reporter_location_1",
"reporter_location_2",
"reporter_location_3",
"reporter_location_4",
"reporter_location_5",
"narrative",
"plan");

$clients_csv=array(
"contact_fullname",
"contact_phone",
"contact_phone2",
"contact_dob",
"contact_age",
"contact_age_group",
"contact_sex",
"contact_national_id",
"contact_nationality",
"contact_tribe",
"contact_lang",
"contact_landmark",
"contact_location_0",
"contact_location_1",
"contact_location_2",
"contact_location_3",
"contact_location_4",
"contact_location_5",
"relationship",
"relationship_comment",
"is_disabled",
"disability",
"health",
"hiv",
"special_services",
"in_school",
"school_type",
"school_level",
"school_attendance",
"school_name",
"school_address",
"not_in_school_reason",
"is_married",
"marital",
"spouse_profession",
"spouse_fullname",
"is_guardian_known",
"guardian_marital",
"guardian_fullname",
"guardian_national_id",
"household",
"household_adults",
"household_head_occupation",
"is_disabled_refered",
"is_disabled_referals",
"not_in_school");

$perpetrators_csv=array(
"contact_fullname",
"contact_phone",
"contact_phone2",
"contact_dob",
"contact_age",
"contact_age_group",
"contact_sex",
"contact_national_id",
"contact_nationality",
"contact_tribe",
"contact_lang",
"contact_landmark",
"contact_location_0",
"contact_location_1",
"contact_location_2",
"contact_location_3",
"contact_location_4",
"contact_location_5",
"relationship",
"shareshome",
"marital",
"health",
"employment",
"guardian_fullname",
"notes");

$services_csv=array("category_name");

$referals_csv=array("category_name");

$hangupreason_enum = [ "peer"=>["peer","Agent"], "self"=>["self","Customer"] ];

$vector_enum = ["1"=>["1","Inbound"], "2"=>["2","Outbound"]];

$yesno_enum = [""=>["","Unknown"], "0"=>["0","No"], "1"=>["1","Yes"]];

$charge_enum = [""=>["","Unknown"], "0"=>["0","No"], "1"=>["1","Positive"]];

$role_enum = [
"1"=>["1","Counsellor"],
"2"=>["2","Supervisor"],
"3"=>["3","Case Manager"],
"4"=>["4","Case Worker"],
"5"=>["5","Partner"],
"99"=>["99","Administator"]
];

$case_type_enum = [
"87"=>["87","Abuse"],
"361944"=>["361944","Counseling"],
"362305"=>["362305","Information Inquiry"],
];
$case_status_enum = [""=>["","Unknown"], "0"=>["0","Unknown"], "1"=>["1","Ongoing"], "2"=>["2","Closed"]];

$case_priority_enum = [""=>["","Unknown"], "0"=>["0","Unknown"], "1"=>["1","Low"], "2"=>["2","Medium"], "3"=>["3","High"]];

?>
