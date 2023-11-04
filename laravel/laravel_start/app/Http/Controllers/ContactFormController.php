<?php

namespace App\Http\Controllers;

use App\Models\ContactForm; // ContactForm 불러와 사용한다고 use 해주기
use Illuminate\Http\Request;

class ContactFormController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()  // contacts폴더 안의 index.blade.php 파일로 내용을 전송한다
    {
        // get() 메서드를 호출하지 않은 경우, 실제 쿼리는 데이터베이스에서 실행되지 않는다.
        $contacts = ContactForm::select('id','name','title','created_at')->get(); // get() 메서드는 데이터베이스에서 쿼리를 실행하고, 결과를 컬렉션 형태로 반환
        return view('contacts.index',compact('contacts')); // 이렇게 적으면 위의 변수 $contacts를 전달할 수 있다. 🩵 compact함수는 변수 이름을 입력으로 받아, 그 이름을 가진 변수의 이름과 값을 가진 배열을 생성해 반환
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
        // dd($request); // $request 만으로 폼에 입력한 정보가 들어있다.  -> request 안에  parameters에 폼에 입력한 정보들이 들어있음
        // dd($request , $request-> name); // 리퀘스트로 받은 내용들을 검사해서 출력 


        // 변수는 따로 지정해 주지 않아도 된다. => 여기에 작성된 내용은 ContactForm 모델의 $fillable에 지정되어 있어야 한다. 
/* $contactForm = */ContactForm::create([ // ContactForm 모델 인스턴스를 데이터베이스에 저장 -> ContactForm 을 불러온다고 위에 use로 작성해주어야 한다 

            // form 태그에서 사용자로부터 입력받은 데이터를 뽑아 와서, 이를 기반으로 ContactForm 레코드를 생성한다.
            'name' => $request->name,
            'title' => $request->title,
            'email' => $request->email,
            'url' => $request->url,
            'gender' => $request->gender,
            'age' => $request->age,
            'contact' => $request->contact,
        ]);
        // 지정해 놓은 라우트 이름으로 리다이렉트
        return to_route('contacts.index'); // 저장한 이후에는 리다이렉트를 해주는게 일반적이다.  to_route 메서드로 리다이렉트 할 수 있다.   
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // 해당 id에 맞는 레코드를 가져옴 
        $contact = ContactForm::find($id);

        // 성별 체크
        $contact->gender ===0?$gender = '남자':$gender = '여자'; // $gender는 compact함수에서 넘겨주자

        // 나이체크
        if($contact -> age===1) {$age = '~19살';}   // $age는 compact함수에서 넘겨주자
        if($contact -> age===2) {$age = '20살~29살';}
        if($contact -> age===3) {$age = '30살~39살';}
        if($contact -> age===4) {$age = '40살~49살';}
        if($contact -> age===5) {$age = '50살~59살';}
        if($contact -> age===6) {$age = '60살~';}
        
        return view('contacts.show', compact('contact','gender','age'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
        $contact = ContactForm::find($id); // id 값으로 넘어온 값의 한줄의 레코드를 찾아서 반환해라 

        return view('contacts.edit',compact('contact'));
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
