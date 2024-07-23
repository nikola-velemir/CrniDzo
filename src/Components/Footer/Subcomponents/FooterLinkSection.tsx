import { useContext } from "react";
import { FooterLinkContext } from "../../Context/Providers/FooterLinkContext";
import FooterLink from "./FooterLink";

const FooterLinkSection = () => {
  const links = useContext(FooterLinkContext);
  return (
    <div className="col-lg-4">
      {links.map(({ regular }) => {
        return (
          <FooterLink link={regular.link} icon={regular.icon}></FooterLink>
        );
      })}
    </div>
  );
};

export default FooterLinkSection;
