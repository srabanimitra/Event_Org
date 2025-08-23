<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\ClubController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

// Public routes (no auth required)
Route::get('/events', [EventController::class, 'index']);       // fetch all events
Route::get('/events/{id}', [EventController::class, 'show']);   // fetch single event

// User authentication
Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'login']);

// Admin authentication
Route::post('/admin-login', [AdminController::class, 'login']);

// Protected routes (require authentication)
Route::middleware(['auth:sanctum'])->group(function () {

    // Get logged-in user info
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    // Club routes (Admin only)
    Route::get('/clubs', [ClubController::class, 'index']);
    Route::post('/clubs', [ClubController::class, 'store']);
    Route::get('/clubs/{id}', [ClubController::class, 'show']);

    // Event registration (Student)
    Route::post('/events/{id}/register', [EventController::class, 'register']);
    Route::post('/events/{id}/unregister', [EventController::class, 'unregister']);
});
