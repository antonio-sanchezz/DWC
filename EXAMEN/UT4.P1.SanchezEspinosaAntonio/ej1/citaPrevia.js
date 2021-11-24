class CitaPrevia {
    constructor(fechaHora, paciente, medico) {
        this.fechaHora = fechaHora;
        this.paciente = paciente;
        this.medico = medico;
    }

    imprimirCita() {
        this.paciente.imprimirPaciente() + " " + this.paciente.imprimirPersona() + " " + this.medico.imprimirMedico() + " " + this.medico.imprimirPersona();
    }
}