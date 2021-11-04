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

let sumNumPares = (...num) => {
    return num.filter((val) => {
        return val % 2 == 0;
    }).reduce((total, val) => {
        return total += val;
    })
}


document.write(sumaArgPares(1,2,3,4) + "<br>");
document.write(sumNumPares(1,2,3,4));