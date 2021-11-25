window.addEventListener('load', iniciar);

function iniciar() {

    // Pregunta 1.
    var rad1 = document.test.color;

    for (var i = 0; i < rad1.length; i++) {
        rad1[i].addEventListener('change', function() {
            if (this.value != "verde") {
                document.getElementById("error-color").innerHTML = "<p style='color:red'>Respuesta incorrecta</p>";
            } else {
                document.getElementById("error-color").innerHTML = "<p style='color:green'>Respuesta correcta</p>";
            }
        });
    }
 
    // Pregunta 2.
    var rad2 = document.test.tierra;

    for (var i = 0; i < rad2.length; i++) {
        rad2[i].addEventListener('change', function() {
            if (this.value != "4500") {
                document.getElementById("error-tierra").innerHTML = "<p style='color:red'>Respuesta incorrecta</p>";
            } else {
                document.getElementById("error-tierra").innerHTML = "<p style='color:green'>Respuesta correcta</p>";
            }
        });
    }
    
}
    