<?php

/** @var \Laravel\Lumen\Routing\Router $router */

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->group(['prefix' => 'permission'], function () use ($router) {
    $router->get('/tes', 'Permission\UserController@index');
});
