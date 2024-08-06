import React, { useState } from "react";

interface LocationDisplayButtonProps {
  text: string;
  icon: string;
  icon_hovered: string;
  isClicked: boolean;
  onClick: () => void;
}

const LocationDisplayButton: React.FC<LocationDisplayButtonProps> = ({
  text,
  icon,
  icon_hovered,
  isClicked,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      type="button"
      className={`btn my-btn`}
      onMouseLeave={() => setIsHovered(false)}
      onMouseOver={() => setIsHovered(true)}
      onClick={onClick}
    >
      <div
        className={`banner-cta-button-content ${
          isHovered || isClicked ? "fade-out" : "fade-in"
        }`}
      >
        <div>
          <img src={icon} />
        </div>
        <div>{text}</div>
      </div>
      <div
        className={`banner-cta-button-content ${
          isHovered || isClicked ? "fade-in" : "fade-out"
        }`}
      >
        <div>
          <img src={icon_hovered} />
        </div>
        <div>{text}</div>
      </div>
    </button>
  );
};

export default LocationDisplayButton;
