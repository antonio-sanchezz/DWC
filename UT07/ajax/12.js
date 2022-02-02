$(function(){
    $.ajax({
        url: "12.php",
        success: function(result){
            var datos = JSON.parse(result);

            $("body").append("<div>");
            // Añadimos un id al div.
            $("div").attr('id', "todos-los-viajes");
            // Añadimos el título.
            $("#todos-los-viajes").append($("<h1>"));
            $("h1").append("Subtitulo");
            // Añadimos la lista principal.
            $("#todos-los-viajes").append($("<ul>"));

            for (let i = 0; i < datos.length;i++) {

                // Añadimos elementos a la lista principal
                var lista1 = $("<li>");
                $("ul:first").append(lista1);;

                // Imagen.
                var imagen = $("<img>", {
                    src: datos[i]['src']
                });
                lista1.append(imagen);

                // Párrafo.
                var parrafo = $("<p>", {
                    text: datos[i]['desc']
                });
                lista1.append(parrafo);

                // Specs.
                var lista2 = $("<ul>", {
                    class: "specs"
                });
                lista1.append(lista2);  

                // Specs List.
                for (let j = 0; j < datos[i]['specs'].length;j++) {
                    lista2.append($("<li>", {
                        text: datos[i]['specs'][j]
                    }));
                }
            }
        }
    });
});