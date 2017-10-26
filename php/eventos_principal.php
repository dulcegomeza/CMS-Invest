<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization");

include 'db.php';

$idevento    = mysql_real_escape_string($_GET['idevento']);
mysql_query("Update eventos SET principal='0'");
mysql_query("Update eventos SET principal='1' WHERE idevento='".$idevento."'");

?>
