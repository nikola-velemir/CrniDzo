type MenuDisplayCardProps = {
  img_src: string;
  text: string;
};

const MenuDisplayCard = ({ img_src, text }: MenuDisplayCardProps) => {
  return (
    <div className="card menu-display-card">
      <img src={img_src} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">{text}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default MenuDisplayCard;
