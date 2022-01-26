$(function(){

    $("#btt1").click(function() {
        var parrafo = document.createElement('p');
        let text = document.createTextNode("Texto añadido 1");
        parrafo.appendChild(text);
        $("p").prepend(parrafo);

        $("p").append($("<p>", {
            'text' : 'Texto añadido 2'
        })
        );
    });

});