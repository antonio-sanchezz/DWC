var telefono = prompt("Introduzca un numero de telefono:");
var prefijo = telefono.substr(0,3);

if (prefijo == "950")
{
    document.write("Almería");
}
else if(prefijo == "954")
{
    document.write("Sevilla");
}
else if(prefijo == "956")
{
    document.write("Cádiz");
}
else if(prefijo == "957")
{
    document.write("Córdoba");
}
else if(prefijo == "958")
{
    document.write("Granada");
}
else if(prefijo == "959")
{
    document.write("Huelva");
}
else if(prefijo == "953")
{
    document.write("Jaén");
}
else if(prefijo == "951")
{
    document.write("Málaga");
}
else
{
    document.write("Prefijo desconocido.");
}