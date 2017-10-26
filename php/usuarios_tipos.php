<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization");

include 'db.php';

$json = array();

$data = mysql_query("SELECT idtipo_usuario, tipo_usuario, activo FROM tipos_usuarios WHERE activo = 1 ORDER BY tipo_usuario ASC") or die(mysql_error());

while($q = mysql_fetch_object($data)){
    $json[] = array(
        "idtipo_usuario"   => (int)$q->idtipo_usuario,
        "tipo_usuario"     => $q->tipo_usuario,
        "activo"           => (bool)$q->activo
    );
}

echo json_encode($json);

?>
