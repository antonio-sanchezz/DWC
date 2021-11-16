// Generamos integrantes para las bandas.
var integrantes1 = new Map();
integrantes1.set("52365214Z", "Antonio Sanchez Espinosa").set("12364578A", "Roberto Garcia Jimenez");

var integrantes2 = new Map();
integrantes2.set("52365214Z", "Helena Suarez Escobar").set("89654123B", "Alberto Perez Rosa");

// Generamos bandas.
var banda1 = new Banda("Municipal", 1998, integrantes1, 954236541, "Clasico");
var banda2 = new Banda("New World", 2005, integrantes2, 954021365, "Rock");

// Generamos una sala de conciertos.
var sala1 = new SalaConciertos([banda1, banda2]);

// Mostrar una banda.
//banda1.mostrarBanda();

// Mostrar integrantes de una banda.
//banda1.mostrarIntegrantes();

// Mostrar bandas de una sala de conciertos.
//sala1.imprimirListadoBandas();

// Buscar banda mediante un nombre.
//sala1.buscarBandaPorNombre("Municipal").mostrarBanda();

