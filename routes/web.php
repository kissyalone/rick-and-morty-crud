<?php

use Illuminate\Support\Facades\Route;
require __DIR__.'/auth.php';

Route::get('/')->name('home')->uses('HomeController');
Route::get('/personagens')->name('personagem')->uses('PersonagensController')->middleware('auth');
Route::get('/sobre')->name('sobre')->uses('SobreController');


