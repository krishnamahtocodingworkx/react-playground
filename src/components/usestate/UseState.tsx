import { useState } from "react";
import "./style.css";

const UseState = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <button onClick={() => setCount(count + 1)}>+</button>
        <h1>{count}</h1>
        <button
          onClick={() => (count === 0 ? setCount(0) : setCount(count - 1))}
        >
          -
        </button>
      </div>
    </> 
  );
};

export default UseState;
