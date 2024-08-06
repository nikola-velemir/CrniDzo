import { useContext } from "react";
import ReviewCard from "./SubComponents/ReviewCard";
import { GoogleReiewsContext } from "../../Context/Providers/GoogleReviewsContext";
import google_reviews_background from "../../../assets/images/google-reviews-section.jpg";

const ReviewsDisplay = () => {
  const userContext = useContext(GoogleReiewsContext);
  return (
    <div
      className="container-fluid reviews-display"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="reviews-display-filter"
        style={{
          background: `url(${google_reviews_background})`,
        }}
      ></div>
      <div className="row">
        <div className="col-12 review-section-title">Vaše price, naš uspeh</div>
        {userContext.map(
          ({ pfp, first_name, last_name, comment, rating }, index) => {
            return (
              <div
                className="col-lg-3 col-md-6 col-sm-12 col-xs-12"
                key={index}
              >
                <ReviewCard
                  key={index}
                  first_name={first_name}
                  last_name={last_name}
                  img_src={pfp}
                  rating={rating}
                  comment={comment}
                ></ReviewCard>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default ReviewsDisplay;
