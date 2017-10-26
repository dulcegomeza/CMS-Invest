<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization");

include 'db.php';

$idslider  = mysql_real_escape_string($_GET['idslider']);
$activo     = mysql_real_escape_string($_GET['numero']);

mysql_query("Update slider SET activo='".$activo."' WHERE idslider='".$idslider."'");

?>
