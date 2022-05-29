<?php

// Скрипт проверки

// Соединямся с БД
$link = mysqli_connect("localhost", "root", "", "cookie-clicker");
if (isset($_COOKIE['id']) and isset($_COOKIE['hash'])) {
    $query = mysqli_query($link,
        "SELECT * FROM users
        LEFT JOIN user_data ON users.user_id = user_data.user_id
        WHERE users.user_id = '" . intval($_COOKIE['id']) . "' ");
    $userdata = mysqli_fetch_assoc($query);

    if (($userdata['user_hash'] !== $_COOKIE['hash']) or ($userdata['user_id'] !== $_COOKIE['id'])) {
        setcookie("id", "", time() - 3600 * 24 * 30 * 12, "/");
        setcookie("hash", "", time() - 3600 * 24 * 30 * 12, "/", null, null, true); // httponly !!!
        print "Хм, что-то не получилось";
    }
}