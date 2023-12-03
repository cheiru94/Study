
import { useState,createContext, useContext } from 'react';

// 1. Context 생성
const flagContext = createContext();  // flug용 context
const setFlagontext = createContext(); // setFlugdyd(갱신 함수) context

// eslint-disable-next-line react/prop-types
export const CommandContext = ({children}) => {

  const [flug,setFlug] = useState("Context 전달 받았데이~~");
 

  return (
    
    // 2. Contex에 들어오는 값 감시, 값이 있으면 위애서 생성한 createContex에 낑가 넣어 준다

    /* 이렇게 분리 해야 원하는 것만 받아서 사용할 수 있다 , 안그러면 천날만날 재랜더링 해샀는다 카믄서 */
    <flagContext.Provider value={flug}>  {/* flug용 context */}
      <setFlagontext.Provider value={setFlug}> {/* setFlugdyd(갱신 함수) context */}
      {children}
      </setFlagontext.Provider>
    </flagContext.Provider>

    
  );
};

// 여기서 바로 함수로 때리자, import 해서 받는 쪽에서 이쁘게 바로 사용할 수 있다.
export const useFlugContex  = () =>  useContext(flagContext);  // flug용 context
export const useSetFlugContext  = () =>  useContext(setFlagontext); // setFlugdyd(갱신 함수) context