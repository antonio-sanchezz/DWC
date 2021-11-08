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

let mayorEdad = () => {
    var filtrado = [];

    filtrado = arrayFinal.filter(array => checkEdad(array.fechaNacimiento) >= 18);

    // Abrimos nueva ventana con los datos obtenidos.
    var ventana = window.open("","","location=0,scrollbars=1,height=300,width=400");
    ventana.moveTo(screen.width/2-200,screen.height/2-150);
    filtrado.forEach(element => {
        ventana.document.write(element.nombre + " " + element.apellido1 + " " + element.apellido2 + " DNI: " + element.dni + " Fecha Nacimiento: " + element.fechaNacimiento + "<br>");
    });
}

let menorEdad = () => {
    var filtrado = [];

    filtrado = arrayFinal.filter(array => checkEdad(array.fechaNacimiento) < 18);

    // Abrimos nueva ventana con los datos obtenidos.
    var ventana = window.open("","","location=0,scrollbars=1,height=300,width=400");
    ventana.moveTo(screen.width/2-200,screen.height/2-150);
    filtrado.forEach(element => {

        var hoy = new Date();

        var fechaCumple = (element.fechaNacimiento).split('/');
        var year = hoy.getFullYear();
        var fFecha1 = new Date(year,fechaCumple[1],fechaCumple[0]);
        var m = hoy.getMonth() - fFecha1.getMonth();

        if (m > 0 || (m === 0 && hoy.getDate() < fFecha1.getDate()))
        {
            year++;
        }



        var fFecha1 = new Date(year,fechaCumple[1]-1,fechaCumple[0]);
        var fFecha2 = new Date(hoy.getFullYear(),hoy.getMonth(),hoy.getDate());
        var dif = fFecha1 - fFecha2;
        console.log(fFecha1);
        console.log(fFecha2);
        var dias = Math.floor(dif / (1000 * 60 * 60 * 24));

        ventana.document.write(element.nombre + " " + element.apellido1 + " " + element.apellido2 + " DNI: " + element.dni + " Fecha Nacimiento: " + element.fechaNacimiento + " Dias para tu cumpleaños: " + dias + "<br>");
    });

    return filtrado;
}

let checkEdad = (edad) => {
    var hoy = new Date();

    fecha = edad.split("/");
    var cumpleanos = new Date(fecha[2], fecha[1], fecha[0]);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();           
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate()))
    {
        edad--;
    }
    return edad;
}

// Imprimir todos los mayores de edad.
mayorEdad(arrayFinal);
// Imprimir menores de edad y tiempo para su cumpleaños (dias y/o años).
menorEdad(arrayFinal);
