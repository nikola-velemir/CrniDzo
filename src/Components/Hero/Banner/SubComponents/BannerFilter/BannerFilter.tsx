import { useEffect, useRef, useState } from "react";
import BannerStrip from "./BannerStrip";

const BannerFilter = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (componentRef.current) {
        const { width, height } = componentRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    updateDimensions();

    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);
  return (
    <div className="page-banner-filter" ref={componentRef}>
      <div>
        <BannerStrip
          height={dimensions.height}
          width={dimensions.width}
        ></BannerStrip>
      </div>
    </div>
  );
};

export default BannerFilter;
