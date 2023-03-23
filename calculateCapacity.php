<?php

header('Access-Control-Allow-Origin: *');

$largo = $_POST['largo'];
$alto = $_POST['alto'];
$ancho = $_POST['ancho'];

// Calcula la capacidad en litros
$litros = $largo * $ancho * $alto / 1000;

// Calcula la capacidad en galones americanos
$galones = $litros * 0.264172;

// Imprime los resultados
echo json_encode(array('litros' => $litros, 'galones' => $galones));

?>
