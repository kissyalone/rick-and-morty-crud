<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class PersonagensController extends Controller
{
    public function index()
    {
        $personagens = Auth::user()->personagens()->orderByDesc('id')->paginate(2);
        //dd($personagens,$personagens['personagem']);
        return Inertia::render('Home', [
            'personagens' => $personagens,
            'paginacao' => null,
            'routeName' => 'personagem.detalhe',
            'title' => 'Rick and Morty - Meus Personagens'
        ]);
    }
}
