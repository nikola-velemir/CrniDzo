import carret from "../../../assets/icons/caret-right-fill.svg";
import carret_hovered from "../../../assets/icons/caret-right-fill-hovered.svg";
import MenuMainDisplayButton from "./MenuMainDisplayButton";

type MenuMainDisplayCardProps = {
  img_src: string;
  title: string;
  text: string;
  theme_color: string;
};

const MenuMainDisplayCard = ({
  img_src,
  title,
  text,
  theme_color,
}: MenuMainDisplayCardProps) => (
  <div
    className="card menu-main-display-card"
    style={{ backgroundColor: theme_color }}
  >
    <img src={img_src} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <div className="text-cta">
        <p className="card-text">{text}</p>
        <div className="row">
          <div className="col-6">
            <MenuMainDisplayButton
              img_src={carret}
              text={"Ponude"}
              img_hovered={carret_hovered}
            ></MenuMainDisplayButton>
          </div>
          <div className="col-6">
            <MenuMainDisplayButton
              img_src={carret}
              text={"Menu"}
              img_hovered={carret_hovered}
            ></MenuMainDisplayButton>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MenuMainDisplayCard;
