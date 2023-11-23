{{-- 
  컴포넌트에 지정해 놓은 것들은 
  반드시 @props로 기본 값을 설정해 주어야 한다.
  만약 변수를 :message='メッセージ'의 형태로 해도 앞에 : 때문에 안된다.
  --}}
@props([
  // 'title',
  'title'=>'ttitle초기값',
  'msg' => 'msg초기값',
  'message' => 'メッセージ초기값',
  'content' => '본문 초기값'
  ])

<div {{$attributes->merge([
  'class'=>'border-2 shadow-md w-1/4 p-2'
])}}>
  <div>{{$title}}</div>
  <div>화상</div>
  <div>{{$content}}</div>
  <div>{{$msg}}</div> {{-- 받을 변수 --}}
  <div>{{$message}}</div> {{-- 받을 변수 --}}
</div>







