import { createContext } from "react";

const AppContext = createContext({ name: "", age: 0 });

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  // global state
  const userData = {
    name: "Mukul Karnwal",
    age: 26,
  };

  return <AppContext.Provider value={userData}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
