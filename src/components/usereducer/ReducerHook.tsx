// import { useState } from "react";
import { useReducer } from "react";
import reducer from "./reducer";
import "./style.css";

const initialValue = 0;

const ReducerHook = () => {
  //   const [count, setCount] = useState(0);

  const [count, dispatch] = useReducer(reducer, initialValue);

  return (
    <>
      <div className="container">
        <button onClick={() => dispatch({ type: "INC" })}>
          {/* <button onClick={() => setCount(count + 1)}> */}+
        </button>
        <h1>{count}</h1>
        <button onClick={() => dispatch({ type: "DEC" })}>
          {/* <button onClick={() => setCount(count - 1)}> */}-
        </button>
      </div>
    </>
  );
};

export default ReducerHook;
