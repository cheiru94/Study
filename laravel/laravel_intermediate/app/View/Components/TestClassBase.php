<?php

namespace App\View\Components;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class TestClassBase extends Component
{

  //  변수 정의  -> 이 변수들은 생성자에서 초기화를 시켜주어야 한다. 
  public $classBaseMessage;
  public $defaultMessage;


  /**
   * 새 컴포넌트 인스턴스를 생성합니다.
   */
  public function __construct($classBaseMessage, $defaultMessage = "초기값 설정은 이렇게 가능") // 클래스이기 때문에 construct로 초기화 할 수 있는 부분, 여기에 변수 같은 것을 설정할 수 있다. 
  {
    // 변수에 값 대입
    $this->classBaseMessage = $classBaseMessage; // 컨스트럭터에서 변수를 지정하면 따로 render 메서드 쪽에서 변수를 넘겨주지 않아도 된다.
    $this->defaultMessage = $defaultMessage;
  }

  /**
   * 컴포넌트를 나타내는 view/contents를 가져옵니다. 
   */
  public function render(): View|Closure|string
  {
    return view('components.tests.test-class-base-component'); // 컴포넌트 이름은 test-class-base-component
    // 뷰로 전달하는 부분  ,view파일 안에서 components.test-class-base라는 파일을 지정해서  내용을 보여준다. 
  }
}
