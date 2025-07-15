<?php
    $n = $_GET['num'];
    
    if($n > 0){
        echo "Número positivo!";
    }elseif($n < 0){
        echo "Número negativo!";
    }else{
        echo "Seu número é Zero!";
    }
?>