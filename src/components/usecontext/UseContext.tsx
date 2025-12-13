import { createContext, useContext } from "react";

const AppContext = createContext<{ name: string; age: number }>({
  name: "",
  age: 0,
});

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const userData = {
    name: "Mukul Karnwal",
    age: 26,
  };

  return <AppContext.Provider value={userData}>{children}</AppContext.Provider>;
};

// custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
