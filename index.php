<html>
<head>
<title>Helpline</title>
<script>
<?php
include "/var/www/helpline_config.php";
echo "var VA_SIP_HOST = \"".$VA_SIP_HOST."\";\r\n";
echo "var VA_ICE_HOST = \"".$VA_ICE_HOST."\";\r\n";
echo "var COUNTRY_CODE = \"".$COUNTRY_CODE."\";\r\n";

echo "var DISPOSITION_ROOT = \"".$DISPOSITION_ROOT."\";\r\n";
echo "var DISPOSITION_ID_COMPLETE = \"".$DISPOSITION_ID_COMPLETE."\";\r\n";

?>
</script>
<script src="/helpline/js/sip-0.20.0.js"></script>
</head>
<body id="vdd" style="height:100%;" onclick='undd(this);' >
<?php
echo "
<style>
";
include "screen.css";
echo "
</style>
<script>
";

echo "var VA_SIP_HOST = \"".$VA_SIP_HOST."\";\r\n";

include "js/te.js";
include "js/sel.js";
include "js/chk.js";
include "js/enum.js";
include "js/cal.js";
include "js/tf.js";
include "js/rpt.js";
include "js/chart.js";

include "app/app.js";

include "app/user.js";
include "app/member.js";
include "app/contact.js";

include "app/phone.js";
include "app/cti.js";
include "app/call.js";
include "app/local.js";

include "app/voiceprompt.js";
include "app/voicemap.js";
include "app/voicefile.js";
include "app/category.js";
include "app/workinghour.js";
include "app/ooohour.js";

include "app/campaign.js";
include "app/lead.js";
include "app/activity.js";
include "app/qa.js";
include "app/shift.js";

include "app/chanss.js";

include "app/reporter.js";
include "app/perp.js";
include "app/client.js";
include "app/case.js";
include "app/followup.js";
include "app/case_activity.js";




echo "</script>
";
?>
<div oncontextmenu="/*return false;*/"><div id='vv'></div></div>
<div class='g' id='lds'></div>
<?php
 echo "<iframe class='g' src='".$VA_AMI_HOST."' />";
?>
</body>
</html>
