
/* 🟢 useReducer 연습 */


import { useReducer } from 'react'

const reducer = (prev,action) => {
  switch (action.type) {
    case "+":
      return prev + 1;     
    case "-":
      return prev - 1;     
  
    default:
      throw new Error(console.log('에러 ㅋㅋㅋㅋ'));
  
  }
}

const Reducer = () => {

  const [rstate,dispatch] = useReducer(reducer,0);


  const p = () =>{
    dispatch({type:"+"});
  }
  const m = () =>{
    dispatch({type:"-"});
  }

  return (
    <>  
      <h1>{rstate}</h1>
      <button onClick={p}>+</button>
      <button onClick={m}>-</button>
      
    </>
  )
}

export default Reducer