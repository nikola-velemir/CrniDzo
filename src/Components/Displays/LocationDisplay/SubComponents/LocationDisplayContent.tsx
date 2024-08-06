import Carousel from "../../../Carousel/Carousel";
import { useContext } from "react";
import { LocationDisplayImagesContext } from "../../../Context/Providers/LocationDisplayImagesContext";

type LocationDisplayContentProps = {
  carouselVisible: boolean;
};

const LocationDisplayContent = ({
  carouselVisible,
}: LocationDisplayContentProps) => {
  const locationDisplayContext = useContext(LocationDisplayImagesContext);
  return (
    <>
      <div className="col-12">
        <div className="location-display-main-content">
          <div className={carouselVisible ? "fade-in" : "fade-out"}>
            <Carousel images={locationDisplayContext}></Carousel>
          </div>

          <div className={carouselVisible ? "fade-out" : "fade-in"}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d2801.0230558252456!2d19.89058230678495!3d45.408874646806325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x475b3df871b64509%3A0x2c448dd3a96984d9!2zQ3JuaSBExb5vIEJ1cmdlciBCYXIsINCa0L7RiNGD0YIg0JvQsNGY0L7RiNCwIDM3LCDQotC10LzQtdGA0LjQvSAyMTIzNQ!3m2!1d45.4091169!2d19.891759399999998!5e0!3m2!1ssr!2srs!4v1722904005228!5m2!1ssr!2srs"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationDisplayContent;
