class Paciente extends Persona {
    constructor(nombre, apellido, dni, nAfiliacion, mutualista) {
        super(nombre, apellido, dni);
        this.nAfiliacion = nAfiliacion;
        this.mutualista = mutualista;
    }

    getnAfiliacion() {
        return this.nAfiliacion;
    }

    getMutualista() {
        return this.mutualista;
    }
}