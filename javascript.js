let agregar_button = document.getElementById("agregar_button");
let entry_input = document.getElementById("entry_input");
let contenedor = document.getElementById("contenedor");

agregar_button.addEventListener("click", function(event) {
    event.preventDefault(); 
    
    let comentario = entry_input.value.trim();
    if (comentario === "") {
        alert("Escribe un comentario.");
        return;
    }
    

    let comentarioDiv = document.createElement("div");
    comentarioDiv.classList.add("comentario");

    let textoComentario = document.createElement("p");
    textoComentario.textContent = comentario;

    let fechaHora = document.createElement("small");
    let ahora = new Date();
    fechaHora.textContent = `Publicado el: ${ahora.toLocaleString()}`;

    let eliminarButton = document.createElement("button");
    eliminarButton.textContent = "Eliminar";
    eliminarButton.addEventListener("click", function() {
        comentarioDiv.remove(); 
    });

    comentarioDiv.appendChild(textoComentario);
    comentarioDiv.appendChild(fechaHora);
    comentarioDiv.appendChild(eliminarButton);

    contenedor.appendChild(comentarioDiv);

    entry_input.value = "";
});
