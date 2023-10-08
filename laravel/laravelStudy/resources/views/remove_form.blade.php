<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <form action="/remove" method="POST">
        @csrf
        @method('delete')

        <select name="user">
            <option name="이재일">이재일</option>
            <option name="이재성">이재성</option>
            <option name="이상열">이상열</option>
            <option name="박은영">박은영</option>
            <option name="사야카">사야카</option>
        </select>
        <button type="submit">삭제 </button>
    </form>
</body>

</html>