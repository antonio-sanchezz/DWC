var column = parseInt(prompt("Número de columnas:"));

while(column > 0) {

    var prob = Math.floor(Math.random()*100+1);

    if(prob <= 50) {
        value = "1";
    } else if (prob <= 80 && prob > 50) {
        value = "X";
    } else if (prob <= 100 && prob > 80) {
        value = "2";  
    }

    document.write(value + "<br>");
    column--;
}