var text = prompt("Escriba un texto:");

document.write(esAlfabetoEspaniol(text));

function esAlfabetoEspaniol(texto) {
    espaniol = false;
    letras = texto.split();
    i = 0;

    if(texto.search(/[^A-Za-z\s]/) == -1) {
        espaniol = true;
    }

    return espaniol;
}