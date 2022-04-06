import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to={"/"}>
          <CrwnLogo />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/jackets">
            Jackets
          </Link>
          <Link className="nav-link" to="/sneakers">
            Sneakers
          </Link>
          <Link className="nav-link" to="/womens">
            Womens
          </Link>
          <Link className="nav-link" to="/mens">
            Mens
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
