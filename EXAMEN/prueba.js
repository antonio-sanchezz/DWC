var riesgo;

do 
{
    do
    {
        // Solicitamos los datos de estatura al usuario.
        var estatura = prompt("Estatura: (m)");

        // Mensaje de error si el valor es negativo.
        if (estatura < 0)
        {
            alert("Valor negativo de estatura incorrecta, introduzcala de nuevo.");
        }
    } while (estatura < 0);

    do
    {
        // Solicitamos los datos de peso al al usuario.
        var peso = prompt("Peso: (Kg)");

        // Mensaje de error si el valor es negativo.
        if (estatura < 0)
        {
            alert("Valor negativo de peso incorrecta, introduzcala de nuevo.");
        }
    } while (peso < 0);

    do
    {
        // Solicitamos los datos de edad al al usuario.
        var edad = prompt("Edad: (Años)");

        // Mensaje de error si el valor es negativo.
        if (estatura < 0)
        {
            alert("Valor negativo de edad incorrecta, introduzcala de nuevo.");
        }
    } while (estatura < 0);

    // Calculamos el imc.
    var imc = peso/(Math.pow(estatura, 2));

    // Realizamos las diferentes condiciones para averiguar el riesgo del usuario según su IMC.
    if (imc < 22)
    {
        if (edad < 45)
        {
            riesgo = "Bajo";
        }
        else if (edad >= 45)
        {
            riesgo = "Medio";
        }
    } else if (imc >= 22)
    {
        if (edad < 45)
        {
            riesgo = "Medio";
        }
        else if (edad >= 45)
        {
            riesgo = "Alto";
        }
    }

    // Mostramos por pantalla el IMC y riesgo del usuario.
    alert("IMC: " + imc + " Riesgo: " + riesgo);

    // Si el usuario introduce SI se volverá a realizar el proceso de nuevo, en caso de contrario el programa finalizará.
    var opcion = prompt("¿Quiere hacer los calculos de nuevo?(SI/NO)");
} while (opcion == "SI");

