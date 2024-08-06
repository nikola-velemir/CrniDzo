import { createContext, ReactNode } from "react";
import { menu_categories } from "../Raw/menu_categories";

type MenuCategoriesContextProviderProps = {
  children: ReactNode;
};

export const MenuCategoriesContext = createContext(menu_categories);

export const MenuCategoriesContextProvider = ({
  children,
}: MenuCategoriesContextProviderProps) => {
  return (
    <MenuCategoriesContext.Provider value={menu_categories}>
      {children}
    </MenuCategoriesContext.Provider>
  );
};
