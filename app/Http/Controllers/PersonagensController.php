<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class PersonagensController extends Controller
{
    public function index()
    {
        return Inertia::render('Personagem');
    }
}
