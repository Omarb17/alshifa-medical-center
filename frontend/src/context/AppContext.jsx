import { createContext } from "react";
import { doctors } from "../assets/assets";

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext();

// eslint-disable-next-line react/prop-types
const AppContextProvider = ({ children }) => {
  const currencySymbol = "DH";
  const value = {
    doctors,
    currencySymbol,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
