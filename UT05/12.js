window.addEventListener('load', iniciar);

function iniciar() {

    var enlace = document.getElementById('enlace');

    enlace.addEventListener('mouseover', function(event) {
        event.target.style.backgroundColor = "#7de3f3";

        // Quitarle el color para que quede como antes.
        setTimeout(function() {
            event.target.style.backgroundColor = "";
        }, 500);
    });

}