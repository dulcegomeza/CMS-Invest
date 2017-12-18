<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization");

include 'db.php';

$idnoticia_imagen = mysql_real_escape_string($_GET['idnoticia_imagen']);

$sql = "DELETE FROM noticias_imagenes WHERE idnoticia_imagen = '$idnoticia_imagen'";

if(mysql_query($sql)){
    $json = array("status"=>true);
}else{
    $json = array("status"=>false);
}

echo json_encode($json);

?>
