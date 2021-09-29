/*
7. Elabora un programa que dado un precio y una cantidad pagada, obtengamos el cambio con el mínimo número de elementos (monedas o billetes).
Para devolver el cambio disponemos de una cantidad ilimitada de monedas y de billetes.
*/

var mensaje;
var precio = prompt("Precio");
var cantidadPagada = prompt("Cantidad pagada");
var devolver = precio - cantidadPagada;
var billete500 = 0;
var billete200 = 0;
var billete100 = 0;
var billete50 = 0;
var billete20 = 0;
var billete10 = 0;
var billete5 = 0;
var moneda2 = 0;
var moneda1 = 0;
var moneda50 = 0;
var moneda20 = 0;
var moneda10 = 0;
var moneda5 = 0;
var moneda2cents = 0;
var moneda1cent = 0;

if (devolver >= 500) {
    billete500 = Math.trunc(devolver / 500);
    devolver = devolver - billete500*500;
}
if (devolver >= 200) {
    billete200 = Math.trunc(devolver / 200);
    devolver = devolver - billete200*200;
}
if (devolver >= 100) {
    billete100 = Math.trunc(devolver / 100);
    devolver = devolver - billete100*100;
}
if (devolver >= 50) {
    billete50 = Math.trunc(devolver / 50);
    devolver = devolver - billete50*50;
}
if (devolver >= 20) {
    billete20 = Math.trunc(devolver / 20);
    devolver = devolver - billete20*20;
}
if (devolver >= 10) {
    billete10 = Math.trunc(devolver / 10);
    devolver = devolver - billete10*10;
}
if (devolver >= 5) {
    billete5 = Math.trunc(devolver / 5);
    devolver = devolver - billete5*5;
}
if (devolver >= 2) {
    moneda2 = Math.trunc(devolver / 2);
    devolver = devolver - moneda2*2;
}
if (devolver >= 1) {
    moneda1 = Math.trunc(devolver / 1);
    devolver = devolver - moneda1;
}
if (devolver >= 0.5) {
    moneda50 = Math.trunc(devolver / 0.5);
    devolver = devolver - moneda50*0.5;
}
if (devolver >= 0.2) {
    moneda20 = Math.trunc(devolver / 0.2);
    devolver = devolver - moneda20*0.2;
}
if (devolver >= 0.1) {
    moneda10 = Math.trunc(devolver / 0.1);
    devolver = devolver - moneda10*0.1;
}
if (devolver >= 0.05) {
    moneda5 = Math.trunc(devolver / 0.05);
    devolver = devolver - moneda5*0.05;
}
if (devolver >= 0.02) {
    moneda2cents = Math.trunc(devolver / 0.02);
    devolver = devolver - moneda2cents*0.02;
}
if (devolver >= 0.01) {
    moneda1cent = Math.trunc(devolver / 0.01);
    devolver = devolver - moneda1cent*0.01;
}

document.write("Billetes 500: " + billete500 + " 200: " + billete200 + " 100: " + billete100 + " 50: " + billete50 + " 20: " + billete20 + " 10: " + billete10 + " 5: " + billete5 + "<br />");
document.write("Monedas 2: " + moneda2 + " 1: " + moneda1 + " 0.50: " + moneda50 + " 0.20: " + moneda20 + " 0.10: " + moneda10 + " 0.05: " + moneda5 + " 0.02: " + moneda2cents + " 0.01: " + moneda1cent);