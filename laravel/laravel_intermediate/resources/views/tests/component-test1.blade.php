
<x-tests.app> {{-- blade.php는 안적어도 된다 --}}
  <x-slot name='header'>헤더 1</x-slot> {{-- 🟢 명명된 slot 사용 => name에 tests/app.blade.php에서 작성했던 변수명 기입  --}}
  コンポーネントテスト 1 {{-- app.blade.php 파일 안의 $slot 이라고 지정해 놓은 부분에 들어가는 내용 --}}


  {{-- 컴포넌트 안에 컴포넌트 --}}
  {{-- $slot이 없어 안에 아무 것도 넣을 것이 없으며 이렇게도 가능--}}
  {{-- 속성을 붙일 경우 컴포넌트 안에서 지정한 변수명을 적으면 된다 --}}
  <x-tests.card title="타이틀 프롭" content="콘텐트 프롭" :msg="$msg"/>  {{-- => msg="$msg  이렇게 하면 단순한 속성으로 인식해 버려 문자 자체로 인식을 해버린다 --}}

  <x-tests.card/>

</x-tests.app>





 