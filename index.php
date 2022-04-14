
<?php
//Подключим файл где будет происходить основная логика.
//'.' - Это конкатенация строк
//'__DIR__' - одна из зарезервированных переменных в php, там отображается текущий путь
require_once __DIR__.'/bootstrap.php';
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">

    <link rel="stylesheet" href="./dist/style.min.css?id=<?=time()?>">
    <title>Кликер</title>
</head>
<body>
<!--
<h1 class="header">Cookie Clicker</h1>
-->
<article class="card">
    <button id="save">Save</button>
    <button id="load">Load</button>
    <div class="shop">
        <h2 class="shop-title">Shop:</h2>
        <ul class="shop-list">
            <li>  <button class="shop-item" id="incPower">Increase Click Power<span class="price1"> 10</span></button></li>
            <li>  <button class="shop-item" id="incClicks">Shop 2</button></li>
            <li>  <button class="shop-item" id="temp1">Shop 3</button></li>
            <li>  <button class="shop-item" id="temp2">Shop 4</button></li>
        </ul>
    </div>
    <div class="container">
        <img class= "cookie" src="img/cookie.svg" alt="">
    </div>
    <p class="count">Всего печенек: <span class="count-number">0</span></p>
    <div class="upgrade">
        <h2 class="upgrade-title">Upgrades:</h2>
        <ul class="upgrade-list">
            <li> <button class="upgrade-item">Upgrade 1</button></li>
            <li> <button class="upgrade-item">Upgrade 2</button></li>
            <li> <button class="upgrade-item">Upgrade 3</button></li>
            <li> <button class="upgrade-item">Upgrade 4</button></li>
        </ul>
    </div>
</article>
<script src="./dist/index.js?id=<?=time()?>"></script>
</body>
</html>
