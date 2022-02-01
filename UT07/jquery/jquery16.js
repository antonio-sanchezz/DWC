$(function(){

    $("#bttMove").click(function() {          
        $("#div1").animate({"left": "100px"}, "slow");
        if ($("#div1").text() == "HELLO") {
            $("#div1").css({'fontSize' : '50px'});
        }
    });

});