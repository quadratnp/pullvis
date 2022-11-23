<?php

use App\Http\Controllers\API\FacebookController;
use App\Http\Controllers\API\FacebookPageController;
use App\Http\Controllers\API\InstagramController;
use App\Http\Controllers\API\TiktokController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('facebook', [FacebookController::class, 'index']);
Route::get('page', [FacebookPageController::class, 'index']);
Route::get('tiktok', [TiktokController::class, 'index']);
Route::get('instagram', [InstagramController::class, 'index']);

