<?php

use App\Http\Controllers\ContactFormController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TestController;
use App\Http\Controllers\ShopController;
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
Route::get('tests/test', [TestController::class, 'index']);


/* 🍑 ShopController */
Route::get('/shops', [ShopController::class, 'index']);




/* 🍑 리소스 컨트롤러 적용 */
// Route::resource('contacts',ContactFormController::class);

//'contacts'라는 URL에 대한 GET 요청이 오면 ContactFormController의 index 메소드를 실행하라는 뜻
Route::get('contacts', [ ContactFormController::class, 'index'])->name('contacts.index');


/* 🍑 미들웨어에서 auth를 적용시켜 주지 않으면 로그인 안 했는데도 http://localhost/contacts에 접근할 수 있게 된다.. */
Route::prefix('contacts')  // 이후에 정의될 라우트의 URL 앞에 '/contacts'를 자동으로 추가     // => Route::get('list', ...)라는 라우트를 정의하면, 실제 URL은 '/contacts/list'가 됩니다.
    ->middleware(['auth']) // 이후에 정의될 라우트에 'auth' 미들웨어를 적용합니다. 'auth' 미들웨어는 사용자가 로그인했는지 확인하고, 로그인하지 않은 사용자가 접근하려고 하면 로그인 페이지로 리다이렉트합니다.
    ->controller(ContactFormController::class) //  이후에 정의될 라우트의 컨트롤러를 ContactFormController로 설정
    ->name('contacts.') // 이후에 정의될 라우트의 이름 앞에 'contacts.'를 자동으로 추가 => 사용할 때는 route('이름') 이렇게 적으면 된다 
    ->group(function(){ // 이후에 정의될 라우트들을 그룹으로 묶는다. 그룹으로 묶으면 그룹 전체에 공통적으로 적용할 설정을 한 번에 할 수 있다.

    /* CRUD 구현 메소드  🔸 메소드이름 : /url주소 , 🔹 라우터명  */
    Route::get('/','index')->name('index'); //   🔸 get :  /contacts  , 🔹 라우터명 : contacts.
    Route::get('/create','create')->name('create');//   🔸 get :  /contacts/create    , 🔹 라우터명 : contacts.create
    Route::post('/','store')->name('store');//   🔸 post  :  /contacts/      ,  🔹 라우터명 : contacts.store
    Route::get('{id}','show')->name('show'); //  🔸 get :  /contacts/{id}  , 🔹 라우터명 : contacts.show
    Route::get('/{id}/edit','edit')->name('edit');//  🔸 get :  /contacts/{id}/edit  , 🔹 라우터명 : contacts.edit
    Route::put('/{id}','update')->name('update');//🔸 put :  /contacts/{id}  , 🔹 라우터명 : contacts.update
    Route::delete('/{id}/destroy','destroy')->name('destroy'); //🔸 delete :  /contacts/{id}/destroy  , 🔹 라우터명 : contacts.destroy
});

  



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

require __DIR__.'/auth.php';
