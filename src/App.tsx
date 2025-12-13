import "./App.css";
import Parent from "./Parent";
// import UseState from "./components/usestate/UseState";
// import UseStateObject from "./components/usestate/UseStateObject";
// import UseEffect from "./components/useeffect/UseEffect";
// import CleanUp from "./components/useeffect/CleanUp";

const App: React.FC = () => {
  const userData = {
    name: "Mukul Karnwal",
    age: 26,
  };
  return (
    <>
      {/* <UseState /> */}
      {/* <UseStateObject /> */}
      {/* <UseEffect /> */}
      {/* <CleanUp /> */}
      {/* <Parent /> */}
      <Parent user={userData} />
    </>
  );
};

export default App;
