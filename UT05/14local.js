window.addEventListener('load', iniciar);

function iniciar() {
    const formulario = document.getElementById('cafeFav');
    var cafe = localStorage.getItem("cafe");

    document.getElementById("descuento").innerHTML = cafe;

    console.log(cafe);

    if (cafe == "cappuccino") {
        document.getElementById("cappuccino").checked = true;
    } else if (cafe == "espresso") {
        document.getElementById("espresso").checked = true;
    } else if (cafe == "moka") {
        document.getElementById("moka").checked = true;
    }

    formulario.addEventListener('submit', tramitar);

}

function tramitar(event) {
    event.preventDefault();
    var nombre = document.forms["cafeFav"].nombre.value;
    var nHabitacion = document.forms["cafeFav"].nHabitacion.value;
    var cafe = document.forms["cafeFav"].cafe.value;

    document.write("Huésped " + nombre + " se mandará su " + cafe + " a la habitación número " + nHabitacion);

    localStorage.setItem("cafe", cafe);
}