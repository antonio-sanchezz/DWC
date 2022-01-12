window.addEventListener('load', iniciar);

function iniciar() {

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