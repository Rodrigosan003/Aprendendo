<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pequeno Formulário</title>
</head>
<body>
    <form action="receber.php" method="post">
        Nome:<input type="text" value="nome" name="nome"><br>
        Senha:<input type="password" value="senha" name="senha"><br>
        Masculino:<input type="radio" value="m" name="sexo">
        Feminino: <input type="radio" value="f" name="sexo">
        <br>
        Opções: Jornal<input type="checkbox" value="jornal" name="opcao[]">
                Internet<input type="checkbox" value="internet" name="opcao"><br>
        Data de Nasc: <input type="date" value="dataNascimento" name="datanasc"><br>
        Cidade:
        <select name="cidade">
            <option>Selecione</option>
            <option value="cei">Ceilândia</option>
            <option value="tag">Taguatinga</option>
            <option value="sobr">Sobradinho</option>
        </select><br>
        <input type="submit" value="Cadastrar">
    </form>
</body>
</html>