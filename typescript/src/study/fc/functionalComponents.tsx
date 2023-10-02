/*  🟢 TypeScript로 React컴포넌트 작성 */

import Hello from "./Hello";

// 컴포넌트 옆에 : React.FC 를 붙인다   ⇒   FC : Funtion Componenet
const Example: React.FC = () => {
  return <Hello />
};

export default Example;


