<?php

use App\Http\Controllers\ProfileController;// 컨트롤러 경로를 통해 불러옴 
use Illuminate\Support\Facades\Route;// Route를 읽어 들임 
use App\Http\Controllers\ComponentTestController; // 컨트롤러 경로를 통해 불러옴 

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


// 🟢 ComponentTestController 추가  => 컴포넌트 연습 🟢
//                경로                  컴포넌트 이름                   메서드 이름 
Route::get('/component-test1', [ComponentTestController::class, 'showComponent1']);
Route::get('/component-test2', [ComponentTestController::class, 'showComponent2']);



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php'; // 현재 디렉토리의 /auth.php 를 읽어와라 
