<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class PersonagensController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('Personagem');
    }
}
