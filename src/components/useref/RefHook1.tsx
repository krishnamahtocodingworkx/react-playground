// it create a mutable variable which will not re-render the components
// Used to access the DOM element directly

import { useState, useEffect, useRef } from "react";
import "./style.css";

const RefHook1 = () => {
  const [userInput, setUserInput] = useState("");
  // const [count, setCount] = useState();
  const count = useRef(0);

  useEffect(() => {
    // setCount(count + 1);
    count.current = count.current + 1;
  });

  return (
    <div className="container">
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />

      <p>the number of times comp render:{count.current} </p>
    </div>
  );
};

export default RefHook1;