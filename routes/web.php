<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

require __DIR__.'/auth.php';

//Home
Route::get('/', function () {
    return redirect('page/1');
})->name('home');
Route::get('/page/{page}')->name('page')->uses('HomeController@index');
Route::get('/personagem/{id}')->name('personagem.detalhe')->uses('HomeController@personagemDetalhe');
Route::post('/personagem/store')->name('personagem.store')->uses('HomeController@personagemStore')->middleware('auth');

//Meus personagens
Route::get('/personagens')->name('personagem')->uses('PersonagensController@index')->middleware('auth');
Route::get('/meu/personagem/{id}')->name('meu.personagem.detalhe')->uses('PersonagensController@MeuPersonagemDetalhe')->middleware('auth');
Route::put('/meu/personagem/{id}')->name('meu.personagem.update')->uses('PersonagensController@MeuPersonagemDetalheUpdate')->middleware('auth');
Route::delete('/meu/personagem/{id}')->name('meu.personagem.delete')->uses('PersonagensController@MeuPersonagemDelete')->middleware('auth');

//Sobre
Route::get('/sobre')->name('sobre')->uses('SobreController');

//Outros
Route::inertia('/vazio', 'Vazio');
Route::inertia('/vazio', 'Vazio');
Route::get('linkedin', function () {
    return Inertia::location('https://br.linkedin.com/in/jhousouza2');
})->name('linkedin');


