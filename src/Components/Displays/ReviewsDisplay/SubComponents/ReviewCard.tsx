import star_full from "../../../../assets/icons/star-fill.svg";
import star_half from "../../../../assets/icons/star-half.svg";
import star_empty from "../../../../assets/icons/star.svg";
type ReviewCardProps = {
  first_name: string;
  last_name: string;
  img_src: string;
  comment: string;
  rating: number;
};
const ReviewCard = ({
  first_name,
  last_name,
  img_src,
  comment,
  rating,
}: ReviewCardProps) => {
  let fullStarCount = Math.floor(rating);
  let halfStarCount = Math.ceil(rating) - Math.floor(rating);
  let emptyStarCount = 5 - fullStarCount - halfStarCount;
  return (
    <div className="goolge-review-card">
      <div className="review-user">
        <img src={img_src} />
        <div>
          {first_name} {last_name}
        </div>
      </div>
      <div className="review-text">{comment}</div>
      <div className="review-rating">
        {Array.from({ length: fullStarCount }, (_, index) => (
          <img key={`full-${index}`} src={star_full} alt="full star" />
        ))}{" "}
        {Array.from({ length: halfStarCount }, (_, index) => (
          <img key={`half-${index}`} src={star_half} alt="empty star" />
        ))}
        {Array.from({ length: emptyStarCount }, (_, index) => (
          <img key={`empty-${index}`} src={star_empty} alt="empty star" />
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;
