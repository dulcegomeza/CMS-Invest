<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization");

include 'db.php';

$idvideo    = mysql_real_escape_string($_GET['idvideo']);
$activo     = mysql_real_escape_string($_GET['numero']);

mysql_query("Update videos SET activo='".$activo."' WHERE idvideo='".$idvideo."'");

?>
