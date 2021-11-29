window.addEventListener('load', iniciar);

function iniciar() {

    var borrar = document.formulario.borrar;

    borrar.addEventListener('click', function() {
        var opcion = prompt("¿Desea borrar el formulario?(SI/NO)", "SI");
        if (opcion == "SI") {
            document.getElementById('formulario').reset();
        }
    });

}