<?php

if($_SERVER['REQUEST_METHOD']=='POST'){
 $nome=$_POST['nome'];
    $categoria=$_POST['categoria'];
    $salario=$_POST['salario'];
    $porc1=$salario*0.3;
    $porc2=$salario*0.5;


    if ($categoria=="a"||$categoria=="c"){
        $salarioA=$salario+$porc1;
        $porc=" 30%";

    }elseif ($categoria=="b"||$categoria=="d"){
        $salarioA=$salario+$porc2;
        $porc=" 50%";
    }
    echo "Nome: $nome";
    echo "</br>";
    echo "Categoria: $categoria";
    echo "</br>";
    echo "salário Atual: $salario ";
    echo "</br>";
    echo "Porcentagem de Aumento: $porc";
    echo "</br>";
    echo "Salario C/ aumento: $salarioA";
    var_dump($_POST);
}


    ?>