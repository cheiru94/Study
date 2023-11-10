<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

use function Laravel\Prompts\text;

class TestSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('tests')->insert([
          [
            'text'=>'aaa',
            'created_at'=> Now()
          ],
          [
            'text'=>'bbb',
            'created_at'=> Now()
          ],
          [
            'text'=>'ccc',
            'created_at'=> Now()
          ]
        ]);
    }
}
