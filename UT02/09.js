/*
9. Hallar el menor, el mayor y la media de un conjunto de números positivos leídos de teclado.
*/

var num;
var max;
var min;
var media;
var contador;
var total = 0;
       
        contador = prompt("Introduzca cantidad de numeros");
        contador = parseInt(contador);
        for(var i = 1; i <= contador; i++)
        {
            num = prompt("Introduzca numero");
            num = parseInt(num);
            if(i == 1)
            {
                max = num;
                min = num;
            }
            if (num > max)
            {
                max = num;
            }
            if(num < min)
            {
                min = num;
            }
            total += num;
        }
        media = total/contador;

document.write("Maximo: " + max + "<br />");
document.write("Minimo: " + min + "<br />");
document.write("Media: " + media);
