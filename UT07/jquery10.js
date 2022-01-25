$(function(){

    $("#campoTexto").focus(function(){
        $(this).css("background-color", "green");
    });

    $("#campoTexto").blur(function(){
        $(this).css("background-color", "red");
    });

});