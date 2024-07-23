import { useState } from "react";

type FooterContactProps = {
  type: string;
  icon_regular: string;
  icon_hovered: string;
  text: string;
};

const FooterContact = ({
  type,
  icon_regular,
  icon_hovered,
  text,
}: FooterContactProps) => {
  const [hover, setHover] = useState(false);

  const effectClasses = ["fade-in", "fade-out"];
  return (
    <li
      className="list-group-item footer-contact"
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <div>
        <div className="contanct-icon-container">
          <div className={hover ? effectClasses[1] : effectClasses[0]}>
            <img src={icon_regular} alt={type} />
          </div>
          <div className={hover ? effectClasses[0] : effectClasses[1]}>
            <img src={icon_hovered} alt={type} />
          </div>
        </div>

        <div>{text}</div>
      </div>
    </li>
  );
};

export default FooterContact;
