var ventana;
var usuario = prompt("Nombre de usuario:", "antsa12");

if(usuario.match(/^([a-zA-z0-9]{7})$/)) {
    // Contar digitos.
    var numDigitos = (usuario.toString().match(/[0-9]/g) || []).length;

    if (numDigitos > 0) {
        var intervalo = setInterval(popUp(), 3000);
    }
}

function popUp() {
    if (numDigitos != 0) {
        numDigitos--;
        ventana = window.open("","","location=0,scrollbars=1,height=300,width=400");
        ventana.moveTo(screen.width,screen.height); 
        ventana.document.write("Hola usuario. Aquí tienes el producto del año. Atrévete a probarlo!!");
    } else {
        clearInterval(intervalo);
    }
}