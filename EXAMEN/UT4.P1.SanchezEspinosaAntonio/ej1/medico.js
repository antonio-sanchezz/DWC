class Medico extends Persona {
    constructor(nombre, apellido, dni, nFacultativo) {
        super(nombre, apellido, dni);
        this.nFacultativo = nFacultativo;
    }

    getnFacultativo() {
        return this.nFacultativo;
    }
}