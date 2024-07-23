import footerimage from "../../assets/images/logo/footer_logo.png";
import FooterLinkSection from "./Subcomponents/FooterLinkSection";

const Footer = () => {
  return (
    <footer>
      <div className="row">
        <div className="col-lg-4">
          <div className="col-12">
            <img className="footer-logo" src={footerimage} />
          </div>
          <div className="col-12">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
          <div className="col-12">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
        </div>
        <FooterLinkSection></FooterLinkSection>
        <div className="col-lg-4">Column</div>
      </div>
    </footer>
  );
};

export default Footer;
