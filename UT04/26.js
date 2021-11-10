class Punto {
    constructor (x,y) {
        this.x = x;
        this.y = y;
    };
    obtenerCuadrante() {
        var cuadrante;
        if (this.x > 0 && this.y > 0) {
            cuadrante = "1";
        } else if (this.x < 0 && this.y > 0) {
            cuadrante = "2";
        } else if (this.x < 0 && this.y < 0) {
            cuadrante = "3";
        } else if (this.x > 0 && this.y < 0) {
            cuadrante = "4";
        }
        return cuadrante;
    };
}

let punto = new Punto(2,1);
document.write(punto.obtenerCuadrante());