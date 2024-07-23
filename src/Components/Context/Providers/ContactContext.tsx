import { createContext, ReactNode } from "react";
import { contacts } from "../Raw/contacts";

type ContactContextProviderProps = {
  children: ReactNode;
};

export const ContactContext = createContext(contacts);

export const ContactContextProvider = ({
  children,
}: ContactContextProviderProps) => {
  <ContactContext.Provider value={contacts}>
    {children}
  </ContactContext.Provider>;
};
