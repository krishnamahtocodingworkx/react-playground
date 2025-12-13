import { useState, useEffect } from "react";
import "./style.css";
import { countUpdate } from "../../helper/countUpdate";

const UseEffect = () => {
  const [count, setCount] = useState(0);
// No dependency passed -> runs after every render
  //   useEffect(() => {
  //     document.title = `${count}`;
  //   });

// Empty dependency array -> runs only once after initial render
//   useEffect(() => {
//     document.title = `${count}`;
//     //eslint-disable-next-line
//   }, []); // will run only once

// Dependency array -> runs after every render if the dependency changes i.e props or state values changes
  useEffect(() => {
    document.title = `${count}`;
  }, [count]); // will run after every render if the count changes

  return (
    <>
      <div className="container">
        <button onClick={() => countUpdate("inc", count, setCount)}>+</button>
        <h1>{count}</h1>
        <button onClick={() => countUpdate("dec", count, setCount)}>-</button>
      </div>
    </>
  );
};

export default UseEffect;
