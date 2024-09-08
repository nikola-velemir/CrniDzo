import { useContext } from "react";
import { MenuCategoriesContext } from "../../Context/Providers/MenuCategoriesContext";

const Categories = () => {
  const categories = useContext(MenuCategoriesContext);
  return (
    <div
      className="offcanvas offcanvas-start"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasExampleLabel">
          Meni
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <ul className="list-group">
          {categories.map(({ title }, index) => {
            console.log(index);
            return (
              <li key={index} className="list-group-item">
                {title}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
