class Banda {
    constructor(nombre, anioFormacion, listaIntegrantes, telefono, estilo) {
        this.nombre = nombre;
        this.anioFormacion = anioFormacion;
        this.listaIntegrantes = listaIntegrantes;
        this.telefono = telefono;
        this.estilo = estilo;
    }

    mostrarBanda = () => {
        document.write(this.nombre + " " + this.anioFormacion + " " + this.telefono + " " + this.estilo + "<br>"); 
    }

    mostrarIntegrantes = () => {
        document.write("--------- INTEGRANTES ---------<br>");
        for(let integrante of this.listaIntegrantes){
            document.write(integrante + "<br>");
        }
    }

    getNombre = () => {
        return this.nombre;
    }

    getEstilo = () => {
        return this.estilo;
    }
    
}