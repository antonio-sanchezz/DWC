$(function(){
    $("#bttclick").click(function(){

        var datos = $('#formAjax').serialize();

        $.post("10.php", {
            datos: datos
        });
    });
});