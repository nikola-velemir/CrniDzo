import { createContext, ReactNode } from "react";
import { footer_social_media } from "../Raw/footer_social_media";

type FooterLinkContextProviderProps = {
  children: ReactNode;
};

export const FooterSocialMediaContext = createContext(footer_social_media);

export const FooterLinkContextProvider = ({
  children,
}: FooterLinkContextProviderProps) => {
  return (
    <FooterSocialMediaContext.Provider value={footer_social_media}>
      {children}
    </FooterSocialMediaContext.Provider>
  );
};
