
var euros;
var result;
var opcion;

do {
document.write("Cambiar a: <br>");
document.write("1. Dolar <br>");
document.write("2. Libras <br>");
document.write("3. Yenes <br>");
document.write("4. Franco Suizo <br>");
document.write("5. Corona Noruega <br>");
document.write("6. Salir <br>");

opcion = parseInt(prompt("Que opcion quiere elegir?(1-6)"));

switch(opcion) {
    case 1:
        
        result = euros * 1.16;
        document.write(euros + "€ son Dólares: " + result + "<br />");
    case 2:
        euros = parseInt(prompt("Introduzca la cantidad de dinero a convertir:"));
        result = euros * 0.86;
        document.write(euros + "€ son Libras: " + result + "<br />");
    case 3:
        euros = parseInt(prompt("Introduzca la cantidad de dinero a convertir:"));
        result = euros * 129.81;
        document.write(euros + "€ son Yenes: " + result + "<br />");
    case 4:
        euros = parseInt(prompt(" Introduzca la cantidad de dinero a convertir:"));
        result = euros * 1.08;
        document.write(euros + "€ son Franco Suizo: " + result + "<br />");
    case 5:
        euros = parseInt(prompt("Introduzca la cantidad de dinero a convertir:"));
        result = euros * 10.20;
        document.write(euros + "€ son Corona Noruega: " + result + "<br />");
    case 6:
        break;
}

} while (opcion != 6);