<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization");

include 'db.php';

$json = array();

$data = mysql_query("SELECT idusuario, nombre, correo, activo, idtipo_usuario FROM usuarios ORDER BY nombre ASC") or die(mysql_error());

while($q = mysql_fetch_object($data)){
    $json[] = array(
            "idusuario"     => (int)$q->idusuario,
            "nombre"         => $q->nombre,
            "correo"         => $q->correo,
            "idtipo_usuario"         => $q->idtipo_usuario,
            "activo"         => (bool)$q->activo
        );
}

echo json_encode($json);

?>
