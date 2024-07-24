import { useState } from "react";

type NavbarLogoProps = {
  src_regular: string;
  src_hover: string;
  alt: string;
  link: string;
};

const NavbarBrand = ({
  src_regular,
  src_hover,
  alt,
  link,
}: NavbarLogoProps) => {
  const [hover, setHover] = useState(false);
  const fadeClasses = ["fade-in", "fade-out"];

  return (
    <a
      className={`navbar-brand logo`}
      href={link}
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseOut={() => {
        setHover(false);
      }}
    >
      <div className={hover ? fadeClasses[1] : fadeClasses[0]}>
        <img src={src_regular} alt={alt} />
        <div className="company-name-display">Crni Dzo</div>
      </div>
      <div className={hover ? fadeClasses[0] : fadeClasses[1]}>
        <img src={src_hover} alt={alt} />
        <div className="company-name-display">Crni Dzo</div>
      </div>
    </a>
  );
};

export default NavbarBrand;
