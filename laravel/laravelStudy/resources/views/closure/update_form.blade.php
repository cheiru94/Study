<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <form action="/update" method="post">
        @csrf
        @method('put')
        이름 : <input type="text" name="name" readonly value="이재일"><br>
        생년월일 : <input type="date" name="date"readonly value="1994-10-01"><br>
        email : <input type="email" name="email" value="lji94@naver.com"><br>
        소속 : <input type="text" name="guild" value="softbank"><br>
        <button type="submit">수정</button>
    </form>
</body>

</html>