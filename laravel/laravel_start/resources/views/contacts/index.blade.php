<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            문의 하기
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900">
                     index<br>
                     {{-- web.php에서 라우터에 이름을 앞에는 contacts. 하고 /contacts/create 경로의 name에는 create라고 지정해 놓았었음 
                        prefix('contacts') 라도고 지정해 두었다 -> url 경로 앞에는 무조건 contacts붙게.--}}
                     <a href="{{route('contacts.create')}}" class="text-blue-500">신규등록</a>

                     

                    {{-- 테이블 --}}
                     <div class="lg:w-2/3 w-full mx-auto overflow-auto">
                        <table class="table-auto w-full text-left whitespace-no-wrap">
                            {{-- 테이블 head --}}
                          <thead>
                            <tr>
                              <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">계정</th>
                              <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">성명</th>
                              <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">문의사항</th>
                              <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">등록일</th>
                            </tr>
                          </thead>
                          {{-- 테이블 내용 --}}
                          <tbody>
                            @foreach ($contacts as $contact)
                                <tr>
                                  <td class="border-t-2 border-gray-200 px-4 py-3">{{$contact->id}}</td>
                                  <td class="border-t-2 border-gray-200 px-4 py-3">{{$contact->name}}</td>
                                  <td class="border-t-2 border-gray-200 px-4 py-3">{{$contact->title}}</td>
                                  <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">{{$contact->created_at}}</td>
                                </tr>
                            @endforeach
                          </tbody>
                        </table>
                      </div>


                </div>
            </div>
        </div>
    </div>
</x-app-layout>
