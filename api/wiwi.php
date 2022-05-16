<?php

include "/var/www/db_cred.php";

$db = mysqli_connect (null, THE_DB_USN, THE_DB_PASSWD, "helpline",null,"/var/lib/mysql/mysql.sock") or die ("Could not connect to Database Server.");
$db2 = mysqli_connect (null, THE_DB_USN, THE_DB_PASSWD, "helpline",null,"/var/lib/mysql/mysql.sock") or die ("Could not connect to Database Server.");

include "model_k.php";
include "model.php";
include "rest.php";
include "XLSX.php";


// $rights = $GLOBALS["RIGHTS_1"];
	
	$aa = array ("ctx"=>"", "f"=>"", "w"=>"", "s"=>"", "sort"=>"", "lim"=>"");
	$av = [];
$res = _select ("calls", "chan", $aa, $av); 
$x = new XLSXGen();
$x->xlsx_gen ("calls",$res);

?>
