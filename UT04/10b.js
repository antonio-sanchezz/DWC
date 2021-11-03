let colocaEnMedio = (array1, array2) => {

    lengthArray1 = parseInt(array1.length/2);

    newArray = array1.splice(lengthArray1, 0, ...array2);

    return array1;
}

console.log(colocaEnMedio([1,2,6,7], [3,4,5]));