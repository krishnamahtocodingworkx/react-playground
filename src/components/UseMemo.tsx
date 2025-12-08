import { useState, useMemo } from "react";

export default function UseMemo() {
  const [count, setCount] = useState<number>(0);

  const doubleValue = useMemo<number>(() => {
    console.log("Calculating...");
    return count * 2;
  }, [count]);

  return (
    <>
      <h3>useMemo Counter</h3>
      <p>Count: {count}</p>
      <p>Double: {doubleValue}</p>

      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}
