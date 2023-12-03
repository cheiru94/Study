import { useState } from "react";
import ComponentA from "./components/ComponentA";

const Example = () => {
  const [compA, setCompA] = useState(false);

  return (
    <>
      <button onClick={() => setCompA((prev) => !prev)}>ComponentA</button>
      {compA && <ComponentA />}
    </>
  );
};

export default Example;
