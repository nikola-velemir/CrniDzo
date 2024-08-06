import { createContext, ReactNode } from "react";
import { google_reviews } from "../Raw/google_reviews";
type GoogleReiewsContextProviderProps = {
  children: ReactNode;
};

export const GoogleReiewsContext = createContext(google_reviews);

export const GoogleReiewsContextProvider = ({
  children,
}: GoogleReiewsContextProviderProps) => {
  return (
    <GoogleReiewsContext.Provider value={google_reviews}>
      {children}
    </GoogleReiewsContext.Provider>
  );
};
