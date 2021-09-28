//1. Calcular el área y el volumen de la esfera cuyo radio se pide al usuario.

var radio = parseInt(prompt("Indice el radio del circulo"));
var areaCirculo = 4*Math.PI*Math.pow(radio, 2);
var volumenCirculo = 4/3*(Math.PI*Math.pow(radio, 3));

console.log(areaCirculo);
console.log(volumenCirculo);
