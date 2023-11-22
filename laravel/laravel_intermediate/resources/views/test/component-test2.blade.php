
<x-tests.app> {{-- blade.php는 안적어도 된다 --}}
  <x-slot name='header'>헤더 2</x-slot> {{-- 🟢 명명된 slot 사용 => name에 tests/app.blade.php에서 작성했던 변수명 기입  --}}
  コンポーネントテスト 2
</x-tests.app>

