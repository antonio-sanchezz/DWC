window.addEventListener('load', iniciar);

function iniciar() {

    // Pregunta 1.
    var rad2 = document.test.tierra;

    for (var i = 0; i < rad2.length; i++) {
        rad2[i].addEventListener('change', function(event) {

            if (event.currentTarget.value != "4500") {
                document.getElementById("tierra-4300").style.display = "none";
                document.getElementById("tierra-5500").style.display = "none";
                document.getElementById("tierra-4500").style.display = "none";
                document.getElementById("tierra-4000").style.display = "none";
                document.getElementById("tierra").style.color = "green";
                document.getElementById("tierra").style.fontWeight = "900";
                document.getElementById("error-tierra").innerHTML = "<p style='color:red'>Respuesta incorrecta</p>";
            } else {
                document.getElementById("error-tierra").innerHTML = "<p style='color:green'>Respuesta correcta</p>";
                document.getElementById("tierra-4300").style.display = "none";
                document.getElementById("tierra-5500").style.display = "none";
                document.getElementById("tierra-4500").style.display = "none";
                document.getElementById("tierra-4000").style.display = "none";
                document.getElementById("tierra").style.color = "green";
                document.getElementById("tierra").style.fontWeight = "900";
                var correctas = document.getElementById("correctas");
                var correctasValue = parseInt(correctas.innerHTML);
                correctas.innerHTML = correctasValue + 1;
            }
        });
    }

    // Pregunta 2.
    var rad1 = document.test.color;

    for (var i = 0; i < rad1.length; i++) {
        rad1[i].addEventListener('change', function(event) {
            if (event.currentTarget.value != "verde") {
                document.getElementById("color-amarillo").style.display = "none";
                document.getElementById("color-rojo").style.display = "none";
                document.getElementById("color-azul").style.display = "none";
                document.getElementById("color-verde").style.display = "none";
                document.getElementById("verde").style.color = "green";
                document.getElementById("verde").style.fontWeight = "900";
                document.getElementById("error-color").innerHTML = "<p style='color:red'>Respuesta incorrecta</p>";
            } else {
                document.getElementById("color-amarillo").style.display = "none";
                document.getElementById("color-rojo").style.display = "none";
                document.getElementById("color-azul").style.display = "none";
                document.getElementById("color-verde").style.display = "none";
                document.getElementById("verde").style.color = "green";
                document.getElementById("verde").style.fontWeight = "900";
                document.getElementById("error-color").innerHTML = "<p style='color:green'>Respuesta correcta</p>";
                var correctas = document.getElementById("correctas");
                var correctasValue = parseInt(correctas.innerHTML);
                correctas.innerHTML = correctasValue + 1;
            }
        });
    }
    
}
    