menu();
do 
{
    var result = 0;
    var opcion = parseInt(prompt("Elija una opción:"));
    switch(opcion)
    {
        case 1:
            num = elegir();
            result = Math.ceil(num);
            break;
        case 2:
            num = elegir();
            result = Math.floor(num);
            break;
        case 3:
            num = elegir();
            result = Math.round(num);
            break;
        case 4:
            num1 = elegir();
            num2 = elegir();
            result = Math.max(num1, num2);
            break;
        case 5:
            num1 = elegir();
            num2 = elegir();
            result = Math.min(num1, num2);
            break;
        case 6:
            num1 = elegir();
            num2 = elegir();
            result = Math.pow(num1, num2);
            break;
        case 7:
            num = elegir();
            result = Math.pow(num, 2);
            break;
        case 8:
            break;
    }
    if (opcion != 8)
    {
        alert("Resultado: " + result);
    }
} while (opcion != 8);

function menu()
{
    document.write("1. Redondeo a su inmediato superior de un número.<br>");
    document.write("2. Redondeo a su inmediato inferior de un número.<br>");
    document.write("3. Redondeo al número más cercano.<br>");
    document.write("4. Cálculo del número máximo entre dos dados.<br>");
    document.write("5. Cálculo del número mínimo entre dos dados.<br>");
    document.write("6. Cálculo de un número elevado a otro.<br>");
    document.write("7. Cálculo de la raíz cuadrada de un número.<br>");
    document.write("8. Salir");
}

function elegir()
{
    var num = parseInt(prompt("Introduzca un numero:"));
    return num;
}
