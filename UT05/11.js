window.addEventListener('load', iniciar);

function iniciar() {

    var nombre = document.formulario.nombre;
    var direccion = document.formulario.nombre;

    nombre.addEventListener('blur', function(event) {
        if (event.target.value = " ") {
            alert("El campo nombre debe estar relleno");
        }
    }, true);

    //https://sites.google.com/site/tumentororg/javascript/eventos-focus-y-blur
}