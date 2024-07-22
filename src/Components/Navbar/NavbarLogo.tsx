import { useEffect, useState } from "react";

type NavbarLogoProps = {
  src: string;
  alt: string;
  link: string;
  onEnter: () => void;
  onLeave: () => void;
};

const NavbarLogo = ({ src, alt, link, onEnter, onLeave }: NavbarLogoProps) => {
  const [fadeClass, setFadeClass] = useState("fade-in");
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    if (currentSrc !== src) {
      setFadeClass("fade-out");
      const timer = setTimeout(() => {
        setCurrentSrc(src);
        setFadeClass("fade-in");
      }, 200); // Duration of the fade-out transition

      return () => clearTimeout(timer);
    }
  }, [src, currentSrc]);

  return (
    <a className={`navbar-brand logo ${fadeClass}`} href={link}>
      <img
        src={currentSrc}
        alt={alt}
        onMouseEnter={onEnter}
        onMouseOut={onLeave}
      />
    </a>
  );
};

export default NavbarLogo;
