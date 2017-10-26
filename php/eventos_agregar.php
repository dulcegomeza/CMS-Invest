<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization");

include 'db.php';

$servidor = $_SERVER['DOCUMENT_ROOT'];
$ruta = $servidor.$app.$carpeta_eventos;

$idevento = $_POST['idevento'];
$nombre = $_POST['nombre'];
$tipo_evento = $_POST['tipo_evento'];
$lugar = $_POST['lugar'];
$detalles = $_POST['detalles'];
$latitud = $_POST['latitud'];
$longitud = $_POST['longitud'];
$fecha_evento = date('Y-m-d H:m:s', strtotime((string)$_POST['fecha_evento']));
$idusuario = $_POST['idusuario'];
if($idevento == 0){
    $fecha_captura = date('Y-m-d H:m:s');
    $sql = "INSERT INTO eventos(idusuario, nombre, tipo_evento, lugar, detalles, latitud, longitud, fecha_captura, fecha_evento, activo) VALUES('$idusuario', '$nombre', '$tipo_evento', '$lugar', '$detalles', '$latitud', '$longitud', '$fecha_captura', '$fecha_evento', '1')";
}else{
    $sql = "UPDATE eventos SET nombre = '$nombre', tipo_evento = '$tipo_evento', lugar = '$lugar', detalles = '$detalles', latitud = '$latitud', longitud = '$longitud', fecha_evento = '$fecha_evento' WHERE idevento = '$idevento'";
}

if(mysql_query($sql)){
    if($idevento == 0){
        $idevento = mysql_insert_id();
    }
    //crear carpeta en caso de no existir
    if (!file_exists($ruta.$idevento)) {
        mkdir($ruta.$idevento, 0777, true);
    }
    //subir imagenes
    if(isset($_FILES['imagenes'])){
        $imagenes = $_FILES['imagenes'];
        foreach ($imagenes["error"] as $key => $error) {
            if ($error == UPLOAD_ERR_OK) {
                $tmp_name = $imagenes["tmp_name"][$key];
                $ext = pathinfo($imagenes["name"][$key], PATHINFO_EXTENSION);
                $name = uniqid(rand(0, 99999999999)).".".$ext;
                move_uploaded_file($tmp_name, $ruta.$idevento."/".$name);
                if(file_exists($ruta.$idevento."/".$name)){
                    $sqlImagen = "INSERT INTO eventos_imagenes(idevento, idusuario, fecha, ruta) VALUES('$idevento', '$idusuario', now(), '$carpeta_eventos$idevento/$name')";
                    mysql_query($sqlImagen);
                }
            }
        }
    }

    $json = array("status"=>true, "idevento"=>$idevento);
    echo json_encode($json);
}else{
    $json = array("status"=>false);
    echo json_encode($json);
}
?>
