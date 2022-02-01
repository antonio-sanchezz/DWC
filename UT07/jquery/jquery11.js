$(function(){

    $("button").click(function() {    
        //$(this).next.toogle();      
        if ($(this).text() == "Ocultar") {
            $(this).text("Mostrar");
            $(this).next().hide();
        } else {
            $(this).text("Ocultar");
            $(this).next().show();
        }
    });

});