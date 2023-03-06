<?php

/** @var \Laravel\Lumen\Routing\Router $router */

$router->group(['prefix' => 'user'], function () use ($router) 
{
    $router->post('', '');
    $router->get('', '');
    $router->get('', '');
    $router->patch('', '');
    $router->delete('', '');
});