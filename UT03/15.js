var palabra = "RADAR";
var newPalabra = palabra.split("");
console.log(newPalabra);
var alReves = newPalabra.reverse().join("");


if (palabra == alReves) {
    document.write("La palabra es palíndroma.");
} else {
    document.write("La palabra no es palíndroma.");
}