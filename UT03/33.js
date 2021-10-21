function horaActual()
{
    var hoy = new Date();
    var hora = hoy.getHours();
    var minutos = hoy.getMinutes();

    if (hora < 10) hora = 0 + hora;
    if (minutos < 10) minutos = "0" + minutos;

    var horaFin = hora + ":" + minutos;
    window.document.title = horaFin
}

setInterval(horaActual, 60000);