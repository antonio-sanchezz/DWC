window.addEventListener('load', iniciar);

function iniciar() {

    var campoTexto = document.mincase.campoTexto;

    campoTexto.addEventListener('change', function(event) {
        event.currentTarget.value = (event.currentTarget.value).toLowerCase();
    });

}