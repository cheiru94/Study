/* zod 라이브러리 사용하지 않은 .ver */

import { useForm } from "react-hook-form";
import "./App.css";

interface LoginForm {
  name: string;
  email: string;
  password: string;
}

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors }, // 공란을 입력하라는 등의 메세지를 출력해준다.
  } = useForm<LoginForm>({ mode: "onBlur" });

  const onSubmit = (data: LoginForm) => {
    console.log(data);
  };

  return (
    <div className="form-container">
      <h1>Log in</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {" "}
        {/* form 데이터를 수집해준다. */}
        <label htmlFor="이름">이름</label>
        <input
          id="name"
          type="text"
          {...register("name", {
            required: "이름을 입력하세용~!",
            minLength: { value: 2, message: "2글자 이상 입력해 주세용~" },
          })}
        />
        <p>{errors.name?.message as React.ReactNode}</p>
        {/* useState를 사용하지 않아도 된다. */}
        <label htmlFor="메일 주소">메일 주소</label>
        <input
          id="email"
          type="email"
          {...register("email", { required: "email을 입력하세용~!" })}
        />
        <p>{errors.email?.message as React.ReactNode}</p>
        <label htmlFor="비밀번호">비밀번호</label>
        <input
          id="password"
          type="password"
          {...register("password", {
            required: "비밀번호를 입력하세용~!",
            minLength: { value: 8, message: "앙~대용, 8글자 이상 입력하세용!" },
          })}
        />
        <p>{errors.password?.message as React.ReactNode}</p>
        <button type="submit">보내기</button>
      </form>
    </div>
  );
}

export default App;
