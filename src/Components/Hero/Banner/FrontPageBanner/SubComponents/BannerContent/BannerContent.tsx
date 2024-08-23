import BannerCta from "./BannerCta/BannerCta";
import BannerInfo from "./BannerInfo/BannerInfo";

const BannerContent = () => {
  return (
    <div className="page-banner-content row">
      <BannerCta></BannerCta>
      <BannerInfo></BannerInfo>
    </div>
  );
};

export default BannerContent;
