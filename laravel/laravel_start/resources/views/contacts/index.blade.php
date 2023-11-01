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
                     @foreach ($contacts as $contact)
                         {{$contact->id}}
                         {{$contact->name}}
                         {{$contact->title}}
                         {{$contact->created_at}}
                     @endforeach
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
