import BannerCtaText from "./BannerCtaText";
import BannerCtaButton from "./BannerCtaButton";
import eye_icon from "../../../../../../assets/icons/eye-fill.svg";
import eye_icon_hovered from "../../../../../../assets/icons/eye-fill-hovered.svg";

const BannerCta = () => {
  return (
    <div className="col-lg-6 page-banner-cta">
      <div>
        <BannerCtaText></BannerCtaText>
        <BannerCtaButton
          button_icon_regular={eye_icon}
          button_icon_hovered={eye_icon_hovered}
          button_text={"Pogledaj Meni"}
        ></BannerCtaButton>
      </div>
    </div>
  );
};

export default BannerCta;
