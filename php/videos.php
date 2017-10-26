<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization");

include 'db.php';

$json = array();

$data = mysql_query("SELECT * FROM videos ORDER BY idvideo DESC") or die(mysql_error());

while($q = mysql_fetch_object($data)){

    $json[] = array(
        "idvideo"       => (int)$q->idvideo,
        "titulo"        => $q->titulo,
        "url"           => $q->url,
        "idusuario"     => $q->idusuario,
        "activo"        => $q->activo,
        "principal"     => $q->principal
        );
}

echo json_encode($json);

?>
