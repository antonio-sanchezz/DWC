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

let menorEdad = (arrayMulti) => {

    return arrayFinal.filter(() => {
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
            if (edad >= 18) {
                result.push(arrayMulti[i]);
            }
        }
        return result;
    }).map((val) => {
        return val * 2;
    })

    // Abrimos nueva ventana con los datos obtenidos.
    var ventana = window.open("","","location=0,scrollbars=1,height=300,width=400");
    ventana.moveTo(screen.width/2-200,screen.height/2-150); 
    ventana.document.write("Primera palabra ingresada: " + primPalabra  + "<br>");
}

// Imprimir todos los usuarios.
console.log(menorEdad(arrayFinal));
