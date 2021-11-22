let numRep = (numeros) => {
    var repetidos = {}
    numeroRep = [];

    numeros.forEach((valor) => {
        repetidos[valor] = (repetidos[valor] || 0) + 1;
    });

    for (var k in repetidos)
    {
        numeroRep[k] = repetidos[k];
    }

    mayor = 0;
    menor = 0;
    numeroMasRep = 0;
    numeroMenosRep = 0;

    for (const [key, value] of Object.entries(numeroRep)) {
        if (value > mayor) {
            mayor = value;
            numeroMasRep = key;
        } else {
            if (menor == 0) {
                menor = value;
                numeroMenosRep = key;
            } else {
                menor = value;
                numeroMenosRep = key;
            }
        }
    }

    console.log("Mas repetido: " + mayor + " repeticiones del numero " + numeroMasRep);
    console.log("Menos repetido: " + menor + " repeticiones del numero " + numeroMenosRep);

    return mayor;
}

numRep([1,2,2,2,2,2,2,2,3,4,1,2,1,1,2,1,5,6]);