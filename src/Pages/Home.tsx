import { useContext } from "react";
import { CarouselImageContext } from "../Components/Context/Providers/CarouselImageContext";
import Carousel from "../Components/Carousel/Carousel";
import Navbar from "../Components/Navbar/Navbar";

const Home = () => {
  const imageContext = useContext(CarouselImageContext);
  return (
    <>
      <Navbar></Navbar>
      <Carousel images={imageContext.landing.carousel}></Carousel>
    </>
  );
};

export default Home;
