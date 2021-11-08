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

        var edad = checkEdad(element.fechaNacimiento);

        var yearsMore = 18 - edad;

        var hoy = new Date();

        var fechaCumple = (element.fechaNacimiento).split('/');
        var year = hoy.getFullYear();
        var fFecha1 = new Date(year,fechaCumple[1],fechaCumple[0]);
        var m = hoy.getMonth() - fFecha1.getMonth();

        if (m > 0 || (m === 0 && hoy.getDate() < fFecha1.getDate()))
        {
            year++;
            yearsMore--;
        } else {
            yearsMore--;
            yearsMore--;
        }



        var fFecha1 = new Date(year,fechaCumple[1]-1,fechaCumple[0]);
        var fFecha2 = new Date(hoy.getFullYear(),hoy.getMonth(),hoy.getDate());
        var dif = fFecha1 - fFecha2;
        console.log(fFecha1);
        console.log(fFecha2);
        var dias = Math.floor(dif / (1000 * 60 * 60 * 24));

        ventana.document.write(element.nombre + " " + element.apellido1 + " " + element.apellido2 + " DNI: " + element.dni + " Fecha Nacimiento: " + element.fechaNacimiento + " " +yearsMore + " año/s y " + dias + " dia/s para tu mayoría de edad<br>");
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

let modificaDatos = (arrayMulti) => {
    var dni = prompt("DNI del elemento a modificar", "23456789Z");
    for(let i = 0;i < arrayMulti.length;i++) {
        if(arrayMulti[i]['dni'] == dni) {
            var nombre = prompt("Nuevo nombre", "Pepe");
            var apellido1 = prompt("Nuevo apellido1", "Acosta");
            var apellido2 = prompt("Nuevo apellido2", "Perez");
            var fechaNacimiento = prompt("Nueva fecha de nacimiento", "01/01/2001");

            console.log(arrayMulti[i]);

            arrayMulti[i]['nombre'] = nombre; // nombre
            arrayMulti[i]['apellido1'] = apellido1; // apellido1
            arrayMulti[i]['apellido2'] = apellido2; // apellido2
            arrayMulti[i]['fechaNacimiento'] = fechaNacimiento; // fechaNacimiento
        }
    }
    return arrayMulti;
}

let eliminaUsuario = (arrayMulti, dni) => {
    for(let i = 0;i < arrayMulti.length;i++) {
        if(arrayMulti[i]['dni'] == dni) {
            var opcion = prompt("Desea eliminar el registro con el dni " + dni + "?", "SI");
            if (opcion == "SI") {
                arrayMulti.splice(i, 1);
            }
        }
    }
    return arrayMulti;
}

// Imprimir todos los mayores de edad.
//mayorEdad(arrayFinal);

// Imprimir menores de edad y tiempo para su cumpleaños (dias y/o años).
//menorEdad(arrayFinal);

// Modificar datos.
modificaDatos(arrayFinal);

// Eliminar usuario.
//arrayMulti = eliminaUsuario(arrayFinal, "23456789Z");

// Comprobamos la eliminacion y edicion de usuarios.
imprimirUsuarios(arrayFinal);

