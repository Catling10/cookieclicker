<?php
//Этот файл мы не подключаем через require, так как он автоматически подгружается с помощью composer
//смотри conposer.json -> autoload -> files

//Благодаря composer все файлы подключаются автоматически, и нам не надо каждый раз делать require, достаточно подключить через use
//Путь прописывается исходя из namespace
use Cookieclicker\Controllers\LoginController;
use Cookieclicker\Router;

Router::get('/login', LoginController::class, 'index');