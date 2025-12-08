import { useState, useCallback } from "react";

export default function UseCallback() {
  const [count, setCount] = useState<number>(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h3>useCallback Counter</h3>
      <p>Count: {count}</p>

      <button onClick={increment}>Increment</button>
    </div>
  );
}
