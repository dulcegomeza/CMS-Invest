<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization");

include 'db.php';

$servidor = $_SERVER['DOCUMENT_ROOT'];
$idusuario = $_POST['idusuario'];
$ruta = $servidor.$app.$carpeta_galeria;
$json = array();

    //crear carpeta en caso de no existir
    if (!file_exists($ruta)) {
        mkdir($ruta, 0777, true);
    }

    //subir imagenes
    if(isset($_FILES['imagenes'])){
        $imagenes = $_FILES['imagenes'];
        foreach ($imagenes["error"] as $key => $error) {
            if ($error == UPLOAD_ERR_OK) {
                $tmp_name = $imagenes["tmp_name"][$key];
                $ext = pathinfo($imagenes["name"][$key], PATHINFO_EXTENSION);
                $name = uniqid(rand(0, 99999999999)).".".$ext;
                move_uploaded_file($tmp_name,$ruta.$name);
                if(file_exists($ruta.$name)){
                    $sqlImagen = "INSERT INTO galeria(idusuario, fecha_captura, ruta, activo) VALUES( '$idusuario', now(), '$carpeta_galeria$name','0')";
                    mysql_query($sqlImagen);
                    $json = array("status"=>true);
                }
            }
        }
    }



    echo json_encode($json);

?>
