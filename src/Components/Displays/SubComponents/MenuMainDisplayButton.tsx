import { useState } from "react";

type MenuMainDisplayButtonProps = {
  img_src: string;
  img_hovered: string;
  text: string;
};

const MenuMainDisplayButton = ({
  img_src,
  img_hovered,
  text,
}: MenuMainDisplayButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <a
      href="#"
      className="btn"
      onMouseOver={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <div className={`button-content ${isHovered ? "fade-out" : "fade-in"}`}>
        <div>{text}</div>
        <div>
          <img src={img_src} alt="..."></img>
        </div>
      </div>
      <div className={`button-content ${isHovered ? "fade-in" : "fade-out"}`}>
        <div>{text}</div>
        <div>
          <img src={img_hovered} alt="..."></img>
        </div>
      </div>
    </a>
  );
};

export default MenuMainDisplayButton;
