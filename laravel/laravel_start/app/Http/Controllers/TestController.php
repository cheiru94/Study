<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Test;

class TestController extends Controller
{
    //
    public function index () {
        dd('test');
        // Eloquent
        $values = Test::all(); // Eloquent/Collection
        $count = Test::count();  // 숫자 
        $first = Test::findOrFail(1);  // 인스턴스 
        $whereBBB = Test::where('text', '=', 'bbb');  // Eloquent/Builder
        $whereBBB = Test::where('text', '=', 'bbb')->get();  // Collection
        dd($values, $count, $first, $whereBBB);

        // compact 함수를 사용해서 변수 값을 문자로 바꿔서 넣어주면 변수에 값 할당 일일이 안 해도 된다
        return view('tests.test',compact('values'));

    }
}
