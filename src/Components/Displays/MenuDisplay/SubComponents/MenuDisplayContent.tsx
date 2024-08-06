import MenuDisplayCard from "./MenuDisplayCard";
import mm from "../../../../assets/images/menumaindisplay.jpg";
import { useContext } from "react";
import { MenuThemeContext } from "../../../Context/Providers/MenuThemeContext";
import MenuMainDisplayCard from "./MenuMainDisplayCard";
import { MenuCategoriesContext } from "../../../Context/Providers/MenuCategoriesContext";

const MenuDisplayContent = () => {
  const themes = useContext(MenuThemeContext);
  const categories = useContext(MenuCategoriesContext);
  return (
    <>
      <div className="col-lg-6 col-md-12">
        <MenuMainDisplayCard
          title={"Ponude"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum aliquam nisl posuere condimentum. Vestibulum et ex varius, viverra ligula at, volutpat est. Aenean eros nisl, interdum quis leo eu, dignissim posuere sapien. Vivamus eget molestie turpis. Morbi feugiat pharetra efficitur. "
          }
          theme_color={themes.main}
          img_src={mm}
        ></MenuMainDisplayCard>
      </div>
      <div className="col-lg-6 col-md-12">
        <div className="row">
          {categories.map(({ title, text, theme_color, img_src }, index) => {
            return (
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12" key={index}>
                <MenuDisplayCard
                  title={title}
                  img_src={img_src}
                  text={text}
                  theme_color={theme_color}
                ></MenuDisplayCard>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default MenuDisplayContent;
