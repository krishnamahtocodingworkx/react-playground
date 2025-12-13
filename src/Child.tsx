// import { useGlobalContext } from "./components/usecontext/UseContext";

// const Child = () => {
const Child = (user: { name: string; age: number }) => {
  const { name, age } = user;
  // const userData = useGlobalContext();

  return (
    <div className="child-container">
      {/* Child = My name is {userData.name} and my age is {userData.age}.{" "} */}
      Child = My name is {name} and my age is {age}.
    </div>
  );
};

export default Child;
