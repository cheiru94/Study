{{-- 상세화면  페이지 --}}
<x-app-layout>
    <x-slot name="header">
        {{-- 상세화면  제목글  --}}
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            상세화면 
        </h2>
    </x-slot>

    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div class="p-6 text-gray-900">
              
              {{-- form 내용 --}}
              <section class="text-gray-600 body-font relative">

                      <div class="container px-5  mx-auto">
                          <div class="lg:w-1/2 md:w-2/3 mx-auto">
                              <div class="flex flex-wrap -m-2">
                                  {{-- 성명 --}}
                                  <div class="p-2 w-full">
                                      <div class="relative">
                                      <label for="name" class="leading-7 text-sm text-gray-600">성명</label>
                                      <div class="w-full rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">{{$contact->name}}</div>
                                      </div>
                                  </div>
                                  {{-- 문의 사항 --}}
                                  <div class="p-2 w-full">
                                      <div class="relative">
                                      <label for="title" class="leading-7 text-sm text-gray-600">문의 사항</label>
                                      <div class="w-full rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">{{$contact->title}}</div>
                                      </div>
                                  </div>
                                  {{-- e-mail --}}
                                  <div class="p-2 w-full">
                                      <div class="relative">
                                      <label for="email" class="leading-7 text-sm text-gray-600">e-mail</label>
                                      <div class="w-full rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">{{$contact->email}}</div>
                                      </div>
                                  </div>
                                  {{-- 홈페이지 --}}
                                  <div class="p-2 w-full">
                                      <div class="relative">
                                      <label for="url" class="leading-7 text-sm text-gray-600">홈페이지</label>
                                        @if ($contact->url)
                                          <div class="w-full rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">{{$contact->url}}</div>
                                        @endif

                                      </div>
                                  </div>
                                  {{-- 성별 --}}
                                  <div class="p-2 w-full">
                                    <div class="relative">
                                      <label class="leading-7 text-sm text-gray-600">성별</label><br>
                                      <div class="w-full rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">{{$gender}}</div>
                                    </div>
                                  </div>
                                  {{-- 연령 --}}
                                  <div class="p-2 w-full">
                                    <div class="relative">
                                      <label for="age" class="leading-7 text-sm text-gray-600">연령</label>&nbsp;&nbsp;&nbsp;
                                      <div class="w-full rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">{{$age}}</div>
                                    </div>
                                  </div>
                                  {{-- 문의 사항 내용 --}}
                                  <div class="p-2 w-full">
                                    <div class="relative">
                                      <label for="contact" class="leading-7 text-sm text-gray-600">문의 사항 내용</label>
                                      <div class="w-full rounded border bg-gray-100 bg-opacity-50  border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out">{{$contact->contact}}</div>
                                    </div>
                                  </div>
                                  {{-- 주의 사항에 동의 => 동의 한 부분이기 떄문에 별도로 표시하지 않는다--}}
                                  
                                  {{-- 신규 등록 신청 --}}
                                  <div class="p-2 w-full">
                                      <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">신규 등록 신청</button>
                                  </div>
                              </div>
                          </div>
                      </div>
              </section>
              {{-- form 내용 --}}
                
          </div>
        </div>
      </div>
    </div>
</x-app-layout>
