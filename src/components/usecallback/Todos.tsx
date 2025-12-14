import { memo } from "react";
import "./style.css";

const Todos = ({ todos, addTodo }: { todos: string[], addTodo: () => void }) => {
  console.log("child render");
  return (
    <div className="container">
      <h2>My Todos</h2>
      {todos.map((todo: string, index: number) => {
        return <p key={index}>{todo + index}</p>;
      })}

      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};

export default memo(Todos);