import { createContext, ReactNode } from "react";
import links from "../Raw/link_context";

type LinkContextProviderProps = {
  children: ReactNode;
};

export const LinkContext = createContext(links);

export const LinkContextProvider = ({ children }: LinkContextProviderProps) => {
  <LinkContext.Provider value={links}>{children}</LinkContext.Provider>;
};
