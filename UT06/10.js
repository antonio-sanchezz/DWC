window.addEventListener('load', iniciar);

function iniciar() {

    var container = document.getElementById('container');

    container.addEventListener('mousemove', function(event) {

        x = event.clientX;
        y = event.clientY;

        console.log(x + "," + y);
    });

}

function obtenerCoordenadas(event) {

    x = event.clientX;
    y = event.clientY;

    console.log(x + "," + y);
}