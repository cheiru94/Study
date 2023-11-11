<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Area extends Model
{
    use HasFactory;

    public function shops (){
      // $this 변수는 현재 객체의 인스턴스를 참조
      // 현재 객체'란 $this 키워드가 속해있는 메소드가 호출되는 객체
      return $this->hasMany(Shop::class); 
                                          
    }
}
