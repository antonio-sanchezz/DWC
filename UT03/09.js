var contadorPalabras = 0;
var contadorA = 0;

var texto = "El perro de san Roque no tiene rabo ahora si tiene";

var palabra = texto.split (" ");
//Contamos todos los trozos de cadenas que existen
contadorPalabras = palabra.length;

for(var i= 0; i < contadorPalabras;i++) {
    if (palabra[i].charAt(0) == "A" || palabra[i].charAt(0) == "a") {
        contadorA++;
    }
}

document.write("Palabras: " + contadorPalabras + "<br>");
document.write("Palabras que comienza por A: " + contadorA + "<br>");