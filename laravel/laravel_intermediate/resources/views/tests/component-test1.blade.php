
<x-tests.app> {{-- blade.php는 안적어도 된다 --}}
  <x-slot name='header'>헤더 1</x-slot> {{-- 🟢 명명된 slot 사용 => name에 tests/app.blade.php에서 작성했던 변수명 기입  --}}
  コンポーネントテスト 1 {{-- app.blade.php 파일 안의 $slot 이라고 지정해 놓은 부분에 들어가는 내용 --}}


  <x-tests.card title="타이틀 프롭" content="콘텐트 프롭"/> {{-- $slot이 없어 안에 아무 것도 넣을 것이 없으며 이렇게도 가능--}}

</x-tests.app>





