$(function(){
    $("#curso").change(function() {
        var curso = $("#curso").val();

        $.ajax({
            data: {curso:curso},
            url: "curso.php",
            type: "post",
            success: function(result){
                var datos = JSON.parse(result);

                $("body").append("<div>");

                $("div:first").addClass("alumnos");

                $("<ul>").appendTo("div:first");

                $("ul:first").empty();
                for (let i = 0; i < datos.length;i++) {
                    var lista = $("<li>");
                    $("ul:first").append(lista);
                    lista.append(datos[i]['nombre'] + " " + datos[i]['apellidos']);
                }
            }
        });
    });
});