import { createContext, ReactNode } from "react";
import { footer_links } from "../Raw/footer_links";

type FooterLinkContextProviderProps = {
  children: ReactNode;
};

export const FooterLinkContext = createContext(footer_links);

export const FooterLinkContextProvider = ({
  children,
}: FooterLinkContextProviderProps) => {
  return (
    <FooterLinkContext.Provider value={footer_links}>
      {children}
    </FooterLinkContext.Provider>
  );
};
