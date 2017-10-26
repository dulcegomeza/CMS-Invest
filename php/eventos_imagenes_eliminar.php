<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization");

include 'db.php';

$idevento_imagen = mysql_real_escape_string($_GET['idevento_imagen']);

$sql = "DELETE FROM eventos_imagenes WHERE idevento_imagen = '$idevento_imagen'";

if(mysql_query($sql)){
    $json = array("status"=>true);
}else{
    $json = array("status"=>false);
}

echo json_encode($json);

?>
