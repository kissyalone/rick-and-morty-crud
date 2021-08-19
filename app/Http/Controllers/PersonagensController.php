<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use App\Models\Personagem;
use App\Models\User;
use App\Http\Requests\PersonagemUpdateRequest;

class PersonagensController extends Controller
{
    public function index()
    {
        return Inertia::render('Home', [
            'personagens' => Auth::user()->personagens()->orderByDesc('id')->paginate(10),
            'paginacao' => null,
            'routeName' => 'meu.personagem.detalhe',
            'title' => 'Rick and Morty - Meus Personagens'
        ]);
    }
    public function MeuPersonagemDetalhe($id)
    {
        $personagem = Personagem::find($id);
        return Inertia::render('MeuPersonagemDetalhe', [
            'personagem' => $personagem
        ]);
    }
    public function MeuPersonagemDetalheUpdate(PersonagemUpdateRequest $request, $id) 
    {
        $personagem = Personagem::find($id);
        $personagem->update(
            $request->validated()
        );

        return Redirect::back()->with('success', 'Personagem Atualizado.');
    }
    public function MeuPersonagemDelete($id)
    {
        $personagem = Personagem::find($id);

        $personagem->delete();

        return Redirect::route('personagem')->with('success', 'Personagem deletado.');
    }
}
