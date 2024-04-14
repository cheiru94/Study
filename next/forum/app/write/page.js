export default function Write() {
  return (
    <div>
      <h4>글작성</h4>
      <form action="/api/create" method="POST">
        <p>
          제목 입력 : <input name="title"></input>
        </p>
        <p>
          내용 입력:<textarea name="content"></textarea>
        </p>
        <button type="submit">버튼</button>
      </form>
    </div>
  );
}
