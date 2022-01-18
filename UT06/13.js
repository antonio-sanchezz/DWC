window.addEventListener('load', iniciar);

function iniciar() {


    var container2 = document.getElementById('container-2');

    container2.addEventListener('dragStart', function(event) {

        x = event.clientX;
        y = event.clientY;

        console.log(x + "," + y);

        container2.style.left = x + "px";
        container2.style.top = y + "px";

    });


}