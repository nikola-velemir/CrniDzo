import { useContext } from "react";
import { CarouselImageContext } from "../Components/Context/Providers/CarouselImageContext";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import PageBanner from "../Components/Hero/Banner/PageBanner";
import MenuDisplay from "../Components/Displays/MenuDisplay/MenuDisplay";
import LocationDisplay from "../Components/Displays/LocationDisplay/LocationDisplay";

const Home = () => {
  const imageContext = useContext(CarouselImageContext);
  return (
    <>
      <Navbar></Navbar>
      {/* <Carousel images={imageContext.landing.carousel}></Carousel> */}
      <PageBanner></PageBanner>
      <MenuDisplay></MenuDisplay>
      <LocationDisplay></LocationDisplay>
      <Footer></Footer>
    </>
  );
};

export default Home;
