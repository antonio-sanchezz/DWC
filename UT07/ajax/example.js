$(function(){
    $("#bttclick").click(function(){
        $.ajax({
            url: "example.php",
            success: function(result){
                var obj = JSON.parse(result);
                $("#result").append($("<div>", {
                    'text' : obj.name
                }));
            }
        });
    });
});