import { createContext, ReactNode } from "react";
import { location_display_images } from "../Raw/location_display_images";

type LocationDisplayImagesContextProviderProps = {
  children: ReactNode;
};

export const LocationDisplayImagesContext = createContext(
  location_display_images
);

export const LocationDisplayImagesContextProvider = ({
  children,
}: LocationDisplayImagesContextProviderProps) => {
  return (
    <LocationDisplayImagesContext.Provider value={location_display_images}>
      {children}
    </LocationDisplayImagesContext.Provider>
  );
};
