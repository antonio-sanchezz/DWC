var sexo;
var sueldo;
var validadorSexo = true;
var validadorSueldo = true;
var mediaHombre = 0;
var mediaMujer = 0;
var contadorM = 0;
var contadorH = 0;

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
                    if (sexo == "H")
                    {
                        mediaHombre += sueldo;
                        contadorH++;
                    } else
                    {
                        mediaMujer += sueldo;
                        contadorM++;
                    }
                    document.write("Sexo: " + sexo + "<br>");
                    document.write("Sueldo: " + sueldo + "<br>");
                } else
                {
                    validadorSueldo = true;
                    alert("Sueldo incorrecto debe estar entre 1000 y 2000");
                }
            }while(validadorSueldo);
        } else
        {
        validadorSueldo = true;
        alert("Sexo incorrecto, pruebe con H(Hombre) o M(Mujer)");
        }
    } while(validadorSexo);
} while(sexo != "*");

document.write("Media hombres<br>");
document.write("Sueldo: " + mediaHombre/contadorH + "<br>");
document.write("Media mujeres<br>");
document.write("Sueldo: " + mediaMujer/contadorM + "<br>");