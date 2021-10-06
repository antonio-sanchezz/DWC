var respuesta = prompt("Nombre, prefoesión y edad:", "nombre,profesion,edad");

var respuestaArray = respuesta.split(",");

document.write(respuestaArray[2]);