/*
5. Para comprobar si un año es o no bisiesto se usa la siguiente regla: “Un año es bisiesto si es divisible por 400, o bien es divisible por 4 pero no por 100”.
Diseñar un programa que utilizando una variable lógica que tenga valor cierto si el año es bisiesto y falso si no lo es.
*/

var mensaje = false;
var fecha = parseInt(prompt("Indique un año"));

if (fecha % 400 == 0 || (fecha % 4 == 0 && fecha % 100 != 0)) {
    mensaje = true;   
}

document.write(mensaje);