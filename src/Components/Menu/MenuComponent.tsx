import Categories from "./Categories/Categories";
import LeatherTexture from "../../assets/textures/leather.jpg";

const MenuComponent = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div style={{ backgroundImage: `url(${LeatherTexture})` }}>
            <div className="menu-content">
              <button
                className="btn btn-primary"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample"
              >
                Button with data-bs-target
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuComponent;
