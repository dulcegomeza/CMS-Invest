<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization");

include 'db.php';

$idnoticia = mysql_real_escape_string($_GET['idnoticia']);

$sql = "UPDATE noticias SET activo = 1 WHERE idnoticia = '$idnoticia'";

if(mysql_query($sql)){
    $json = array("status"=>true);
}else{
    $json = array("status"=>false);
}

echo json_encode($json);

?>
