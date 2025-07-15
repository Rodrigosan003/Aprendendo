<?php
$nome = isset( $_POST["nome"] ) ? $_POST["nome"] : null;
$senha = isset( $_POST["senha"] ) ? $_POST["senha"] : null;
$sexo = isset( $_POST["sexo"] ) ? $_POST["sexo"] : null;
$opcao = isset( $_POST["opcao"] ) ? $_POST["opcao"] : null;
$dataNascimento = isset( $_POST["datanasc"] ) ? $_POST["datanasc"] : null;
echo $nome, "<br>";
echo $senha, "<br>";
echo $sexo, "<br>";
echo $dataNascimento, "<br>";
?>
