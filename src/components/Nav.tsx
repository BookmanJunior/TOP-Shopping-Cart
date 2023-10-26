import { Link } from "react-router-dom";
import "../styles/nav.css";

type NavProps = {
  cartItemsLength: number;
};

export default function Nav({ cartItemsLength }: NavProps) {
  return (
    <nav id="nav">
      <div className="nav-wrapper">
        <ul className="nav-links">
          <li className="nav-link">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link">
            <Link to="store">Store</Link>
          </li>
          <li className="nav-link">
            <Link
              to="cart"
              className="cart-nav"
              data-items={cartItemsLength > 0 ? `(${cartItemsLength})` : ""}
            >
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
