<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization");

include 'db.php';

$idvideo = mysql_real_escape_string($_GET['idvideo']);

$sql  = "SELECT idvideo, titulo, url, activo FROM videos WHERE idvideo = '$idvideo'";

$query= mysql_query($sql);

$data = mysql_fetch_object($query);

$json = array(
    "idvideo"  => (int)$data->idvideo,
    "titulo"   => $data->titulo,
    "url"      => $data->url,
    "activo"   => $data->activo
);

echo json_encode($json);

?>
