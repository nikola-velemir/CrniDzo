import { useEffect, useState } from "react";

type NavbarLogoProps = {
  src: string;
  alt: string;
  onEnter: () => void;
  onLeave: () => void;
};

const NavbarLogo = (props: NavbarLogoProps) => {
  const [fadeClass, setFadeClass] = useState("fade-out");

  useEffect(() => {
    setFadeClass("fade-out");
    const timer = setTimeout(() => {
      setFadeClass("fade-in");
    }, 500);
    return () => clearTimeout(timer);
  }, [props.src]);
  return (
    <img
      src={props.src}
      alt={props.alt}
      className={fadeClass}
      onMouseEnter={() => {
        props.onEnter();
      }}
      onMouseOut={() => {
        props.onLeave();
      }}
    />
  );
};

export default NavbarLogo;
