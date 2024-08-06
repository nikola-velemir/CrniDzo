import React, { useState } from "react";
import location_display_main_img from "../../../assets/images/location-display.jpg";
import LocationDisplayButton from "./SubComponents/LocationDisplayButton";
import LocationDisplayContent from "./SubComponents/LocationDisplayContent";
import location_img from "../../../assets/icons/geo-alt-fill.svg";
import location_img_hovered from "../../../assets/icons/geo-alt-fill-hovered.svg";
import images_img from "../../../assets/icons/images.svg";
import images_img_hovered from "../../../assets/icons/images-hovered.svg";

const LocationDisplay: React.FC = () => {
  const [isFirstClicked, setIsFirstClicked] = useState(true);
  const [isSecondClicked, setIsSecondClicked] = useState(false);
  const [isCarouselSelected, setIsCarouselSelected] = useState(true);

  const handleFirstButtonClick = () => {
    setIsFirstClicked(true);
    setIsSecondClicked(false);
    setIsCarouselSelected(true);
  };

  const handleSecondButtonClick = () => {
    setIsFirstClicked(false);
    setIsSecondClicked(true);
    setIsCarouselSelected(false);
  };

  return (
    <div className="container-fluid location-display">
      <div
        className="location-display-filter"
        style={{
          backgroundImage: `url(${location_display_main_img})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
          <div className="location-display-text">
            <div className="row">
              <div className="col-12">Gde se nalazimo?</div>
              <div className="col-12">Lokacija</div>
              <div className="col-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                fermentum aliquam nisl posuere condimentum. Vestibulum et ex
                varius, viverra ligula at, volutpat est. Aenean eros nisl,
                interdum quis leo eu, dignissim posuere sapien. Vivamus eget
                molestie turpis. Morbi feugiat pharetra efficitur.
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
          <div className="location-display-content row">
            <div className="location-display-content-buttons col-12">
              <div className="row">
                <div className="col-6">
                  <LocationDisplayButton
                    text="Slike"
                    isClicked={isFirstClicked}
                    onClick={handleFirstButtonClick}
                    icon={images_img}
                    icon_hovered={images_img_hovered}
                  />
                </div>
                <div className="col-6">
                  <LocationDisplayButton
                    text="Lokacija"
                    isClicked={isSecondClicked}
                    onClick={handleSecondButtonClick}
                    icon={location_img}
                    icon_hovered={location_img_hovered}
                  />
                </div>
              </div>
            </div>
            <LocationDisplayContent
              carouselVisible={isCarouselSelected}
              mapVisible={!isCarouselSelected}
            ></LocationDisplayContent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationDisplay;
