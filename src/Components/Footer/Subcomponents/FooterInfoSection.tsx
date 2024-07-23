import footerimage from "../../../assets/images/logo/footer_logo.png";

const FooterInfoSection = () => {
  return (
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
  );
};

export default FooterInfoSection;
