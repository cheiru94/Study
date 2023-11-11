<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContactForm extends Model
{
    use HasFactory;
    /* 
        create메서드를 사용하여 단일 PHP 문으로 새 모델을 "저장"할 수 있습니다.
        삽입한 모델 인스턴스가, 이 메소드에 의해 돌려주어집니다.

        다만, create메소드를 사용하기 전에, 모델 클래스에서 fillable또는 guarded프로퍼티을 지정할 필요가 있습니다. 
        모든 Eloquent 모델은 기본적으로 다중 할당 취약점으로부터 보호되므로 이러한 속성이 필수입니다

        다중 할당 가능한 속성을 지정한 후에는 create메소드를 사용하여 데이터베이스에 새 레코드를 삽입할 수 있습니다.
    */ 

    /*  💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛
         create 메서드를 사용하기 전에 해당 모델 클래스에서  사용할 프로퍼티를 미리 지정해준다
        다중 할당 가능한 속성을 $fillable 안에 지정한 후에는 create메서드를 사용해 DB에 새 레코드를 삽입할 수 있다
    */
    protected $fillable = [ // 복수 대입 가능하게 하는 모델 속성을 정의 => form 속성으로 받아올 내용들을 넣어준다
        'name',
        'title',
        'email',
        'url',
        'gender',
        'age',
        'contact',
    ];


    //protected $guarded // 지정한 칼럼 제외하고 입력 가능



    /* 🟢 Model의 메소드로 정의된 Local Scope 🟢 */
    /*  
      🟢사용자가 입력한 검색어를 처리해서 데이터베이스 쿼리를 생성하는 로직🟢
      스코프는 일종의 쿼리 필터로, 특정 쿼리 로직을 재사용하기 위해 만들어집니다. 
      즉, 반복적으로 사용되는 쿼리 조건을 메소드로 만들어 코드를 간결하게 만들 수 있습니다. 
      메소드 이름 앞에 'scope'를 붙여서 정의합니다.
    */
    // 🟢🟢 이 메서드를 사용할 때는 search 라고만 입력하면 된다
    public function scopeSearch($query, $search)  // 메서드 이름 맨 앞에 scope 붙이기 , 첫 번째 인자 $query는 쿼리 빌더의 인스턴스이며, 두 번째 인자 $search는 사용자가 입력한 검색 키워드
    {
      // 🟢 검색어가 입력 되어있으면 실행 
      if($search !== null){ 
        // $search_split = mb_convert_kana($search, 's'); // 일본어인 경우 전각 스페이스를 반각 
        // $search_split2 = preg_split('/[\s]+/', $search_split); //공백 따개기
   
        // 하나 이상의 연속된 공백 문자를 찾는 정규 표현식 
        $search_split2 = preg_split('/[\s]+/', $search); // 한국어 공백 따개기

        //🟢 따개진 검색어 개수 많큼 반복 하면서 단어 확인
        foreach( $search_split2 as $value ){
          $query->where('name', 'like', '%' .$value. '%'); 
        } 
      }

      return $query; // 생성된 쿼리 반환
    } 

}
