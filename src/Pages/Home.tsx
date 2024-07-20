import { useContext } from "react";
import { CarouselImageContext } from "../Components/Context/Providers/CarouselImageContext";
import Carousel from "../Components/Carousel/Carousel";
import { NavbarLinkContext } from "../Components/Context/Providers/NavbarLinkContext";
import Navbar from "../Components/Navbar/Navbar";

const Home = () => {
  const imageContext = useContext(CarouselImageContext);
  const linkContext = useContext(NavbarLinkContext);
  return (
    <>
      <Navbar links={linkContext}></Navbar>
      <Carousel images={imageContext.landing.carousel}></Carousel>
    </>
  );
};

export default Home;
