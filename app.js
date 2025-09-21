// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
// Creamos array para almacenar los amigos
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
    // 1. Capturar el valor del campo de texto
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // eliminamos espacios en blanco al inicio/fin

    // 2. Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return; // salimos de la función
    }

    // 3. Actualizar el array con el nuevo nombre
    amigos.push(nombre);

    // 4. Limpiar el campo de entrada
    input.value = "";
}
