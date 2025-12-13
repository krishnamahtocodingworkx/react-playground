import { useRef } from "react";
import "./style.css";

const RefHook = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const changeBorder = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.style.backgroundColor = "red";
    }
  };

  return (
    <div className="container">
      <input type="text" ref={inputRef} />
      <br />
      <button onClick={changeBorder}>submit</button>
    </div>
  );
};

export default RefHook;
