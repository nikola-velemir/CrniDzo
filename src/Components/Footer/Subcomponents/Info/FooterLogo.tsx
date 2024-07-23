type FooterLogoProps = {
  image_src: string;
};

const FooterLogo = ({ image_src }: FooterLogoProps) => {
  return (
    <div className="col-12">
      <img className="footer-logo" src={image_src} />
    </div>
  );
};

export default FooterLogo;
