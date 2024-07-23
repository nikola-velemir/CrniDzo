import FooterInfoSection from "./Subcomponents/FooterInfoSection";
import FooterLinkSection from "./Subcomponents/FooterLinkSection";

const Footer = () => {
  return (
    <footer>
      <div className="row">
        <FooterInfoSection></FooterInfoSection>
        <FooterLinkSection></FooterLinkSection>
        <div className="col-lg-4">Column</div>
      </div>
    </footer>
  );
};

export default Footer;
