type MenuMainDisplayCardProps = {
  img_src: string;
  title: string;
  text: string;
  theme_color: string;
};

const MenuMainDisplayCard = ({
  img_src,
  title,
  text,
  theme_color,
}: MenuMainDisplayCardProps) => {
  return (
    <div
      className="card menu-main-display-card"
      style={{ backgroundColor: theme_color }}
    >
      <img src={img_src} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <div className="text-cta">
          <p className="card-text">{text}</p>
          <a href="#" className="btn">
            <div>
              <img src="" alt="..."></img>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MenuMainDisplayCard;
