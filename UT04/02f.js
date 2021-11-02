var text = prompt("Escriba un texto:");

let esAlfabetoEspaniol = (texto) => {
    espaniol = false;
    letras = texto.split();
    i = 0;

    if(texto.search(/[^A-Za-z\s]/) == -1) {
        espaniol = true;
    }

    return espaniol;
}

document.write(esAlfabetoEspaniol(text));