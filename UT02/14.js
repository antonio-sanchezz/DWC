var sexo;
var sueldo;
var validador = true;

do {
sexo = prompt("Indice su sexo (H/M):");
    if (sexo == "*")
    {
        break;
    }
    if (sexo == "H" || sexo == "M")
    {
        validador = false;

        sueldo = parseInt(prompt("Indique el sueldo:"));

        if(Number.isInteger(sueldo) && sueldo >= 1000 && sueldo <= 2000)
        {
            document.write("Correcto");
        } else
        {
            alert("Sueldo incorrecto");
        }
    } else
    {
        alert("Sexo incorrecto, pruebe con H(Hombre) o M(Mujer)");
    }
} while(validador);