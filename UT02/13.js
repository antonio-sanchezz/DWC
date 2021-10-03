var dia;
var mes;
var year;
var tarot_in;
var tarot_fin = 0;

dia = parseInt(prompt("Indice su dia de nacimiento:"));
mes = parseInt(prompt("Indice su mes de nacimiento:"));
year = parseInt(prompt("Indice su año de nacimiento:"));


if (dia <= 30 && dia > 0) {
    if (mes <= 12 && mes > 0) {
        if (Number.isInteger(year)) {
            tarot_in = (dia + mes + year).toString();
            for (i = 0; tarot_in.length > i; i++) {
                tarot_fin = tarot_fin + parseInt(tarot_in.substr(i,1));
            }
            document.write("Tarot: " + tarot_fin);
        } else {
            document.write("Formato de año incorrecto.");
        }
    } else {
        document.write("Formato de mes incorrecto.");
    }
} else {
    document.write("Formato de día incorrecto.");
}