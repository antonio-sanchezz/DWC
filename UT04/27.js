class Punto {
    constructor (x,y) {
        this.x = x;
        this.y = y;
    };
}


class Rectangulo {
    constructor () {
        this.punto1 = new Punto(4,2);
        this.punto2 = new Punto(4,0);
    };

    getBase() {
        var base;

        return base;
    };

    getAltura() {
        var altura;


        return altura;
    };

    getArea() {
        var area;


        return area; 
    };

    getPerimetro() {
        var perimetro;


        return perimetro; 
    };
}

let rectangulo = new Rectangulo();

document.write("Área: " + rectangulo.getArea() + "<br>");
document.write("Perímetro: " + rectangulo.getPerimetro() + "<br>");
document.write("Base: " + rectangulo.getBase() + "<br>");
document.write("Altura: " + rectangulo.getAltura());