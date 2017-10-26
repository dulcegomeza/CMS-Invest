<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization");

include 'db.php';

$json = array();
$sql = "SELECT idconvocatoria, ruta, activo FROM convocatorias ORDER BY idconvocatoria DESC";
$query = mysql_query($sql);

while($q = mysql_fetch_object($query)){
    $json[] = array(
        "idconvocatoria"     => (int)$q->idconvocatoria,
        "ruta"          => $q->ruta,
        "activo"        => $q->activo
    );
}

echo json_encode($json);

?>
