import { useEffect, useState } from "react";

type NavbarLogoProps = {
  src: string;
  alt: string;
  link: string;
  onEnter: () => void;
  onLeave: () => void;
};

const NavbarLogo = ({ src, alt, link, onEnter, onLeave }: NavbarLogoProps) => {
  const [fadeClass, setFadeClass] = useState("fade-out");

  useEffect(() => {
    setFadeClass("fade-out");
    const timer = setTimeout(() => {
      setFadeClass("fade-in");
    }, 500);
    return () => clearTimeout(timer);
  }, [src]);
  return (
    <a className="navbar-brand" href={link}>
      <img
        src={src}
        alt={alt}
        className={fadeClass}
        onMouseEnter={() => {
          onEnter();
        }}
        onMouseOut={() => {
          onLeave();
        }}
      />
    </a>
  );
};

export default NavbarLogo;
