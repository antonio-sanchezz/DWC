window.addEventListener('load', iniciar);

function iniciar() {
    const formulario = document.getElementById('correos');
    var direccion = getCookie("direccion");
    if (direccion != "") {
        document.getElementById('direccion').value = direccion;
    }
    var submit = document.getElementById('submit');

    submit.addEventListener('click', function(event) {
        var direccionS = document.forms["correos"].direccion.value;
        setCookie("direccion", direccionS, 1);
    });

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