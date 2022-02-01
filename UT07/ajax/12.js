$(function(){
    $.ajax({
        url: "12.php",
        success: function(result){
            var datos = JSON.parse(result);

            $("body").append("<div>");
            $("div").attr('id', "todos-los-viajes");

            for (let i = 0; i < datos.length;i++) {
                $("#todos-los-viajes").append("<ul>").append("<li>").append("<img>", {
                    'src': datos[i]['src']
                });
            }
        }
    });
});