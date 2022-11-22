<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/', function(){
    return Inertia::render('Homepage', [
        'title' => 'Pullvis',
        'description' => 'Selamat datang di Pullvis'
    ]);
});

Route::get('/facebook', function () {
    return Inertia::render('Facebook/index');
});

Route::get('/tiktok', function () {
    return Inertia::render('Tiktok/index');
});

Route::get('/instagram', function () {
    return Inertia::render('Instagram/index');
});


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';
