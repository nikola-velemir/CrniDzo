import { Link } from "react-router-dom";
import { Capitalize } from "../../../Utils/utils";
import { useState } from "react";

type NavbarLinksProps = {
  links: { name: string; link: string }[];
};

// Example usage

const NavbarLinks = ({ links }: NavbarLinksProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {links.map(({ name, link }, index) => {
          return (
            <li key={name} className="nav-item">
              <Link
                to={link}
                className={
                  index === currentPage ? "nav-link active" : "nav-link"
                }
                aria-current="page"
                onClick={() => {
                  setCurrentPage(index);
                }}
              >
                {Capitalize(name)}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavbarLinks;
