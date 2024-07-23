import { useContext } from "react";
import { FooterLinkContext } from "../../Context/Providers/FooterLinkContext";
import FooterLink from "./FooterLink";

const FooterLinkSection = () => {
  const links = useContext(FooterLinkContext);
  return (
    <div className="col-lg-4">
      {links.map(({ link, regular, hover }, index) => {
        return (
          <FooterLink
            key={index}
            link={link}
            icon_regular={regular}
            icon_hovered={hover}
          ></FooterLink>
        );
      })}
    </div>
  );
};

export default FooterLinkSection;
