import { useState } from "react";

type BannerCtaButtonProps = {
  button_icon_regular: string;
  button_icon_hovered: string;
  button_text: string;
};

const BannerCtaButton = ({
  button_icon_regular,
  button_icon_hovered,
  button_text,
}: BannerCtaButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="page-banner-cta-button">
      <button
        type="button"
        className="btn"
        onMouseOver={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      >
        <div
          className={`banner-cta-button-content ${
            isHovered ? "fade-out" : "fade-in"
          }`}
        >
          <div>
            <img src={button_icon_regular}></img>
          </div>
          <div>{button_text}</div>
        </div>
        <div
          className={`banner-cta-button-content ${
            isHovered ? "fade-in" : "fade-out"
          }`}
        >
          <div>
            <img src={button_icon_hovered}></img>
          </div>
          <div>{button_text}</div>
        </div>
      </button>
    </div>
  );
};

export default BannerCtaButton;
