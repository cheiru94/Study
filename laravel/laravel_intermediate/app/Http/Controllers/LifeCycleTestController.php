<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

// 🟢 1. LifeCycleTestController 클래스
class LifeCycleTestController extends Controller
{
  //
  public function showServiceContainerTest()
  {
    //           呼び出す時の名前、 機能（関数：클로저)
    app()->bind('lifeCycleTest', function () {
      return '라이프사이클 테트스';
    });

    $test = app()->make('lifeCycleTest');

    /* 서비스 컨테이너를 사용하지 않는 패턴패턴 */
    // $message = new Message();
    // $sample = new Sample($message);
    // $sample->run();


    /* 서비스 컨테이너를 사용하는 패턴 🍊*/
    app()->bind('sample', Sample::class);
    $sample = app()->make('sample');
    $sample->run();




    dd($test, app());
  }
}




// 🟢 2.Sample 클래스 => Message 클래스에 의존
class Sample
{
  public $message;

  //  🟡 의존성 주입 🟡 | 인수에 클래스를 넣어주면 알아서 인스턴스화 시켜준다
  public function __construct(Message $message)
  {
    $this->message = $message; //Message 클래스가 message(ker 값)에 저장된다
  }

  public function run()
  {
    //아래의 Mesaage 클래스 , 그안의 send 메서드 실행 
    $this->message->send();
  }
}

// 🟢 3.Message 클래스
class Message
{
  public function send()
  {
    echo ('메세지 표시');
  }
}
