window.addEventListener('load', iniciar);

function iniciar() {

    var send = document.getElementById('send');
    var nombre = document.formulario.nombre;

    send.addEventListener('click', function() {
        console.log(nombre.value);
        if (!(nombre.value).match(/[A-Z]/) || nombre.value == "") {
            alert("Todas las letras deben estar en MAYÚSCULA.");
        } else {
            alert("Enviando...");
        }
    });

}