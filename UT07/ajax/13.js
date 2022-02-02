$(function(){
    $.ajax({
        url: "13.php",
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
                $("ul:first").append(lista1);
                // Añadir clase viaje a todos los li hijos del primer ul.
                $("ul:first").children("li").addClass("viaje");

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
                parrafo.hide();

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
            // Al pasar por encima de las imágenes aparezca deslizándose la descripción.
            $("img").hover(function() {
                // Pasados 5s se oculta la descripción.
                $(this).parent().find("p").fadeIn({ duration: 1000, queue: false }).delay(5000).slideUp(5000);
            });

            $("p").click(function() {
                $(this).parent().find("ul").toggleClass("iluminar");
            });

            $(".specs").find("li").dblclick(function() {
                $(this).toggleClass("destacada");
            });
        }
    });
});