import { Capitalize } from "../../../../Utils/utils";
import arrow from "../../../../assets/icons/arrow-right.svg";

type FooterLinkProps = {
  link_name: string;
  link: string;
};

const FooterLink = ({ link_name, link }: FooterLinkProps) => {
  return (
    <li className="list-group-item">
      <a href={link}>
        <div>
          <div>{Capitalize(link_name)}</div>
          <div>
            <img src={arrow}></img>
          </div>
        </div>
      </a>
    </li>
  );
};

export default FooterLink;
