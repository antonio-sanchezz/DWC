var dia = parseInt(prompt("Indique su dia de nacimiento:"));
var mes = parseInt(prompt("Indique su mes de nacimiento:"));
var year = parseInt(prompt("Indique su año de nacimiento:"));

var hoy = new Date();
var hoyM = hoy.getMonth();
var hoyD = hoy.getDay();
var hoyY = hoy.getFullYear();

var nacimiento = new Date(year, mes-1, dia).getTime();

if (hoyM <= mes && hoyD <= dia) {
    proximoCumple = new Date(hoyY, mes-1, dia);
} else {
    proximoCumple = new Date(hoyY+1, mes-1, dia);
}

var diasRestantes = Math.trunc((proximoCumple.getTime()-hoy.getTime())/86400000)+1;

document.write("Quedan " + diasRestantes + " dias para tu cumpleaños.");
