<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization");

include 'db.php';

$idslider  = mysql_real_escape_string($_GET['idslider']);
$ruta       = mysql_real_escape_string($_GET['ruta']);


if (mysql_query("Delete from slider  WHERE idslider='".$idslider."'")){
    unlink("../".$ruta);
    $json = array("status" => 200);
}

?>
