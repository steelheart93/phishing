<?php
function conectar_bd()
{
    $server = "localhost";
    $user = "root";
    $pass = "";
    $nombrebd = "phishing";
    return mysqli_connect($server, $user, $pass, $nombrebd);
}
