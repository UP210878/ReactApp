import { createContext, useState, useEffect } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const HandleLanguage = () => {
    if (language === "en") {
      setLanguage("es");
    } else {
      setLanguage("en");
    }
  };
  return <DataContext.Provider value={{language,HandleLanguage,setLanguage}}>
  {children}</DataContext.Provider>;
};

export default DataContext;
