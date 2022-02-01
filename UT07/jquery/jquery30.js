$(function(){

    if (!$('img').complete) {
        $('body').append($('img').attr('title'));
        $('img').remove();
    }

});