<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class SampleServiceProvider extends ServiceProvider
{
  /**
   * Register : 서비스 컨테이너에 등록하는 처리
   */
  public function register(): void
  {
    //
    app()->bind('serviceProviderTest', function () {
      return '서비스 프로바이더 테트스';
    });
  }

  /**
   * Bootstrap services.
   */
  public function boot(): void
  {
    //
  }
}
