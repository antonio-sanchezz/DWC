var pos = parseInt(prompt("¿Donde esta la bolita? (1-3)"));

// Numero aleatorio 1-3
var bolita = Math.ceil(Math.random()*3);

if (pos == bolita) {
    document.write("Has acertado!");
} else {
    document.write("Has fallado estaba en la posicion " + bolita);
}
