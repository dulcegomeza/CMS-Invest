<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization");

include 'db.php';
include 'token.php';

$post      = file_get_contents("php://input");
$requ      = json_decode($post);

$correo     = mysql_real_escape_string($requ->user);
$password     = mysql_real_escape_string($requ->pass);
//echo md5($password);
$query = "SELECT u.idusuario, u.correo, u.nombre, t.idtipo_usuario, t.config FROM usuarios as u JOIN tipos_usuarios as t ON u.idtipo_usuario = t.idtipo_usuario WHERE correo='".$correo."' AND password='".md5($password)."' AND u.activo = 1 LIMIT 1";
if (mysql_num_rows(mysql_query($query))){
    //echo "entro";
    $data = mysql_fetch_object(mysql_query($query));

    $json = array(
        "login" => true,
        "datos" => array(
            "app"         => "cms-cultura",
            "idusuario" => $data->idusuario,
            "correo"     => $data->correo,
            "nombre"     => $data->nombre,
            "config"     => (bool)$data->config,
            "idtipo_usuario"     => (int)$data->idtipo_usuario
        )
    );

    $token     = new token();
    $enc     = $token->encriptar(json_encode($json['datos']), $clave);
    $json['token'] = $enc;

    echo json_encode($json);

} else {
    $json = array("error" => "Datos incorrectos o su cuenta a sido dada de baja.");
    echo json_encode($json);
}

?>
