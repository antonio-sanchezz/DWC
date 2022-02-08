$(function(){
    $.ajax({
        url: "viajes.php",
        success: function(result){
            var viajes = JSON.parse(result);
            var contenido = $(".contenido");
            var contenido2 = $("<div>");
            $(contenido).append(contenido2);
            // Añadimos un id al div.
            $(contenido2).attr('id', "todos-los-viajes");
            // Añadimos el título.
            $("#todos-los-viajes").append($("<h1>"));
            $("h1").append("Viajes Guía Incluido");
            // Añadimos la lista principal.
            $("#todos-los-viajes").append($("<ul>"));

            for (let i = 0; i < viajes.length;i++) {
                // Añadimos elementos a la lista principal
                var lista1 = $("<li>");
                $("ul:first").append(lista1);
                // Añadir clase viaje a todos los li hijos del primer ul.
                $("ul:first").children("li").addClass("viaje");
                lista1.addClass(viajes[i]['clase_pais']);

                var titulo = $("<h2>");
                lista1.append(titulo);
                titulo.append(viajes[i]['ciudad_h2']);

                var span1 = $("<span class='detalle'>");
                lista1.append(span1);
                span1.append(viajes[i]['detalle_precio_total'] + "€" + " por " + viajes[i]['detalle_num_noches'] + " noches");

                var span2 = $("<span class='por-noche'>");
                lista1.append(span2);
                var span3 = $("<span class='precio'>");
                span2.append(span3);
                span3.append(viajes[i]['precio_noche'] + "€");
                span2.append("noche");

                var buttonRes = $("<button class='reserva'>");
                lista1.append(buttonRes);
                buttonRes.append("Resérvalo ya!");

                var lista2 = $("<ul class='fotos'>");
                lista1.append(lista2);
                var elementoFoto = $("<li>");
                lista2.append(elementoFoto);

                // Imagen.
                var imagen = $("<img>", {
                    src: viajes[i]['ruta_imagen']
                });
                elementoFoto.append(imagen);

                var span4 = $("<span>");
                elementoFoto.append(span4);
                span4.append(viajes[i]['pie_imagen']);

            }

            // Al pasar el raton por encima se le añade la clase destacado y cuando se quita se elimina.
            $(".fotos").hover(function() {
                $(this).parent().find(".precio").toggleClass("destacado");
        
            });
        
            // Al hacer click en la imagen se oculta el pie al hacer click de nuevo se muestra.
            $("img").click(function() {
                $(this).parent().find("span").toggle();
            });
            
            var tOut = null;

            $(".viaje").hover(function() {
                var precio = $(this).find(".precio").text();
                var newPrecio = precio.substring(0, precio.length -1) - (precio.substring(0, precio.length - 1) * 0.10);

                var contenedor = $(this);
                tOut = setTimeout(descuento, 5000, newPrecio, contenedor);
            },function(){
                clearTimeout(tOut);
            });

            function descuento (newPrecio, viaje) {
                viaje.find(".precio").text(newPrecio + "€");
                viaje.find(".detalle").text("DESCUENTO DEL 10% !!");
            }
        }
    });
});