<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>exemplo</title>
</head>
<body>

<?php  

for ($i=0; $i <= 100; $i++) {
    if($i % 2 == 0){
        continue;
    }
    echo $i."<br>";
}
?>


</body>
</html>