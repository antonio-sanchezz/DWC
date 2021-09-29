/*
8. Diseñar un algoritmo para escribir en pantalla los n primeros números naturales, sus cuadrados, sus cubos y la suma de todos ellos.
*/

var num = prompt("Cantidad de numeros naturales");
var sum = 0;

num = parseInt(num);

for(var i = 1; i<=num; i++) {
    sum += i;
    document.write(i + "-");
    document.write(" Cuadrado: " + Math.pow(i,2));
    document.write(" Cubo: " + Math.pow(i,3) + "<br />");
}

document.write("Suma: " + sum);