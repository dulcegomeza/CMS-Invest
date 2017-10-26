<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization");

include 'db.php';
$post       = file_get_contents("php://input");
$requ       = json_decode($post);
$idvideo    = mysql_real_escape_string($requ->idvideo);
$titulo     = mysql_real_escape_string($requ->titulo);
$url        = mysql_real_escape_string($requ->url);
$idusuario  = mysql_real_escape_string($requ->idusuario);
$c          = mysql_real_escape_string($requ->c);

$liga = str_replace("watch?v=","embed/", $c);
$busqueda= strpos($liga, "embed/" );

if($busqueda){
    $numero=$busqueda+6;
    $cadena=substr($liga,$numero);
    $url_oficial= "https://www.youtube.com/embed/".$cadena;
}else{
    $url_oficial=$liga;
}

if($idvideo == 0){
    $fecha_captura = date('Y-m-d H:m:s');
    $sql = "INSERT INTO videos(idusuario, titulo, url, fecha_captura, activo) VALUES('$idusuario', '$titulo', '$url_oficial', '$fecha_captura', '0')";
}else{
    $sql = "UPDATE videos SET titulo = '$titulo', url = '$url_oficial' WHERE idvideo = '$idvideo'";
}

if(mysql_query($sql)){
    if($idvideo == 0){
        $idvideo = mysql_insert_id();
    }
    $json = array("status"=>true, "idvideo"=>$idvideo);
    echo json_encode($json);
}else{
    $json = array("status"=>false);
    echo json_encode($json);
}
?>
