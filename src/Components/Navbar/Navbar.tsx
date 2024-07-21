import { useContext, useState } from "react";
import { LogoContext } from "../Context/Providers/LogoContext";
import { NavbarLinkContext } from "../Context/Providers/NavbarLinkContext";
import NavbarLogo from "./NavbarLogo";

type NavbarProps = {
  currentPage?: number;
};

const CapitalizeTitle = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const Navbar = ({ currentPage = 0 }: NavbarProps) => {
  const links = useContext(NavbarLinkContext);
  const logoContext = useContext(LogoContext);
  const [logoHover, setlogoHover] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
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
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {links.map(({ name, link }, index) => {
              return (
                <li key={name} className="nav-item">
                  <a
                    className={
                      index === currentPage ? "nav-link active" : "nav-link"
                    }
                    aria-current="page"
                    href={link}
                  >
                    {CapitalizeTitle(name)}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
