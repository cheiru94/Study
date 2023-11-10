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

    // 메서드 이름 맨 앞에 scope 붙이기 ,첫 번째 인수는 $query、두 번째 인수에 전해져 오는 인수 
    public function scopeSearch($query, $search)
    {
      if($search !== null){
        $search_split = mb_convert_kana($search, 's'); // 일본어인 경우 전각 스페이스를 반각 
        $search_split2 = preg_split('/[\s]+/', $search_split); //공백 따개기
      foreach( $search_split2 as $value ){
      $query->where('name', 'like', '%' .$value. '%'); } 
    }
    return $query;
    } 
}
