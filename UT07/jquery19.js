$(function(){

    $("#btt1").click(function() {
        var parrafo = document.createElement('p');
        let text = document.createTextNode("Texto añadido");
        parrafo.appendChild(text);
        $("body").append(parrafo);
    });

    $("#btt2").click(function() {          
        var list = document.createElement('li');
        let text = document.createTextNode("Texto");
        list.appendChild(text);
        $("ul").append(list);
    });

    $("#btt3").click(function() {          
        var boton = document.createElement('button');
        let text = document.createTextNode("Botón");
        boton.appendChild(text);
        $("body").append(boton);
    });

});