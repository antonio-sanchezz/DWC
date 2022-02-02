<?php

$data = [];
$daw1 = [["nombre"=>"Hayri", "apellidos"=>"Ghenadie", "nota"=>5], ["nombre"=>"Theodotos", "apellidos"=>"Arne", "nota"=>6], ["nombre"=>"Amberly", "apellidos"=>"Jenaro", "nota"=>3]];
$daw2 = [["nombre"=>"Rada", "apellidos"=>"Chares", "nota"=>4], ["nombre"=>"Antonio", "apellidos"=>"Sanchez", "nota"=>10], ["nombre"=>"Pacey", "apellidos"=>"Darinka", "nota"=>9]];

if (isset($_POST["curso"])) {
    if ($_POST["curso"] == "daw1") {
        $data = $daw1;
    } else if ($_POST["curso"] == "daw2") {
        $data = $daw2;
    }
}

echo json_encode($data);

?>