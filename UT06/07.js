window.addEventListener('load', iniciar);

function iniciar() {

    generarTabla();

    var enlace = document.createElement('a');
    enlace.setAttribute("href", "#");
    let aTexto = document.createTextNode("Ocultar/Mostrar tabla");
    enlace.appendChild(aTexto);

    document.body.appendChild(enlace);

    enlace.addEventListener("click", showHide);

}

function showHide() {
    
    var tabla = document.getElementsByTagName('table')[0];

    if (tabla != undefined) {
        tabla.remove();
    } else {
        generarTabla();
    }
    
}

function generarTabla() {

    var tabla = document.createElement('table');

    for (let i = 1; i <= 20; i++) {

        let fila = document.createElement('tr');
        tabla.appendChild(fila);

        for (let j = 1; j <= 20; j++) {

            let columna = document.createElement('td');
            fila.appendChild(columna);

            let txt = document.createTextNode(j);
            columna.appendChild(txt);
        }

    }

    document.body.appendChild(tabla);

}