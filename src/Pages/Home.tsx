import { useContext } from "react";
import { CarouselImageContext } from "../Components/Context/Providers/CarouselImageContext";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import PageBanner from "../Components/Hero/PageBanner";

const Home = () => {
  const imageContext = useContext(CarouselImageContext);
  return (
    <>
      <Navbar></Navbar>
      {/* <Carousel images={imageContext.landing.carousel}></Carousel> */}
      <PageBanner></PageBanner>
      <Footer></Footer>
    </>
  );
};

export default Home;
