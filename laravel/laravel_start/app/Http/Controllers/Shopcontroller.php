<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Area;
use App\Models\Shop;

class Shopcontroller extends Controller
{
    //
    public function index(){

      // 1 : 多    부모 -> 자식
      $shops = Area::find(1)->shops;

      // 부모 <- 자식 
      $area = Shop::find(3)->area;

      
      
      // 多 : 多
      $routes = Shop::find(1)->routes()->get();

      dd($shops,$area,$routes);
    }
}

