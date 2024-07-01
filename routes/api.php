<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\TestController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::middleware('auth:sanctum')->group(function () {
    // Protected routes requiring authentication with Sanctum
    Route::get('/categories', [TestController::class, 'index']);
});

// Public routes
Route::get('/categories', [TestController::class, 'index']);

Route::get('/userData', [HomeController::class, 'userData']);


Route::get('/test', function () {
    return response()->json(['message' => 'Testing basic route']);
});
