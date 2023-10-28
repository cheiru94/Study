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
    //🍑 열을 추가할 때는 create가 아니라 table로 되어 있다.
        Schema::table('contact_forms', function (Blueprint $table) {
            // after 메소드로 어떤 열에 뒤에 올 것인지 지정해 줄 수 있다.
            $table->string('title',50)->after('name');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('contact_forms', function (Blueprint $table) {
            // dropColumn 메소드로 칼럼을 삭제할 수 있다.
            $table->dropColumn('title');
        });
    }
};
