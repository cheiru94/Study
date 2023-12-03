import React, { useReducer, useState } from "react";

const ACTION_TYPES = {
  diposit: "diposit",
  withdraw: "withdraw",
};

const reducer = (prev, action) => {
  // reducer는 dispatch로 부터 전달받은 action대로만 state를 업데이트 시켜준다
  console.log("Reducer가 일을한다 : ", prev, action);
  switch (action.type) {
    case ACTION_TYPES.diposit:
      return prev + action.payload;
    case ACTION_TYPES.withdraw:
      return prev - action.payload;

    default:
      return prev;
  }
};

const UseReducer = () => {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h1>ようこそ、きらぼし銀行へ</h1>
      <p style={{ fontSize: "30px" }}>残高 : {money}円</p>
      <input
        style={{ fontSize: "50px" }}
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        step="1000"
      />
      <div style={{ margin: "30px" }}>
        <button
          onClick={() => {
            dispatch({ type: ACTION_TYPES.diposit, payload: number });
          }}
        >
          預金
        </button>
        <button
          onClick={() => {
            dispatch({ type: ACTION_TYPES.withdraw, payload: number });
          }}
        >
          出金
        </button>
      </div>
    </>
  );
};

export default UseReducer;
