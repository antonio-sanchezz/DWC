var contadorPalabras = 0;
var contadorC = 0;
var contadorN = 0;

while(true) {
    var texto = prompt("Introduzca una palabra:");

    if (texto == "ULTIMO") {
        break;
    } else {
        if (texto.charAt(0) == "C") {
            contadorC++;
        }
        if (texto.indexOf("ñ") > 0) {
            contadorN++;
        }
        contadorPalabras++;
        continue;
    }

}

document.write("Palabras: " + contadorPalabras + "<br>");
document.write("Palabras que comienza por C: " + contadorC + "<br>");
document.write("Palabas que contienen la ñ: " + contadorN);