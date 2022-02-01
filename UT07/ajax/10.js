$(function(){
    $("#bttclick").click(function(){

        var nombre = $("#nombre").val();
        var ciudad = $("#ciudad").val();

        $.ajax({  
            data: {nombre:nombre, ciudad:ciudad},
            url: "10.php",
            type: "POST"
        });
    });
});