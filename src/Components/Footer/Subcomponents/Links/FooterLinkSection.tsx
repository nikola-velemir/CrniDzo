import { useContext } from "react";
import { LinkContext } from "../../../Context/Providers/LinkContext";
import FooterLink from "./FooterLink";

const FooterLinkSection = () => {
  const linkContext = useContext(LinkContext);
  return (
    <div className="col-lg-3">
      <div className="row">
        <div className="col-12 footer-section-title">Istrazi</div>
        <div className="col-12">
          <ul className="list-group footer-list">
            {linkContext.map(({ name, link }) => {
              return (
                <FooterLink
                  key={name}
                  link_name={name}
                  link={link}
                ></FooterLink>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterLinkSection;
