import { useEffect, useRef, useState } from "react";
import eye_icon from "../../assets/icons/eye-fill.svg";
import eye_icon_hovered from "../../assets/icons/eye-fill-hovered.svg";
import BannerCtaButton from "./SubComponents/BannerCtaButton";

type PageBannerProps = {
  img_src: string;
  img_alt: string;
};

const PageBanner = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (componentRef.current) {
        const { width, height } = componentRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    updateDimensions();

    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return (
    <div className="page-banner" ref={componentRef}>
      <div className="page-banner-filter">
        <div>
          <div
            className="page-banner-strip"
            style={{
              transform: `translate(-50%,-50%) rotate(${
                -1 *
                Math.atan(dimensions.height / dimensions.width) *
                (180 / Math.PI)
              }deg)`,
            }}
          >
            <div></div>
          </div>
        </div>
      </div>
      <div className="page-banner-content row">
        <div className="col-lg-4 page-banner-cta">
          <div>
            <div className="page-banner-cta-text">
              <div>
                <h1>Naslov neki</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <BannerCtaButton
              button_icon_regular={eye_icon}
              button_icon_hovered={eye_icon_hovered}
              button_text={"Pogledaj Meni"}
            ></BannerCtaButton>
          </div>
        </div>
        <div className="col-lg-8 page-banner-info">
          <div>
            {dimensions.width}
            {dimensions.height}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
