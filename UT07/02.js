$(function(){

    $("p").eq(0).next().children().css("color", "red");
    $("p").eq(0).next().find("li").eq(2).css("color", "green");

});