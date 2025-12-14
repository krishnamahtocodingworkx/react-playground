import { useContext } from "react";
import { AppContext } from "../components/usecontext/UseContext";

// custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};
