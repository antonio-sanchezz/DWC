var num = parseInt(prompt("Indique un número:"));

document.write(obtenerPrimo(num));

function obtenerPrimo(numero) {
    esPrimo = false;

	if (numero == 0 || numero == 1 || numero == 3)
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