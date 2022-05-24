<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">

    <link rel="stylesheet" href="style.css">
    <title>Кликер</title>
</head>
<body>
<!--
<h1 class="header">Cookie Clicker</h1>
-->
<article class="card">
    <button class = "botbut" id="save">Save</button>
    <button class = "botbut" id="load">Load</button>
    <button class = "botbut" onclick="document.getElementById('id01').style.display='block'">Login</button>
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
            <li> <button class="upgrade-item" id ="granny">Бабушка<span class="upgrPrice1"> 100</span></button></li>
            <li> <button class="upgrade-item" id = "disc" >Скидка <span class="upgrPrice2"> 100</span></button></li>
            <li> <button class="upgrade-item" id = upclick>+Печеньки за клик <span class="upgrPrice3"> 10</span></button></li>
            <li> <button class="upgrade-item" id = "letItRain"> Печенечный дождь <span class="upgrPrice4"> 1000</span></button></li>
        </ul>
    </div>
</article>

<div id="id01" class="modal">
  <span onclick="document.getElementById('id01').style.display='none'"
        class="close" title="Close Modal">&times;</span>
    <form action="register.php" method="post" class="modal-content">

            Логин <input name="login" type="text" required><br>
            Пароль <input name="password" type="password" required><br>
            <input name="submit" type="submit" value="Зарегистрироваться">

    </form>
</div>
<script src="script.js"></script>
</body>
</html>
