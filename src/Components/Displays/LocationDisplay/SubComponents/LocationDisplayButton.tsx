import React, { useState } from "react";

interface LocationDisplayButtonProps {
  text: string;
  isClicked: boolean;
  onClick: () => void;
}

const LocationDisplayButton: React.FC<LocationDisplayButtonProps> = ({
  text,
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
        {text}
      </div>
      <div
        className={`banner-cta-button-content ${
          isHovered || isClicked ? "fade-in" : "fade-out"
        }`}
      >
        {text}
      </div>
    </button>
  );
};

export default LocationDisplayButton;
