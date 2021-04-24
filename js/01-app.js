// 35. Fetch API - Para obtener datos de otros Servidores o API's
// 1. Como utilizar FETCH API. Obtener datos de un .txt
// Fetch API solo puede leer Texto Plano JSON txt, no soporta XML
// Fetch API es nativo de JS, antes se hacia con ajax
// Fetch se puede recibir o enviar datos
// Fetch utiliza Promise, es decir, ocupa el resolve(.then) y reject(.catch)
// Fetch ya tiene el resolve y reject, no se escribe, ya los maneja fetch. Por lo tanto ocupas
// el then y catch
// fetch y axios. axios mejora a fetch
(function(){
const cargarTxtBtn = document.querySelector('#cargarTxt');
// Al dar click en el botón se descarga el txt
cargarTxtBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    const url = 'data/datos.txt';
    fetch(url) // URL
        .then(respuesta => {
            console.log(respuesta);
            console.log(respuesta.status);//200 encontro el archivo. 404 not found
            console.log(respuesta.statusText);// Not Found
            console.log(respuesta.url);//http://127.0.0.1:5500/35-FetchAPI/data/dato.txt
            console.log(respuesta.type);//basic

            return respuesta.text();
        })
        // Lo que contiene el archivo datos.txt
        .then( datos => {
            console.log(datos)
        })
        .catch(error => console.log(error));    
}

})();