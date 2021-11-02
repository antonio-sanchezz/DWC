var num = parseInt(prompt("Escriba un número:"));

let numCifras = (numero) => {
    numCif = 0;

    numCif = numero.toString().length;

    return numCif;
}

document.write(numCifras(num));