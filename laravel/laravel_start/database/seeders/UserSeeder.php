<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // 이렇게 seeder에 따로 저장을 하면 fresh 할 때 마다 매번 회원가입 같은거 안 해도 된다
        // 특정 데이터를 계속 유지하고 싶을 때 사용하면 된당
        DB::table('users')->insert([
          [
            'name'=>'Ichiban',
            'email'=>'cheiru94@gmail.com',
            'password'=>Hash::make('dmsdud011!!'),
            'created_at'=> Now()
          ],
          [
            'name'=>'Jaeil',
            'email'=>'lji941001@gmail.com',
            'password'=>Hash::make('wodlfwotjd011!!'),
            'created_at'=> Now()
          ],
          ]);
    }
}
