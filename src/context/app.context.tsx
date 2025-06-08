import { createContext, useContext, useState } from "react";

interface AppContextType {
  theme: string;
  setTheme: (v: string) => void;
}

const AppContext = createContext<AppContextType | null>(null);

export const useCurrentTheme = () => {
  const currentTheme = useContext(AppContext);

  if (!currentTheme) {
    throw new Error("useCurrentUser has to be used within <AppContext.Provider> ");
  }
  return currentTheme;
};

interface IProps {
  children: React.ReactNode;
}

const AppProvider = (props: IProps) => {
  const [theme, setTheme] = useState<string>("");
  return (
    <AppContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
