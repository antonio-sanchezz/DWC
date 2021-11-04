//19,22+

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

    arrayFinal.push(arrayTemp);

}

let imprimirUsuarios = (arrayMulti) => {

    for(let i = 0;i < arrayMulti.length;i++) {
        document.write(arrayMulti[i]['nombre'] + " " + arrayMulti[i]['apellido1'] + " " + arrayMulti[i]['apellido2'] + " " + arrayMulti[i]['dni'] + " " + arrayMulti[i]['fechaNacimiento'] + "<br>");
    }

}

let buscaApellidos = (arrayMulti, cadena) => {
    apellidos = cadena.split(",");
    var result = [];

    for(let i = 0;i < arrayMulti.length;i++) {
        if (arrayMulti[i]['apellido1'] == apellidos[0] && arrayMulti[i]['apellido2'] == apellidos[1]) {
            result.push(arrayMulti[i]);
        }
    }

    return result;
}

let buscaDni = (arrayMulti, dni) => {
    var result = [];

    for(let i = 0;i < arrayMulti.length;i++) {
        if (arrayMulti[i]['dni'] == dni) {
            result = arrayMulti[i];
            break;
        }
    }

    return result;
}

let buscaEdad = (arrayMulti, edadBusc) => {
    var result = [];
    var hoy = new Date();

    for(let i = 0;i < arrayMulti.length;i++) {
        fecha = arrayMulti[i]['fechaNacimiento'].split("/");
        var cumpleanos = new Date(fecha[2], fecha[1], fecha[0]);
        var edad = hoy.getFullYear() - cumpleanos.getFullYear();
        console.log(edad);
        var m = hoy.getMonth() - cumpleanos.getMonth();
    
        if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
            edad--;
        }
        if (edad == edadBusc) {
            result.push(arrayMulti[i]);
        }
    }
    return result;
}

// Imprimir todos los usuarios.
imprimirUsuarios(arrayFinal);

// Buscar por apellidos.
console.log(buscaApellidos(arrayFinal, "Sanchez,Espinosa"));

// Buscar por DNI.
console.log(buscaDni(arrayFinal, "23456789Z"));

// Buscar por edad.
console.log(buscaEdad(arrayFinal, 23));
