var dia1 = parseInt(prompt("Indice su dia de fecha 1:"));
var mes1 = parseInt(prompt("Indice su mes de fecha 1:"));
var year1 = parseInt(prompt("Indice su año de fecha 1:"));

var dia2 = parseInt(prompt("Indice su dia de fecha 2:"));
var mes2 = parseInt(prompt("Indice su mes de fecha 2:"));
var year2 = parseInt(prompt("Indice su año de fecha 2:"));

var fecha1 = new Date(year1, mes1-1, dia1).getTime();
var fecha2 = new Date(year2, mes2-1, dia2).getTime();

if (fecha1 > fecha2) {
    document.write("La fecha 2 introducida es menor a la fecha 1<br>");
    document.write("La diferencia entre las fechas en segundos es de: " + (fecha1 - fecha2)/1000);
} else {
    document.write("La fecha 2 introducida es mayor a la fecha 1<br>");
    document.write("La diferencia entre las fechas en segundos es de: " + (fecha2 - fecha1)/1000);
}