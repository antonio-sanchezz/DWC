var devolver = parseFloat(prompt("Cantidad de dinero:"));
var moneda2 = 0;
var moneda1 = 0;
var moneda50 = 0;
var moneda20 = 0;
var moneda10 = 0;
var moneda5 = 0;
var moneda2cents = 0;
var moneda1cent = 0;

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
document.write("Monedas 2: " + moneda2 + " 1: " + moneda1 + " 0.50: " + moneda50 + " 0.20: " + moneda20 + " 0.10: " + moneda10 + " 0.05: " + moneda5 + " 0.02: " + moneda2cents + " 0.01: " + moneda1cent);