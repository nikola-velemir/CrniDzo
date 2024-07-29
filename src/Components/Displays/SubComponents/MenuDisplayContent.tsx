import MenuDisplayCard from "./MenuDisplayCard";
import md1 from "../../../assets/images/menudisplay1.png";
import md2 from "../../../assets/images/menudisplay2.jpg";
import md3 from "../../../assets/images/menudisplay3.jpg";
import md4 from "../../../assets/images/menudisplay4.jpg";

const MenuDisplayContent = () => {
  return (
    <>
      <div className="col-lg-6 col-md-12"></div>
      <div className="col-lg-6 col-md-12">
        <div className="row">
          <div className="col-lg-6 col-md-3 col-sm-6">
            <MenuDisplayCard img_src={md1} text={""}></MenuDisplayCard>
          </div>

          <div className="col-lg-6 col-md-3 col-sm-6">
            <MenuDisplayCard img_src={md2} text={""}></MenuDisplayCard>
          </div>

          <div className="col-lg-6 col-md-3 col-sm-6">
            <MenuDisplayCard img_src={md3} text={""}></MenuDisplayCard>
          </div>

          <div className="col-lg-6 col-md-3 col-sm-6">
            <MenuDisplayCard img_src={md4} text={""}></MenuDisplayCard>
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col-6"></div>
              <div className="col-6"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MenuDisplayContent;
