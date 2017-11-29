<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization");

include 'db.php';
$iddireccion = $_GET['iddireccion'];
$json = array();
$sql = "SELECT idgaleria, ruta, activo FROM galeria where iddireccion='$iddireccion' ORDER BY idgaleria DESC";
$query = mysql_query($sql);

while($q = mysql_fetch_object($query)){
    $json[] = array(
        "idgaleria"     => (int)$q->idgaleria,
        "ruta"          => $q->ruta,
        "activo"        => $q->activo
    );
}

echo json_encode($json);

?>
