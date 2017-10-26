<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization");

include 'db.php';

$idconvocatoria  = mysql_real_escape_string($_GET['idconvocatoria']);
$activo     = mysql_real_escape_string($_GET['numero']);

mysql_query("Update convocatorias SET activo='".$activo."' WHERE idconvocatoria='".$idconvocatoria."'");

?>
