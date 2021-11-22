var numeros = [1, 2, 3, 4, 5, 9, 8, 7, 6];

mayorMenor(numeros);

function mayorMenor(numeros) {

    console.log(numeros);

    var mayor = Math.max(...numeros);
    var menor = Math.min(...numeros);

    alert("Menor: " + menor + " Mayor: " + mayor);

}