$(function(){

    $('input[type="text"]').addClass("rojo");
    $('input[type="password"]').addClass("rojo");

    $("body").append($("<span>", {
        'class' : 'rojo'
    }));

    $("span").append($('input[type="radio"]'));
    $("span").append($('input[type="checkbox"]'));

    $("input:disabled").addClass("rojo");

});