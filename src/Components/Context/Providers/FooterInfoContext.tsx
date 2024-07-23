import { createContext, ReactNode } from "react";
import { footer_info } from "../Raw/footer_info";

export type FooterInfoContextProviderProps = {
  children: ReactNode;
};

export const FooterInfoContext = createContext(footer_info);

export const FooterInfoContextProvider = ({
  children,
}: FooterInfoContextProviderProps) => {
  return (
    <FooterInfoContext.Provider value={footer_info}>
      {children}
    </FooterInfoContext.Provider>
  );
};
