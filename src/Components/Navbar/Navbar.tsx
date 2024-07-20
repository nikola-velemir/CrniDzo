import { useContext } from "react";
import { LogoContext } from "../Context/Providers/LogoContext";

type NavbarProps = {
  links: { name: string; link: string }[];
  currentPage?: number;
};

const CapitalizeTitle = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const Navbar = ({ links, currentPage = 0 }: NavbarProps) => {
  const logoContext = useContext(LogoContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logoContext.logo} alt={logoContext.alt} />
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
