function iniciar() {
    const formulario = document.getElementById('register');
    formulario.addEventListener('submit', copiarDatos);
}

function calcularEdad(fecha) {
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    return edad;
}

function addEdad() {
    var date = document.forms["register"].date.value;
    document.forms["register"].edad.value = calcularEdad(date);
}

function copiarDatos(event) {
    event.preventDefault();
    var name = (document.forms["register"].name.value).toUpperCase();
    var lastname = (document.forms["register"].lastname.value).toUpperCase();
    var username = (document.forms["register"].username.value).toUpperCase();
    var date = (document.forms["register"].date.value).toUpperCase();
    var sex = (document.forms["register"].sex.value).toUpperCase();
    var telefono = (document.forms["register"].telefono.value).toUpperCase();
    var email = (document.forms["register"].email.value).toUpperCase();
    var password = document.forms["register"].password.value;
    var passwordConfirm = document.forms["register"].passwordConfirm.value;
    document.write(name + "<br>");
    document.write(lastname + "<br>");
    document.write(username + "<br>");
    document.write(date + "<br>");
    document.write(sex + "<br>");
    document.write(telefono + "<br>");
    document.write(email + "<br>");
   
    // Abrir datos en nueva venta.
    /*
    var ventana = window.open("","","location=0,scrollbars=1,height=300,width=400");
    ventana.moveTo(screen.width/2-200,screen.height/2-150); 
    ventana.document.write(name + "<br>");
    ventana.document.write(lastname + "<br>");
    ventana.document.write(username + "<br>");
    ventana.document.write(day + "/" + month + "/" + year + "<br>");
    ventana.document.write(sex + "<br>");
    ventana.document.write(telefono + "<br>");
    ventana.document.write(email + "<br>");
    */

    checkPassword();
}

function checkPasswordVal(password, passwordConfirm) {
    var validator = false;
    if (password == passwordConfirm) {
        validator = true;
    }
    return validator;
}

function checkPassword() {
    var password = document.forms["register"].password.value;
    var passwordConfirm = document.forms["register"].passwordConfirm.value;
    var validator = false;
    document.getElementById("register").action = "mailto:" + document.forms["register"].email.value; 
    if (password == passwordConfirm) {
        document.getElementById("errorPassword").innerHTML = "<p style='color:green'>Las contraseñas coinciden.</p>";
        validator = true;
    } else {
        document.getElementById("errorPassword").innerHTML = "<p style='color:red'>Las contraseñas no coinciden.</p>";
    }
    return validator;
}