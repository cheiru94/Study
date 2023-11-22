
@props([
  'title',
  'msg' => '초기값',
  'content' => '본문 초기값'
  ])

<div class="border-2 shadow-md w-1/4 p-2">
  <div>{{$title}}</div>
  <div>화상</div>
  <div>{{$content}}</div>
  <div>{{$msg}}</div> {{-- 받을 변수 --}}
</div>







