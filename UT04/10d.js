let sumaArgPares = (...numeros) => {

    total = 0;

    for(let i of numeros)
    { 
        if (numeros[i] % 2 == 0)
        {
            total += numeros[i];
        }
    }

    return total;
}

document.write(sumaArgPares(1,2,3,4));