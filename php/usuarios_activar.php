<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization");

include 'db.php';

$id 	= mysql_real_escape_string($_GET['id']);

mysql_query("Update usuarios SET activo='1' WHERE idusuario='".$id."'");

?>
