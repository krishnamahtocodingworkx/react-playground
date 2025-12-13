import { useContext } from "react";
import { AppContext } from "./components/usecontext/UseContext";

const Child = () => {
  // const Child = (user: { name: string; age: number }) => {
  // const { name, age } = user;
  const userData = useContext(AppContext);

  return (
    <div className="child-container">
      Child component is here = My name is {userData.name} and my age is{" "}
      {userData.age}. {/* Child = My name is {name} and my age is {age}. */}
    </div>
  );
};

export default Child;
