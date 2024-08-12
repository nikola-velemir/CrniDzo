import MenuDisplayCard from "./MenuDisplayCard/MenuDisplayCard";
import { useContext } from "react";
import { MenuCategoriesContext } from "../../../Context/Providers/MenuCategoriesContext";
import MenuDisplayTitle from "./MenuDisplayTitle";

const MenuDisplayContent = () => {
  const categories = useContext(MenuCategoriesContext);
  return (
    <>
      <MenuDisplayTitle></MenuDisplayTitle>
      <div className="col-lg-12 col-md-12">
        <div className="row">
          {categories.map(({ title, text, theme_color, img_src }, index) => {
            return (
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
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
