const Signup = () => {
  return (
    <>
      <h1>회원가입 페이지</h1>
      <form action="/api/signup" method="POST">
        <div>아이디</div>
        <input type="text" name="id" />
        <p />
        <div>비밀번호</div>
        <input type="password" name="pw" />
        <button type="submit">회원가입</button>
      </form>
    </>
  );
};

export default Signup;
