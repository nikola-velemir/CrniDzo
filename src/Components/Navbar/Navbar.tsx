import { useContext, useState } from "react";
import { LogoContext } from "../Context/Providers/LogoContext";
import NavbarBrand from "./Subcomponents/NavbarBrand";
import NavbarLinks from "./Subcomponents/NavbarLinks";
import { NavbarLinkContext } from "../Context/Providers/NavbarLinkContext";
import NavbarButton from "./Subcomponents/NavbarButton";

type NavbarProps = {
  currentPage?: number;
};

const Navbar = ({ currentPage = 0 }: NavbarProps) => {
  const logoContext = useContext(LogoContext);
  const links = useContext(NavbarLinkContext);
  const [logoHover, setLogoHover] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavbarBrand
          src={logoHover ? logoContext.highlighted : logoContext.logo}
          alt={logoContext.alt}
          onLeave={() => setLogoHover(false)}
          onEnter={() => setLogoHover(true)}
          link={links[0].link}
        />
        <NavbarButton />
        <NavbarLinks links={links} currentPage={currentPage} />
      </div>
    </nav>
  );
};

export default Navbar;
