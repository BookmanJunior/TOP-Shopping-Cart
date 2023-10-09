import { Link } from "react-router-dom";
import "../styles/nav.css";

export default function Nav() {
  return (
    <nav id="nav">
      <div className="nav-wrapper">
        <ul className="nav-links">
          <li className="nav-link">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link">
            <Link to="../store">Store</Link>
          </li>
          <li className="nav-link">
            <Link to="cart">Cart</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
