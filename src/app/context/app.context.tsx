import { createContext, useState } from "react";

interface AppContextType {
  theme: string;
}

const AppContext = createContext<AppContextType>({ theme: "light" });

interface IProps {}

const AppProvider = (props: IProps) => {
  const [appState, setAppState] = useState();
  return (
    <AppContext.Provider
      value={{ appState, setAppState }}
    ></AppContext.Provider>
  );
};
