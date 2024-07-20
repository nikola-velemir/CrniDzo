import { createContext, ReactNode } from "react";
import images from "../Raw/image_context";

type CarouselImageContextProviderProps = {
  children: ReactNode;
};

export const CarouselImageContext = createContext(images);

export const CarouselImageContextProvider = ({
  children,
}: CarouselImageContextProviderProps) => {
  return (
    <CarouselImageContext.Provider value={images}>
      {children}
    </CarouselImageContext.Provider>
  );
};
