<?php

namespace App\Providers;

use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Route;

/* 화면을 읽어 들일 때 마다 실행 */

class RouteServiceProvider extends ServiceProvider
{
    /**
     * 애플리케이션의 "홈" 경로입니다.
     *
     * 일반적으로 사용자는 인증 후 여기로 리디렉션됩니다.
     *
     * @var string
     */
    public const HOME = '/dashboard'; // 유저가 로그인하면, /dashboard 로 리다이렉트 
    public const OWNER_HOME = '/owner/dashboard'; // 오너가 로그인하면, /owner/dashboard 로 리다이렉트 
    public const ADMIN_HOME = '/admin/dashboard'; // 관리자가 로그인하면, /admin/dashboard 로 리다이렉트 



    /**
     * 경로 모델 바인딩, 패턴 필터 및 기타 경로 구성을 정의합니다.
     */

    // boot() 메서드 :  화면을 읽어와서 서비스 프로바이더가 다 읽히고 난 다음에 실행된다.
    public function boot(): void
    {
        // $this->configureRateLimiting();
        RateLimiter::for('api', function (Request $request) {
            return Limit::perMinute(60)->by($request->user()?->id ?: $request->ip());
        });

        // 🟢 라우트 정보는 크게 2종류의 패턴이 있다.
        $this->routes(function () {

            // 1. 미들웨어를 api로 사용하는 방법
            Route::prefix('api')
                ->middleware('api') // 프론트앤드 처럼 전부 자바스크립트로 만드는 경우에는 api사용
                ->namespace($this->namespace)
                ->group(base_path('routes/api.php'));


            // 🟢 onwer
            Route::prefix('onwer')
                ->as('onwer.')
                ->middleware('web')
                ->namespace($this->namespace)
                ->group(base_path('routes/onwer.php')); //onwer.php의 모든 url 앞에 onwer가 붙는다.

            // 🟢 admin
            Route::prefix('admin')
                ->as('admin.')
                ->middleware('web')
                ->namespace($this->namespace)
                ->group(base_path('routes/admin.php')); //admin.php의 모든 url 앞에 admin가 붙는다.


            // 🟢  user    
            // 2. 미들웨어를 web으로 사용하는 방법
            Route::prefix('/') // owner와 admin이 붙어있지 않으면, 모두 user의 url
                ->as('user.') // 별명 붙이기 : 라우트 정보를 user. 으로 
                ->middleware('web') // 라라벨로 view측을 표시해서 , request 요청을 돌려주는 패턴은 web사용
                ->namespace($this->namespace)
                ->group(base_path('routes/web.php'));
        });
    }
}
