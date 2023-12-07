// eslint-disable-next-line no-unused-vars
import React, { useReducer, useRef, useState } from "react";
import Student from "./UserReducer2_Student";

// 🟢 1. useReducer reducer
const reducer = (prev, action) => {
  switch (action.type) {
    /* 생성 */
    case "add-std":
      // eslint-disable-next-line no-case-declarations
      const name = action.payload.name;

      // eslint-disable-next-line no-case-declarations
      const newStudent = {
        id: Date.now(),
        name, // name : name    =   name: action.payload.name,
        isHere: false,
      };

      return {
        count: prev.count + 1,
        students: [...prev.students, newStudent],
      };

    /* 삭제  */
    case "delete-std":
      return {
        count: prev.count - 1,
        // payload 안에 있는 id 값을 가진 학생을 제외한 나머지 학생들 :
        // 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열을 생성
        students: prev.students.filter(
          (student) => student.id !== action.payload.id // action.payload.id 인놈 뺴고 다 넣기
        ),
      };

    /* 출석 확인 */
    case "mark-std":
      return {
        count: prev.count,
        students: prev.students.map((student) => {
          if (student.id === action.payload.id) {
            return { ...student, isHere: !student.isHere };
          }
          return student;
        }),
      };
    default:
      return prev;
  }
};

// 🟢 2. useReducer 초기 값
const initState = {
  count: 0,
  students: [
    // {
    //   id: Date.now,
    //   name: "hasegawa",
    //   isHere: false,
    // },
  ],
};
const UseReducer2 = () => {
  const [name, setName] = useState();
  const [stdInfo, dispatch] = useReducer(reducer, initState);
  const inputRef = useRef();
  console.log("inputRef: ", inputRef);

  return (
    <>
      <h1>出席簿</h1>
      <p>学生の数：{stdInfo.count}</p>
      <input
        ref={inputRef}
        type="text"
        placeholder="名前をお書き下さい。"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          backgroundColor: "white",
          width: "250px",
          height: "50px",
          fontSize: "25px",
          color: "black",
        }}
      />
      <button
        style={{ marginLeft: "20px", backgroundColor: "orange" }}
        onClick={() => {
          if (name == "") {
            alert("名前をお書き下さい。");
            return;
          }
          dispatch({ type: "add-std", payload: { name } }); // payload에 객체를 넣음 { name: name }를 줄여씀
          setName("");
          inputRef.current.focus();
        }}
      >
        追加
      </button>

      <div style={{ margin: "30px" }}>
        {stdInfo.students.map((student) => {
          return (
            <Student
              key={student.id}
              name={student.name}
              dispatch={dispatch}
              id={student.id}
              isHere={student.isHere}
            ></Student>
          );
        })}
      </div>
    </>
  );
};

export default UseReducer2;
