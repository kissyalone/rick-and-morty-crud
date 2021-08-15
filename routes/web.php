<?php

use Illuminate\Support\Facades\Route;
require __DIR__.'/auth.php';

//home page
Route::get('/{page?}')->name('home')->uses('HomeController');
Route::get('/personagem/{id}')->name('personagem.detalhe')->uses('HomeController@personagemDetalhe');

//Meus personagens
Route::get('/personagens')->name('personagem')->uses('PersonagensController')->middleware('auth');

//Sobre
Route::get('/sobre')->name('sobre')->uses('SobreController');


