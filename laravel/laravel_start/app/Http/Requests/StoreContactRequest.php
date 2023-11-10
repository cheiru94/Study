<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

//  FormRequest 클래스를 확장하여 사용자의 입력을 검증
class StoreContactRequest extends FormRequest  // 🟢 이 내용을 ContactFormController.php 에서 불러 사용하자
{
    /**
     * 🟡 사용자에게 이 요청을 할 수 있는 권한이 있는지 결정.
     */
    public function authorize(): bool
    {
        return true; // 여기 true로 해 놓지 않으면 벨리데이션 처리 안 하고, 에러 발샐
    }

    /**
     * 🟡 요청에 적용되는 유효성 검사 규칙 가져오기 / 각 필드에 적용될 유효성 검사 규칙을 정의.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
          'name' => ['required', 'string', 'max:20'], // 필수항목이며, 문자열이고, 최대 길이는 20
          'title' => ['required', 'string', 'max:50'], // 필수항목이며, 문자열이고, 최대 길이는 50
          'email' => ['required', 'email', 'max:255'], // 테이블마다 1건 이라면 unique:contact_forms 
          'url' => ['url', 'nullable'], // URL 형식이여야 하며, 입력하지 않아도 됨
          'gender' => ['required', 'boolean'],
          'age' => ['required'],
          'contact' => ['required', 'string', 'max:200'],
          'caution' => ['required', 'accepted'] // 필수항목이며, 사용자가 수락해야
        ];
    }
}
