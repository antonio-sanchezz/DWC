var sexo;
var sueldo;
var validadorSexo = true;
var validadorSueldo = true;

do {
    do {
    sexo = prompt("Indice su sexo (H/M):");
        if (sexo == "*")
        {
            break;
        }
        if (sexo == "H" || sexo == "M")
        {
            validadorSexo = false;
            do {
                sueldo = parseInt(prompt("Indique el sueldo:"));

                if(Number.isInteger(sueldo) && sueldo >= 1000 && sueldo <= 2000)
                {
                    validadorSueldo = false;
                    document.write("Sexo: " + sexo + "<br>");
                    document.write("Sueldo: " + sueldo + "<br>");
                } else
                {
                    alert("Sueldo incorrecto");
                }
            }while(validadorSueldo);
        } else
        {
        alert("Sexo incorrecto, pruebe con H(Hombre) o M(Mujer)");
        }
    } while(validadorSexo);
} while(sexo != "*");