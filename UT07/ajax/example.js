$(function(){
    $("#bttclick").click(function(){
        $.ajax({
            url: "example.php",
            success: function(result){
                var obj = JSON.parse(result);
                var total = obj.val1 + obj.val2;
                $("#result").html(total);
            }
        });
    });
});