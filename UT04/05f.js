var num = parseInt(prompt("Indique un número:"));

let obtenerPrimo = (numero) => {
    esPrimo = false;

	if (numero == 0 || numero == 1 || numero == 3 || numero == 2)
    {
        esPrimo = true;
    } else
    {
        if (numero % 3 == 0 || numero % 2 == 0)
        {
            esPrimo = false;
        } else
        {
            esPrimo =true;
        }
    }

    return esPrimo;

}

document.write(obtenerPrimo(num));