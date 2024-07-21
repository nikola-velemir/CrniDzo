import { createContext, ReactNode } from "react";
import { navbar_button } from "../Raw/navbar_button";

type NavbarButtonContextProviderProps = {
  children: ReactNode;
};

export const NavbarButtonContext = createContext(navbar_button);

export const NavbarButtonContextProvider = ({
  children,
}: NavbarButtonContextProviderProps) => {
  return (
    <NavbarButtonContext.Provider value={navbar_button}>
      {children}
    </NavbarButtonContext.Provider>
  );
};
