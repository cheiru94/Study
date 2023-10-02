
import Hello, { Btn } from "./propsTypes";

const Example: React.FC = () => {
  return (
    <>
      <Btn fn={(text) => console.log(`Hello ${text}`)} />  {/*  return <button onClick={() => props.fn('TypeScript')}>ボタン</button> */}
      <Btn fn={(text) => console.log(`이게 전달 된다이가${text}`)} />
      <Hello text="TypeScript">Children</Hello>
    </>
  );
};

export default Example;







