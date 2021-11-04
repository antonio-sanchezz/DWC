arrayFinal = [];

while(true) {

    var cadena = prompt("¿Nombre, apellidos, DNI, fecha de nacimiento separadas por coma.", "Antonio,Sanchez,Espinosa,23456789Z,25/02/1998");

    if (!cadena) {
        break;
    }

    array = cadena.split(",");

    arrayTemp = [];

    arrayTemp['nombre'] = array[0];
    arrayTemp['apellido1'] = array[1];
    arrayTemp['apellido2'] = array[2];
    arrayTemp['dni'] = array[3];
    arrayTemp['fechaNacimiento'] = array[4];

    console.log(arrayTemp);

    arrayFinal.push(arrayTemp);

}

console.log(arrayFinal);