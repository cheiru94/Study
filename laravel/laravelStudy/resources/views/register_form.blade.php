<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    {{-- action 이 전달 내용을 받고 보여주는 페이지 , method 요청 메소드 --}}
    <form action="/register" method="POST">
        @csrf
        이름 : <input type="text">  <br>
        생년월일 : <input type="date" ><br>
        email : <input type="email" name="" id=""><br>
        소속 : <input type="text"><br>
        <button type="submit" >등록</button>
    </form>
    <form action="/re" method="post">
        @csrf
        <button type="submit">re</button>
    </form>
</body>
</html>