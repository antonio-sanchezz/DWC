class Paciente extends Persona {
    constructor(nombre, apellido, dni, nAfiliacion, mutualista) {
        super(nombre, apellido, dni);
        this.nAfiliacion = nAfiliacion;
        this.mutualista = mutualista;
    }

    imprimirPaciente() {
        document.write("PACIENTE: --NºAfiliación: " + this.nAfiliacion + " --Mutualista: " + this.mutualista + " ");
    }
}