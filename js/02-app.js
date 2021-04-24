// 2. Consultar un JSON. Fetch API desde un JSON (Array)
// JSON tecnología de transporte

// Muchas APIs ocupan el Rest API, el cúal puedes consultar
// una bbdd y mostrar resultado con JS
(function(){
const cargarJSONBtn = document.querySelector('#cargarJSON');
// evento click. y va a la función
cargarJSONBtn.addEventListener('click', obtenerDatos);
const contenido = document.querySelector('#lista-carrito tbody');

function obtenerDatos() {
    
    const url = 'data/empleado.json';
    fetch(url)
        .then( respuesta => {
            console.log(respuesta);
            return respuesta.json();
        })
        .then( resultado => {
            console.log(resultado)//de json a objeto
            mostrarHTML(resultado);//argumento
        })
}

// parametros, aplicando destructuring
function mostrarHTML({empresa, id, nombre, trabajo}) {
    //Limpiar el HTML
    limpiarHTML(); 

  
    // Scripting
    const row = document.createElement('tr');
    row.innerHTML =`
    <td>${empresa}</td>
    <td>${id}</td>
    <td>${nombre}</td>
    <td>${trabajo}</td>     
    `;

    contenido.appendChild(row);       
}

function limpiarHTML() {
    while (contenido.firstChild) {
        contenido.removeChild(contenido.firstChild);
    }
}
})();
