<?php

use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/


//get방식으로 / url로 요청이 들오면 return 안의 views안에 있는 welcome.blade.php라는 파일을 실행시켜 준다.  .blade.php는 생략 가능
Route::get('/', function () {  // Route:: 이게 '파사드' 라는 문법
    return view('welcome');  // view(헬퍼함수=도우미 함수) :  1)view파일을 로드하고  2)해당 뷰에 데이터를 전달하는 역할
});                          // 웹 애플리케이션의 응답으로 사용자에게 보여질 화면을 생성하는데 사용


/* 🍑 리소스 컨트롤러 라우터 🍑 */
Route::resource('/users',UserController::class);
//                 ⬆ 이 부분만 작성하면 알아서 라우팅 해준다.