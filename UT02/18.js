var segundos = parseInt(prompt("Indique un tiempo en segundo:"));

var hour = Math.floor(segundos / 3600);

segundos = segundos - hour*3600;

var minute = Math.floor((segundos / 60) % 60);

var segundos = segundos % 60;

document.write("Horas: " + hour);
document.write(" Minutos: " + minute);
document.write(" Segundos: " + segundos);
