horaActual();

var interval = setInterval(horaActual, 60000);

setTimeout(stopInterval, 5000);

function horaActual()
{
    var hoy = new Date();
    var hora = hoy.getHours();
    var minutos = hoy.getMinutes();
    var segundos = hoy.getSeconds();
    // hoy.toLocaleTimeString // Te da la hora HH:mm:ss en string

    if (hora < 10) hora = "0" + hora;
    if (minutos < 10) minutos = "0" + minutos;
    if (segundos < 10) segundos = "0" + segundos;

    var horaFin = hora + ":" + minutos + ":" + segundos;
    window.document.title = horaFin
}

function stopInterval() {
    clearInterval(interval);
}
