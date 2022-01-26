$(function(){

    $("body").append($("<p>", {
        'text' : 'Texto añadido 1',
        'class' : 'italic'
    }));

    $("body").append($("<p>", {
        'text' : 'Texto añadido 2'
    }));

    $("#btt1").click(function() {

        $('.italic').remove();

    });

});