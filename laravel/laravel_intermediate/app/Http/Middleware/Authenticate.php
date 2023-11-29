<?php

namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*  ⭐⭐  Authenticate.php 파일 : 사용자의 인증 상태를 체크하는 미들웨어 ⭐⭐  */
//미들웨어는 HTTP 요청이 들어오고 응답이 반환되는 사이에 
//위치하여 특정 작업을 수행하는 소프트웨어 컴포넌트

// 🟢Authenticate 클래스🟢
// 특히 인증되지 않은 사용자에 대해 어떤 동작을 수행할지를 정의합니다
//  이 클래스는 기본적으로 사용자가 로그인한 상태인지 확인하고, 
// 로그인하지 않았다면 특정 경로(대개 로그인 페이지)로 리다이렉션하는 기능을 담당합니다.
class Authenticate extends Middleware
{

    /* 🟢 각각의 로그인 화면 🟢 */
    protected $user_route = 'user.login';
    protected $owner_route = 'owner.login';  // RouteServiceProvider.php에서 as로 설정해 두었다.
    protected $admin_route = 'admin.login';


    /**
     * 🟢 사용자가 인증되지 않은 경우 리디렉션해야 하는 경로를 가져옵니다.🟢
     * 사용자가 로그인하지 않았을 때 어떤 경로로 리다이렉션할지를 결정합니다. 
     * 이 리다이렉션 경로는 일반적으로 로그인 페이지가 됩니다.
     */
    protected function redirectTo(Request $request): ?string
    {
        /* 🟠 3종류의 사용자를 분류 🟠 */
        if (!$request->expectsJson()) {
            // 🟠 1. owner에 관련된 url 이면
            if (Route::is('owner.*')) {
                return route($this->owner_route);   // 인증되지 않은 유저는 전부 , login화면으로 리다이렉션 된다.
                // 🟠 2. admin에 관련된 url  이면
            } else if (Route::is('admin.*')) {
                return route($this->admin_route);
                // 🟠 3. user에 관련된 url  이면
            } else {
                return route($this->user_route);
            }
        }
    }
}
