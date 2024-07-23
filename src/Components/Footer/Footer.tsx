import FooterInfoSection from "./Subcomponents/Info/FooterInfoSection";
import FooterLinkSection from "./Subcomponents/Links/FooterLinkSection";
import FooterSocialMediaSection from "./Subcomponents/FooterSocialMediaSection";

const Footer = () => {
  return (
    <footer>
      <div className="row">
        <FooterInfoSection></FooterInfoSection>
        <FooterSocialMediaSection></FooterSocialMediaSection>
        <FooterLinkSection></FooterLinkSection>
        <div className="col-lg-3">Column</div>
      </div>
    </footer>
  );
};

export default Footer;
