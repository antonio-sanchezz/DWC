class CitaPrevia {
    constructor(fechaHora, paciente, medico) {
        this.fechaHora = fechaHora;
        this.paciente = paciente;
        this.medico = medico;
    }

    getFecha() {
        return this.fechaHora;
    }

    getPaciente() {
        return this.paciente;
    }

    getMedico() {
        return this.medico;
    }

    mostrarCita() {
        return "Fecha: " + this.getFecha().toLocaleString() + " Paciente: " + this.getPaciente().getNombre() + " " + this.getPaciente().getApellido() + " " + this.getPaciente().getDni() + " Medico: " + this.getMedico().getNombre() + " " + this.getMedico().getApellido() + " " + this.getMedico().getDni() + " Nº Facultativo: " + this.getMedico().getnFacultativo();
    }


}