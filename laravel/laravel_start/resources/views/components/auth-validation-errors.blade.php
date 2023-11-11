@props(['errors'])

@if ($errors->any())
    <div {{ $attributes }}> <!--Blade 컴포넌트의 속성 => 컴포넌트를 사용할 때 전달되는 모든 HTML 속성들이 이 변수에 자동으로 할당된다 -->
        <!-- 출력 내용 -->
        <div class="font-medium text-red-600">
          <!-- __는 Laravel의 국제화(i18n) 함수로, 다국어 지원을 위한 기능입니다. 이 함수는 주어진 문자열을 현재 설정된 언어로 번역합니다 -->
            {{ __('입력하지 않은 항목들 입니다.') }}
        </div>
        
        <ul class="mt-3 list-disc list-inside text-sm text-red-600">
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif




