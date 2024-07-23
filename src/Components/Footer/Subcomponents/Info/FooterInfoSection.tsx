import { useContext } from "react";
import { FooterInfoContext } from "../../../Context/Providers/FooterInfoContext";
import FooterLogo from "./FooterLogo";
import FooterWorkTime from "./FooterWorkTime";

const FooterInfoSection = () => {
  const infoContext = useContext(FooterInfoContext);
  return (
    <div className="col-lg-4">
      <div className="row">
        <FooterLogo image_src={infoContext.footer_image}></FooterLogo>
        <FooterWorkTime
          work_days_and_hours={infoContext.work_days_and_hours}
        ></FooterWorkTime>
      </div>

      <div className="col-12">
        <div></div>
      </div>
    </div>
  );
};

export default FooterInfoSection;
