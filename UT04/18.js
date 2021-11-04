var cadena = prompt("¿Palabras separadas por coma.", "Antonio,Sanchez,Espinosa");

let obtenerMatriz = (cadena) => {
    var array = [];

    array = cadena.split(",");

    // Primera palabra ingresada.

    primPalabra = array[0];

    // Ultima palabra ingresada.

    ultimPalabra = array[array.length-1];

    // Numero de palabras.

    numPalabras = array.length;

    // Todas las palabras por orden alfabetico.

    ordenAlfa = array.sort();

    // Abrimos la ventana con el contenido.

    var ventana = window.open("","","location=0,scrollbars=1,height=300,width=400");
    ventana.moveTo(screen.width/2-200,screen.height/2-150); 
    ventana.document.write("Primera palabra ingresada: " + primPalabra  + "<br>");
    ventana.document.write("Ultima palabra ingresada: " + ultimPalabra  + "<br>");
    ventana.document.write("Numero de palabras ingresadas: " + numPalabras  + "<br>");
    ventana.document.write("Palabras en orden alfabetico: " + ordenAlfa  + "<br>");


    return array;
}


console.log(obtenerMatriz(cadena));