<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class HomeController extends Controller
{
    public function __invoke($page = 1)
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
        dd($id);
    }
}
