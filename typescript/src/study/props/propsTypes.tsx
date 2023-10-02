import React from 'react'

//  일반  props 전달 하는 패턴  + children을 포함하는 패턴
type HelloProps = {  // type으로 props 타입을 객체 리터럴로 정의
  text: string, // 1. 일반 props 전달(text)
  children: React.ReactNode // 2. children 전달(children)  =>  children은 react18부터 명시적으로 작성해야한다.
}

const Hello: React.FC<HelloProps> = (props) => { // 제네릭으로 React.FC 오른쪽에 타입 파라미터 형식으로 전달
  return (
    <div>Hello {props.text}!  {props.children}</div> // 1. 일반 props 전달(text) , 2. children 전달(children)
  )
}



//  함수가 전달되는 패턴
type FnProps = { //  type으로 props 타입을 객체 리터럴로 정의
  fn: (text: string) => void, // 함수 props 정의
}

export const Btn: React.FC<FnProps> = (props) => {
  return <button onClick={() => props.fn('TypeScript')}>ボタン</button>
}

export default Hello
