$(function(){

    $("#foco").click(function() {          
        $("input").focus();
    });

    $("#quitarFoco").click(function() {          
        $("input").focusout();
    });

});