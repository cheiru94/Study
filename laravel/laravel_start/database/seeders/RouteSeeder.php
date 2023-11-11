<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB; // 🟢 항상 필요하다 🟢

class RouteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('routes')->insert([
          [ 'name' => '山手線', 'sort_no' => 1 ],
          [ 'name' => '京浜東北線', 'sort_no' => 2 ], 
          [ 'name' => '東武東上線', 'sort_no' => 3 ],
          ]);
    }
}
