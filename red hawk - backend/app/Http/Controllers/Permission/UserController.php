<?php

namespace App\Http\Controllers\Permission;

use App\Http\Controllers\Controller;
use Ramsey\Uuid\Uuid;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index () 
    {
        return Uuid::uuid4()->toString();
    }
}