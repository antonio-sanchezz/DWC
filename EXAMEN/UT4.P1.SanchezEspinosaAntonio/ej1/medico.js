class Medico extends Persona {
    constructor(nombre, apellido, dni, nFacultativo) {
        super(nombre, apellido, dni);
        this.nFacultativo = nFacultativo;
    }

    imprimirMedico() {
        document.write("MÉDICO: --NºFacultativo:" + this.nFacultativo);
    }
}