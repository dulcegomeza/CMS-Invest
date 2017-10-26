<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization");

include 'db.php';

$idconvocatoria  = mysql_real_escape_string($_GET['idconvocatoria']);
$ruta       = mysql_real_escape_string($_GET['ruta']);


if (mysql_query("Delete from convocatorias  WHERE idconvocatoria='".$idconvocatoria."'")){
    unlink("../".$ruta);
    $json = array("status" => 200);
}

?>
