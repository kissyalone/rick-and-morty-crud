<?php

use Illuminate\Support\Facades\Route;
require __DIR__.'/auth.php';

//home page
Route::get('/')->name('home')->uses('HomeController@index');
Route::get('/personagem/{id}')->name('personagem.detalhe')->uses('HomeController@personagemDetalhe');
Route::post('/')->name('personagem.store')->uses('HomeController@personagemStore');

//Meus personagens
Route::get('/personagens')->name('personagem')->uses('PersonagensController@index')->middleware('auth');

//Sobre
Route::get('/sobre')->name('sobre')->uses('SobreController');


