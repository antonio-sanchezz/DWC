var array = [1,2,3,3,3,2,4,5,6,7,6,8,7,9];

let eliminarRepetidos = (array) => {

    var lista = new Set(array);
    return lista;
}

console.log(eliminarRepetidos(array));