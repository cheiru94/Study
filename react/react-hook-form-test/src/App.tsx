/* zod 라이브러리 사용한 .ver */

import { useForm } from "react-hook-form";
import "./App.css";
import { validationSchema } from "./utils/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";

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
  } = useForm<LoginForm>({
    mode: "onBlur", // 모드 설정 : 어떨 때 useForm를 실행시킬 것인지 / onChange도 가능
    resolver: zodResolver(validationSchema), //폼의 유효성 검사를 어떻게 처리할지를 결정 : zod 라이브러리 실행
  });

  /* 전송 확인용 */
  const onSubmitMethod = (data: LoginForm) => {
    // data : 제출된 폼 데이터
    console.log(data);
  };

  return (
    <div className="form-container">
      <h1>Log in</h1>
      {/* handleSubmit : 함수는 양식이 제출될 때 호출되어야 하는 콜백 함수를 받습니다. */}
      <form onSubmit={handleSubmit(onSubmitMethod)}>
        {/* 1. 이름 */}
        <label htmlFor="이름">이름</label>
        <input id="name" type="text" {...register("name")} />
        <p>{errors.name?.message as React.ReactNode}</p>

        {/* 2. 이메일 */}
        <label htmlFor="메일 주소">메일 주소</label>
        <input id="email" type="email" {...register("email")} />
        <p>{errors.email?.message as React.ReactNode}</p>
        {/* React.ReactNode : React에서 UI를 나타내는 가장 작은 단위 */}

        {/* 3. 비밀번호 */}
        <label htmlFor="비밀번호">비밀번호</label>
        <input id="password" type="password" {...register("password")} />
        <p>{errors.password?.message as React.ReactNode}</p>

        {/* button */}
        <button type="submit">보내기</button>
      </form>
    </div>
  );
}

export default App;
