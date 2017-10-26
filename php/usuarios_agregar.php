<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization");

include 'db.php';
include 'token.php';

$post      = file_get_contents("php://input");
$requ      = json_decode($post);

$idusuario = mysql_real_escape_string($requ->idusuario);
$nombre     = mysql_real_escape_string($requ->nombre);
$correo     = mysql_real_escape_string($requ->correo);
$activo     = mysql_real_escape_string($requ->activo);
$password     = mysql_real_escape_string($requ->password);
$idtipo_usuario     = mysql_real_escape_string($requ->idtipo_usuario);

if($idusuario == 0){
    $sql = "INSERT INTO usuarios SET
    nombre='".$nombre."',
    correo='".$correo."',
    idtipo_usuario='".$idtipo_usuario."',
    activo='1',
    password='".md5($password)."'";
    if(mysql_query($sql)){
        $json = array("status" => true);
    } else {
        die(mysql_error());
        $json = array("status" => false);
    }
} else {
    if (!empty($requ->password)){
        $sql = ",password='".md5($password)."'";
    } else {
        $sql = "";
    }
    if($activo){$activo=1;}else {$activo = 0;}

    if (mysql_query("UPDATE usuarios SET
        nombre='".$nombre."',
        correo='".$correo."',
        idtipo_usuario='".$idtipo_usuario."',
        activo= ".$activo.$sql."
        WHERE idusuario='".$idusuario."'")){
        $json = array("status" => true);
    }else{
        $json = array("status" => false);
    }
}

echo json_encode($json);

?>
