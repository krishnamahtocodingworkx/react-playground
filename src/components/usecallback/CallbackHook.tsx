// The React useCallback Hook returns a memoized callback function.

import { useCallback, useState } from "react";
import Todos from "./Todos";
import "./style.css";

const Callbackhook = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<string[]>([]);

  const increment = () => {
    setCount(count + 1);
  };

  const addTodo = useCallback(() => {
    return setTodos((prev) => [...prev, `new Entry`]);
  }, []);

  return (
    <div className="container">
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div className="count-container">
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default Callbackhook;
