import LocationDisplay from "../Components/Displays/LocationDisplay/LocationDisplay";
import MenuDisplay from "../Components/Displays/MenuDisplay/MenuDisplay";
import ReviewsDisplay from "../Components/Displays/ReviewsDisplay/ReviewsDisplay";
import Footer from "../Components/Footer/Footer";
import FrontPageBanner from "../Components/Hero/Banner/FrontPageBanner/PageBanner";
import Navbar from "../Components/Navbar/Navbar";

const Menu = () => {
  return (
    <>
      <Navbar currentPage={1}></Navbar>
      <FrontPageBanner></FrontPageBanner>
      <MenuDisplay></MenuDisplay>
      <LocationDisplay></LocationDisplay>
      <ReviewsDisplay></ReviewsDisplay>
      <Footer></Footer>
    </>
  );
};

export default Menu;
