<?php

use App\Http\Controllers\AssetController;
use App\Http\Controllers\AssetLeaseController;
use App\Http\Controllers\BantuanController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DataController;
use App\Http\Controllers\LaporanController;
use App\Http\Controllers\LayananController;
use App\Http\Controllers\UserManagementController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/health-check', function () {
    return response()->json([
        'status' => 'ok',
        'timestamp' => now()->toISOString(),
    ]);
})->name('health-check');

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
})->name('home');

// Main navigation routes
Route::get('/data', [DataController::class, 'index'])->name('data');
Route::get('/layanan', [LayananController::class, 'index'])->name('layanan');
Route::get('/laporan', [LaporanController::class, 'index'])->name('laporan');
Route::get('/bantuan', [BantuanController::class, 'index'])->name('bantuan');

// Export route
Route::post('/laporan/export', [LaporanController::class, 'store'])
    ->middleware('auth')
    ->name('laporan.export');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');
    
    // Asset management routes
    Route::resource('assets', AssetController::class);
    
    // Asset lease management routes
    Route::resource('asset-leases', AssetLeaseController::class);
    
    // User management routes (only for superadmin)
    Route::resource('user-management', UserManagementController::class);
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
