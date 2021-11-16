class SalaConciertos {
    constructor(arrayBandas) {
        this.arrayBandas = arrayBandas;
    }

    imprimirListadoBandas = () => {
        for(let i = 0;i < this.arrayBandas.length;i++) {
            this.arrayBandas[i].mostrarBanda();
        }
    }

    buscarBandaPorNombre = (nombre) => {
        return this.arrayBandas.find((banda) => banda.getNombre() == nombre);
    }

    buscarBandasPorEstilo = (estilo) => {
        return this.arrayBandas.find((banda) => banda.getEstilo() == estilo);
    }

    ordenarBandasPorAnio = (anio) => {
        return this.arrayBandas.find((banda) => banda.getAnioFormacion() == anio);
    }

    eliminarBanda = (nombre) => {
        this.arrayBandas.filter((banda) => {
            return banda.nombre !== nombre;
        });
    }
}