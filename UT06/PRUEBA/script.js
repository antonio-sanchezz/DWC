window.addEventListener('load', iniciar);

function iniciar() {

    generarDOM();

    var botonMostrar = document.getElementsByTagName('h1')[0];
    botonMostrar.textContent = "OCULTAR JUGUETES";
    botonMostrar.addEventListener('click', showHideList);

}

/*
 * Funcion que nos permite generar todo el documento html.
 */
function generarDOM() {

    arrayJuguetes = [
        {	
            img:"https://juguettos.com/1361787-large_default/A0041951.jpg", precio:"14,99",
            href:"https://juguettos.com/1039-la-banda", ref:"A0041951",
            title:"La Banda Tambor Acústico", coleccion:"La Banda"
        },
        {	img:"https://juguettos.com/1362350-large_default/A0133071.jpg", precio:"21,99",
            href:"https://juguettos.com/1039-la-banda", ref:"A0051216",
            title:"La Banda Guitarra Española", coleccion:"La Banda"
        }
    ];

    var div1 = document.createElement('div');
    document.body.appendChild(div1);

    var ul1 = document.createElement('ul');
    ul1.style.listStyle = 'none';
    div1.appendChild(ul1);

    for (let i = 0;i < arrayJuguetes.length;i++) {
        var li1 = document.createElement('li');
        ul1.appendChild(li1);

        var div2 = document.createElement('div');
        div2.setAttribute("class", "left-block");
        li1.appendChild(div2);

        var img1 = document.createElement('img');
        img1.setAttribute("src", arrayJuguetes[i].img);
        img1.setAttribute("title", arrayJuguetes[i].title);
        div2.appendChild(img1);

        var div3 = document.createElement('div');
        div3.setAttribute("class", "desc");
        div3.style.display = "none";
        div2.appendChild(div3);

        var div4 = document.createElement('div');
        div4.setAttribute("class", "content_price");
        let texto1 = document.createTextNode(arrayJuguetes[i].precio);
        div4.appendChild(texto1);
        div3.appendChild(div4);

        var enlace = document.createElement('a');
        enlace.setAttribute("href", arrayJuguetes[i].href);
        let aTexto = document.createTextNode(arrayJuguetes[i].coleccion);
        enlace.appendChild(aTexto);
        div3.appendChild(enlace);

        var parrafo = document.createElement('p');
        parrafo.setAttribute("class", "product_desc");
        let pTexto = document.createTextNode("Ref: " + arrayJuguetes[i].ref);
        parrafo.appendChild(pTexto);
        div3.appendChild(parrafo);
        
    }

    var imagenClick = document.getElementsByTagName('img');

    for (let i = 0; i < imagenClick.length; i++) {
        imagenClick[i].addEventListener('click', showHide);
    }
}

/*
 * Funcion que nos permite ocultar y desocultar la lista de imagenes.
 */
function showHideList() {

    var contenedor = document.getElementsByTagName('div')[0];
    var botonMostrar = document.getElementsByTagName('h1')[0];

    if (contenedor != undefined) {
        contenedor.remove();
        botonMostrar.textContent = "MOSTRAR JUGUETES";
    } else {
        generarDOM();
        botonMostrar.textContent = "OCULTAR JUGUETES";
    }

    console.log("asd");
}

/*
 * Funcion que nos permite ocultar y desocultar la informacion de cada elemento.
 */
function showHide() {

    if (this.nextSibling.style.display == "none") {
        visible = "block";
    } else {
        visible = "none";
    }

    var padre = this.parentNode;
    var hijos = padre.childNodes;

    for (let i = 1; i < hijos.length; i++) {
        hijos[i].style.display = visible;
    }
        
}