import { useReducer } from 'react'

const reducer = (prev: number, action: { type: string }) => {
  switch (action.type) {
    case "+":
      return prev + 1;
    case "-":
      return prev - 1;

    default:
      console.log('에러 발생')
      throw new Error("Invalid action type");
  }
}


export const Reducer: React.FC = () => {

  const [rstate, dispatch] = useReducer(reducer, 0);

  const 더하기 = () => {
    dispatch({ type: "+" })
  }
  const 빼기 = () => {
    dispatch({ type: "-" })
  }

  return (
    <>
      <h1>{rstate}</h1>
      <button onClick={더하기}>+</button>
      <button onClick={빼기}>-</button>
    </>
  )
}
