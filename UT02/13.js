var dia;
var mes;
var year;

dia = parseInt(prompt("Indice su dia de nacimiento:"));
mes = parseInt(prompt("Indice su mes de nacimiento:"));
year = parseInt(prompt("Indice su año de nacimiento:"));

if (dia <= 30 && dia > 0) {
    if (mes <= 12 && mes > 0) {
        if (Number.isInteger(year)) {

        } else {
            document.write("Formato de año incorrecto.");
        }
    } else {
        document.write("Formato de mes incorrecto.");
    }
} else {
    document.write("Formato de día incorrecto.");
}