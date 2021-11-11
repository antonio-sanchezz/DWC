//import "./Punto.js";

class Punto {
    constructor (x,y) {
        this.x = x;
        this.y = y;
    };
}


class Rectangulo {
    constructor () {
        this.punto1 = new Punto(0,0);
        this.punto2 = new Punto(2,4);
    };

    getBase() {
        var base;

        base = Math.abs(this.punto1.x - this.punto2.x);

        return base;
    };

    getAltura() {
        var altura;

        altura = Math.abs(this.punto1.y - this.punto2.y);

        return altura;
    };

    getArea() {
        var area;

        area = this.getBase()*this.getAltura();

        return area; 
    };

    getPerimetro() {
        var perimetro;

        perimetro = (this.getBase() * 2 ) + (this.getAltura() * 2);

        return perimetro; 
    };
}

let rectangulo = new Rectangulo();

document.write("Área: " + rectangulo.getArea() + "<br>");
document.write("Perímetro: " + rectangulo.getPerimetro() + "<br>");
document.write("Base: " + rectangulo.getBase() + "<br>");
document.write("Altura: " + rectangulo.getAltura());