<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization");

include 'db.php';

$idgaleria  = mysql_real_escape_string($_GET['idgaleria']);
$activo     = mysql_real_escape_string($_GET['numero']);

mysql_query("Update galeria SET activo='".$activo."' WHERE idgaleria='".$idgaleria."'");

?>
