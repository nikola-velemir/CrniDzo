import ReviewCard from "./ReviewCard";

const ReviewsDisplay = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
          <ReviewCard></ReviewCard>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
          <ReviewCard></ReviewCard>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
          <ReviewCard></ReviewCard>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
          <ReviewCard></ReviewCard>
        </div>
      </div>
    </div>
  );
};

export default ReviewsDisplay;
