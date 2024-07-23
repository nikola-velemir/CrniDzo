import { useContext } from "react";
import { ContactContext } from "../../../Context/Providers/ContactContext";
import FooterContact from "./FooterContact";

const FooterContactSection = () => {
  const contacts = useContext(ContactContext);
  return (
    <div className="col-lg-3">
      <div className="row">
        <div className="col-12 footer-section-title">Kontakt</div>
        <div className="col-12">
          <ul className="list-group footer-list">
            {contacts.map(
              ({ type, icon_regular, icon_hovered, text }, index) => {
                return (
                  <FooterContact
                    key={index}
                    type={type}
                    icon_regular={icon_regular}
                    text={text}
                    icon_hovered={icon_hovered}
                  ></FooterContact>
                );
              }
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterContactSection;
