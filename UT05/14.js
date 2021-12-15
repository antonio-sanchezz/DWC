window.addEventListener('load', iniciar);

function iniciar() {
    const formulario = document.getElementById('cafeFav');
    var cafe = getCookie("cafe");

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

    setCookie("cafe", cafe, 1);
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }