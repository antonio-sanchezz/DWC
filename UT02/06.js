/*
6. Diseñar un algoritmo que tomando las coordenadas cartesianas de un punto en el plano y calcule e imprima el cuadrante al que pertenece dicho punto.
También debe detectar cuando está en el origen o sobre un eje.
*/

var mensaje;
var coordenadas = prompt("Indique coordenadas (x,y)").split(",");
var x = coordenadas[0];
var y = coordenadas[1];

if(x < 0 && y > 0) {
    mensaje = "Cuadrante II";
} else if (x > 0 && y > 0) {
    mensaje = "Cuadrante I";
} else if (x < 0 && y < 0) {
    mensaje = "Cuadrante III";
} else if (x > 0 && y < 0) {
    mensaje = "Cuadrante IV";
} else if (x == 0 && y == 0) {
    mensaje = "Esta en el origen";
} else if (x == 0 || y == 0) {
    mensaje = "Esta sobre un eje";
}

document.write(mensaje);