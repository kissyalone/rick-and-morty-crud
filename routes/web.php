<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;

require __DIR__.'/auth.php';

//home page
Route::get('/', function () {
    return redirect('page/1');
})->name('home');

Route::get('/page/{page}')->name('page')->uses('HomeController@index');
Route::get('/personagem/{id}')->name('personagem.detalhe')->uses('HomeController@personagemDetalhe');
Route::post('/personagem/store')->name('personagem.store')->uses('HomeController@personagemStore')->middleware('auth');
//Meus personagens
Route::get('/personagens')->name('personagem')->uses('PersonagensController@index')->middleware('auth');

//Sobre
Route::get('/sobre')->name('sobre')->uses('SobreController');


