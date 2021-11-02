var num = parseInt(prompt("Indique un número:"));

let obtenerPrimo = (numero) => {
    esPrimo = false;

	if (numero == 0 || numero == 1 || numero == 3 || numero == 2)
    {
        esPrimo = true;
    } else
    {
        do {
            if (numero % 3 == 0 || numero % 2 == 0 || numero % 5 == 0 || numero % 7 == 0)
            {
                esPrimo = false;
                numero++;
            } else
            {
                esPrimo =true;
            }
        } while(!esPrimo);
    }

    return numero;

}

document.write(obtenerPrimo(num));