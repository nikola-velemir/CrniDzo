type CarouselProps = {
  images: string[];
};

const Carousel = ({ images }: CarouselProps) => {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade">
      <div className="carousel-inner">
        {images.map((image, index) => {
          return (
            <div
              key={image}
              className={index === 0 ? "carousel-item active" : "carousel-item"}
            >
              <img src={image} className="d-block w-100" alt={image} />
            </div>
          );
        })}
        ;
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
