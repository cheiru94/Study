import age from "./data";
import Hello from "./Hello";
export default function Cart() {
  return (
    <div>
      <Hello name={"재일"} />
      <ColorBtn color="red" />
      <ColorBtn color={"blue"} />
      <h4 className="title">Cart</h4>
      <div className="cart-item">
        <p>상품명</p>
        <p>$40</p>
        <p>1개</p>
      </div>
      <div className="cart-item">
        <p>상품명</p>
        <p>$40</p>
        <p>1개</p>
      </div>
    </div>
  );
}

const ColorBtn = ({ color }) => {
  return <button style={{ background: color }}>{color}</button>;
};
