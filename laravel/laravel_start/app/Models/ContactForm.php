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
    protected $fillable = [ // 복수 대입 가능하게 하는 모델 속성을 정의
        'name',
        'title',
        'email',
        'url',
        'gender',
        'age',
        'contact',
    ];
}
