import { createContext, ReactNode } from "react";
import { menu_themes } from "../Raw/menu_themes";

type MenuThemeContextProviderProps = {
  children: ReactNode;
};

export const MenuThemeContext = createContext(menu_themes);

export const MenuThemeContextProvider = ({
  children,
}: MenuThemeContextProviderProps) => {
  return (
    <MenuThemeContext.Provider value={menu_themes}>
      {children}
    </MenuThemeContext.Provider>
  );
};
