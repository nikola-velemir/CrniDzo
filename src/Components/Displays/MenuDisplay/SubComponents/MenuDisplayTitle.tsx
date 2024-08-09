import { useState } from "react";
import img from "../../../../assets/images/menu-display-main.jpg";
import menu_icon from "../../../../assets/icons/menu.svg";
const MenuDisplayTitle = () => {
  const [isHovered, setisHovered] = useState(false);
  return (
    <div className="col-12 ">
      <div>
        <img src={img}></img>
      </div>
      <button
        className="btn my-btn"
        onMouseOver={() => {
          setisHovered(true);
        }}
        onMouseLeave={() => {
          setisHovered(false);
        }}
      >
        <div
          className={`banner-cta-button-content ${
            isHovered ? "fade-out" : "fade-in"
          }`}
        >
          <h1 className="menu-display-title">Okusi tradiciju</h1>
          <p className="menu-display-caption">
            Pogledaj sta je za tebe Dzo pripremio
          </p>
        </div>
        <div
          className={`banner-cta-button-content ${
            isHovered ? "fade-in" : "fade-out"
          }`}
        >
          <img src={menu_icon}></img>
          <p className="menu-display-caption">Pogledaj Meni</p>
        </div>
      </button>
    </div>
  );
};

export default MenuDisplayTitle;
