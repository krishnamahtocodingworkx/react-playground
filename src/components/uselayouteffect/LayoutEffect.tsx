// useLayoutEffect, runs synchronously after a render but before
// the screen is updated.

// useEffect runs asynchronously and after a render is painted to the screen.

import { useState, useLayoutEffect } from "react";
import "./style.css";

const LayoutEffect = () => {
  const [num, setNum] = useState(0);

  useLayoutEffect(() => {
    if (num === 0) setNum(num + Math.random() * 100);
  }, [num]);

  return (
    <div className="container">
      <p>my new random number {num}</p>
      <button onClick={() => setNum(0)}>random num</button>
    </div>
  );
};

export default LayoutEffect;
