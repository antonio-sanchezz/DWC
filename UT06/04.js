window.addEventListener('load', get_fortune);

function get_fortune() {
    var hoy = new Date(); dichos= new Array(
    "Carpe Diem.",
    "El silencio es oro, pero la cinta aislante es plata.", "Una manzana al día, mantiene al doctor en la lejanía.", "A cada uno lo suyo.",
    "Si a la primera no lo consigues, inténtalo de nuevo.", "No te conformes con la mediocridad, pelea por el éxito", "Vive y deja vivir."
    );
    var n=dichos.length;
    numero = Math.floor(Math.random()*n);

    // Hoy es: + hoy.
    var divSelect = document.getElementById('divdicho');

    var txt1 = document.createTextNode("Hoy es: " + hoy);
    divSelect.appendChild(txt1);

    // Saltos de linea <br /><br />
    var elem2 = document.createElement('br');
    divSelect.appendChild(elem2);
    var elem3 = document.createElement('br');
    divSelect.appendChild(elem3);

    // Hoy la suerte te dice:
    var txt2 = document.createTextNode("Hoy la suerte te dice: ");
    divSelect.appendChild(txt2);

    // Saltos de linea <br /><br />
    var elem4 = document.createElement('br');
    divSelect.appendChild(elem4);
    var elem5 = document.createElement('br');
    divSelect.appendChild(elem5);

    // <em>" + dichos[numero] + "</em>
    var enfasis = document.createElement('em');
    divSelect.appendChild(enfasis);
    var txt3 = document.createTextNode(dichos[numero]);
    enfasis.appendChild(txt3);

}
    