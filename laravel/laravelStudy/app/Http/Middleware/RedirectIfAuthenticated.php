<?php

//App\Http\Middleware; : 이 부분은 현재 파일이 어떤 네임스페이스에 속해 있는지를 정의합니다. 여기서는 App\Http\Middleware라는 네임스페이스에 속해 있다고 선언되었습니다.
namespace App\Http\Middleware;

// 이 부분은 이 파일에서 사용할 다른 클래스나 함수 등을 불러오기 위한 것
use App\Providers\RouteServiceProvider;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

// edirectIfAuthenticated라는 이름의 클래스를 정의
class RedirectIfAuthenticated
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, string ...$guards): Response
    {
        $guards = empty($guards) ? [null] : $guards;

        foreach ($guards as $guard) {
            if (Auth::guard($guard)->check()) {
                return redirect(RouteServiceProvider::HOME);
            }
        }

        return $next($request);
    }
}

/* 
    이 코드는 Laravel 프레임워크에서 사용하는 미들웨어의 예시입니다. 미들웨어는 웹 애플리케이션에서 HTTP 요청을 처리하기 전에 실행되는 코드 조각을 말합니다. 
    이를 통해, 우리는 요청을 검사하거나 수정하거나, 특정 조건에 따라 요청을 거부할 수 있습니다.

    
    public function handle(Request $request, Closure $next, string ...$guards): Response: handle 메소드가 실제로 미들웨어의 핵심 작업을 수행합니다. 여기서 세 가지 파라미터를 받습니다.
    $request: 현재 HTTP 요청 객체입니다.
    $next: 다음 미들웨어 혹은 최종적으로 실행될 컨트롤러 액션에 대한 클로저(Closure)입니다.
    $guards: 가변 인자로써, 특정 guard(인증 방식)가 주어진 경우 해당 guard로 인증 확인 작업을 수행합니다.
    $guards = empty($guards) ? [null] : $guards; : 만약 guards 파라미터가 비어있다면 null 값을 갖도록 설정합니다.
    foreach ($guards as $guard) {...}: 각각의 guard에 대하여 반복문을 실행합니다.
    if (Auth::guard($guard)->check()) {...}: 만약 현재 guard에서 사용자가 로그인 상태라면 (check() 메소드가 true를 반환한다면), 아래 코드블럭이 실행됩니다.
    return redirect(RouteServiceProvider::HOME);: 로그인된 사용자를 홈 페이지(RouteServiceProvider::HOME)로 리다이렉트(페이지 전환) 시킵니다.
    return $next($request);: 만약 사용자가 로그인 상태가 아니라면, 요청을 다음 미들웨어 혹은 최종적으로 실행될 컨트롤러 액션으로 넘깁니다.
    이렇게 이 미들웨어는 로그인된 사용자가 로그인 페이지나 회원 가입 페이지 등에 접근하는 것을 방지하는 역할을 합니다. 이미 로그인한 상태에서 이런 페이지에 접근하려고 하면 홈페이지로 자동 리다이렉트되기 때문입니다.
*/
