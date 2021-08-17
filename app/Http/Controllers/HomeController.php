<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\User;
use Inertia\Inertia;

use App\Http\Requests\PersonagemStoreRequest;

class HomeController extends Controller
{
    public function index($page = 1)
    {
        return $this->getPersonagens($page);
        
    }
    public function getPersonagens($page)
    {
        $response = json_decode(file_get_contents(env('API_RICK_MORTY') . 'character/?page=' . $page), true);
       
        if(!empty($response['results']) && !empty($response['info'])){
            $personagens = $response['results'];
            $info = $response['info'];
        } else {
            $personagens = null;
            $info = null;
        }

        $paginacao = $this->paginacao($info, $page);

        return Inertia::render('Home',[
            'personagens' => $personagens,
            'paginacao' => $paginacao
        ]);
    }
    public function paginacao($info_pagina, $pagina_atual)
    {
        $pagina_atual == $info_pagina['pages'] ? $proxima = null : $proxima = $pagina_atual + 1;
        $pagina_atual == 1 ? $anterior = null : $anterior = $pagina_atual - 1;

        return  ['proxima' => $proxima, 'anterior' => $anterior]; 
    }
    public function personagemDetalhe($id)
    {
        $response = json_decode(file_get_contents(env('API_RICK_MORTY') . 'character/'. $id), true);

        if(empty($response)){
            //return
        }
        // dd($response);
        return Inertia::render('PersonagemDetalhe',[
            'personagem' => $response
        ]);
    }


    public function personagemStore(PersonagemStoreRequest $request)
    {
        Auth::user()->personagens()->create(
            $request->validated()
        );
        return Redirect::route('page', 1)->with('success', 'Personagem salvo.');
    }
}
