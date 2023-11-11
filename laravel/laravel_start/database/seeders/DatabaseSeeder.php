<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

      /* 🟢 seeder 추가  =>  이렇게 해줘야 추가 된다 */
      $this->call([
        TestSeeder::class,
        UserSeeder::class,
      ]);
      
      /* 🟡 factory 추가  */
      // 라라벨의 팩토리 시스템은 모델과 팩토리 클래스 간에 이름에 기반한 자동 해석 기능을 가지고 있다
      // 🟡 ContactFormFactory는 🟡ContactForm 모델에 대한 팩토리로 자동으로 인식된다.
      // 그래서 아래처럼 작성하면 라라벨은 ContactForm 모델에 대해 팩토리를 호출하고, 
      // 그 팩토리에서 100개의 더미 데이터를 생성하라는 의미
      \App\Models\ContactForm::factory(100)->create();
    

      // \App\Models\User::factory()->create([
      //     'name' => 'Test User',
      //     'email' => 'test@example.com',
      // ]);
    }
}
