import React, { useState } from "react";
import location_display_main_img from "../../../assets/images/location-display.jpg";
import LocationDisplayButton from "./SubComponents/LocationDisplayButton";

const LocationDisplay: React.FC = () => {
  const [isFirstClicked, setIsFirstClicked] = useState(true);
  const [isSecondClicked, setIsSecondClicked] = useState(false);

  const handleFirstButtonClick = () => {
    setIsFirstClicked(true);
    setIsSecondClicked(false);
  };

  const handleSecondButtonClick = () => {
    setIsFirstClicked(false);
    setIsSecondClicked(true);
  };

  return (
    <div className="container-fluid location-display">
      <div
        className="location-display-filter"
        style={{ backgroundImage: `url(${location_display_main_img})` }}
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
          <div className="location-display-content">
            <div className="location-display-content-buttons">
              <div className="row">
                <div className="col-6">
                  <LocationDisplayButton
                    text="Slike"
                    isClicked={isFirstClicked}
                    onClick={handleFirstButtonClick}
                  />
                </div>
                <div className="col-6">
                  <LocationDisplayButton
                    text="Lokacija"
                    isClicked={isSecondClicked}
                    onClick={handleSecondButtonClick}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationDisplay;
