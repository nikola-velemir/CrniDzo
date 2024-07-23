import { useContext } from "react";
import { NavbarButtonContext } from "../../Context/Providers/NavbarButtonContext";

const NavbarButton = () => {
  let buttonContext = useContext(NavbarButtonContext);
  return (
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span
        className="navbar-toggler-icon"
        style={{ backgroundImage: `url(${buttonContext.button_image}` }}
      ></span>
    </button>
  );
};

export default NavbarButton;
