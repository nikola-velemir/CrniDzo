import { useContext } from "react";
import { FooterInfoContext } from "../../../Context/Providers/FooterInfoContext";

import FooterWorkTime from "./FooterWorkTime";

const FooterInfoSection = () => {
  const infoContext = useContext(FooterInfoContext);
  return (
    <div className="col-lg-3">
      <FooterWorkTime
        work_days_and_hours={infoContext.work_days_and_hours}
        logo_src={infoContext.footer_image}
      ></FooterWorkTime>
    </div>
  );
};

export default FooterInfoSection;
