<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('/resourceController/register_form');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $req)
    {
        $name = $req -> name;
        $date = $req -> date;
        $email = $req -> email;
        $guild = $req -> guild;
        return view('/resourceController/register',
        [
            'name' => $name,
            'date' => $date,
            'email' => $email,
            'guild' => $guild,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $req, string $id)
    {   
      
        return view('/resourceController/update_form',
    [
        'id'=>$id
    ]
    );
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {   

        return view();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
