
aliasArray = "";

do {

    alias = escribirAlias();

    if (alias == "fin")
    {
        break;
    }

    aliasComprobado = comprobarAlias(alias);

    if (!aliasComprobado) {
        continue;
    }

    // Recogemos todos los alias en una variable.
    aliasArray = aliasArray + "\n" + aliasComprobado;

} while (alias != "fin");

// Abrimos el alias en una nueva ventana si existe algun alias.
if (aliasArray != "")
{
    var ventana = window.open("","","location=0,scrollbars=1,height=300,width=400");
    ventana.moveTo(screen.width/2-200,screen.height/2-150); 
    ventana.document.write(aliasArray);
} else {
    alert("No se ha introducido ningún alias.");
}

// Comprobamos el correo electronico.
function comprobarAlias(alias)
{
    var aliasFormateado = "";
    var correcto = false;

    if (alias.match(/^([a-zA-z]{7})+[0-9]{3}$/))
    {
        alias = "@" + alias;
        correcto = true;
    }

    if (!alias.match(/^(@)+([A-Za-z]{7})+[0-9]{3}$/))
    {
        alert("El formato no es correcto debe tener 7 caracteres, 3 digitos y comenzar por @.");
    } else {
        correcto = true;
    }

    if (correcto)
    {
        aliasFormateado = "@" + alias.substr(1,1) + "_" + alias.substr(2,6) + "_" + alias.substr(8,9);
    } else {
        aliasFormateado = false;
    }
    
    return aliasFormateado;

}

function escribirAlias()
{
    var alias = prompt("Introduzca un alias");
    return alias;
}