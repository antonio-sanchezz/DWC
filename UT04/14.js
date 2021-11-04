var num = parseInt(prompt("¿Cuantos numeros desea añadir?"));

let obtenerMatriz = (num) => {
    var array = [];

    while(num > 0) {
        
        randomNumber = Math.floor(Math.random()*100);
        array.push(randomNumber);
        num--;
    }
    return array;
}


console.log(obtenerMatriz(num));
