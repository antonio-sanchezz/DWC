<?php

// Json con los datos de las series.
$data = [
    ["titulo"=> "Beaking Bad","genero"=> "Drama","sinopsis"=> "Altamente aclamado por la crítica, este drama televisivo escrito y producido por Vince Gilligan ('Expediente X') nos muestra la vida de Walter White (Bryan Cranston 'Malcolm'), un genio en el campo ...","src"=>"https://es.web.img3.acsta.net/c_310_420/pictures/18/04/04/22/52/3191575.jpg"],
    ["titulo"=> "Juego de Tronos","genero"=> "Fantasía","sinopsis"=> "HBO, desde la calidad que caracteriza a la cadena, nos brinda una vez más una magistral adaptación televisiva de la serie de novelas 'Canción de hielo y fuego' del escritor estadounidense George R. ...","src"=>"https://es.web.img2.acsta.net/c_310_420/pictures/19/03/22/10/08/5883111.jpg?coixp=50&coiyp=40"],
    ["titulo"=> "Peaky Blinders","genero"=> "Crimen,Drama","sinopsis"=> "Peaky Blinders es un drama de BBC que narra la historia de la familia gitana Shelby y su banda de gángsters, un grupo de personas características por sus boinas con cuchillas y dueñas de los ...","src"=>"https://es.web.img2.acsta.net/c_310_420/pictures/15/10/23/08/59/222051.jpg?coixp=45&coiyp=64"]
];

echo json_encode($data);

?>