var piloto1 = new Piloto("Antonio", "Volas");
var piloto2 = new Piloto("Javier", "Airban");

var arrayCalificaciones = [[piloto1, 150], [piloto2, 100]];

function ordenarTiempo(arrayCalificaciones) {
    return arrayCalificaciones.sort(function (a,b) {
        if (a[1] > b[1]) {
          return 1;
        } else if (a[1] < b[1]) {
          return -1;
        }
        return 0;
      });
}

function ordenarNombre(arrayCalificaciones) {
    return arrayCalificaciones.sort(function (a,b) {
        if (a[0].nombre > b[0].nombre ) {
          return 1;
        } else if (a[0].nombre < b[0].nombre) {
          return -1;
        } 
        return 0;
      });
}

function nuevaCalificacion(arrayCalificaciones, piloto, tiempo) {
  var index = arrayCalificaciones.findIndex((sesion) => sesion[0].nombre == piloto.nombre);

  if (index != -1) {
    if (arrayCalificaciones[index][1] > tiempo) {
      arrayCalificaciones[index][1] = tiempo;
    }
  } else {
    arrayCalificaciones.push([piloto, tiempo]);
  }
  return arrayCalificaciones;
}

function eliminarCalificacion(arrayCalificaciones, nombre) {
  var oldLength = arrayCalificaciones.length;
  arrayCalificaciones = arrayCalificaciones.filter((sesion) => {
    return sesion[0].nombre !== nombre;
  });
  if (oldLength != arrayCalificaciones.length) {
    console.log("Se ha eliminado un elemento");
  }
  return arrayCalificaciones;
}

// Ordenar por tiempo.
//console.log(ordenarTiempo(arrayCalificaciones));

var piloto3 = new Piloto("Pepe", "Pajaritos S.A.");

// Crear nueva calificacion.
//arrayCalificaciones = nuevaCalificacion(arrayCalificaciones, piloto3, 10);

// Eliminar una calificacion.
arrayCalificaciones = eliminarCalificacion(arrayCalificaciones, "Javier");

// Ordenar por nombre.
console.log(ordenarNombre(arrayCalificaciones));