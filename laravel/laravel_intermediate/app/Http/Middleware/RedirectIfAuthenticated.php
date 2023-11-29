<?php

namespace App\Http\Middleware;

use App\Providers\RouteServiceProvider;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class RedirectIfAuthenticated
{

    // Authentication Guards 인증 가드
    private const GUARD_USER = 'users';
    private const GUARD_OWNER = 'owners';
    private const GUARD_ADMIN = 'admin';

    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, string ...$guards): Response
    {
        // $guards = empty($guards) ? [null] : $guards;

        // foreach ($guards as $guard) {
        //     if (Auth::guard($guard)->check()) {
        //         return redirect(RouteServiceProvider::HOME);
        //     }
        // }


        // 특정 guard를 통해 현재 사용자가 인증되었는지를 확인
        /* 
          1. 현재 사용자가 self::GUARD_USER라는 인증 방식(Guard)을 통해 로그인이 되어 있는지 확인 
          2. 현재 요청이 'user.'로 시작하는 라우트에 해당하는지를 확인
        */
        // 🟡 user
        if (Auth::guard(self::GUARD_USER)->check() && $request->routeIs('user.*')) {
            return redirect(RouteServiceProvider::HOME);
        }
        // 🟡 owner
        if (Auth::guard(self::GUARD_OWNER)->check() && $request->routeIs('owner.*')) {
            return redirect(RouteServiceProvider::OWNER_HOME);
        }
        // 🟡 admin
        if (Auth::guard(self::GUARD_ADMIN)->check() && $request->routeIs('admin.*')) {
            return redirect(RouteServiceProvider::ADMIN_HOME);
        }

        return $next($request);
    }
}
