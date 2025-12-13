import Child from "./Child";

// const Parent = () => {
const Parent = ({ user }: { user: { name: string; age: number } }) => {
  const { name, age } = user;
  return (
    <div className="parent-container">
      Parent = My name is {name} and my age is {age}.
      {/* <Child /> */}
      {/* we are doing the cloning of an object here */}
      <Child {...user} />
    </div>
  );
};

export default Parent;
