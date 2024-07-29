import texture from "../../assets/textures/papertexture.jpg";
import MenuDisplayContent from "./SubComponents/MenuDisplayContent";
import MenuDisplayTitle from "./SubComponents/MenuDisplayTitle";

const MenuDisplay = () => {
  return (
    <div
      className="containter-fluid menu-display"
      style={{
        backgroundImage: `url(${texture})`,
      }}
    >
      <div className="row">
        <MenuDisplayTitle></MenuDisplayTitle>
        <MenuDisplayContent></MenuDisplayContent>
      </div>
    </div>
  );
};

export default MenuDisplay;
