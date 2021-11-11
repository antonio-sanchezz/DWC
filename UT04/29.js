class Persona {
    constructor(nombre, apellidos, dni, fechaNacimiento) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dni = dni;
        this.fechaNacimiento = fechaNacimiento;
    }

    getNombre() {
        return this.nombre;
    }

    getApellidos() {
        return this.apellidos;
    }

    getDni() {
        return this.dni;
    }

    getFechaNacimiento() {
        return this.fechaNacimiento;
    }
}

class Alumno extends Persona {
    constructor(nombre, apellidos, dni, fechaNacimiento, curso, notas) {
        super(nombre, apellidos, dni, fechaNacimiento);
        this.curso = curso;
        this.notas = notas;
    }

    imprimirAlumno() {
        document.write(this.nombre + " " + this.apellidos + " " + this.dni + " " + this.fechaNacimiento);
    }

    getNotaMedia() {
        var notaMedia = 0;
        let values = this.notas.values();
        for(let a of values){
            notaMedia += a;
        }
        return notaMedia/notas.size;
    }

    getMejorNota() {

    }

}

var notas = new Map();

notas.set("Desarrollo Web en Entorno Cliente",9).set("Desarrollo Web en Entorno Servidor",9).set("Empresa e Iniciativa Emprendedora",8).set("Desarrollo Web de Interfaz",6).set("Desarrollo de Aplicaciones Web",9);


var alumno = new Alumno("Antonio", "Sanchez Espinosa", "45362145Z", "25/02/1998", "1º", notas);

alumno.imprimirAlumno();
document.write("<br>Nota media: " + alumno.getNotaMedia());