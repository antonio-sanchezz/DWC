window.addEventListener('load', iniciar);

function iniciar() {

    var color = document.formulario.color;

    for (var i = 0; i < color.length; i++) {
        color[i].addEventListener('change', function(event) {
            document.getElementById("formulario").style.backgroundColor = event.currentTarget.value;
        });
    }

}