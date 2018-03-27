<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization");

include 'db.php';

$idnoticia = mysql_real_escape_string($_GET['idnoticia']);

$sql = "SELECT idnoticia, titulo, contenido, fecha_noticia, activo FROM noticias WHERE idnoticia = '$idnoticia'";
$query = mysql_query($sql);
$data  = mysql_fetch_object($query);

$sqlImg   = "SELECT idnoticia_imagen, ruta FROM noticias_imagenes WHERE idnoticia = '$idnoticia'";
$queryImg = mysql_query($sqlImg);
$jsonImg  = array();
while($img = mysql_fetch_object($queryImg)){
    $jsonImg[] = array(
        "idnoticia_imagen" => $img->idnoticia_imagen,
        "ruta"             => $img->ruta
    );
}

$json = array(
    "idnoticia"        => (int)$data->idnoticia,
    "titulo"           => $data->titulo,
    "activo"           => $data->activo,
    "contenido"        => $data->contenido,
    "fecha_noticia"    => $data->fecha_noticia,
    "imagenes"         => array(),
    "rutas"            => $jsonImg
);

echo json_encode($json);

?>
