import { Link } from "react-router-dom";

const Navbar = ({ splitLocation }) => {
  return (
    <>
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className={splitLocation === "" ? "active nav-item" : "nav-item"}>
            <Link to="/" className="nav-link">
              <i className="icon-grid menu-icon" />
              <span className="menu-title">Dashboard</span>
            </Link>
          </li>

          <li
            className={
              splitLocation === "cryptoassets" ? "active nav-item" : "nav-item"
            }
          >
            <Link className="nav-link" to="/cryptoassets">
              <i className="icon-paper ti-money"></i>
              <span className="menu-title">Crypto Assets</span>
            </Link>
          </li>

          <li
            className={
              splitLocation === "reports" ? "active nav-item" : "nav-item"
            }
          >
            <Link className="nav-link" to="/reports">
              <i className="icon-paper menu-icon"></i>
              <span className="menu-title">Reports</span>
            </Link>
          </li>

          <li
            className={
              splitLocation === "account" ? "active nav-item" : "nav-item"
            }
          >
            <Link className="nav-link" to="/account">
              <i className="icon-paper ti-user"></i>
              <span className="menu-title">My Account</span>
            </Link>
          </li>

          <li
            className={
              splitLocation === "support" ? "active nav-item" : "nav-item"
            }
          >
            <Link className="nav-link" to="/support">
              <i className="icon-paper ti-headphone-alt"></i>
              <span className="menu-title">Support</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/signin">
              <i className="icon-paper ti-plug"></i>
              <span className="menu-title">Logout</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
