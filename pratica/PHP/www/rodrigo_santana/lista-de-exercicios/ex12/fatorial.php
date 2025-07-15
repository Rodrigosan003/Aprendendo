<?php
$i = $_GET['nfat'];
    $calc = 1;
    while ($i > 1){
        $calc *= $i;
        $i--;
    }

    echo $calc;
?>