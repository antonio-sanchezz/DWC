//2. Diseñar un algoritmo para hallar el valor absoluto de un número leído de teclado y presentarlo en pantalla.

var valor;
var num = parseInt(prompt("Indique un numero"));

if (num > 0) {
    valor = num;
} else {
    valor = num*(-1)
}

document.write(valor);
