$(function(){

    $("#bttMove").click(function() {          
        $("#div1").width($("#div1").width() + 150);
        $("#div1").height($("#div1").height() + 150);
        $("#div1").animate({"left": "150px"}, "slow");
    });

});