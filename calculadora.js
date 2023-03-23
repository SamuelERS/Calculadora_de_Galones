document.addEventListener("DOMContentLoaded", function() {
  // Obtener elementos de la calculadora
  const largo = document.getElementById("largo");
  const alto = document.getElementById("alto");
  const ancho = document.getElementById("ancho");
  const capacityButton = document.getElementById("capacityButton");
  const litros = document.getElementById("litros");
  const galones = document.getElementById("galones");

  // Función para enviar una solicitud AJAX al archivo PHP
  function calculateCapacity() {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "calculateCapacity.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        litros.innerText = data.litros.toFixed(2);
        galones.innerText = data.galones.toFixed(2);
      }
    };
    xhr.send("largo=" + largo.value + "&alto=" + alto.value + "&ancho=" + ancho.value);
  }

  // Event listener para el botón de calcular capacidad
  capacityButton.addEventListener("click", function() {
    console.log("Valores enviados: largo=" + largo.value + "&alto=" + alto.value + "&ancho=" + ancho.value);
    calculateCapacity();
  });
});
