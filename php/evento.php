<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization");

include 'db.php';

$idevento = mysql_real_escape_string($_GET['idevento']);

$sql = "SELECT e.idevento, e.nombre, e.tipo_evento, e.lugar, e.detalles, e.latitud, e.longitud, e.fecha_evento FROM eventos as e WHERE e.idevento = '$idevento'";
$query = mysql_query($sql);
$data  = mysql_fetch_object($query);

$sqlImg   = "SELECT idevento_imagen, ruta FROM eventos_imagenes WHERE idevento = '$idevento'";
$queryImg = mysql_query($sqlImg);
$jsonImg  = array();
while($img = mysql_fetch_object($queryImg)){
    $jsonImg[] = array(
        "idevento_imagen" => $img->idevento_imagen,
        "ruta"            => $img->ruta
    );
}

$json = array(
    "idevento"      => (int)$data->idevento,
    "nombre"        => $data->nombre,
    "tipo_evento"   => $data->tipo_evento,
    "lugar"         => $data->lugar,
    "detalles"      => $data->detalles,
    "latitud"       => (double)$data->latitud,
    "longitud"      => (double)$data->longitud,
    "fecha_evento"  => $data->fecha_evento,
    "imagenes"      => array(),
    "rutas"         => $jsonImg
);

echo json_encode($json);

?>
