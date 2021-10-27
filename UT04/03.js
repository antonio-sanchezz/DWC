var num = parseInt(prompt("Escriba un número:"));

document.write(numCifras(num));

function numCifras(numero) {
    numCif = 0;

    numCif = numero.toString().length;

    return numCif;
}