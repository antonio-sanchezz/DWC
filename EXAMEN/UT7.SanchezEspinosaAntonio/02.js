$(function(){
    $("#bttclick").click(function(){

        var nombre = $("#nombre").val();
        var ciudad = $("#ciudad").val();

        $.ajax({
            data: {nombre:nombre, ciudad:ciudad},
            url: "02.php",
            type: "POST",
            success: function(result){
                $("body").append(result);
            }
        });
    });
});