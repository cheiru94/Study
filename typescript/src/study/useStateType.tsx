/* useState의 타입 */

import { useState } from "react";

type User = { // type alias로 지정
  name: string,
  age: number,
}

type Todo = { // type alias로 지정
  id: number,
  text: string,
}

const Example = () => {

  // 타입추론 
  const [text, setText] = useState("hello");
  useState(0);

  // 명시적으로 표기
  const [animals, setAnimals] = useState<string[]>(["dog", "cat"]);

  // type alias로 지정 
  const [users, setUsers] = useState([{ name: "ichiban", age: 28 }]); // 위에서 지정된 User를 자동으로 type 설정한다
  const [todo, setTodo] = useState<Todo[]>([{ id: 0, text: "react" }]);
};

export default Example;
