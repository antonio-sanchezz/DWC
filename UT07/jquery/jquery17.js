$(function(){

    $("#btt1").click(function() {          
        alert($("#parrafo").text());
    });

    $("#btt2").click(function() {          
        alert($("#parrafo").html());
    });

    $("#btt3").click(function() {          
        alert($("#inputText").val());
    });

    $("#btt4").click(function() {          
        alert($("#enlace").attr("href"));
    });

});