<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization");

include 'db.php';

$idevento   = mysql_real_escape_string($_GET['idevento']);
$activo     = mysql_real_escape_string($_GET['numero']);

mysql_query("Update eventos SET activo='".$activo."' WHERE idevento='".$idevento."'");

?>
