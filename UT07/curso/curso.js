$(function(){
    $.ajax({
        url: "curso.php",
        success: function(result){
            var datos = JSON.parse(result);
        }
    })
});