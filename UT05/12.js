window.addEventListener('load', iniciar);

function iniciar() {

    var enlace = document.getElementsById("enlace");

    enlace.addEventListener('mousehover', function(event) {
        document.getElementById("enlace").style.color = "red";
    }, true);

}