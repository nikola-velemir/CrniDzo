import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import FrontPageBanner from "../Components/Hero/Banner/PageBanner";
import MenuDisplay from "../Components/Displays/MenuDisplay/MenuDisplay";
import LocationDisplay from "../Components/Displays/LocationDisplay/LocationDisplay";
import ReviewsDisplay from "../Components/Displays/ReviewsDisplay/ReviewsDisplay";

const Home = () => {
  // const imageContext = useContext(CarouselImageContext);
  return (
    <>
      <Navbar></Navbar>
      {/* <Carousel images={imageContext.landing.carousel}></Carousel> */}
      <FrontPageBanner></FrontPageBanner>
      <MenuDisplay></MenuDisplay>
      <LocationDisplay></LocationDisplay>
      <ReviewsDisplay></ReviewsDisplay>
      <Footer></Footer>
    </>
  );
};

export default Home;
