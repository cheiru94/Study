// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const UserReducer2_Student = ({ name, dispatch, id, isHere }) => {
  return (
    <div>
      <span
        style={{
          textDecoration: isHere ? "line-through" : "none",
          color: isHere ? "orange" : "white",
        }}
        onClick={() => {
          dispatch({ type: "mark-std", payload: { id } });
        }}
      >
        {name}
      </span>
      <button
        style={{
          marginLeft: "30px",
          width: "90px",
          height: "50px",

          padding: "0px",
        }}
        onClick={() => {
          // id 값으로 학생삭제하기
          dispatch({ type: "delete-std", payload: { id } });
        }}
      >
        削除
      </button>
    </div>
  );
};

export default UserReducer2_Student;
