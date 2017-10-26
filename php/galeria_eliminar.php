<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization");

include 'db.php';

$idgaleria  = mysql_real_escape_string($_GET['idgaleria']);
$ruta       = mysql_real_escape_string($_GET['ruta']);


if (mysql_query("Delete from galeria  WHERE idgaleria='".$idgaleria."'")){
    unlink("../".$ruta);
    $json = array("status" => 200);
}

?>
