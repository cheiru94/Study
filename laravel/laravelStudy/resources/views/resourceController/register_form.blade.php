<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
     {{-- action 이 전달 내용을 받고 보여주는 페이지 , method 요청 메소드 --}}
    <form action="/users" method="post">
        @csrf
        이름 : <input type="text" name="name"><br>
        생년월일 : <input type="date" name="date"><br>
        email : <input type="email" name="email"><br>
        소속 : <input type="text" name="guild"><br>
        <button type="submit">보내기</button>
    </form>
</body>

</html>