// 3. Consultar e Imprimir los Resultados de un Fetch
// Cargar JSON que es un arreglo
(function() {
const cargarJSONArrayBtn = document.querySelector('#cargarJSONArray');
const contenido = document.querySelector('#lista-carrito tbody');

cargarJSONArrayBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    const url = 'data/empleados.json';

    fetch(url)
        .then( respuesta => respuesta.json() )
        .then( resultado => {
            console.log(resultado);
            mostrarHTML(resultado);})// trae 3 objetos
} 

// no podemos aplicar destructuring desde el parametro
// porque es un arreglo
function mostrarHTML(empleados) {

    limpiarHTML();
    
    // let row; 

    // forEach para recorrer en cada uno de ellos
    empleados.forEach(empleados => {
        const { id, nombre, empresa, trabajo} = empleados;
        // scripting
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${empresa}</td>
        <td>${id}</td>
        <td>${nombre}</td>
        <td>${trabajo}</td>
        `;
        contenido.appendChild(row);
    });
    
}

function limpiarHTML() {
    while (contenido.firstChild) {
        contenido.removeChild(contenido.firstChild);
    }
}

})();