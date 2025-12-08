import { useState, useEffect } from "react";

export default function UseEffect() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log("Counter changed:", count);
  }, [count]);

  return (
    <div>
      <h3>useEffect Counter</h3>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
