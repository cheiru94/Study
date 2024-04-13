"use client";

import { useState } from "react";
export default function List() {
  const items = ["초밥", "소고기", "탕수육"];
  const [count, setCount] = useState([0, 0, 0]);

  const plus = (i) => {
    const newC = [...count];
    newC[i] = newC[i] + 1;
    setCount(newC);
  };
  const minus = (i) => {
    const newC = [...count];
    newC[i] = newC[i] - 1;
    setCount(newC);
  };
  return (
    <div>
      <h2>Products</h2>
      {items.map((a, i) => {
        return (
          <div className="food" key={i}>
            <h4>{a} $40</h4>
            <img src={`food${i}.png`} className="food-img" />
            <span>{count[i]}</span>
            <button onClick={() => plus(i)}>+</button>
            <button onClick={() => minus(i)}>-</button>
          </div>
        );
      })}
    </div>
  );
}
