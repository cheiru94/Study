<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void // php artisan migrate명령어를 실행하면 이 up메소드가 실행된다, 그리고 추가한 컬럼들을 추가해 준다
    {
        // ichiban 테이블에 칼럼들을 추가
        Schema::create('ichibans', function (Blueprint $table) {

            // 추가할 칼럼들
            $table->id(); // UnsignedBigInt 타입의 auto_increment primary key id 컬럼 생성해 준다

            $table->timestamps(); // datatime 데이타 타입으로 create_at , update_at이라는 두 개의 칼럼을 만들어준다
        });
    }

    /**
     * Reverse the migrations.
     */

     // php artisan migrate:rollback명령어를 실행하면 실행된다
     // 마지막으로 실행된 마이그레이션의 작업을 취소시켜 , migrate하기 전의 상태로 돌려준다. 
    public function down(): void //만든 테이블을 삭제한다 
    {
        Schema::dropIfExists('ichibans');
    }
};
