<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\View\View;

class UserController extends Controller
{
    // post
    public function create():View {
        return view('/controller/register_form');
    }

    public function store(Request $req):View {
        $name = $req -> name;
        $date = $req -> date;
        $email = $req -> email;
        $guild = $req -> guild;
        return view ('/controller/register',
        [  'name'=>$name,
            'date'=>$date,
            'email'=>$email,
            'guild'=>$guild
        ]);
    }

    // put 
    public function edit() :View{
        return view('/controller/update_form');
    }
    public function update(Request $req) :View {
        $name = $req -> name;
        $date = $req -> date;
        $email = $req -> email;
        $guild = $req -> guild;
        return view ('/controller/update',
        [  'name'=>$name,
            'date'=>$date,
            'email'=>$email,
            'guild'=>$guild
        ]);
    }

    // delete
    public function index() :View {
        return view('/controller/list');
    }
    public function destroy(Request $req) :View {
        $user = $req -> user;
        return view('/controller/remove',['user' => $user]);
    }
}
