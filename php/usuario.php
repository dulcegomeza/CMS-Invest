<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization");

include 'db.php';

$id     = mysql_real_escape_string($_GET['id']);
$query     = mysql_query("SELECT idusuario, nombre, correo, activo, idtipo_usuario
    FROM usuarios
    WHERE idusuario='".$id."' LIMIT 1") or die(mysql_error());
$data = mysql_fetch_object($query);

$json = array(
    "idusuario"     => $data->idusuario,
    "nombre"        => $data->nombre,
    "correo"        => $data->correo,
    "activo"        => (bool)$data->activo,
    "idtipo_usuario"        => $data->idtipo_usuario,
    "password"      => ""
);

echo json_encode($json);

?>
