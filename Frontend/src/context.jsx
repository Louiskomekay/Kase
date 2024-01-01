import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
    const [theme, toggleTheme] = useState('dark');

    return <GlobalContext.Provider value={{ theme, toggleTheme }}>
        {children}
    </GlobalContext.Provider>
}

export default AppContext;