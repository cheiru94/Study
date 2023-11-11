<?php

namespace App\Services; // 🟡 🟡 이게 잘못 작성되면 다른 곳에서 불러 사용할 때 에러가 발생한다.


/* 컨트롤러에 내용이 많아지면 이렇게 폴더를 하나 파서 각 파일에 class를 만들고 메서드 형식으로 사용하자 */
class CheckFormService {

  // 🟡 성별 체크
  public static function checkGender($data){ // 🟡 static으로 해놓으면 나중에 :: 으로 바로 사용할 수 있다
    $data->gender ===0?$gender = '남자':$gender = '여자'; // $gender는 compact함수에서 넘겨주자
  }
  // 🟡 나이체크
  public static function checkAge($data){    
    if($data -> age===1) {$age = '~19살';}   // $age는 compact함수에서 넘겨주자
    if($data -> age===2) {$age = '20살~29살';}
    if($data -> age===3) {$age = '30살~39살';}
    if($data -> age===4) {$age = '40살~49살';}
    if($data -> age===5) {$age = '50살~59살';}
    if($data -> age===6) {$age = '60살~';}
    
    return $age;
  }
}

// 🟡 🟡 🟡 🟡 🟡 🟡 🟡 🟡 🟡 🟡 🟡 🟡 🟡 🟡 🟡 🟡 🟡 🟡 🟡 🟡 🟡 🟡 🟡 🟡 🟡 🟡
/* 메서드 안의 동작은 컨트롤러와 같은데 코드를 이렇게 분리해 놓으면 컨트롤러가 깔끔해 진다. */