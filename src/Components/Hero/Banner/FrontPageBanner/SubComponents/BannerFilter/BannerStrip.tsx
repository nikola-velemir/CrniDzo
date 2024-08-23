type BannerStripProps = {
  height: number;
  width: number;
};

const BannerStrip = ({ height, width }: BannerStripProps) => {
  return (
    <div
      className="page-banner-strip"
      style={{
        transform: `translate(-50%,-50%) rotate(${
          -1 * Math.atan(height / width) * (180 / Math.PI)
        }deg)`,
      }}
    >
      <div></div>
    </div>
  );
};

export default BannerStrip;
