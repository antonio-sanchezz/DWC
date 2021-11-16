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

    buscarBandasPorEstilo = () => {

    }

    ordenarBandasPorAnio = () => {

    }

    eliminarBanda = () => {

    }
}