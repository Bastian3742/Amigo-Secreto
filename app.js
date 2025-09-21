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
     
    //5. Llamamos a la función que muestra los amigos en pantalla
     mostrarAmigos();
}

//6. Función para mostrar la lista de amigos en el HTML
function mostrarAmigos(){
     //Obtener el elemento UL donde se hará la lista de amigos
     let lista = document.getElementById("listaAmigos");

     //Limpiar la lista antes de volver a generarla
     lista.innerHTML ="";

     //Recorrer el array "amigos"
     for (let i = 0; i <amigos.length; i++) {
          //Crear un nuevo <li>
          let item = document.createElement("li");

          //Asignar el texto del amigo
          item.textContent =amigos[i];

          //Agregar el <li> a la lista
          lista.appendChild(item);
     }
}
// 7. Función para sortear un amigo secreto
function sortearAmigo() {
    let resultado = document.getElementById("resultado");

    // Validar que el array no esté vacío
    if (amigos.length === 0) {
        resultado.innerHTML = "No hay amigos disponibles para sortear.";
        return;
    }

    // Generar formula aleatoria
    let amigoAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre del amigo sorteado
    let amigoSorteado = amigos[amigoAleatorio];

    // Mostrar el resultado en el HTML
    resultado.innerHTML = "El amigo secreto es: <strong>" + amigoSorteado + "</strong>";
}