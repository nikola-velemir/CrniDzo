import BannerContent from "./SubComponents/BannerContent/BannerContent";
import BannerFilter from "./SubComponents/BannerFilter/BannerFilter";
const PageBanner = () => {
  return (
    <div className="page-banner">
      <BannerFilter></BannerFilter>
      <BannerContent></BannerContent>
    </div>
  );
};

export default PageBanner;
