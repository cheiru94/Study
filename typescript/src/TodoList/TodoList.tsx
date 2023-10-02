import { useState } from "react";
import TaskList from "./TaskListProps"

// type 작성
export type Todo = {
  id: number,
  text: string,
}

const Example = () => {
  const [inputText, setInputText] = useState(""); // input value 저장
  const [todos, setTodos] = useState<Todo[]>([   // list 내용 저장
    { id: 0, text: "밥묵기" },
    { id: 1, text: "리액트 공부" }
  ]);

  // 내용 변경
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  }

  // 내용 추가
  const addTodoItem = () => {
    setTodos(prevState =>
      [...prevState, { id: prevState.length + 1, text: inputText }])
    setInputText('');
  }

  return (
    <>
      {/* 입력란 및 버튼 */}
      <h1 style={{ color: "#646cff", fontSize: "200px" }}>やるべし</h1 >
      <input type="text" value={inputText} onChange={handleChange} />
      <button onClick={addTodoItem}>追加</button>

      {/* 리스트 목록들  */}
      <TaskList todos={todos} />

    </>
  )
};

export default Example;
