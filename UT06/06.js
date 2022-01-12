window.addEventListener('load', iniciar);

function iniciar() {

    var enlace = document.createElement('a');
    enlace.setAttribute("href", "http://www.google.es");
    let aTexto = document.createTextNode("Google");
    enlace.appendChild(aTexto);

    document.body.appendChild(enlace);

    var newDiv = document.createElement('div');
    let textref = document.createTextNode(enlace.attributes["href"].nodeValue);
    newDiv.appendChild(textref);

    document.body.appendChild(newDiv);

}