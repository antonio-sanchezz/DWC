/*
4. Escriba un algoritmo que lea un instante de tiempo dado en horas y minutos y escriba como respuesta los mensajes “Buenos días” “Buenas tardes” “Buenas noches”, de acuerdo con las siguientes reglas:

a. Es de día desde las 7:30 hasta las 14:00 horas.
b. Es tarde desde las 14:01 hasta las horas 20:30.
c. Es noche desde las 20:31 hasta las horas 7:29.

*/

var mensaje;
var hora = prompt("Indique una hora", "HH:mm");

if (hora >= "07:30" && hora <= "14:00") {
    mensaje = "Buenos dias";
} else if (hora >= "14:01" && hora <= "20:30") {
    mensaje = "Buenas tardes";
} else {
    mensaje = "Buenas noches";
}

document.write(mensaje);