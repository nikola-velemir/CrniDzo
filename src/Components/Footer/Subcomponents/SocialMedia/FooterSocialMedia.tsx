import { useState } from "react";

type FooterLinkProps = {
  link: string;
  icon_regular: string;
  icon_hovered: string;
};

const FooterSocialMedia = ({
  link,
  icon_regular,
  icon_hovered,
}: FooterLinkProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const icons = [icon_regular, icon_hovered];
  const effectClasses = ["fade-in", "fade-out"];
  return (
    <div className="col-lg-12 col-md-4 col-sm-4 social-media-section">
      <a
        className="footer-link-icon"
        href={link}
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      >
        {icons.map((icon, index) => {
          return (
            <img
              key={index}
              className={`${
                !isHovered
                  ? effectClasses[index % 2]
                  : effectClasses[index + (1 % 2)]
              }`}
              src={icon}
              alt="Footer Icon"
            />
          );
        })}
      </a>
    </div>
  );
};

export default FooterSocialMedia;
