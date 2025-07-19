import { Link } from "react-router-dom";
import "./Navbar.css"; // 🔥 Make sure this line exists

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo"> MyFood </div>{" "}
      <ul className="nav-links">
        <li>
          {" "}
          <Link to="/"> Home </Link>
        </li>
        <li>
          {" "}
          <Link to="/menu"> Menu </Link>
        </li>
        <li>
          {" "}
          <Link to="/about"> About </Link>
        </li>
        <li>
          {" "}
          <Link to="/contact"> Contact </Link>
        </li>
      </ul>{" "}
    </nav>
  );
}

export default Navbar;
