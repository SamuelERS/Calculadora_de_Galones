<?php
$largo = $_POST['largo'];
$ancho = $_POST['ancho'];
$alto = $_POST['alto'];

// Calcula la capacidad en litros
$litros = $largo * $ancho * $alto / 1000;

// Calcula la capacidad en galones americanos
$galones = $litros * 0.264172;

// Imprime los resultados
echo json_encode(array('litros' => $litros, 'galones' => $galones));
?>
