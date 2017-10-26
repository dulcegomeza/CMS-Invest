<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization");

include 'db.php';

$correo = mysql_real_escape_string($_GET["correo"]);
$query = "SELECT correo FROM usuarios WHERE correo='".$correo."'";
if(mysql_num_rows(mysql_query($query))){
    $json = array(
        "correo" => true
    );
}else{
    $json = array(
        "correo" => false
    );
}

echo json_encode($json);

?>
