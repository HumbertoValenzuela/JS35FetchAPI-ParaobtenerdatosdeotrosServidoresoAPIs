// 4. Consultar e Imprimir los Resultados de una API
// Cómo consumir una API
// para poder ver la info de un archivo JSON, se recomienda
// instalar una extensión de chrome llamada JSONView

const cargarAPIBtn = document.querySelector('#cargarAPI');
cargarAPIBtn.addEventListener('click', obtenerDatos);

const contenido = document.querySelector('#lista-carrito tbody');

function obtenerDatos() {
    const url = 'https://picsum.photos/list';
    fetch(url)
    .then( respuesta => {
        console.log(respuesta);
        return respuesta.json();
    })
    .then( resultado => {
        console.log(resultado);
        mostrarHTML(resultado);
    })
}

function mostrarHTML(resultado) {

    resultado.forEach(perfil => {

        const { author, post_url} = perfil;

        // scripting
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${author}</td>
            <td><a href="${post_url}" target="_blank">Ver Imagen</td>
        `;
        contenido.appendChild(row);

    });
}