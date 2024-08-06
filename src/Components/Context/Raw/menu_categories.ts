import md1 from "../../../assets/images/menudisplay1.png";
import md2 from "../../../assets/images/menudisplay2.jpg";
import md3 from "../../../assets/images/menudisplay3.jpg";
import md4 from "../../../assets/images/menudisplay4.jpg";
import { menu_themes } from "./menu_themes";

export const menu_categories = [
  {
    title: "Burgeri",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum aliquam nisl posuere condimentum.",
    theme_color: menu_themes.burgers,
    img_src: md1,
  },
  {
    title: "Tortilje",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum aliquam nisl posuere condimentum.",
    theme_color: menu_themes.tortilas,
    img_src: md2,
  },
  {
    title: "Palacinke",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum aliquam nisl posuere condimentum.",
    theme_color: menu_themes.pancakes,
    img_src: md3,
  },
  {
    title: "Cetvrto",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum aliquam nisl posuere condimentum.",
    theme_color: menu_themes.stakes,
    img_src: md4,
  },
];
