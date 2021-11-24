class Persona {
    constructor(nombre, apellido, dni) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
    }

    imprimirPersona() {
        document.write("-- Nombre: " + this.nombre + " -- Apellido: " + this.apellido + " --DNI: " + this.dni + " ");
    }
}