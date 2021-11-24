var fecha1 = new Date("2021", "10", "21");
var fecha2 = new Date("2021", "5", "2");
var fecha3 = new Date("2021", "2", "10");

var paciente1 = new Paciente("Antonio", "Sanchez", "563254125A", 165165, true);
var paciente2 = new Paciente("Maria", "Jimenez", "12365489W", 146541, false);
var paciente3 = new Paciente("Alberto", "Suarez", "23564125Z", 563254, true);

var medico1 = new Medico("Pepe", "Gonzalez","32568902A", 5412);
var medico2 = new Medico("Alberto", "Duran","36251489J", 2365);
var medico3 = new Medico("Marina", "Sanchez","24561237Y", 1245);

var cita1 = new CitaPrevia(fecha1, paciente1, medico1);
var cita2 = new CitaPrevia(fecha2, paciente2, medico2);
var cita3 = new CitaPrevia(fecha3, paciente3, medico3);

var citasPreviasArray = [cita1, cita2];

// Introducir una nueva cita.
introduceCita = (citaNueva) => {
    if (!buscarCita(citaNueva.paciente)) {
        this.citasPreviasArray.push(citaNueva);
    } else {
        document.write("El paciente ya tiene una cita asignada.<br>");
    }
}

// Eliminar un cita.
eliminarCita = (citaDel) => {
    this.citasPreviasArray = this.citasPreviasArray.filter((cita) => {
        return citaDel.paciente.dni !== cita.paciente.dni;
    });
}

// Buscar cita por paciente.
buscarCita = (paciente) => {
    return this.citasPreviasArray.find((cita) => cita.paciente.dni == paciente.dni);
}

// Mostrar todas las citas.
function mostrarCitas() {
    for(let i = 0;i < this.citasPreviasArray.length;i++)
    {
        this.citasPreviasArray[i].imprimirCita() + "<br>";
    }
}

// Ordenar cita por fecha y hora.
ordenarCitaPorFecha = () => {
    return this.citasPreviasArray.sort((a,b) => {
        if (a.fechaHora > b.fechaHora)
        {
          return 1;
        } else if (a.fechaHora < b.fechaHora)
        {
          return -1;
        } 
        return 0;
      });
}

// Listar mutualistas.
listadoMutualistas = () => {
    return this.citasPreviasArray.filter((cita) => cita.paciente.mutualista);
}

introduceCita(cita2);
introduceCita(cita3);

//eliminarCita(cita1);

//console.log(buscarCita(paciente1));

//ordenarCitaPorFecha();

//console.log(listadoMutualistas());

mostrarCitas();

console.log(citasPreviasArray);