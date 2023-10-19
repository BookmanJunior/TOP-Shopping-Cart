import { Link } from "react-router-dom";
import { AppContext } from "../App";
import { CartProduct } from "../components/Product";
import "../styles/cart.css";

export default function Cart() {
  const { cartItems, setIsModalOpen } = AppContext();

  const totalCost: number = cartItems.reduce((prev, curr): number => {
    return prev + parseFloat(curr.price) * curr.quantity;
  }, 0);

  return (
    <div className="cart">
      {!cartItems.length ? (
        <div className="empty-cart">
          Your Cart is Empty.
          <Link to="../store">Browse Shop</Link>
        </div>
      ) : (
        <>
          <button
            className="empty-cart-btn"
            onClick={() => setIsModalOpen(true)}
          >
            Empty Cart
          </button>
          <div className="cart-items">
            {cartItems.map((item) => (
              <CartProduct key={item.id} data={item} />
            ))}
          </div>
          <p className="cart-total">{`Total: $${parseFloat(
            totalCost.toFixed(2)
          )}`}</p>
        </>
      )}
    </div>
  );
}
