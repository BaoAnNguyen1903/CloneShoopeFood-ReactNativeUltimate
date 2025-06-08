import { createContext, useState } from "react";

interface AppContextType {
  theme: string;
  setTheme: (v: string) => void;
}

const AppContext = createContext<AppContextType | null>(null);

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
