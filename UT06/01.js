window.addEventListener('load', iniciar);

function iniciar() {

    var title = document.createElement('title');
    var txt1 = document.createTextNode('Ejercicio 1');
    title.appendChild(txt1);
    document.head.appendChild(title);

    var h1 = document.createElement('h1');
    var txt2 = document.createTextNode('Ejercicio 1');
    h1.appendChild(txt2);
    document.body.appendChild(h1);

    var parrafo = document.createElement('p'); 
    
    document.body.appendChild(parrafo);

    //text
    var txt3 = document.createTextNode('Texto');
    parrafo.appendChild(txt3);
    //a
    var enlace = document.createElement('a');
    enlace.setAttribute("href", "http://www.google.es");
    let aTexto = document.createTextNode("Google");
    enlace.appendChild(aTexto);
    parrafo.appendChild(enlace);
    //text
    var txt4 = document.createTextNode('Texto 2');
    parrafo.appendChild(txt4);
    //a
    var enlace2 = document.createElement('a');
    enlace2.setAttribute("href", "http://www.google.es");
    let aTexto2 = document.createTextNode("Google");
    enlace2.appendChild(aTexto2);
    parrafo.appendChild(enlace2);
    //text
    var txt5 = document.createTextNode('Texto 3');
    parrafo.appendChild(txt5);
    //a
    var enlace3 = document.createElement('a');
    enlace3.setAttribute("href", "http://www.google.es");
    let aTexto3 = document.createTextNode("Google");
    enlace3.appendChild(aTexto3);
    parrafo.appendChild(enlace3);
    //text
    var txt6 = document.createTextNode('Texto 4');
    parrafo.appendChild(txt6);
}