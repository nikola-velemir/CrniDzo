import carret from "../../../../assets/icons/caret-right-fill.svg";
import carret_hovered from "../../../../assets/icons/caret-right-fill-hovered.svg";
import { useState } from "react";

type MenuDisplayCardProps = {
  img_src: string;
  title: string;
  text: string;
  theme_color: string;
};

const MenuDisplayCard = ({
  img_src,
  title,
  text,
  theme_color,
}: MenuDisplayCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="card menu-display-card"
      onMouseOver={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      style={{ backgroundColor: theme_color }}
    >
      <img src={img_src} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <div className="text-cta">
          <p className="card-text">{text}</p>
          <a href="#" className="btn">
            <div className={isHovered ? "fade-out" : "fade-in"}>
              <img src={carret} alt="..."></img>
            </div>
            <div className={isHovered ? "fade-in" : "fade-out"}>
              <img src={carret_hovered} alt="..."></img>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MenuDisplayCard;
