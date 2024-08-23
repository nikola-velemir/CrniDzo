import { useState } from "react";

type BannerCardProps = {
  img_src: string;
  card_title: string;
  card_text: string;
};

const BannerCard = ({ img_src, card_title, card_text }: BannerCardProps) => {
  const [hover, setHover] = useState(false);
  return (
    <div className="card banner-card">
      <div>
        <img src={img_src} className="card-img-top" alt="..." />
        <div className="card-body">
          <div className="card-title-cta">
            <div>
              <h5 className="card-title">{card_title}</h5>
            </div>
            <div>
              <a
                href="#"
                className="btn my-btn"
                onMouseOver={() => {
                  setHover(true);
                }}
                onMouseLeave={() => {
                  setHover(false);
                }}
              >
                <div
                  className={`banner-cta-button-content ${
                    hover ? "fade-out" : "fade-in"
                  }`}
                >
                  Vise
                </div>
                <div
                  className={`banner-cta-button-content ${
                    hover ? "fade-in" : "fade-out"
                  }`}
                >
                  Vise
                </div>
              </a>
            </div>
          </div>
          <p className="card-text">{card_text}</p>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
