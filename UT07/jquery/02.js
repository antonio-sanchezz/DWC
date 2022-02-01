$(function(){

    //$("p").eq(0).next().children().css("color", "red");
    //$("p").eq(0).next().find("li").eq(2).css("color", "green");
    //$("p").eq(0).next().find("li").eq(2).next().css("color", "purple");
    //$("p").eq(0).next().find("li").eq(2).nextAll().css("color", "purple");
    //$("a[href]").css("color", "red");
    //$("a:not([href])").css("color", "green");
    //$("a[href *= 'mod']").css("background", "yellow");
    //$("a[href ^= 'mod']").css("background", "yellow");
    //$("a[href $= '.html']").css("background", "yellow");
    //$("p").eq(1).next().find("ul").find("li:last").css("color", "green");
    //
    $("p").eq(1).next().children().find("li:nth-child(odd)").css("color", "green");
});