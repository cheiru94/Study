import UseReducer from "./useReducer/UseReducer";
import UseReducer2 from "./useReducer/UseReducer2";
import "./App.css";
import styled from "styled-components";

function App() {
  const StyleDiv = styled.div`
    width: 500px;
    height: 500px;
    background-color: red;
  `;
  return (
    <>
      {/* UseReducer 연습 */}
      {/* <UseReducer/> */}
      {/* <UseReducer2 /> */}
      <StyleDiv />
    </>
  );
}

export default App;
