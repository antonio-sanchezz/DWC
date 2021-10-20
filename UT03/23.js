do
{
var dia1 = parseInt(prompt("Indique su dia de fecha:"));
var mes1 = parseInt(prompt("Indique su mes de fecha:"));
var year1 = parseInt(prompt("Indique su año de fecha:"));
var terminar = prompt("¿Otra fecha? (S/N)");

var fecha = new Date(year1, mes1-1, dia1).getTime();
var fechaMay;
var fechaMen;

if (!fechaMay && !fechaMen)
{
    fechaMay = fecha;
    fechaMen = fecha;
}
else
{
    if (fecha > fechaMay)
    {
        fechaMay = fecha;
    }
    else if (fecha < fechaMen)
    {
        fechaMen = fecha;
    }
}

} while (terminar == "S");

document.write("Fecha menor: " + new Date(fechaMen).toLocaleDateString() + "<br>");
document.write("Fecha mayor: " + new Date(fechaMay).toLocaleDateString());