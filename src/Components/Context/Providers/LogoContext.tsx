import { createContext, ReactNode } from "react";
import { logo } from "../Raw/logo_context";

type LogoContextProviderProps = {
  children: ReactNode;
};

export const LogoContext = createContext(logo);

export const LogoContextProvider = ({ children }: LogoContextProviderProps) => {
  return <LogoContext.Provider value={logo}>{children}</LogoContext.Provider>;
};
