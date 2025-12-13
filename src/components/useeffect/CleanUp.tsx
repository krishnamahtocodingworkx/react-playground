import { useState, useEffect } from "react";
import "./style.css";

const CleanUp = () => {
  const [widthCount, setWidthCount] = useState(window.screen.width);

  const currentScreenWidth = () => {
    setWidthCount(() => window.innerWidth);
  };
  // will run after every render
  useEffect(() => {
    window.addEventListener("resize", currentScreenWidth);
    return () => {
      window.removeEventListener("resize", currentScreenWidth); // cleanup function -> it is called before the next render
    };
  }); // no dependency passed -> runs after every render

  return (
    <>
      <div className="container">
        <h2>
          The size of the window is <span> {widthCount} </span>
        </h2>
      </div>
    </>
  );
};

export default CleanUp;
