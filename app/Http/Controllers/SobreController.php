<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class SobreController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('Sobre');
    }
}
