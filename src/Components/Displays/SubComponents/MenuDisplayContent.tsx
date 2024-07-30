import MenuDisplayCard from "./MenuDisplayCard";
import mm from "../../../assets/images/menumaindisplay.jpg";
import md1 from "../../../assets/images/menudisplay1.png";
import md2 from "../../../assets/images/menudisplay2.jpg";
import md3 from "../../../assets/images/menudisplay3.jpg";
import md4 from "../../../assets/images/menudisplay4.jpg";
import { useContext } from "react";
import { MenuThemeContext } from "../../Context/Providers/MenuThemeContext";
import MenuMainDisplayCard from "./MenuMainDisplayCard";

const MenuDisplayContent = () => {
  const themes = useContext(MenuThemeContext);
  return (
    <>
      <div className="col-lg-6 col-md-12">
        <MenuMainDisplayCard
          title={"Ponude"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit commodo lacinia."
          }
          theme_color={themes.main}
          img_src={mm}
        ></MenuMainDisplayCard>
      </div>
      <div className="col-lg-6 col-md-12">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <MenuDisplayCard
              title={"Burgeri"}
              img_src={md1}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit commodo lacinia."
              }
              theme_color={themes.burgers}
            ></MenuDisplayCard>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <MenuDisplayCard
              title={"Tortilje"}
              img_src={md2}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit commodo lacinia."
              }
              theme_color={themes.tortilas}
            ></MenuDisplayCard>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <MenuDisplayCard
              title={"Palacinke"}
              img_src={md3}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit commodo lacinia."
              }
              theme_color={themes.pancakes}
            ></MenuDisplayCard>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <MenuDisplayCard
              title={"Cetvrto"}
              img_src={md4}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit commodo lacinia."
              }
              theme_color={themes.stakes}
            ></MenuDisplayCard>
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col-6"></div>
              <div className="col-6"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MenuDisplayContent;
