var txt = "¡¡Sólo quedan 20 días de ofertas!!";

function publicidad() 
{
    document.title = txt;
    txt = txt.substring(1,txt.length) + txt.charAt(0);
    setTimeout("publicidad()", 200);
}

publicidad();
