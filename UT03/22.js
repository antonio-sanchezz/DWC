var segundos = parseInt(prompt("Segundos:"));

var horas = Math.floor(new Date(segundos*1000).getHours());
var minutos = Math.floor(new Date((segundos%3600)*1000).getMinutes());
var segundos = Math.floor(new Date(((segundos%3600%60))*1000).getSeconds());

document.write("Horas: " + horas + "<br>");
document.write("Minutos: " + minutos + "<br>");
document.write("Segundos: " + segundos);