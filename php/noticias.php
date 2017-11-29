<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization");

include 'db.php';

$json = array();
$sql = "SELECT idnoticia, titulo, contenido, DATE_FORMAT(fecha_noticia,'%d-%m-%Y') as fecha_noticia, activo FROM noticias ORDER BY fecha_noticia DESC";
$query = mysql_query($sql);

while($q = mysql_fetch_object($query)){
    $json[] = array(
        "idnoticia"     => (int)$q->idnoticia,
        "titulo"         => $q->titulo,
        "contenido"         => $q->contenido,
        "fecha_noticia"         => $q->fecha_noticia,
        "activo"         => (bool)$q->activo
    );
}

echo json_encode($json);

?>
