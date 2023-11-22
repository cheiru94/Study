<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ComponentTestController extends Controller
{
  //
  public function showComponent1()
  {
    return view('tests.component-test1'); //test 폴더 안에 component-test1 파일을 반환
  }

  public function showComponent2()
  {
    return view('tests.component-test2'); //test 폴더 안에 component-test2 파일을 반환
  }
  public function testt()
  {
    return view('test.test'); //test 폴더 안에 component-test2 파일을 반환
  }
}
