import FooterContactSection from "./Subcomponents/Contact/FooterContactSection";
import FooterInfoSection from "./Subcomponents/Info/FooterInfoSection";
import FooterLinkSection from "./Subcomponents/Links/FooterLinkSection";
import FooterSocialMediaSection from "./Subcomponents/SocialMedia/FooterSocialMediaSection";

const Footer = () => {
  return (
    <footer>
      <div className="row">
        <FooterInfoSection></FooterInfoSection>
        <FooterSocialMediaSection></FooterSocialMediaSection>
        <FooterLinkSection></FooterLinkSection>
        <FooterContactSection></FooterContactSection>
      </div>
    </footer>
  );
};

export default Footer;
