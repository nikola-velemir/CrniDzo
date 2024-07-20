import { createContext, ReactNode } from "react";
import links from "../Raw/link_context";

type NavbarLinkContextProviderProps = {
  children: ReactNode;
};

export const NavbarLinkContext = createContext(links);

export const NavbarLinkContextProvider = ({
  children,
}: NavbarLinkContextProviderProps) => {
  <NavbarLinkContext.Provider value={links}>
    {children}
  </NavbarLinkContext.Provider>;
};
