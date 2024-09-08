import menu_slika from "../../../../assets/images/burger-french-fries-hamburger-wallpaper-preview.jpg";
import MenuComponent from "../../../Menu/MenuComponent";

const MenuPageBanner = () => {
  return (
    <div className="page-banner menu-banner">
      <div className="menu-banner-filter">
        <div className="menu-banner-content">
          <MenuComponent></MenuComponent>
        </div>
      </div>
      <div className="menu-banner-image">
        <img src={menu_slika}></img>
      </div>
    </div>
  );
};

export default MenuPageBanner;
