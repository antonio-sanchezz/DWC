window.addEventListener('load', iniciar);

function iniciar() {

    var lista = document.getElementsByTagName('li')[0].parentNode;
    
    // lista.setAttribute("type", "square"); Esto tambien vale.
    lista.style.listStyle = 'square';

    // Al final.
    var elem1 = document.createElement('li');
    lista.appendChild(elem1);

    var txt1 = document.createTextNode('Toyota');
    elem1.appendChild(txt1);

    // Primer lugar.
    var elem2 = document.createElement('li');
    lista.insertBefore(elem2, lista.firstChild);

    var txt2 = document.createTextNode('BMW');
    elem2.appendChild(txt2);

    // Buscar un elemento por el contenido y situarlo en medio.

    var pos;

    var lista2 = document.getElementsByTagName('li');

    for (let i= 0; i < lista.childElementCount; i++) {
        if (lista2[i].textContent == "BMW") {
            pos = i;
        }
    }

    if (pos != undefined) {
        lista.insertBefore(elem1, lista[pos]);
    } else {
        alert("BMW no existe");
    }
}