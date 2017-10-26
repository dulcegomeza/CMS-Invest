<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization");

include 'db.php';

$json = array();

$data = mysql_query("SELECT e.principal, e.idevento, e.nombre, e.tipo_evento, e.lugar, e.detalles, DATE_FORMAT(e.fecha_evento,'%d-%m-%Y') as fecha_evento, e.activo FROM eventos as e ORDER BY e.idevento DESC") or die(mysql_error());

while($q = mysql_fetch_object($data)){
    $json[] = array(
        "idevento"       => (int)$q->idevento,
        "nombre"         => $q->nombre,
        "tipo_evento"    => $q->tipo_evento,
        "lugar"          => $q->lugar,
        "detalles"       => $q->detalles,
        "fecha_evento"   => $q->fecha_evento,
        "activo"         => $q->activo,
        "principal"      => $q->principal
         );
}

echo json_encode($json);

?>
