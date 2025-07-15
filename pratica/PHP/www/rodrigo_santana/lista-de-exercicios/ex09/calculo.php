<?php
$altura = $_GET["altura"];
$sexo = $_GET["sexo"];
$pesoM = (72.7 * $altura) - 58;
$pesoF = (62.1 * $altura) - 44.7;

if($sexo == 'M'){
    if($pesoM >= 1.60 && $pesoM <= 1.65){
        echo 'Você está magro!';
    }elseif($pesoM >= 1.66 && $pesoM <= 1.70){
        echo 'Bom peso!';
    }else{
        echo 'Acima do peso!';
    }
}elseif($sexo == 'F'){
    if($pesoF >= 1.40 && $pesoF <= 1.45){
        echo 'Você está magro!';
    }elseif($pesoF >= 1.56 && $pesoF <= 1.60){
        echo 'Bom peso!';
    }else{
        echo 'Acima do peso!';
    }
}else{
    echo 'Você não existe!';
}
?>