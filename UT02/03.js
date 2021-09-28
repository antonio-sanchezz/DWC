// 3. Realiza un algoritmo que lea un dato de teclado y calcule e imprima su inverso. Considere el caso especial del valor 0 mostrando el mensaje de error correspondiente.

var num = parseInt(prompt("Indique un numero"));

if(num == 0) {
    valor = "Error no se puede calcular el valor inverso de 0."
} else {
    valor = 1/num;
}

document.write(valor);