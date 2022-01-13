window.addEventListener('load', iniciar);

function iniciar() {

    var datos = [
        {src:"/img/img1.jpg", desc: "descripcion1", specs: ["spec11", "spec12"]},
        {src:"/img/img2.jpg", desc: "descripcion2", specs: ["spec21", "spec22"]},
    ];

    var viajes = document.createElement('div');
    viajes.setAttribute("id", "todos-los-viajes");
    document.body.appendChild(viajes);

    var titulo = document.createElement('h1');
    let aTexto = document.createTextNode("Subtitulo");
    titulo.appendChild(aTexto);
    viajes.appendChild(titulo);

    var lista = document.createElement('ul');
    viajes.appendChild(lista);

    for (let i = 0;i < datos.length;i++) {
        var lis = document.createElement('li');
        lista.appendChild(lis);

        var img = document.createElement('img');
        img.setAttribute("src", datos[i].src);
        lis.appendChild(img);

        var parrafo = document.createElement('p');
        let pTexto = document.createTextNode(datos[i].desc);
        lis.appendChild(parrafo);
        lis.appendChild(pTexto);

        var ul2 = document.createElement('ul');
        ul2.setAttribute("class", "specs");
        lis.appendChild(ul2);
        
        for(let j = 0;j < datos[i].specs.length;j++) {
            var lis2 = document.createElement('li');
            let liText = document.createTextNode(datos[i].specs[i]);

            ul2.appendChild(lis2);
            lis2.appendChild(liText);
            
        }


    }

}