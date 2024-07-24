import { useContext } from "react";
import { LogoContext } from "../Context/Providers/LogoContext";
import NavbarBrand from "./Subcomponents/NavbarBrand";
import NavbarLinks from "./Subcomponents/NavbarLinks";
import { LinkContext } from "../Context/Providers/LinkContext";
import NavbarButton from "./Subcomponents/NavbarButton";

type NavbarProps = {
  currentPage?: number;
};

const Navbar = ({ currentPage = 0 }: NavbarProps) => {
  const logoContext = useContext(LogoContext);
  const links = useContext(LinkContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavbarBrand
          src_hover={logoContext.highlighted}
          src_regular={logoContext.logo}
          alt={logoContext.alt}
          link={links[0].link}
        />
        <NavbarButton />
        <NavbarLinks links={links} currentPage={currentPage} />
      </div>
    </nav>
  );
};

export default Navbar;
