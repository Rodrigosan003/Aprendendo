<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 03</title>
</head>
<body>
<?php  

for ($i=0; $i <= 100; $i++) {
    if($i % 2 == 1){
        continue;
    }
    echo $i."<br>";
}
?>
</body>
</html>