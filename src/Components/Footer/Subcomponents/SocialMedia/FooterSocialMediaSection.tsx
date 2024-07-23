import { useContext } from "react";
import { FooterSocialMediaContext } from "../../../Context/Providers/FooterSocialMedia";
import FooterSocialMedia from "./FooterSocialMedia";

const FooterSocialMediaSection = () => {
  const links = useContext(FooterSocialMediaContext);
  return (
    <div className="col-lg-3">
      <div className="row">
        <div className="col-12 footer-section-title">Pronadji nas</div>
        {links.map(({ link, regular, hover }, index) => {
          return (
            <FooterSocialMedia
              key={index}
              link={link}
              icon_regular={regular}
              icon_hovered={hover}
            ></FooterSocialMedia>
          );
        })}
      </div>
    </div>
  );
};

export default FooterSocialMediaSection;
