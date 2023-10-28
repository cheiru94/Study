<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            신규 작성
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900">
                    
                    {{-- form 내용 --}}
                    <section class="text-gray-600 body-font relative">
                        <form action="post" action="">
                            @csrf
                            <div class="container px-5  mx-auto">
                                <div class="lg:w-1/2 md:w-2/3 mx-auto">
                                    <div class="flex flex-wrap -m-2">
                                        {{-- 성명 --}}
                                        <div class="p-2 w-full">
                                            <div class="relative">
                                            <label for="name" class="leading-7 text-sm text-gray-600">성명</label>
                                            <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                            </div>
                                        </div>
                                        {{-- 문의 사항 --}}
                                        <div class="p-2 w-full">
                                            <div class="relative">
                                            <label for="title" class="leading-7 text-sm text-gray-600">문의 사항</label>
                                            <input type="text" id="title" name="title" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                            </div>
                                        </div>
                                        {{-- e-mail --}}
                                        <div class="p-2 w-full">
                                            <div class="relative">
                                            <label for="email" class="leading-7 text-sm text-gray-600">e-mail</label>
                                            <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                            </div>
                                        </div>
                                        {{-- 홈페이지 --}}
                                        <div class="p-2 w-full">
                                            <div class="relative">
                                            <label for="url" class="leading-7 text-sm text-gray-600">홈페이지</label>
                                            <input type="url" id="url" name="url" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                            </div>
                                        </div>
                                        {{-- 성별 --}}
                                        <div class="p-2 w-full">
                                            <div class="relative">
                                                <label class="leading-7 text-sm text-gray-600">성별</label><br>
                                                <input type="radio" name="gender" value="0"> 남성 &nbsp;&nbsp;&nbsp;
                                                <input type="radio" name="gender" value="1"> 여성
                                            </div>
                                        </div>
                                        {{-- 연령 --}}
                                        <div class="p-2 w-full">
                                            <div class="relative">
                                                <label for="age" class="leading-7 text-sm text-gray-600">연령</label>&nbsp;&nbsp;&nbsp;
                                                <select name="age">
                                                    <option value="">연령대를 선택해 주세요</option>
                                                    <option value="1">~19歳</option>
                                                    <option value="2">20歳~29歳</option> 
                                                    <option value="3">30歳~39歳</option> 
                                                    <option value="4">40歳~49歳</option> 
                                                    <option value="5">50歳~59歳</option> 
                                                    <option value="6">60歳~</option> 
                                                </select>
                                            </div>
                                        </div>
                                        {{-- 문의 사항 내용 --}}
                                        <div class="p-2 w-full">
                                            <div class="relative">
                                            <label for="contact" class="leading-7 text-sm text-gray-600">문의 사항 내용</label>
                                            <textarea id="contact" name="contact" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                            </div>
                                        </div>
                                        {{-- 주의 사항에 동의 --}}
                                        <div class="p-2 w-full text-center mb-8">
                                            <div class="relative">
                                                주의 사항에 동의 &nbsp;&nbsp; <input type="checkbox" id="caution" name=caution> 
                                            </div>
                                        </div>
                                        {{-- 신규 등록 신청 --}}
                                        <div class="p-2 w-full">
                                            <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">신규 등록 신청</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </section>
                    {{-- form 내용 --}}
                     
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
