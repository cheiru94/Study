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
      // 중간 테이블은 외부키만 있으면 되기 때문에  id, timestamps 같은건 없어도 된다. 
      // 만약 id를 삭제할 경우에는 프라이머리키가 필요하기 때문에, 별도로 프라이머리키를 설정해야 한다.
        Schema::create('route_shop', function (Blueprint $table) {
      
            $table->foreignId('route_id'); 
            $table->foreignId('shop_id'); 
            $table->primary(['route_id','shop_id']);

           
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('route_shop');
    }
};
