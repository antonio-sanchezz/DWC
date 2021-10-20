var nowSeconds = new Date().getSeconds();
var segundos = parseInt(prompt("Segundos:"));

// Tiempo que el usuario utiliza en el programa.
var lastSeconds = new Date().getSeconds();
var totalSeconds = lastSeconds - nowSeconds;

var horas = Math.floor(new Date(segundos*1000).getHours());
var minutos = Math.floor(new Date((segundos%3600)*1000).getMinutes());
var segundos = Math.floor(new Date(((segundos%3600%60))*1000).getSeconds());

document.write("Horas: " + horas + "<br>");
document.write("Minutos: " + minutos + "<br>");
document.write("Segundos: " + segundos);

alert("Has tardado " + totalSeconds + " segundos en ejecutar el programa.");