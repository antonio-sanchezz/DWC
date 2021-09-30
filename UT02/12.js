var nota;
var mensaje;

nota = parseInt(prompt("Introduzca una nota:"));

if(nota < 5) {
    mensaje = "SUSPENSO";
} else if (nota >= 5 && nota < 6) {
    mensaje = "APROBADO";
} else if (nota >= 6 && nota < 7) {
    mensaje = "BIEN";
} else if (nota >= 7 && nota <= 8) {
    mensaje = "NOTABLE";
} else if (nota >= 9 && nota <= 10) {
    mensaje = "SOBRESALIENTE";
}

document.write(mensaje);