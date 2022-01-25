$(function(){

    $("button").click(function() {          
        if ($(this).text() == "Ocultar") {
            $(this).text("Mostrar");
            $(this).parent().hide();
            //$('body').append($(this));
        } else {
            $(this).text("Mostrar");
            $(this).parent().show();
        }
    });

});