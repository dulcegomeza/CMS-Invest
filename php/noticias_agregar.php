<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization");

include 'db.php';

$servidor = $_SERVER['DOCUMENT_ROOT'];
$ruta = $servidor.$app.$carpeta_noticias;

$idnoticia = $_POST['idnoticia'];
$activo = $_POST['activo'];
$titulo = $_POST['titulo'];
$contenido = $_POST['contenido'];
$fecha_noticia= date('Y-m-d H:m:s', strtotime((string)$_POST['fecha_noticia']));
$idusuario = $_POST['idusuario'];

if($activo=='false' || $activo=='0'){
    $activo=0;
}else{
    $activo=1;
}
if($idnoticia == 0){
    $sql = "INSERT INTO noticias(idusuario, titulo, contenido, fecha_noticia, fecha_captura, activo) VALUES('$idusuario', '$titulo', '$contenido', '$fecha_noticia', now(), '$activo')";
}else{
    $sql = "UPDATE noticias SET titulo = '$titulo', contenido = '$contenido', fecha_noticia = '$fecha_noticia', activo='$activo' WHERE idnoticia = '$idnoticia'";
}

if(mysql_query($sql)){
    if($idnoticia == 0){
        $idnoticia = mysql_insert_id();
    }
    //crear carpeta en caso de no existir
    if (!file_exists($ruta.$idnoticia)) {
        mkdir($ruta.$idnoticia, 0777, true);
    }
    //subir imagenes
    if(isset($_FILES['imagenes'])){
        $imagenes = $_FILES['imagenes'];
        foreach ($imagenes["error"] as $key => $error) {
            if ($error == UPLOAD_ERR_OK) {
                $tmp_name = $imagenes["tmp_name"][$key];
                $ext = pathinfo($imagenes["name"][$key], PATHINFO_EXTENSION);
                $name = uniqid(rand(0, 99999999999)).".".$ext;
                move_uploaded_file($tmp_name, $ruta.$idnoticia."/".$name);
                if(file_exists($ruta.$idnoticia."/".$name)){
                    $sqlImagen = "INSERT INTO noticias_imagenes(idnoticia, idusuario, fecha, ruta) VALUES('$idnoticia', '$idusuario', now(), '$carpeta_noticias$idnoticia/$name')";
                    mysql_query($sqlImagen);
                }
            }
        }
    }

    $json = array("status"=>true, "idnoticia"=>$idnoticia);
    echo json_encode($json);
}else{
    $json = array("status"=>false);
    echo json_encode($json);
}
?>
