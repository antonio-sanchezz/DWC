window.addEventListener('load', iniciar);

function iniciar() {

    var mensaje = document.sms.mensaje;

    mensaje.addEventListener('keypress', function(event) {

        if (event.currentTarget.value.length + 1 > 145) {
            document.getElementById("mensaje").disabled = true;
        } else {
            document.getElementById("restante").innerHTML = 145 - event.currentTarget.value.length-1 + "/145";
        }
        
    });

}