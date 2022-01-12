window.addEventListener('load', iniciar);

function iniciar() {

    var lista = document.getElementsByTagName('ul');

    // Cambiar diseño.
    lista[0].style.cssText = 'list-style-type: square;';

    var primero = lista[0].children[0];
    var ultimo = lista[0].children[lista[0].children.length-1];

    // Ultimo lugar.
    var elem1 = document.createElement('li');
    ultimo.appendChild(elem1);

    var txt1 = document.createTextNode('Toyota');
    elem1.appendChild(txt1);

    // Primer lugar.
    var elem2 = document.createElement('li');
    primero.appendChild(elem2);

    var txt2 = document.createTextNode('BMW');
    elem2.appendChild(txt2);

}