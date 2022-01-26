$(function(){

    $("button").click(function() {          
        if ($(this).text() == "Ocultar") {
            $(this).text("Mostrar");
            $(this).next().hide();
        } else {
            $(this).text("Ocultar");
            $(this).next().show();
        }
    });

});