<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization");

include 'db.php';

$idvideo    = mysql_real_escape_string($_GET['idvideo']);

mysql_query("Update videos SET principal='0'");
mysql_query("Update videos SET principal='1' WHERE idvideo='".$idvideo."'");

?>
