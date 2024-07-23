type NavbarLinksProps = {
  links: { name: string; link: string }[];
  currentPage: number;
};

const CapitalizeTitle = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const NavbarLinks = ({ links, currentPage }: NavbarLinksProps) => {
  return (
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
  );
};

export default NavbarLinks;
