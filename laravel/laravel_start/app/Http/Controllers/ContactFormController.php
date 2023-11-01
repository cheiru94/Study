<?php

namespace App\Http\Controllers;

use App\Models\ContactForm;
use Illuminate\Http\Request;

class ContactFormController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $contacts = ContactForm::select('id','name','title','created_at')->get();
        return view('contacts.index',compact('contacts')); // 이렇게 적으면 위의 변수 $contacts를 전달할 수 있다.  
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return view('contacts.create'); // contacts 폴더의 create 뷰 파일을 반환해라
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        // dd($request , $request-> name); // 리퀘스트로 받은 내용들을 검사해서 출력 

        // 변수는 따로 지정해 주지 않아도 된다. => 여기에 작성된 내용은 ContactForm 모델의 $fillable에 지정되어 있어야 한다. 
        ContactForm::create([ // ContactForm 모델 인스턴스를 데이터베이스에 저장

            // 사용자로 부터 입력받은 데이터를 뽑아 와서, 이를 기반으로 ContactForm 레코드를 생성한다.
            'name' => $request->name,
            'title' => $request->title,
            'email' => $request->email,
            'url' => $request->url,
            'gender' => $request->gender,
            'age' => $request->age,
            'contact' => $request->contact,
        ]);
        return to_route('contacts.index'); // to_route 메서드로 리다이렉트 할 수 있다.   
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
