import { useContext } from "react";
import { FooterSocialMediaContext } from "../../Context/Providers/FooterSocialMedia";
import FooterSocialMedia from "./FooterSocialMedia";

const FooterSocialMediaSection = () => {
  const links = useContext(FooterSocialMediaContext);
  return (
    <div className="col-lg-2">
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
  );
};

export default FooterSocialMediaSection;
