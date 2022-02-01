$(function(){
    $("#bttclick").click(function(){
        $.ajax({
            url: "09.php",
            success: function(result){
                var obj = JSON.parse(result);
                $("#result").html(obj);
            }
        });
    });
});