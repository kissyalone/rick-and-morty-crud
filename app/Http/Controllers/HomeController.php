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

        try{
            $response = json_decode(file_get_contents(env('API_RICK_MORTY') . '2/?page=' . $page), true);
        }catch(\Exception $e){
            return Inertia::render('Vazio');
        }
       
        if(!empty($response['results']) && !empty($response['info'])){
            $personagens = $response['results'];
            $info = $response['info'];
        } else {
            return Inertia::render('Vazio');
        }

        $paginacao = $this->paginacao($info, $page);

        return Inertia::render('Home',[
            'personagens' => $personagens,
            'paginacao' => $paginacao,
            'routeName' => 'personagem.detalhe',
            'links' => null,
            'title' => 'Rick and Morty - Personagens'
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
        try{
            $response = json_decode(file_get_contents(env('API_RICK_MORTY') . 'character/'. $id), true);
        }catch(\Exception $e){
            return Inertia::render('Vazio');
        }

        if(empty($response)){
            return Inertia::render('Vazio');
        }
        return Inertia::render('PersonagemDetalhe',[
            'personagem' => $response
        ]);
    }


    public function personagemStore(PersonagemStoreRequest $request)
    {
        Auth::user()->personagens()->create(
            $request->validated()
        );
        return Redirect::route('personagem.detalhe',  $request->id)->with('success', 'Personagem salvo.');
    }
}
