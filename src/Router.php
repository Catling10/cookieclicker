<?php
//Тут прописывается namespace исходя из того что описано в composer.json
//Можно увидеть в в секции autoload->psr-4 прописано что Cookieclicker подгружает из /src
namespace Cookieclicker;

class Router
{
    //Приватное поле класса, недоступно для получения извне
    //То есть (new Router())->routes не сработает
    //Если бы оно было public, то мы бы смогли его получить
    private static array $routes = [];

    //Эта переменная нужна нам для реализации паттерна Singleton
    //Мы реализуем его так как у нас не должно быть несколько объектов одного класса Router
    //Это сделано для того чтобы все роуты которые мы добавим были всегда нам доступны
    private static $_instance = null;

    private const GET_METHOD = "GET";

    private function __construct()
    {
        //Так же часть реализации паттерна Singleton
        // приватный конструктор ограничивает реализацию getInstance ()
    }

    protected function __clone()
    {
        //Так же часть реализации паттерна Singleton
        // ограничивает клонирование объекта
    }

    //Так же часть реализации паттерна Singleton
    //Статичный метод - это значит что мы можем вызвать его без инициализации класса
    static public function getInstance(): ?Router
    {
        //Если у нас нет созданного нами класса, то создаем его
        if (is_null(self::$_instance)) {
            //То есть мы создаем сами себя и сохраняем себе же
            self::$_instance = new self();
        }
        //Если уже есть то возвращаем наш класс
        return self::$_instance;
    }

    private static function set(string $type, string $path, string $className, string $method)
    {
        //Добавляем в общий массив роутов новый роут как ассоциативный массив (ключ->значение)
        array_push(self::$routes, [
            'type' => $type,
            'path' => $path,
            'className' => $className,
            'method' => $method
        ]);
    }

    //Публичный метод (в ООП, функции называются методами) - доступный извне
    /**
     * Add new GET route to route list
     * @param string $type
     * @param string $path
     * @param string $className
     * @param string $method
     */
    public static function get(string $path, string $className, string $method)
    {
        self::set(self::GET_METHOD, $path, $className, $method);
    }

    public static function resolvePath() {
        $route = array_filter(self::$routes, fn($item) => $_SERVER['REQUEST_URI'] === $item['path']);
        var_dump($route);
    }
}