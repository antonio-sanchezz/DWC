var dia = parseInt(prompt("Indique su dia de nacimiento:"));
var mes = parseInt(prompt("Indique su mes de nacimiento:"));
var year = parseInt(prompt("Indique su año de nacimiento:"));

var hoy = new Date();
var hoyM = hoy.getMonth();
var hoyD = hoy.getDay();
var hoyY = hoy.getFullYear();

var nacimiento = new Date(year, mes-1, dia).getTime();

var contador = 0;
var cumple;

while(contador < 50)
{

    proximoCumple = new Date(hoyY+contador, mes-1, dia);

    switch(proximoCumple.getDay())
    {
        case 0:
            cumple = "Lunes";
            break;
        case 1:
            cumple = "Martes"
            break;
        case 2:
            cumple = "Miercoles";
            break;
        case 3:
            cumple = "Jueves";
            break;
        case 4:
            cumple = "Viernes";
            break;
        case 5:
            cumple = "Sabado";
            break;
        case 6:
            cumple = "Domingo";
            break;
    }

    document.write(cumple + "<br>");
    contador++;
}