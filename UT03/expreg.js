var mail = prompt("Correo electrónico:");

comprobarUsuario(mail);
comprobarEmail(mail);
mail = remplaceAt(mail);

// Comprobar si el usuario tiene al menos 3 letras.
function comprobarUsuario(mail)
{
    if (!mail.match(/^\w{3,}/))
    {
        alert("El nombre no cumple los requisitos, debe tener al menos tres letras.");
    }
}

// Comprobar que el correo electrónico contiene el carácter @ (arroba) y el punto ".".
function comprobarEmail (mail)
{
    if (!mail.match(/^[\S]+(@)+\w+(\.)+\w{2,3}$/))
    {
        alert("Falta el símbolo @ o el . en el correo electrónico.");
    }
}

// Comprobar si el correo contiene la subcadena "at" y remplazarla por el símbolo @.
function remplaceAt(mail) 
{
    var expAt = /at/g;
    var matchesAt = mail.match(expAt);

    if (matchesAt != null)
    {
       mail = mail.replace(/at/g,'@');
    }

    return mail;
}

// Presentar el mail por pantalla.
document.write(mail);