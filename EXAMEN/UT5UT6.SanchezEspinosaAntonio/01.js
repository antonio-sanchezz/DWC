window.addEventListener('load', iniciar);

function iniciar() {

    generarDOM();

}

/*
 * Funcion que nos permite generar el html.
 */
function generarDOM()
{

    // Json con los datos de las series.
    var json = [
        {titulo: "Beaking Bad",genero: "Drama",sinopsis: "Altamente aclamado por la crítica, este drama televisivo escrito y producido por Vince Gilligan ('Expediente X') nos muestra la vida de Walter White (Bryan Cranston 'Malcolm'), un genio en el campo ...",src:"https://es.web.img3.acsta.net/c_310_420/pictures/18/04/04/22/52/3191575.jpg"},
        {titulo: "Juego de Tronos",genero: "Fantasía",sinopsis: "HBO, desde la calidad que caracteriza a la cadena, nos brinda una vez más una magistral adaptación televisiva de la serie de novelas 'Canción de hielo y fuego' del escritor estadounidense George R. ...",src:"https://es.web.img2.acsta.net/c_310_420/pictures/19/03/22/10/08/5883111.jpg?coixp=50&coiyp=40"},
        {titulo: "Peaky Blinders",genero: "Crimen,Drama",sinopsis: "Peaky Blinders es un drama de BBC que narra la historia de la familia gitana Shelby y su banda de gángsters, un grupo de personas características por sus boinas con cuchillas y dueñas de los ...",src:"https://es.web.img2.acsta.net/c_310_420/pictures/15/10/23/08/59/222051.jpg?coixp=45&coiyp=64"}
    ];

    var titlePage = document.createElement("h1");
    var txtTitlePage = document.createTextNode("Las series más vistas");
    titlePage.appendChild(txtTitlePage);
    document.body.appendChild(titlePage);

    var div1 = document.createElement('div');
    document.body.appendChild(div1);

    var lista = document.createElement("ul");
    lista.style.listStyle = 'none';
    div1.appendChild(lista);

    // Generamos los elementos de cada serie del array json.
    for (let i = 0;i < json.length;i++)
    {

        var li = document.createElement('li');
        lista.appendChild(li);

        var div2 = document.createElement('div');
        div2.setAttribute("class", "left-block");
        li.appendChild(div2);

        var title = document.createElement("p");
        title.setAttribute("class", "titulo");
        var txtTitle = document.createTextNode(json[i]["titulo"]);
        title.appendChild(txtTitle);
        div2.appendChild(title);

        var div3 = document.createElement('div');
        div3.setAttribute("class", "desc");
        div3.style.display = "none";
        div2.appendChild(div3);

        var div4 = document.createElement('div');
        div4.setAttribute("class", "content_genre");
        div3.appendChild(div4);

        var bold = document.createElement('b');
        div4.appendChild(bold);
        var boldText = document.createTextNode("Género: ");
        bold.appendChild(boldText);
        var genero = document.createTextNode(json[i]["genero"]);
        div4.appendChild(genero);

        var p1 = document.createElement('p');
        p1.setAttribute("class", "product-desc");
        div3.appendChild(p1);
        
        var bold2 = document.createElement('b');
        p1.appendChild(bold2);
        var boldText2 = document.createTextNode("Sinopsis: ");
        bold2.appendChild(boldText2);
        var genero = document.createTextNode(json[i]["sinopsis"]);
        p1.appendChild(genero);

        var img = document.createElement('img');
        img.setAttribute("src", json[i]["src"]);
        img.setAttribute("title", json[i]["titulo"]);
        div3.appendChild(img);
    }

    var tituloClick = document.getElementsByClassName('titulo');

    for (let i = 0; i < tituloClick.length; i++)
    {
        // Al hacer click en el titulo de la serie ocultaremos o mostraremos el contenido de la misma.
        tituloClick[i].addEventListener('click', showHide);
    }

}

/*
 * Funcion que nos permite ocultar y desocultar la informacion de cada elemento.
 */
function showHide() {

    // Comprobamos si se encuentra oculta lo hacemos visible y si no la ocultamos.
    if (this.nextSibling.style.display == "none")
    {
        visible = "block";
    } else
    {
        visible = "none";
    }

    var padre = this.parentNode;
    var hijos = padre.childNodes;

    for (let i = 1; i < hijos.length; i++)
    {
        hijos[i].style.display = visible;
    }
        
}