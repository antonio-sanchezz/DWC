window.addEventListener('load', iniciar);

function iniciar() {

    var container = document.getElementById('container');
    var img = document.createElement('img');
    img.setAttribute("src", "http://pngimg.com/uploads/pacman/pacman_PNG89.png");
    container.appendChild(img);
    

    container.addEventListener('mousemove', function(event) {

        x = event.clientX;
        y = event.clientY;

        img.style.left = x + "px";
        img.style.top = y + "px";

    });

}