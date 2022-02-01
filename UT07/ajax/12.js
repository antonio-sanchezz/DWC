$(function(){
    $.ajax({
        url: "12.php",
        success: function(result){
            var datos = JSON.parse(result);

            $("body").append("<div>");
            $("div").attr('id', "todos-los-viajes");
            $("#todos-los-viajes").append("<ul>");

            for (let i = 0; i < datos.length;i++) {

                $("<li>").appendTo("ul");

                // Imagen.
                var imagen = $("<img>", {
                    src: datos[i]['src']
                });
                imagen.appendTo($("li"));

                // Párrafo.
                var parrafo = $("<p>", {
                    text: datos[i]['desc']
                });
                parrafo.appendTo($("li"));

                // Specs.
                var lista2 = $("<ul>", {
                    class: "specs"
                });
                lista2.appendTo("li");    
                for (let j = 0; j < datos[i]['specs'].length;j++) {
                   $("<li>").appendTo(lista2);
                }
            }
        }
    });
});