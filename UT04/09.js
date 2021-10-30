alert(crearAnagrama("gregoryHouse"));

function crearAnagrama(palabra) {

    return  palabra.toLowerCase().split("").sort().join("");

}