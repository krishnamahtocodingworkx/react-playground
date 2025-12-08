import { memo, useState } from "react";

type ChildProps = {
  value: number;
};

const Child = memo(function Child({ value }: ChildProps) {
  console.log("Child rendered");
  return <p>Child Count Value: {value}</p>;
});

export default function Memo() {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h3>memo Counter</h3>

      <Child value={count} />

      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
