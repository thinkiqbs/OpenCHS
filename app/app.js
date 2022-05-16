
var APIPATH = "/helpline/api/";  

var UU = 
{
"login":{ 201:[["loadphone","ss"],["main","ss","vv"]], 401:[["login","user_","vv"]] },
"logout":{ 401:[["unloadphone","user_"],["login","user_","vv"]] },
"change_passwd":{ 202:[["change_passwd_vw","user_","vp"]], 412:[["nb","errors","v","nb"]] },
"reset_passwd":{ 202:[["nb","auth_nb","v","nb"]], 412:[["nb","errors","v","nb"]] },

"dash":{ 200:[["dash","dash"]] },
"dash_rpt_pie":{ 200:[["dash_rpt_pie","cases_rpt"]] },
"dash_rpt_line":{ 200:[["dash_rpt_line","cases_rpt"]] },
"dash_case_priority":{ 200:[["dash_case_priority","cases_rpt"]] },
"dash_calls_rpt_vw":{ 200:[["dash_calls_rpt_vw","calls_rpt"]] },
"dash_agent_name":{ 200:[["dash_agent_name","users"]] },

"today":{ 200:[["today","user_"]] },

"chan_add_ld":{ "203":[["chan_add_ld","action"]] },
"call_add_ld":{ "203":[["call_add_ld","action"]] },

"user_ed":{ 200:[["user_ed","users"]], 202:[["user_vw_id","users","vp"]], 412:[["nb","errors","v","nb"]] },
"user_new":{ 201:[["user_vw_id","users","vp"]], 412:[["nb","errors","v","nb"]] },
"user_vw_id":{ 200:[["user_vw_id","users"]] },
"user_la":{ 200:[["user_la","users_ctx"]] },
"user_lc":{ 200:[["user_lc","users_ctx"]] },
"user_lc_main":{ 200:[["user_lc_main","users_ctx"]] },
"user_ls":{ 200:[["user_ls","users_ctx"]] },
"user_list":{ 200:[["user_list","users_ctx"]] },
"users":{ 200:[["users","users_ctx"]] },

"contact_ed":{ 200:[["contact_ed","contacts"]], 202:[["contact_vw_id","contacts","vp"]], 412:[["nb","errors","v","nb"]] },
"contact_new":{ 201:[["contact_vw_id","contacts","vp"]], 412:[["nb","errors","v","nb"]] },
"contact_vw_id":{ 200:[["contact_vw_id","contacts"]] },
"contact_lc":{ 200:[["contact_lc","contacts_ctx"]] },
"contact_ls":{ 200:[["contact_ls","contacts_ctx"]] },
"contact_list":{ 200:[["contact_list","contacts_ctx"]] },
"contacts":{ 200:[["contacts","contacts_ctx"]] },

"activity_reporter":{ 201:[["activity_reporter","reporters","vw"]], 202:[["activity_reporter","reporters","vw"]], 412:[["nb","errors","","nb"]] }, // on select contact
"activity_call":{ 201:[["activity_call","activities"]], 202:[["activity_call","activities"]], 412:[["nb","errors","","nb"]] },
"activity_disposition":{ 200:[["activity_disposition","subcategories_ctx"]], 201:[["uvpfn","actions","vp"]], 412:[["nb","errors","","nb"]]  },
"activity_case":{ 200:[["activity_case","caseupdates_ctx"]] },
"activity_contact_list":{ 200:[["activity_contact_list","contacts_ctx"]] },
"activity_contacts":{ 200:[["activity_contacts","contacts_ctx"]] },
"activity_match":{ 200:[["activity_match","activities"]] },
"activity_vw_id":{ 200:[["activity_vw_id","activities"]] },
"activity_lst":{ 200:[["activity_lst","activities_ctx"]] },

"qa_form":{ 201:[["qa_vw_id","qas","vp"]], 412:[["nb","errors","","nb"]] },
"qa_vw_id":{ 200:[["qa_vw_id","qas"]] },
"qa_list":{ 200:[["qa_list","qas_ctx"]] },
"qa_main":{ 200:[["qa_main","qas_ctx"]] },
"qas":{ 200:[["qas","qas_ctx"]], 201:[["qas","qas_ctx"]] },

"call_rpt_vw":{ 200:[["rpt_vw","calls_rpt"]] },
"call_rpt":{ 200:[["call_rpt","rpts"]] },
"call_dispositioned":{ 201:[["call_dispositioned","activities","vp"]], 202:[["call_dispositioned","activities","vp"]], 412:[["nb","errors","v","nb"]] },
"call_case":{ 200:[["call_case","cases_ctx"]] },
"call_vw_id":{ 200:[["call_vw_id","calls"]] },
"call_lst":{ 200:[["call_lst","calls_ctx"]] },
"call_list":{ 200:[["call_list","calls_ctx"]] },
"call_main":{ 200:[["call_main","calls_ctx"]] },
"calls":{ 200:[["calls","calls_ctx"]], 201:[["calls","calls_ctx"]] },

"local_rpt":{ 200:[["local_rpt","rpt"]] },
"local_list":{ 200:[["local_list","locals_ctx"]] },
"local_main":{ 200:[["local_main","locals_ctx"]] },

"chanss_rpt":{ 200:[["chanss_rpt","rpt"]] },
"chanss_list":{ 200:[["chanss_list","chanss_ctx"]] },
"chanss_main":{ 200:[["chanss_main","chanss_ctx"]] },

"local_list":{ 200:[["local_list","locals_ctx"]] },
"locals":{ 200:[["locals","locals_ctx"]], 201:[["locals","locals_ctx"]] },

"campaign_lc":{ 200:[["campaign_lc","campaigns_ctx"]] },
"campaigns":{ 200:[["campaigns","inbound_ctx"]] },

"inbound_ed":{ 200:[["inbound_ed","inbound"]], 202:[["campaign_vw_id","inbound","vp"]], 412:[["nb","errors","v","nb"]] },
"inbound_new":{ 201:[["campaign_vw_id","inbound","vp"]], 412:[["nb","errors","v","nb"]] },
"inbound_vw_id":{ 200:[["campaign_vw_id","inbound"]] },
"inbound_list":{ 200:[["inbound_list","inbound_ctx"]] },
"inbound_main":{ 200:[["inbound_main","inbound_ctx"]] },

"outbound_ed":{ 200:[["outbound_ed","outbound"]], 202:[["campaign_vw_id","outbound","vp"]], 412:[["nb","errors","v","nb"]] },
"outbound_new":{ 201:[["campaign_vw_id","outbound","vp"]], 412:[["nb","errors","v","nb"]] },
"outbound_vw_id":{ 200:[["campaign_vw_id","outbound"]] },
"outbound_list":{ 200:[["outbound_list","outbound_ctx"]] },
"outbound_main":{ 200:[["outbound_main","outbound_ctx"]] },

"shift_new":{ 201:[["shift_list","shifts_ctx","vv","vt_shift_list"],["vpclose","user_"]] },
"shift_list":{ 200:[["shift_list","shifts_ctx"]] },
"shift_main":{ 200:[["shift_main","shifts_ctx"]] },

"member_del":{202:[["noop","noop"]]},
"member_lst":{ 200:[["member_lst","members_ctx"]], 202:[["member_lst","members_ctx"]] },

"workinghour_ed":{ 200:[["workinghour_ed","workinghours"]], 202:[["workinghour_vw_r","workinghours","va"]], 412:[["nb","errors","v","nb"]] },
"workinghour_new":{ 201:[["workinghour_vw_r","workinghours","va"]], 412:[["nb","errors","v","nb"]] },
"workinghour_lst":{ 200:[["workinghour_lst","workinghours_ctx"]] },

"ooohour_ed":{ 200:[["ooohour_ed","ooohours"]], 202:[["ooohour_vw_r","ooohours","va"]], 412:[["nb","errors","v","nb"]] },
"ooohour_new":{ 201:[["ooohour_vw_r","ooohours","va"]], 412:[["nb","errors","v","nb"]] },
"ooohour_lst":{ 200:[["ooohour_lst","ooohours_ctx"]] },

"voicemap_del":{ 202:[["voicemap_del","voiceumaps","va"]], 412:[["nb","errors","v","nb"]] },
"voicemap_ed":{ 200:[["voicemap_ed","voicemaps"]], 202:[["voicemap_r","voicemaps","va"]], 412:[["nb","errors","v","nb"]] },
"voicemap_new":{ 201:[["voicemap_r","voicemaps","va"]], 412:[["nb","errors","v","nb"]] },
"voicemap_vw_r":{ 200:[["voicemap_vw_r","voicemaps"]] },
"voicemap_rr":{ 200:[["voicemap_rr","voicemaps_ctx"]] },

"voiceprompt_ed":{ 200:[["voiceprompt_ed","voiceprompts"]], 202:[["voiceprompt_vw_id","voiceprompts","vp"]], 412:[["nb","errors","v","nb"]] },
"voiceprompt_new":{ 201:[["voiceprompt_vw_id","voiceprompts","vp"]], 412:[["nb","errors","v","nb"]] },
"voiceprompt_vw_r":{ 200:[["voiceprompt_vw_r","voiceprompts"]] },
"voiceprompt_vw_id":{ 200:[["voiceprompt_vw_id","voiceprompts"]] },
"voiceprompt_ls":{ 200:[["voiceprompt_ls","voiceprompts_ctx"]] },
"voiceprompt_list":{ 200:[["voiceprompt_list","voiceprompts_ctx"]] },
"voiceprompt_main":{ 200:[["voiceprompt_main","voiceprompts_ctx"]] },

"dst_new":{ 201:[["dst_vw_id","dst","vp"]], 412:[["nb","errors","","nb"]] },
"dst_tag":{ 200:[["dst_tag","dst"]] },
"dst_ls":{ 200:[["dst_ls","voiceprompts_ctx"]] },

"voicefile_new":{ 201:[["voicefile_new","vfiles"]], 412:[["nb","errors","","nb"]] },

"moh_new":{ 201:[["moh_new","vfiles"]], 412:[["nb","errors","","nb"]] },

"vfile_vw_r":{ 404:[["vfile_not_found","user_"]] },

"subcategory_list":{ 200:[["subcategory_list","subcategories_ctx"]] },

"category_ed":{ 200:[["category_ed","categories"]], 202:[["category_vw_id","subcategories","vp"]], 412:[["nb","errors","v","nb"]] },
"category_new":{ 201:[["category_r","subcategories","va"]], 412:[["nb","errors","v","nb"]] },
"category_vw_id":{ 200:[["category_vw_id","categories"]] },
"category_lc":{ 200:[["category_lc","subcategories_ctx"]] },
"case_referal_lc_main":{ 200:[["case_referal_lc_main","subcategories_ctx"]] },
"case_service_lc_main":{ 200:[["case_service_lc_main","subcategories_ctx"]] },
"case_category_lc_main":{ 200:[["case_category_lc_main","subcategories_ctx"]] },
"category_lsh":{ 200:[["category_lsh","subcategories_ctx"]] },
"category_lsh_root":{ 200:[["category_lsh_root","subcategories_ctx"]] },
"case_category_lsh_root":{ 200:[["case_category_lsh_root","subcategories_ctx"]] },
"category_ls":{ 200:[["category_ls","subcategories_ctx"]] },
"category_rr":{ 200:[["category_rr","subcategories_ctx"]] },
"category_list":{ 200:[["category_list","subcategories_ctx"]] },
"category_main":{ 200:[["category_main","subcategories_ctx"]] },


// ---

"reporter_is_client":{ 201:[["ufn_reporter_is_client","clients"]], 412:[["nb","errors","v","nb"]] },
"reporter_ed":{ 202:[["uvpfn","reporters","vp"]], 200:[["case_reporter_ed","reporters","vp"]], 412:[["nb","errors","v","nb"]] },
"reporter_new":{ 201:[["uvpfn","reporters","vp"]], 202:[["uvpfn","reporters","vp"]], 412:[["nb","errors","v","nb"]] },
"reporter_vw_id":{ 200:[["case_reporter_vw_id","reporters"]] },

"perpetrator_del":{ 202:[["case_notif_del","perpetrators"]], 412:[["nb","errors","v","nb"]] },
"perpetrator_ed":{ 202:[["uvpfn","perpetrators","vp"]], 200:[["case_perpetrator_ed","perpetrators","vp"]], 412:[["nb","errors","v","nb"]] },
"perpetrator_new":{ 201:[["uvpfn","perpetrators","vp"]], 412:[["nb","errors","v","nb"]] },
"perpetrator_vw_id":{ 200:[["case_perpetrator_vw_id","perpetrators"]] },

"client_del":{ 202:[["case_notif_del","clients"]], 412:[["nb","errors","v","nb"]] },
"client_ed":{ 202:[["uvpfn","clients","vp"]], 200:[["case_client_ed","clients","vp"]], 412:[["nb","errors","v","nb"]] },
"client_new":{ 201:[["uvpfn","clients","vp"]], 412:[["nb","errors","v","nb"]] },
"client_vw_id":{ 200:[["case_client_vw_id","clients"]] },

"case_rpt_vw":{ 200:[["rpt_vw","cases_rpt"]] },
"case_rpt":{ 200:[["case_rpt","cases_rpt"]] },
"case_contact_ed":{ 200:[["case_contact_ed","contacts"]] },
"case_update_type":{ 200:[["case_update_type","cases"]], 202:[["uvpfn","cases","vp"]], 412:[["nb","errors","v","nb"]]  },
"case_update":{ 200:[["case_update","cases"]], 202:[["uvpfn","cases","vp"]], 412:[["nb","errors","v","nb"]]  },
"case_ed":{ 200:[["case_ed","cases"]] },
"case_form":{ 200:[["case_vw_id","cases"]], 201:[["case_dispo_ufn","cases"],["case_vw_id","cases","vfvw"]], 202:[["case_dispo_ufn","cases"],["case_vw_id","cases","vfvw"]], 412:[["nb","errors","v","nb"]]  },
"case_vw_id":{ 200:[["case_vw_id","cases"]] },
"case_vw":{ 200:[["case_vw","cases"]] },
"case_list":{ 200:[["case_list","cases_ctx"]] },
"case_main":{ 200:[["case_main","cases_ctx"]] },
"cases":{ 200:[["cases","cases_ctx"]] },

"followup_update_type":{ 200:[["followup_update_type","followups"]], 202:[["uvpfn","followups","vp"]], 412:[["nb","errors","v","nb"]]  },
"followup_update":{ 200:[["followup_update","followups"]], 202:[["uvpfn","followups","vp"]], 412:[["nb","errors","v","nb"]]  },
"followup_ed":{ 200:[["followup_ed","followups"]], 202:[["case_dispo_ufn","followups"],["follow_vw_id","followups","vfvw"]], 412:[["nb","errors","v","nb"]]  },
"followup_vw_id":{ 200:[["follow_vw_id","followups"]] },
"followup_vw":{ 200:[["followup_vw","followups"]] },
"followup_list":{ 200:[["followup_list","followups_ctx"]] },
"followup":{ 200:[["followup","followups_ctx"]] },

"case_history":{ 200:[["case_history","case_activities_ctx"]] },

"case_attachment":{ 201:[["case_attachment","attachments"]] },
"case_attachment_new":{ 201:[["ufn_attach","files","va","nb"]], 412:[["nb","errors","","nb"]] },


};

re["channels"] = {};
re["age_groups"] = [];
re["callfile_"] = [["","","","","","","","","","", "","","","","","","","","","", "/helpline/api/calls/","?file=wav"]];
re["vfile_"] = [["","","","","","","","","","", "","","","","","","","","","", "/helpline/api/vfiles/","?file=wav"]];
re["qa_"] = [["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]];
re["activity_"] = [["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]];
re["task_"] = [["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]];
re["call_"] = [["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]];
re["category_"] = [["","","","","","","","","","","","","","","","","","",""]];
re["workinghour_"] = [["","","","","","","","28800","61200","","","","","","","","",""]];
re["campaign_"] = [["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]];
re["shift_"] = [["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]];
re["voicefile_"] = [["","","","","","","","","","","","","","","","","","","","",""]];
re["voicemap_"] = [["","","","","","","","","","","","","","","","","","","","","","","","",""]];
re["voiceprompt_"] = [["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]];
re["user_"] = [["","","","","","","","","","","","","","","","","","","","","","","","",""]];
re["chan_"] = [["","","","","","","","","","", "","","","","","","","","","", "","","","","","","","","","", "","","","","","","","","","", "","","","","","","","","","", "","","","","","","","","","", "","","","","","","","","","" ]];
re["reporter_"] = [["","","","","","","","","","", "","","","","","","","","","", "","","","","","","","","","", "","","","","","","","","","0",  "","","","",""]];
re["r_"] = [["","","","","","","","","","","","","","","","","","","","","","","","","","", "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",
"","","","","","","","","","","","","","","","","","","","","","","","","", "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","", "","","","","","","","","","","","","","","","","","","","","","","", "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]];

re["auth"] = [["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]];
re["activities_k"] = {};
re["cases_k"] = {};
re["reporters_k"] = {};
re["clients_k"] = {};
re["perpetrators_k"] = {};
re["contacts_k"] = {};

re["dist"] = 
{
"":["","None"],
"-":["-","Pie Chart"],
"hour":["hour","Hourly"],
"dt":["dt","Day"],
"wk":["wk","Week"],
"mn":["mn","Month"],
"yr":["yr","Year"],
};
rk["dash_call_dist"] = ["hour","-"];
re["dash_call_dist"] = re["dist"];

rk["sla"] = ["120+","120","100","80","60","40","20","0"]; 
re["sla"] = 
{
"120+":["120+","140+",""],
"120":["120","120-139",""],
"100":["100","100-119",""],
"80":["80","80-99",""],
"60":["60","60-79",""],
"40":["40","40-59",""],
"20":["20","20-39",""],
"0":["0","0-19",""],
};

rk["sla_wait"] = ["120+","120","100","80","60","40","20","0"]; 
re["sla_wait"] = re["sla"];

rk["hangup_reason"] = ["phone","usr","ivr","net"];
re["hangup_reason"] = 
{
"":["","",""],
"phone":["phone","Customer"],
"usr":["usr","Extension"],
"ivr":["ivr","IVR"],
"net":["net","Network"],
};

rk["hangup_status"] = ["answered","abandoned","busy","dump","ivr","missed","no-answer","network-error","voicemail","xfer_consult","xfer_noanswer","xfer_offline","xfer_ok"];
re["hangup_status"] = 
{
"":["","","","",""],
"answered":["answered","Answered","Answered","x y03 gg cw"],
"abandoned":["abandoned","Abandoned","Abandoned","x y03 go cw"],
"dump":["dump","Dump","Dump","x y03 gr cw"],
"ivr":["ivr","IVR","","g"],
"missed":["missed","Missed","Missed","x y03 go cw"],
"no-answer":["no-answer","No Answer","No Answer","x y03 go cw"],
"busy":["busy","Busy","Busy","x y03 go cw"],
"network-error":["network-error","Network Error","Network Error","x y03 gwd cb"],
"voicemail":["voicemail","Voicemail","Voicemail","x y03 gr cw"], 
"xfer_consult":["xfer_consult","Consult","Consult","x y03 gg cw"],
"xfer_noanswer":["xfer_noanswer","Transfer No Answer","Transfer No Answer","x y03 go cw"],
"xfer_offline":["xfer_offline","Transfer Unavailable","Transfer Unavailable","x y03 go cw"],
"xfer_ok":["xfer_ok","Transferred","Transfer Successful","x y03 gg cw"],
"SCHED":["SCHED","Sched","Scheduled","x y03 gg cw"],
"Reattempt":["Reattempt","Reattempt","Reattempt","x y03 gg cw"],
};

rk["lead_status"] = ["answered","busy","dump","no-answer","network-error","voicemail","SCHED","Reattempt"];
re["lead_status"] = re["hangup_status"]; 


rk["vector"] = ["1","2"];
re["vector"] = 
{
"":["","","","","","","","","","","","","","","","","","","","",""],
"1":["1","Inbound","&#8702","From",  "Outbound","&#8701","To", "g","Outbound Call"],
"2":["2","Outbound","&#8701","To",  "Inbound","&#8702","From", "","Inbound Call"],
};

rk["user_role"] = ["1","2","3","4","5","99"];
re["user_role"] = 
{
"":["","","",""],
"0":["","","",""],
"1":["1","Counsellor","counsellor","2"],
"2":["2","Supervisor","supervisor","3"],
"3":["3","Case Manager","casemanager","4"],
"4":["4","Case Worker","caseworker","0"],
"5":["5","Partner","partner","0"],
"99":["99","Administator","admin","0"],
};

re["onbreak"] = 
{
"":["","Offline"],
"coffee":["coffee","Coffee Break"],
"lunch":["lunch","Lunch Break"],
"FX":["FX","On Break"],
};

rk["voiceprompt_type"] = ["1","2","3","4","5","6","7"];
re["voiceprompt_type"] = 
{
"":["","",			"",		"leaf",		"branch_footer","leaf", 	"noop","noop","noop-noop-ve-type"],
"0":["0","-",			"-",		"leaf",		"branch_footer","leaf", 	"noop","noop","noop-noop-ve-type"],
"1":["1","Playback",       	"Playback",  	"voiceprompt_r_branch",		"voicemap_rr_btn","voicemap_r_branch", 	"noop","noop","noop-noop-ve-type"],
"2":["2","Menu",		"Menu",		"voiceprompt_r_branch",		"voicemap_rr_btn","voicemap_r_branch", 	"noop","noop","noop-noop-ve-type"],
"3":["3","Capture Digits",	"DTMF",		"leaf", 	"branch_footer","leaf", 	"voiceprompt_vw_dtmf","voiceprompt_ed_dtmf","voiceprompt_ed_dtmf-voiceprompt_-ve-type"],  
"4":["4","Capture Voice",	"Record",	"leaf",		"branch_footer","leaf", 	"voiceprompt_vw_record","voiceprompt_ed_record","voiceprompt_ed_record-voiceprompt_-ve-type"], 
"5":["5","Dial Extension",	"Exten",	"leaf",		"branch_footer","leaf", 	"voiceprompt_vw_extension","voiceprompt_ed_extension","voiceprompt_ed_extension-voiceprompt_-ve-type"],
"6":["6","Dial Campaign Users",	"Queue",	"leaf",		"branch_footer","leaf", 	"noop","noop","noop-noop-ve-type"],  
"7":["7","Invoke API",		"API",		"voiceprompt_r_branch", 	"voicemap_rr_btn","voicemap_r_branch", 	"voiceprompt_vw_api","voiceprompt_ed_api","voiceprompt_ed_api-voiceprompt_-ve-type"] 
};

rk["campaign"] = ["1","2"];  // match spefic date first then 
re["campaign"] = 
{
"":["","", "noop", "noop", "noop-noop-ve-type", "noop","", ""],
"1":["1","Inbound", "campaign_vw_inbound", "campaign_ed_inbound", "campaign_ed_inbound-campaign_-ve-type", "campaign_vw_id_menu_inbound","campaign_vw_tabs_inbound", "Inbound Campaign"],
"2":["2","Outbound", "campaign_vw_outbound", "campaign_ed_outbound", "campaign_ed_outbound-campaign_-ve-type", "campaign_vw_id_menu_outbound","campaign_vw_tabs_outbound", "Outbound Campaign"],
};


rk["workinghour_priority"] = ["","0","1","2","3","4","5"];  
re["workinghour_priority"] = 
{
"":["","",""],
"0":["0","Disabled","", "--"],
"1":["1","Out of Office","","OO"],
"2":["2","Working Hours","", "WH"],
"3":["3","Reattempt Hours","","RH"],
"4":["4","Holiday","","HD"],
"5":["5","Event","","EV"],
};

rk["workinghour_priority_inbound"] = ["2","0"];  
re["workinghour_priority_inbound"] = re["workinghour_priority"];

rk["workinghour_priority_outbound"] = ["2","3","0"];  
re["workinghour_priority_outbound"] = re["workinghour_priority"];

rk["ooohour_priority"] = ["1","4","5","0"];  
re["ooohour_priority"] = re["workinghour_priority"];


re["contact_fields"] = 
{
"fname":["fname","First Name"],
"lname":["lname","Last Name"],
"phone":["phone","Phone"],
};

re["dialstatus"] = 
{
"ANSWER":["ANSWER","Answered the call"],
"BUSY":["BUSY","is Busy"],
"NOANSWER":["NOANSWER","did Not-Answer"],
"CANCEL":["CANCEL","is Unavailable"],
"CHANUNAVAIL":["CHANUNAVAIL","is Unavailable"],
"DONTCALL":["DONTCALL","is Unavailable"],
"DONTCALL":["DONTCALL","is Unavailable"],
"INVALIDARGS":["INVALIDARGS","is Unavailable"]
};

rk["case_priority"] = ["1","2","3"];
re["case_priority"] = 
{
"":["","","",""],
"0":["","","",""],
"1":["1","Low","Low Priority",""],
"2":["2","Medium","Medium Priority",""],
"3":["3","High","High Priority",""],
};

rk["case_status"] = ["1","2"]; // case.final_status
re["case_status"] = 
{
"":["","","","noop-r_-ve-escalated_to"],
"0":["","","","noop-r_-ve-escalated_to"],
"1":["1","Ongoing","Ongoing","noop-r_-ve-escalated_to"],
"2":["2","Closed","Closed","noop-r_-ve-escalated_to"],
"3":["3","Escalated","Escalated to","case_status_ed_escalated_to-r_-ve-escalated_to"],

};

rk["case_src"] = ["walkin","call","sms","email","safepal","whatsup","facebook","twitter"];
re["case_src"] = 
{
"":["","",""],
"walkin":["walkin","Walkin","/helpline/images/walkin.png",	"go","Walkin Open"],
"call":["call","Call","/helpline/images/oncall-white.png",	"ba_b bd cb","Call Activity"],
"sms":["sms","SMS","/helpline/images/sms_ico.png",		"go cw","SMS Open"],
"email":["email","Email","/helpline/images/email_ico.png",	"go cw","Email Activity"],
"safepal":["safepal","SafePal","/helpline/images/safepal_ico.png",	"gb cw","Safepal Activity"],
"whatsup":["whatsup","Whatsup","/helpline/images/watsap_ico.png",	"gb cw","Whatup Activity"],
"facebook":["facebook","Facebook","/helpline/images/fb_ico.png",	"gb cw","Facebook Activity"],
"twitter":["twitter","Twitter","/helpline/images/twitter_ico.png",	"gb cw","Twitter Activity"],
};


rk["reporter_action"] = ["newcase","casefollowup","service","info"];
re["reporter_action"] = 
{
"newcase":["newcase","New Case","c w14"],
"casefollowup":["casefollowup","Case Followup","c w14 l"],
"service":["service","Service","c w14"],
"info":["info","Information and Inquiry","c w18"],

}

re["disposition"] = 
{
"":["","",""],
"":["","",""],
"appreciation":["appreciation","Appreciation",""],
"abusive":["abusive","Abusive Call",""],
"adult_related":["adult_related","Adult Related",""],
"counsellor":["counsellor","Counsellor Request",""],
"complaint":["complaint","Complaint",""],
"dropped":["dropped","Dropped",""],
"feedback":["feedback","Feedback",""],
"greeting":["greeting","Greeting",""],
"inquiry":["inquiry","Inquiry",""],
"insuff":["insuff","Insufficient Information",""],
"mistake":["mistake","Mistake",""],
"prank":["prank","Prank",""],
"silent":["silent","Silent Call",""],
"telkom":["telkom","Telkom Support",""],
"testing":["testing","Testing Line",""],
"complete":["complete","Call Completed",""],
};

rk["incomplete_call"] = ["appreciation","abusive","adult_related","counsellor","complaint","dropped","feedback","greeting","inquiry","insuff","mistake","prank","silent","telkom","testing"];
re["incomplete_call"] = re["disposition"];

re["activity_status"] = 
{
"1-0":["","Network Error"],
"1-1":["","Busy"],
"1-2":["","No Answer"],
"1-3":["","Answered"],
"1-4":["","Answered"],
"1-5":["","Answered"],
"1-6":["","Answered"],
"1-7":["","Answered"],
"1-8":["","Answered"],
"2-0":["","Error"],
"2-1":["","Busy"],
"2-2":["","Missed"],
"2-3":["","Answered"],
"2-4":["","Answered"],
"2-5":["","Answered"],
"2-6":["","Answered"],
"2-7":["","Answered"],
"2-8":["","Answered"],

};

rk["qa_done"] = ["-1","0","1"];
re["qa_done"] = 
{
"":["",""],
"-1":["-1","N/A"],
"0":["0","No"],
"1":["1","Yes"],
};

rk["dash_period"] = ["today","this_week","this_month","last_3_month","last_6_month","last_9_month","this_year","all"];
re["dash_period"] =
{
"today":["today","Today"],
"this_week":["this_week","This Week"],
"this_month":["this_month","This Month"],
"last_3_month":["last_3_month","Last 3 Months"],
"last_6_month":["last_6_month","Last 6 Months"],
"last_9_month":["last_9_month","Last 9 Months"],
"this_year":["this_year","This Year"],
"all":["all","All"],
};

rk["dash_gbv"] = ["both","vac","gbv"];
re["dash_gbv"] = 
{
"both":["both","Both VAC & GBV"],
"vac":["vac","VAC Only"],
"gbv":["gbv","GBV Only"]
};

rk["dash_src"] = ["all","call","sms","social","email","walkin"];
re["dash_src"] = 
{
"all":["all","Total","go", "/helpline/images/case.png", ":k:case_source:total:1"],
"call":["call","Calls","", "/helpline/images/bxs-phone-call.png", ":k:case_source:call:1"],
"sms":["sms","SMS","", "/helpline/images/sms.png", ":k:case_source:sms:1"],
"social":["social","Social Media", "", "/helpline/images/chat.png", ":k:case_source:socialmedia:1"],
"email":["email","Email", "", "/helpline/images/envelope-fill.png", ":k:case_source:email:1"],
"walkin":["walkin","Walkin", "gg", "/helpline/images/walkin.png", ":k:case_source:walkin:1"],
};


rk["case_type"]	= ["87","361944","362305"];
re["case_type"]	=
{
"":["87","(blank)","noop","noop", 				"?","?","noop"],
"0":["87","(blank)","noop","noop", 				"?","?","noop"],
"87":["87","Abuse","case_vw_justice","case_ed_justice",  	"CASE","Abuse Case","case_abuse_enum"],
"361944":["361944","Counseling","noop","noop", 			"COUNSELING","Counseling","case_counseling_enum"],
"362305":["362305","Information Inquiry","noop","noop", 	"INQUIRY","Inquiry","case_inquiry_enum"],
};

re["case_activity"] =
{
"1":["1","Case Created"],
"2":["2","Case Update"],
"3":["3","Case Edit"],
"4":["4","Case Change Type"],
"6":["6","Client Added"],
"7":["7","Perpetrator Added"],
"8":["8","Attachment Added"],
"9":["9","Reporter Updated"],
"10":["10","Client Updated"],
"11":["11","Perpetrator Updated"],
"12":["12","Attachment Updated"],
"13":["13","Client Deleted"],
"14":["14","Perpetrator Deleted"],
"15":["15","Attachment Deleted"]	
};


re["reporter_is_client"] = 
{
"":["","No","Is Not","","","",""],
"0":["0","No","Is Not","","","",""],
"1":["1","Yes","Is","is_reporter","xx y03 bd gd cw","Reporter","1"],
};

// region, district_2019, county_2019, subcounty_2019, parish_2019, lc1_2019, ec_constituency_2019
rz["location"] = ["","Region","District","County","SubCounty","Parish","Village","Constitunecy"];

// -------------------------------------------------------------------

te["unloadphone"] = { ufn:["unloadphone"] };

te["loadphone"] = { ufn:["loadphone"] };

// -------------------------------------------------------------------

te["vp_apply"] = { div:["x20 yy"], c: // 
[
	{ div:["c w06 r02"], c:[ { ac:["ag btn",null,"_applyf","x y04 w05 gb bd cw tc","Apply"] }, { s:["y07 bd b savl","..."] } ] },
	{ div:["c l20","va"], ac:["ay","","_vpclose","x y03 w05 ba bd tc cd","Cancel"] },
	{ div:["e"] }
]};

te["vp_sav"] = { div:["t30"], c:
[
	{ div:["c r02"], c:[ { ac:["ag btn",null,"_postj","x15 y gb bd_ cw tc",null] }, { s:["y b savl",null] } ] },
	{ div:["c l20","va"], ac:["ay",null,null,"x y04 w05 ba tc gw cd bd_","Cancel"], c:[ { p:["g","o"], arg:["",".id","%0"] } ] },
	{ div:["e"] }
]};

// -----------------------------------------------------------------

te["tabi"] = { div:[null], c: 	
[
	{ input:["g","",null,null,"radio",null] },
	{ li:["y ba cb tc tabi",null], ev:[null], c:
	[
		{ s:["",null] },
		{ arg:["",".id","%0"] }
	]},
]};

te["tab"] = { c:
[
	{ arg:["","",""] }, // ts
	{ input:["g","",null,null,"radio",null] },
	{ li:[null,null], ev:["_tab"], c:
	[
		//{ div:["c"], c:[ { img:["","",null,"20"] } ] },
		{ s:[null,null] },
		{ div:["e"] } // , arg:["_c","","30"] }
	]},
]};

// --------------------------------------------------------------------

te["change_passwd_vw"] = { div:["w60 ma bd sh__ gw","vddvw"], ev:["_undd"], c:
[
	{ div:["xx y"], c:
	[
		{ s:["c xx yy b cg","Password Changed Successful"] },
		{ ac:["d w03 ay","","_vpclose","x y tc h3 cbl bd","&Cross;"] },
		{ div:["e"] }
	]},
]};

te["change_passwd"] = { div:["w60 ma bd sh__ gw"], c:
[
	{ s:["x20 y15 b","Change Password"] },
	{ div:["","ve"], s:["x20 b10 gw",""], c:
	[
		{ div:[], c:[ { p:["c w40","nb"], u:["nb","users_nb"] }, { div:["e"] } ] },
		{ p:["","o"], c:
		[
			{ div:["t15"], c:
			[ 
				{ s:["c w13 y","Current Password"] }, { passwd:["c w25 gw ba","w25 x y","","pass0",""] }, { div:["e"] } 
			]},
			{ div:["t15"], c:
			[
				{ s:["c w13 y","New Password"] }, { passwd:["c w25 gw ba","w25 x y","","pass1",""] }, { div:["e"] }
			]},
			{ div:["t15"], c:
			[
				{ s:["c w13 y","Confirm Password"] }, { passwd:["c w25 gw ba","w25 x y","","pass2",""] }, { div:["e"] }
			]},
		]},
		{ vp_sav:["change_passwd-changeAuth","Change Password","Saving...","myprofile-user_","_vp"] }
	]}
]};

te["myprofile"] = { div:["w70 ma bd sh__ gw","vddvw"], ev:["_undd"], c:
[

	{ div:["x15 y15"], c:
	[
		{ s:["x yy b cb h2","My Profile"] },
		// { ac:["","","","x y","View Details"] },
		{ ac:["","change_passwd-user_","_vp","x y","Change Password"] },
	]},
	{ div:["x15 yy"], c:
	[
		{ div:["c xx yy w40 gw mb mr10"], c:
		[
			{ s:["x yy","Active Campaigns"] },
		]},
		{ div:["c xx yy w40 gw mb mr10"], c:
		[
			{ s:["x y","Availability"] },
			{ s:["x y","Answered Calls"] },
			{ s:["x y","Missed Calls"] },
			{ s:["x y","Average Talk Time"] },
			{ s:["x y","Max Talk Time"] },
			{ s:["x y","Average Hold Time"] },
			{ s:["x y","Max Hold Time"] },
			{ s:["x y","Total Break Time Today"] },
			{ s:["x y","Average "] },
		]},
		{ div:["e"] }
	]},
	{ div:["x15 yy"], c:
	[
		{ s:["x yy c b","Availability History"] }

	]}
	

]};

// -------------------------------------------------------------------

te["dash_agent_name"] = { s:["",":v:users:usn"] };

te["dash_agent"] = { p:["bb_ bl_ br_",":v:users:exten"], c:
[ 
	{ div:["abs w35_"] }, // ami chan
	{ arg:["","",":v:users:usn"] },
	{ input:["g","optc","chvw0","%2","radio",""] }, 
	{ li:["x y02 cd"], c:			
	[
		{ div:["c w12"], c:[ { s:["c x y",":v:users:exten"] }, { s:["c x y",":v:users:usn"] } ] },
		{ s:["c x y g",""] },
		{ s:["c x y g",""] },	// vector
		{ s:["c x y",""] },		// cid2
		{ s:["d x y",""] },		// status-duration
		{ arg:["ts","",":v:users:last_break_ts"] }, 		// status-ts
		{ s:["d x y s",":v:users:last_break"] }, 		// status-text
		{ div:["e"] }
	]},
	{ div:[] }
]};

te["dash_agent_count"] = { s:["d y","%2"] };

te["dash_calls_rpt_dist_r"] = { div:[], c:
[
	{ input:["g","","yaxis","%0","radio","%9"] },
	{ li:["opta x y tr cb","","%1"], ev:["_rpt_opt"] }
]};

te["dash_calls_rpt_metric_r"] = { div:["d l15"], c:
[
	{ input:["g","","metric","%0","radio","%9"] },
	{ li:["opta xx y03 bd tc cd s"], ev:["_rpt_opt"], c:
	[
		{ s:["c","%1"] },
		{ s:["c l","%2"] },
		{ s:["c","%3"] }, // 
		{ div:["e"] }
	]}
]};

te["dash_calls_rpt_vw"] = { c:
[
	{ pivot:[] }, 
	{ div:[], c:
	[
		{ div:["d ll w28 oh no_vline"], s:["abs w28 tt oh s",""], c:[ { div:[], utable:[] } ] },
		{ div:["e"] }
	]},
	{ div:["t20 oh mr30"], s:["",""], c:[ { canvas:["","","","100"], uchart:[] } ] },
	{ div:["e"] }
]};

te["dash_calls_rpt"] = { c: 
[ 
	{ form:["x","vrpt"], c:
	[
		{ div:["c"], c:
		[
			{ div:["","va"], s:["",""], c:
			[
				{ s:["c y03 b ",null] },
				// { ac:["c t02 x ay","","_dd","h02 w02 awb",""] },
				{ div:["e"] }
			]},
			{ div:["dd x y gw ba_b sh w25","vdd"], c: 
			[
				// { u:["",null] } // active campaigns (filters)
			]}
		]},
		{ div:["d l15"], c: // dist (yaxis)
		[
			{ div:["","va"], c:
			[
				{ ac:["ay","","_dd","x03 y03 cb h3 micon","more_vert"] },
			]},
			{ div:["dd w21 mt mln20 x y gw ba_b sh ","vdd"], c:
			[
				{ uchk:["dash_calls_rpt_dist_r",null,"dash_call_dist"] } // dist	
			]}
		]},
		{ arg:["","metrics","count"] }, // { uchk:["dash_calls_rpt_metric_r",null,null] }, // metrics
		{ arg:["","today","1"] },
		{ div:["e"], c:
		[
			{ arg:["","xaxis",null] },  //grouping
			{ arg:["","type",null] }, 
			{ arg:["","stacked",null] },
			{ arg:["","mmask",null] }, 
		]}
	]},
	{ div:["b40",null], urpt:[] } 
]};

te["dash_calls"] = { c: // 
[
	{ div:["x15 y15 gwwbb_ g"], c:
	[
		{ div:[], c:
		[
			{ div:["x y","va"], s:["",""], c:
			[
				{ ac:["c","dashboard--vftab","_u","x y h3 b cb","Dashboard"] },
				{ ac:["c xx t02 x ay","","_dd","h02 w02 ba_b awb",""] },
				{ div:["e"] }
			]},
			{ div:["dd x y gw ba_b sh w12","vdd"], c:
			[
				{ ac:["","","","x y cb","Dashboard"] },
				{ ac:["","","","x y cb","My Profile"] },
			]}
		]},
		// todo: date filter
		{ div:["e"] }
	]},
	{ div:["abs w45 x25 y15"], c:
	[
		{ div:["y03 b"], c:
		[
			{ s:["c y03","Agents Online"] },
			// { u:["dash_agent_count","users_ctx"] },
			// { s:["d x y","of"] },
			{ s:["d xx y","0"] },
			{ div:["e"] }
		]},
		{ p:["mh25","vagents"], c: // 
		[
			//{ s:["x y s gww" ,"No Agents Available"] },
			// { u:["dash_agent","users","","users"] }
		]},
		{ div:["g"], c:
		[
			{ s:["c x y03 s","Queue Avg Wait Time"] },
			{ s:["d x y03 s",":k:stats:in_avg_wait:h"] },
			{ div:["e"]}			
		]},
		{ div:["g y03"], c:
		[
			{ s:["c x y03 s","Queue Max Wait Time"] },
			{ s:["d x y03 s",":k:stats:in_max_wait:h"] },
			{ div:["e"] }
		]},
		{ div:["y"], c:
		[
			{ s:["c x y cd","Calls Waiting in Queue"] },
			{ s:["d xx y cd","0"] },
			{ div:["e"] }
		]},
		{ p:["mb","vqueued"] },
		
		{ div:["y02 b"], c: // 
		[
			{ s:["c x y03 b  ","Inbound Calls"] },
			{ s:["d xx y03","0"] },
			{ div:["e"] }
		]},
		{ p:["mb","vinbound"] },

		{ div:["y02 s b g"], c:
		[
			{ s:["c x y03","Active Outbound Calls"] },
			{ s:["d x y03","0"] },
			{ div:["e"] }
		]},
		{ p:["mb","voutbound"] }, // outbound			
	]},
	{ div:["ml500 x15 y20"], c:
	[
		{ div:["h25","call_stats_hangup_status"], dash_calls_rpt:["Today's Call Hangup Status","-",	"hangup_status", "bar","stacked","0", "dash_calls_rpt_vw-calls"] },
		{ div:["t40 h25","call_stats_disposition"], dash_calls_rpt:["Today's Call Dispositions","-",  	"category", "bar","stacked","0", "dash_calls_rpt_vw-calls"] },
		// { div:["h30 oh b30"], dash_calls_rpt:["Outbound Campaigns","-","count","dash_outbound_metrics",  	"hangup_status", "bar","stacked","0", "dash_calls_rpt_vw-calls"] },
		// { div:["h30 oh b30"], dash_calls_rpt:["Trunk Usage (Avg/Max Simultanous Calls)","-","max","dash_trunkusage_metrics", 	"usage", "bar","stacked","0", "dash_calls_rpt_vw-calls"] },		
	]},

	{ div:["e"] }
]};

te["wallboard"] = { c:
[
	{ div:[] },
	{ div:[] },
	{ div:[], c:
	[
		{ div:[], c:[ { input:["g","","tabv","0","radio","1"] }, { p:["tabv mt","vt"], dash_calls:[] } ] },
		{ div:[], c:[ { input:["g","","tabv","1","radio"] }, { p:["tabv","vt"] } ] }, // my profile
	]}
]};


// --------------------------------------------------------------------

te["dash_case_priority_vw_r"] = { div:["w50 gws mb1 h03"], c: // 
[
	{ s:["abs w50",""], c:
	[
		{ div:[null] },
		{ div:[null] },
		{ div:[null] },
		{ div:["e"] }
	]},
	{ div:["abs w55 t08 cw"], c:
	[
		{ s:["c xx w48 cw",null] },
		{ s:["d xx cb",""] },
		{ div:["e"] }
	]}
]};

te["dash_case_priority_vw"] = { c:
[
	//{ div:["xx g"], c:
	//[
	//	{ div:["c w17 cd"], c:
	//	[
	//		{ s:["c x02 y02 w01 h01 bd32 gg",""] },
	//		{ s:["c x","Closed Cases"] },
	//		{ div:["e"] }
	//	]},
	//	{ div:["c w16 cd mr"], c:
	//	[
	//		{ s:["c x02 y02 w01 h01 bd32 go",""] },
	//		{ s:["c x","Ongoing Cases"] },
	//		{ div:["e"] }
	//	]},
	//	{ div:["c w16 cd mr"], c:
	//	[
	//		{ s:["c x02 y02 w01 h01 bd32 gbl",""] },
	//		{ s:["c x","Escalated Cases"] },
	//		{ div:["e"] }
	//	]},
	//				
	//	{ div:["e"] }
	//]},
	
	{ div:[] }, 
				
	{ div:["x"], c:  // 
	[
		{ dash_case_priority_vw_r:["c h02 y gg bb3_y","c h02 y gg bb3_p","c h02 y gg bb3_r","Closed Cases"] },
		{ dash_case_priority_vw_r:["c h02 y go bb3_y","c h02 y go bb3_p","c h02 y go bb3_r","Ongoing Cases"] },
		{ dash_case_priority_vw_r:["c h02 y gbl bb3_y","c h02 y gbl bb3_p","c h02 y gbl bb3_r","Escalated Cases"] },
	]},
				
	{ div:["x y"], c: 
	[
		{ ac:["c w11 ao mr1","","","xx y cb bd gws bb3_y",""], c:[ { s:["y tc n","Low Priority"] }, { s:["y b tc h","0"] }] },
		{ ac:["c w12 ao mr1","","","xx y cb bd gws bb3_p",""], c:[ { s:["y tc n","Medium Priority"] }, { s:["y b tc h","0"] }] },
		{ ac:["c w12 ao mr1","","","xx y cb bd gws bb3_r",""], c:[ { s:["y tc n","High Priority"] }, { s:["y b tc h","0"] }] },				
		{ ac:["c w12 ao","","","xx yy gb cw bd ",""], c:[ { s:["tc h3","Total"] }, { s:["y b tc h","0"] }] },
		{ div:["e"]}
	]}
]};		

te["dash_case_priority"] = { c:
[
	{ pivot:[] },
	{ dash_case_priority_vw:[] },
	{ ufn:["case_prio_chart"] }
]};

te["dash_rpt_line"] = { c:
[
	{ pivot:[] }, 
	{ div:["w55"], s:["",""], c:[ { canvas:["","","",""], uchart:[] } ] },
	{ div:["w55 yy"], s:["",""], utable:[] },
	{ div:["e"] }
]};

te["dash_rpt_pie"] = { c:
[
	{ pivot:[] }, 
	{ div:["c w22"], s:["",""], c:[ { canvas:["","","",""], uchart:[] } ] },
	{ div:["d ll noborder"], s:["",""], utable:[] },
	{ div:["e"] }
]};

te["dash_rpt"] = { c: // dash_rpt:["Case Categories","bar","stacked","case_category_root_id","-","count","0","dash_rpt_pie-cases"]
[ 
	{ form:["yy","vrpt"], c:
	[
		{ s:["x15 y h3",null] },
		{ arg:["","type",null] }, 
		{ arg:["","stacked",null] },
		{ arg:["","xaxis",null] },
		{ arg:["","yaxis",null] },
		{ arg:["","metrics",null] },
		{ arg:["","mmask",null] } // metric params
	]},
	{ div:["xx yy",null], urpt:[] } 
]};

te["dash_src_r"] = { div:[], c:
[
	{ input:["g","","dash_src","%0","radio","%9"] },
	{ ac:["opti_","","_dash","x y bd gw cb mb",""], c:
	[
		{ s:["x y tc","%1"] },
		{ div:["x y w03 ma"], s:["%2",""], c:[ { img:["","","%3","30"] } ] },
		{ s:["x y b tc h3 h02","%4"] }
	]}
]};

te["dash_gbv_r"] = { div:[], c:
[
	{ input:["g","","dash_gbv","%0","radio","%9"] },
	{ ac:["opti_","","_dash","x15 y cb","%1"] }
]};

te["dash_period_r"] = { div:[], c:
[
	{ input:["g","","dash_period","%0","radio","%9"] },
	{ ac:["opti_","","_dash","x15 y cb","%1"] }
]};

te["dash_view"] = { c:
[
	{ div:["c wp50"], s:["r05",""], c:
	[
		{ div:["x y bd gw mb","vc"], dash_rpt:["Case Categories","bar","stacked","case_category_root_id","-","count","0","dash_rpt_pie-cases"] },	
		{ div:["x y bd gw mb","vc"], dash_rpt:["Daily Cases","line","stacked","src","dt","count","0","dash_rpt_line-cases"] }		
	]},
	{ div:["c wp50"], s:["r05",""], c:
	[
		{ div:["x y bd gw mb","vc"], dash_rpt:["Case per Location","bar","stacked","reporter_location_0","-","count","0","dash_rpt_pie-cases"] },
		{ div:["x y bd gw mb","vc"], dash_rpt:["Case Status","bar","stacked","final_status,priority","-","count","0","dash_case_priority-cases"] },			
	]},
	{ div:["e"] }	
]}

te["dash"] = { c:
[
	{ div:[] },
	{ div:["abs w14_ x y","vdf"], c: // filter params
	[
		{ div:["mb"], c:
		[
			{ div:["ay","va"], ac:["","","_dd","x bd gw cb",""], c:
			[
				{ s:["c l y","::dash_period:0:1"] },
				{ div:["d w02 t04"], c:[ { div:["h02 w02 awb"] } ] },
				{ div:["e"] },
				{ s:["x b05 cd s",":d:dmy:3: "] }
			]},
			{ div:["dd w13 y ba gw bd","vdd"], c:
			[
				{ div:["c w13"], c:
				[
					{ uchk:["dash_period_r","%0","dash_period"] }
				]},
				{ div:["e"] }
			]},
		]},
		
		{ div:["mb"], c:
		[
			{ div:["ay","va"], ac:["","","_dd","x bd gw cb",""], c:
			[
				{ s:["c l y","::dash_gbv:1:1"] },
				{ div:["d w02 t04"], c:[ { div:["h02 w02 awb"] } ] },
				{ div:["e"] }
			]},
			{ div:["dd w13 y ba gw bd","vdd"], c:
			[
				{ uchk:["dash_gbv_r","%1","dash_gbv"] }
			]},
		]},							 

		{ uchk:["dash_src_r","%2","dash_src"] },
		
		{ arg:["","created_on","%3"] },
		{ arg:["","gbv_related","%4"] },
		{ arg:["","src","%5"] }
		
	]},
	{ div:["ml15 y"], dash_view:[] }
]};

// ------------------------------------------	

te["sbl"] = { div:[null], c: //
[
	{ input:["g","","sbr",null,"radio",null] },
	{ ac:["sbl ao",null,"_tab","yy cw",""], c: // todo: on hover show name
	[
		{ img:["l20","",null,"20"] },
		{ s:[" tc s",null] },
		{ u:[null] }
	]},
]};

te["sbl_case"] = { arg:["","_title","all_cases"] };

te["user_cid"] = { arg:["user_cid","","%7"] }; 

te["user_usn"] = { div:[], c:[ { s:["c xx y cd","Username: "] }, { s:["c y cd","%5"] }, { div:["e"] } ] }; 

te["toolbar_default"] = { div:["ma w12"], c:
[
	{ input:["g","","sbl_","1","radio","1"] },
	{ input:["g","","sbr_","1","radio"] },
	{ ac:["abs mtn45 ao t08 w12","","_activity_vw","xx bd gg cw",""], c:
	[
		{ s:["c y","Walk In"]},
		{ div:["d t"], c:[ { img:["","","/helpline/images/walkin.png", "18"] } ] },
		{ div:["e"], c:[ { arg:["id-0","","-1"] }, { arg:["src-9","","walkin"] } ] }
	]},
]};
			
te["main"] = { c: 
[
	{ div:["x y07 gw sh"], c: // 
	[
		{ div:["c "], s:["",""], c:
		[
			{ a:["c aa","","","/helpline/"], c:[ { img:["","","/helpline/images/sauti-logo.png", "48"] } ] },
			{ div:["e"] }
		]}, 		
			
		{ div:["d mr"], c:
		[
			{ div:["abs g"], s:["x07 y02  h01_ tc gr cw bd16 s",""] },
			{ input:["g","","","0","checkbox"] },
			{ ac:["ll ay rb","","_show_notifications","gw bd x y micon h2_ cb","history"] }				
		]},
		
		{ div:["d mr"], c:
		[
			{ div:["abs g"], s:["x07 y02  h01_ tc gr cw bd16 s",""] },
			{ input:["g","","","0","checkbox"] },
			{ ac:["l15 ay rb","","_show_notifications","gw  x y micon h2_ cb","notifications"] }				
		]},
					
		{ div:["d w18 t01"], s:["abs w18 zzzzz",""], c:
		[
			{ div:["ay","va"], ac:["","","_dd","w18 bd gws",""], c:
			[
				{ p:["c w13","agent_status"], agent_offline:[] },
				{ s:["d xx y micon h2_ cb","person"] },						
				{ div:["e"], u:["user_cid","auth"] }
			]},
			{ div:["g w18","vdd"], s:["xx yy gw ba",""], c:
			[	
				//{ div:["","va"], ac:["aa","aaaa-vv-v0","_u","xx y07","Calender"], c:[ { arg:["","id","0"] } ] },

				{ div:["","ve"], ac:["aa","agent-agent","_postj","xx y cb tr","Join Queue"], c:[ { p:["","o"], c:[ { arg:["","action","1"] } ] } ] },
				{ div:["","ve"], ac:["aa","agent-agent","_postj","xx y cb tr","Leave Queue"], c:[ { p:["","o"], c:[ { arg:["","action","0"] }, { arg:["","break","coffee"] } ] } ] },
				
			

				{ p:["","phone_status"], s:["xx y cd","Checking Phone Status ..."] },
				
				{ div:[""], u:["user_usn","auth"] }, // 
				
				{ div:["","va"], ac:["aa","myprofile-r_","_vp","xx y cb","My Profile"] },
				
				{ div:["","va"], ac:["aa","logout-","_u","xx y cb tr","Logout"], c:[ { arg:["","logout","1"] } ] },
			]},	

		]},

		{ div:["e"] }
	]},
	
	{ div:["gw","vb"], toolbar_default:[] },
	
	{ div:["g"], c:
	[
		{ div:["d w28"], s:["abs zzzz w28 gw bd mt",""], c:
		[
			{ div:["oh"], c:
			[
				{ div:[""], s:["gw bb_ x y",""], c:
                        	[
                                	{ ac:["c w03 ay","","","x07 y",""],  c:[ { img:["","","/helpline/images/search.png","","18"] } ] },
                                	{ div:["c w21","txa"], c:[ { input:["w21 xx t08 b05 gw n","name_","","0110223344","text","","Dial"] } ] },
                                	{ ac:["d w03 ay","","_dial","x07 y ",""],  c:[ { img:["","","/helpline/images/dialpad.png","","18"] } ] },
                                	//{ div:["d w03"], ac:["aa","","_dd","x y",""],  c:[ { div:["h02 w02 awb"] } ] },
                                	{ div:["e"] },
                        	]},
                        	
				{ div:["xx g"], c:
				[
					{ div:["","va"], s:["",""], c:
					[
						{ s:["c ll y08 cd","Today"] },
						{ ac:["c x y ay","","_dd","h02 w02 awb",""] },
						{ ac:["d ay","","","x y bd_",""], c:[ { img:["","","/helpline/images/settings_black.png","18"] } ] },
						{ div:["e"] }
					]},
					{ div:["dd x y ba gw","vdd"], c:
					[
						{ ac:["w12","","","x y cb","Search"] },
					]}
				]},
				{ p:["","call_sessions"] },
				{ div:["","vt"], u:["activity_lst","activities_ctx"] },
			]},
			{ div:["y gw bt_"], c:
			[
				{ ac:["c l ay","","","x y tc w07 cd s",""], c:[ { s:["tc","Answered"] }, { s:["tc y","0"] } ] },
				{ ac:["c l ay","","","x y tc w08 cd s",""], c:[ { s:["tc","Missed"] }, { s:["tc y","0"] } ] },
				{ ac:["c l ay","","","x y tc w08 cd s",""], c:[ { s:["tc","Total"] }, { s:["tc y","0"] } ] },
				{ div:["e"]}
			]}
			
		]},
		
		{ div:["e"] } 
	]},

	{ p:["abs zz y20 op_ga g","vp"], ev:["_uvp"] }, // popup window	
	
	{ p:["abs zzzz y20 op_ga g","vip"], ev:["_uvp"] }, // incoming call popup	
		
	{ div:["h80 gb abs","vb"], s:["sb_",""], c: 
	[
		{ sbl:["","2","1","","/helpline/images/dash_white.png","Dash","noop"] },
		{ sbl:["","3","","cases-cases","/helpline/images/case.png","Cases","sbl_case"] },
		
		{ sbl:["counsellor_","5","","calls-calls","/helpline/images/phone_white.png","Calls","noop"] },
		{ sbl:["supervisor_","5","","calls-calls","/helpline/images/phone_white.png","Calls","noop"] },
		{ sbl:["admin_","5","","calls-calls","/helpline/images/phone_white.png","Calls","noop"] },
		
		{ sbl:["supervisor_","6","","qas-qas","/helpline/images/qa.png","QA","noop"] },
		{ sbl:["admin_","6","","qas-qas","/helpline/images/qa.png","QA","noop"] },
		
		{ sbl:["","4","","contacts-contacts","/helpline/images/contacts_white.png","Contacts","noop"] },
		
		{ sbl:["admin_","7","","users-users","/helpline/images/settings_white.png","Settings","noop"] },
		
		{ sbl:["supervisor_","8","","","/helpline/images/wallboard.png","Wallboard","noop"] },
		{ sbl:["admin_","8","","","/helpline/images/wallboard.png","Wallboard","noop"] },
	]},

	{ div:["ml6"], c: // childNodes[6].childNodes[1].childNodes[1] // firstChild.firstChild.childNodes[1]
	[
		{ div:[], c:[ { div:["d w28"], s:["abs w27 x y zzz",""], c:
		[
			 // notifications
		]} ]},
		{ div:[], c:[ { input:["g","","mtv","1","radio"] }, { p:["tabv","vftab"] } ] }, // on call & right sb vw
		{ div:[], c:[ { input:["g","","mtv","2","radio","1"] }, { p:["tabv","vftab"], u:["dash","dash"] } ] }, // wall board
		{ div:[], c:[ { input:["g","","mtv","3","radio"] }, { p:["tabv","v002"] } ] }, // cases
		{ div:[], c:[ { input:["g","","mtv","4","radio"] }, { p:["tabv","v003"] } ] }, // contacts
		{ div:[], c:[ { input:["g","","mtv","5","radio"] }, { p:["tabv","v004"] } ] }, // calls
		{ div:[], c:[ { input:["g","","mtv","6","radio"] }, { p:["tabv","v005"] } ] }, // qa
		{ div:[], c:[ { input:["g","","mtv","7","radio"] }, { p:["tabv","v006"] } ] }, // categories
		{ div:[], c:[ { input:["g","","mtv","8","radio"] }, { p:["tabv","vftab"], wallboard:[] } ] } // wallboard
	]}
]};

te["login"] = { div:["gw "], c:
[
	{ div:["loginbg"], s:["ma w100",""], c: 
	[
		{ div:["c t20"], c:
		[
			{ s:["x t20 b hhh","Hello,"] },
			{ s:["x b y hhh","Welcome back!"] }
		]},
		
		{ div:["d w32 mb12"], c:[ { div:["","ve"], c:
		[ 
		
			{ div:["ma w26 y40"], c:
			[ 
				{ div:["c w13"], c:[ { img:["","","/helpline/images/coartofarms.jpg", "90"] } ] },
				{ div:["c w13 t15"], c:[ { img:["","","/helpline/images/sauti-logo.png", "100"] } ] },
				{ div:["e"] }
			]}, 
					
			{ p:["w26 x30 y30 gb bd cw","o"], c:
			[
				{ div:[""], c:
				[
					{ s:["hhh b cw","Log in"] }, 
					{ div:["e"] }
				]},
				{ div:["y"], c:
				[
					{ u:["nb","auth_nb"] },
					{ div:["e"] }
				]},
				{ div:["t"], c:
				[
					{ div:[], s:["x y02 cw","Username"] },
					{ div:["w26 gw bd"], c:[ { input:["w26 xx yy","","user","","text","","Enter Username"] } ] },
					//{ div:["e"] }
				]},
				{ div:["t15"], c:
				[
					{ div:[], s:["x y02 cw","Password"] },
					{ div:["w26 gw bd"], c:[ { input:["w26 xx yy","","pass","","password","","Enter Password"] } ] },
					//{ div:["e"] }
				]},
				{ div:["t"], c:
				[
					{ div:["c"], s:["x y02 cw","Remember me"] },
					{ div:["d"], s:["x y02 cw","Forgot Password"] },
					{ div:["e"] }
				]},
				{ div:["t40"], c:
				[
					{ div:[], ac:["ag btn","login-","_postj","xx yy go cb bd b h3 tc","Login","0"] },
					{ div:["e"] },
					]}
			]} 
		]} ]}
	]},
	// { div:["y h50"]}
]};

function _dash ()
{
	this.previousSibling.checked = true;
	var p = __(this,"vdf");
	var a = {args:"?", ".id":""};
	argv (p, a);
	url (p.parentNode, "dash", "dash", a.args);
}

function case_prio_chart (el, u, a, r, m)
{
	var status = {"":0, "0":0, "1":1, "2":0, "3":2 }
	var prio = {"":0, "0":0, "1":0, "2":1, "3":2 };
	var rr = ra["cases_pivot"];
	var j = null;
	var k = null;
	var m = 0;
	var rr_ = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
	for (var i=0; i<rr.length; i++)
	{
		j = status[rr[i][0]];
		k = prio[rr[i][1]];
		console.log ("[prio] ("+rr[i][0]+","+rr[i][1]+") ("+j+","+k+")")
		if (j==undefined) continue;
		if (k==undefined) continue;
		//console.log ("PRIO] "+j+","+k+" |"+ rr[i][0][0]+","+rr[i][1][0]);
		rr_[j][k] += 1*rr[i][2][0];
		rr_[3][k] += 1*rr[i][2][0];
	}
		
	for (var i=0; i<4; i++) rr_[i][3]=rr_[i][0]+rr_[i][1]+rr_[i][2];  // calc total
		
	for (var i=0; i<4; i++) el.childNodes[2].childNodes[i].firstChild.childNodes[1].innerHTML = rr_[3][i]; 
	
	console.log ("[PRIO] "+JSON.stringify (rr_)+" | "+m);
	
	for (var i=0; i<3; i++) 
	{
		el.childNodes[1].childNodes[i].childNodes[1].childNodes[1].innerHTML = rr_[i][3];
		var coll = el.childNodes[1].childNodes[i].firstChild.childNodes;
		for (j=0; j<3; j++) if (rr_[i][j]>0) 
		{
			var w = ((rr_[i][j]/rr_[3][3])*500)-1
			coll[j].style.width = w
			// console.log ("prio ("+i+","+j+") "+rr_[i][j]+" | "+w)
		}
	}
}

// -----------------------

function unloadphone (el, u, a, r, m)
{
	VOICEAPPS_UA.disconnect ();
}

function loadphone (el, u, a, r, m)
{
	var v = re["user_role"][ra["auth"][0][6]];
	if (v) document.getElementById ("vv").className = v[2];
	console.log ("loadphone: "+ra["auth"][0][7]+" | "+JSON.stringify (v));
	DetectDevices ();
	VOICEAPPS_UA.connect (ra["auth"][0][7]);
}

function ami_wait (el, u, a, r, m)
{

}

function _phone_fmt (s)
{
	var a = 0;
	var n = s.length;
	for (var i=0; i<n; i++) 
	{
		var ch = s.substr (i,1);
		if (ch=="+" || ch=="0") { a++; continue; }
		break;
	}
	if (n-a==9) return COUNTRY_CODE+s.substr (a,(n-a));
	return s.substr (a,(n-a));
}

function show_notifications (f=0)
{
	var p = document.getElementById ("vv");
	var el = p.firstChild.childNodes[1].childNodes[1];
	var v = "block";
	var mr = "280px"
	var f_ = !el.checked;
	if (f==1) f_ = el.checked;
	if (f==2) f_ = true;
	if (f_==false) { v="none"; mr=""; }
	el.checked = f_;
	p.childNodes[2].style.display = v;
	p.lastChild.style.marginRight = mr;
	p.childNodes[2].firstChild.firstChild.firstChild.style.height = window.innerHeight-63-60;
}

function _show_notifications ()
{
	show_notifications (0);
}

window.onresize = function ()
{
	show_notifications (1);
}

window.onload = function ()
{

	ra_ts = 0; // (Date.now()/1000)-ra_ts; 

	Chart.defaults.global.responsive = false;
	Chart.defaults.global.maintainAspectRatio = false;
	Chart.defaults.global.elements.line.tension = 1;
	// Chart.defaults.global.elements.line.stepped = true;
	// Chart.defaults.global.elements.line.backgroundColor = "rgba(255,255,255,0)";
	Chart.defaults.global.elements.line.borderWidth = 0;
	Chart.defaults.global.elements.point.radius = 3;
	//Chart.defaults.global.elements.point.borderColor = "rgba(255,0,0,1)";
	Chart.defaults.global.elements.point.hitRadius = 10;
	// Chart.defaults.global.animation.duration = 0;

	var p = document.getElementById ("vv"); 
	url (p, "login","","");

	//var CC = [0x3366cc, 0x3399FF, 0x109618, 0x990099, "0xdc3912,"#ff9900","#0099c6","#dd4477","#66aa00","#b82e2e","#316395","#994499","#22aa99","#aaaa11","#6633cc","#e67300","#8b0707","#651067","#329262","#5574a6", "#3b3eac","#b77322","#16d620","#b91383","#f4359e","#9c5935","#a9c413","#668d1c","#bea413","#0c5922","#743411"];
	
}

