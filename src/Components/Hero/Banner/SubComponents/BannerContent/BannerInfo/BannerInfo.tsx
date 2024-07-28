import BannerCard from "./BannerCard";

import card_img from "../../../../../../assets/images/banner_card_placeholder.jpg";

const BannerInfo = () => {
  return (
    <div className="col-lg-6 page-banner-info">
      <div>
        <BannerCard
          img_src={card_img}
          card_text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mattis nulla ac tortor pulvinar mattis. Proin eget euismod purus, non egestas massa."
          }
          card_title={"Otkud znam"}
        ></BannerCard>
      </div>
    </div>
  );
};

export default BannerInfo;
