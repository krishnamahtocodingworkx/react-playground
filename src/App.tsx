import "./App.css";
// import UseState from "./components/usestate/UseState";
// import UseStateObject from "./components/usestate/UseStateObject";
// import UseEffect from "./components/useeffect/UseEffect";
// import CleanUp from "./components/useeffect/CleanUp";
// import Parent from "./Parent";
// import ReducerHook from "./components/usereducer/ReducerHook";
import RefHook1 from "./components/useref/RefHook1";
import RefHook from "./components/useref/RefHook";


const App: React.FC = () => {
  // const userData = {
  //   name: "Mukul Karnwal",
  //   age: 26,
  // };
  return (
    <>
      {/* <UseState /> */}
      {/* <UseStateObject /> */}
      {/* <UseEffect /> */}
      {/* <CleanUp /> */}
      {/* <Parent user={userData} /> */}
      {/* <Parent /> */}
      {/* <ReducerHook /> */}
      <RefHook1 />
      <RefHook />
    </>
  );
};

export default App;
