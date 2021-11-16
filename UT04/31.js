var piloto1 = new Piloto("Antonio", "Volas");
var piloto2 = new Piloto("Javier", "Airban");

var sesion1 = new SesionCalificacion(piloto1, 10);
var sesion2 = new SesionCalificacion(piloto2, 15);

var arrayCalificaciones = [sesion1, sesion2];

function ordenarTiempo(arrayCalificaciones) {
    return arrayCalificaciones.sort(function (a,b) {
        if (a.tiempo > b.tiempo) {
          return 1;
        } else if (a.tiempo < b.tiempo) {
          return -1;
        } 
        return 0;
      });
}

function ordenarNombre(arrayCalificaciones) {
    return arrayCalificaciones.sort(function (a,b) {
        if (a.nombre > b.nombre) {
          return 1;
        } else if (a.nombre < b.nombre) {
          return -1;
        } 
        return 0;
      });
}

console.log(ordenarTiempo(arrayCalificaciones));
console.log(ordenarNombre(arrayCalificaciones));