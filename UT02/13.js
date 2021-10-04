var dia;
var mes;
var year;
var tarot_in;
var tarot_fin = 0;

dia = parseInt(prompt("Indice su dia de nacimiento:"));
mes = parseInt(prompt("Indice su mes de nacimiento:"));
year = parseInt(prompt("Indice su año de nacimiento:"));

var sumFecha = dia + mes + year;
var sum = 0;
/*
if (dia <= 30 && dia > 0) {
    if (mes <= 12 && mes > 0) {
        if (Number.isInteger(year)) {
            tarot_in = (dia + mes + year).toString();
            for (i = 0; tarot_in.length > i; i++) {
                tarot_fin = tarot_fin + parseInt(tarot_in.substr(i,1));
            }
            document.write("Tarot: " + tarot_fin + "<br>");
        } else {
            document.write("Formato de año incorrecto.");
        }
    } else {
        document.write("Formato de mes incorrecto.");
    }
} else {
    document.write("Formato de día incorrecto.");
}
*/
do {
    if(sumFecha == 0) {
        sumFecha = sum;
        sum = 0;
    }
    sum += sumFecha % 10;
    sumFecha = parseInt(sumFecha / 10);
} while (sumFecha >= 1 || sum > 9);

document.write("Tarot: " + sum);