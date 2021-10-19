var dia = parseInt(prompt("Indice su dia de nacimiento:"));
var mes = parseInt(prompt("Indice su mes de nacimiento:"));
var year = parseInt(prompt("Indice su año de nacimiento:"));

var hoy = Date.now();
var nacimiento = new Date(year, mes-1, dia).getTime();

if (hoy > nacimiento) {
    document.write("La fecha introducida es menor a la actual");
} else {
    document.write("La fecha introducida es mayor a la actual");
}