import { useContext, useState } from "react";
import { LogoContext } from "../Context/Providers/LogoContext";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import { NavbarLinkContext } from "../Context/Providers/NavbarLinkContext";
import NavbarButton from "./NavbarButton";

type NavbarProps = {
  currentPage?: number;
};

const Navbar = ({}: NavbarProps) => {
  const logoContext = useContext(LogoContext);
  const links = useContext(NavbarLinkContext);
  const [logoHover, setlogoHover] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href={links[0].link}>
          <NavbarLogo
            src={logoHover ? logoContext.highlighted : logoContext.logo}
            alt={logoContext.alt}
            onLeave={() => {
              setlogoHover(false);
            }}
            onEnter={() => {
              setlogoHover(true);
            }}
          ></NavbarLogo>
        </a>
        <NavbarButton></NavbarButton>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <NavbarLinks links={links} currentPage={0}></NavbarLinks>{" "}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
