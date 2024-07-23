type FooterLinkProps = {
  link: string;
  icon: string;
};

const FooterLink = ({ link, icon }: FooterLinkProps) => {
  return (
    <div className="col-lg-12">
      <a className="footer-link-icon" href={link}>
        <img src={icon} />
      </a>
    </div>
  );
};

export default FooterLink;
