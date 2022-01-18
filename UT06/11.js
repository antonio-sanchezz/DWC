window.addEventListener('load', iniciar);

function iniciar() {

    var enlace = document.createElement('a');
    enlace.setAttribute("href", "#");
    let aTexto = document.createTextNode("Enlace");
    enlace.appendChild(aTexto);
    document.body.appendChild(enlace);

}