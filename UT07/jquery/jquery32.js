$(function(){

    $("#animate").click(function() {
        $("div").animate({
            left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'
        });
        $("div").animate({
            left: '10px',
            opacity: '1',
            height: '250px',
            width: '250px'
        });
        $("div").animate({
            left: '400px',
            opacity: '0.5',
            height: '550px',
            width: '550px'
        });
    });

    $("#stop").click(function() {
        $("#animate").stop();
    });

});