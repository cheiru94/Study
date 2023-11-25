<?php

namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

class Authenticate extends Middleware
{

    protected $user_route = 'user.login';
    protected $owner_route = 'owner.login';  // RouteServiceProvider.php에서 as로 설정해 두었다.
    protected $admin_route = 'admin.login';


    /**
     * 사용자가 인증되지 않은 경우 리디렉션해야 하는 경로를 가져옵니다.
     */
    protected function redirectTo(Request $request): ?string
    {
        if (!$request->expectsJson()) {
            if (Route::is('owner.*')) {
                return route($this->owner_route);
            } else if (Route::is('admin.*')) {
                return route($this->admin_route);
            } else {
                return route($this->user_route);
            }
        }
        // return $request->expectsJson() ? null : Route::is('owner.*') ? route($this->owner_route) : null;; // 인증되지 않은 유저는 전부 , login화면으로 리다이렉션 된다.

    }
}
