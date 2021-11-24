do {

var usuario = prompt("Nombre de usuario:", "antsa12");

if(usuario.match(/^([a-zA-z0-9]{7})$/)) {
    // Contar digitos.
    var numDigitos = (usuario.toString().match(/[0-9]/g) || []).length;

    while (numDigitos != 0) {
        setTimeout('popUp()', 3000);
        numDigitos--;
    }

}

} while (!usuario);

function popUp() {
    var ventana = window.open("","","location=0,scrollbars=1,height=300,width=400");
    ventana.moveTo(screen.width,0); 
    ventana.document.write("Hola usuario. Aquí tienes el producto del año. Atrévete a probarlo!!");
}

function stopInterval() {
    clearInterval(interval);
}