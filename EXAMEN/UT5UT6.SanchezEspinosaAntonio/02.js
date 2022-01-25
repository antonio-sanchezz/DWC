window.addEventListener('load', iniciar);

function iniciar()
{

    var error = false;
    var form = document.forms["producto"];
    var codigoField = document.getElementById("codigo");
    var bttSubmit = document.getElementById("bttSubmit");
    
    bttSubmit.addEventListener('click', function(event) {

        // Comprobamos si el código introducido en el formulario es correcto.
        if (codigoField.value.match(/^[A-Z]{3}-\d{1,5}$/))
        {
            sessionStorage.setItem("codigo", codigoField.value);
            form.action = "mailto: antonio@gmail.com";
            form.submit();
        } else
        {
            // Si el código no es correcto se mostrará un mensaje de error.
            if (!error)
            {                      
                var divError = document.createElement("div");
                divError.setAttribute('id', 'error');
                divError.style.color = "red";
                var txtError = document.createTextNode("El código debe cumplir obligatoriamente el siguiente formato: tres letras, guión y de 1 a 5 números (ej: ASX-23).");
                divError.appendChild(txtError);

                codigoField.after(divError);
                error = true;
            }
        }
    });

    codigoField.addEventListener('blur', function(event) {
        if (codigoField.value.match(/^[A-Z]{3}-\d{1,5}$/) && error)
        {
            // Si el código es correcto eliminamos el mensaje de error.
            document.getElementById("error").remove();
            error = false;
        }
    });

}