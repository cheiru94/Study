<?php

use App\Http\Controllers\ProfileController;//コントローラを読み込む
use Illuminate\Support\Facades\Route;//Routeを読み込む

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| 여기에서 애플리케이션의 웹 경로를 등록할 수 있습니다. 
| 이러한 경로는 RouteServiceProvider에 의해 로드되며 모든 경로는
| "웹" 미들웨어 그룹에 할당됩니다. 멋진 것을 만들어 보세요!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php'; // 현재 디렉토리의 /auth.php 를 읽어와라 
