class SalaConciertos {
    constructor(arrayBandas) {
        this.arrayBandas = arrayBandas;
    }

    imprimirListadoBandas = () => {
        for(let i = 0;i < this.arrayBandas.length;i++)
        {
            this.arrayBandas[i].mostrarBanda();
        }
    }

    buscarBandaPorNombre = (nombre) => {
        return this.arrayBandas.find((banda) => banda.getNombre() == nombre);
    }

    buscarBandasPorEstilo = (estilo) => {
        return this.arrayBandas.filter((banda) => banda.getEstilo() == estilo);
    }

    ordenarBandasPorAnio = () => {
        return this.arrayBandas.sort((a,b) => {
            if (a.anioFormacion > b.anioFormacion)
            {
              return 1;
            } else if (a.anioFormacion < b.anioFormacion)
            {
              return -1;
            } 
            return 0;
          });
    }

    eliminarBanda = (nombre) => {
        this.arrayBandas = this.arrayBandas.filter((banda) => {
            return banda.nombre !== nombre;
        });
    }
}