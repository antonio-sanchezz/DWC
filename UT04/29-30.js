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

    getNotas() {
        return this.notas;
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
        var mejorNota = 0;
        var mejorAsignatura = [];
        var listaNotas = [];

        this.notas.forEach((value, key) => {
            listaNotas.push(`${value}`);
        });

        this.notas.forEach((value, key) => {
            if (`${value}` == Math.max(...listaNotas)) {
                mejorNota = `${value}`;
                mejorAsignatura.push(`${key}`);
            }
        });

          return "Un " + mejorNota + " es la mejor nota, en la/s asignatura/s " + mejorAsignatura;
    }

}

class Aula {
    constructor(alumnos) {
        this.alumnos = alumnos;
    }

    buscarDni(dni) {
        var result = [];

        /*
        for(let i = 0;i < this.alumnos.length;i++) {
            if (this.alumnos[i].getDni() == dni) {
                result = this.alumnos[i];
                break;
            }
        }*/
    
        return this.alumnos.filter((alumno) => alumno.getDni() == dni);
    }

    ordenarNota(dni) {
        var alumno = this.buscarDni(dni);
        var mapOrd = new Map([...alumno.getNotas().entries()].sort((a, b) => b[1] - a[1]));
        return mapOrd;
    }

    ordenarAlumnos() {
        return this.alumnos.sort(function (o1,o2) {
            if (o1.apellidos > o2.apellidos) {
              return 1;
            } else if (o1.apellidos < o2.apellidos) {
              return -1;
            } 
            return 0;
          });
    }

    imprimirAlumnos() {

        for(let i = 0;i < this.alumnos.length;i++) {
            document.write(this.alumnos[i]['nombre'] + " " + this.alumnos[i]['apellidos'] + " " + this.alumnos[i]['dni'] + " " + this.alumnos[i]['fechaNacimiento'] + "<br>");
        }

    }
}

var notas1 = new Map();
var notas2 = new Map();

notas1.set("Desarrollo Web en Entorno Cliente",9).set("Desarrollo Web en Entorno Servidor",10).set("Empresa e Iniciativa Emprendedora",8).set("Desarrollo Web de Interfaz",6).set("Desarrollo de Aplicaciones Web",9);


var alumno1 = new Alumno("Antonio", "Sanchez Espinosa", "45362145Z", "25/02/1998", "1º", notas1);

notas2.set("Desarrollo Web en Entorno Cliente",6).set("Desarrollo Web en Entorno Servidor",5).set("Empresa e Iniciativa Emprendedora",4).set("Desarrollo Web de Interfaz",5).set("Desarrollo de Aplicaciones Web",8);

var alumno2 = new Alumno("Marina", "Bolt Gomez", "32651456A", "06/08/2000", "1º", notas2);

/*
alumno1.imprimirAlumno();
document.write("<br>Nota media: " + alumno1.getNotaMedia() + "<br>");
document.write(alumno1.getMejorNota());*/

var aula1 = new Aula([alumno1, alumno2]);

// Buscar alumno mediante DNI.
console.log(aula1.buscarDni("45362145Z"));

// Imprimir los alumnos de un aula.
aula1.imprimirAlumnos();

// Ordenar alumnos por apellido.
for(let elemento of aula1.ordenarAlumnos()){
    document.write(elemento.getApellidos() + "<br>");
}

// Mostrar notas de un alumno ordendas.
var mapOrd = aula1.ordenarNota("45362145Z");

for(let elemento of mapOrd){
    document.write(elemento + "<br>");
}