<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // 테이블 이름 contact_forms
        Schema::create('contact_forms', function (Blueprint $table) {
            $table->id(); //속성에는 unsigned라고 되어있는데 마이너스는 안된다는 의미다
            $table->string('name',20); // 이름 
            $table->string('email', 255); // 이메일
            $table->longText('url')->nullable(); // url 내용  -> 라라벨은 기본 null을 허용하지 않아, 허용 처리 해줌
            $table->boolean('gender'); // 성별
            $table->tinyInteger('age'); // 나이
            $table->string('contact', 200); // 문의(contact) 내용
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contact_forms');
    }
};
