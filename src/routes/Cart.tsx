import { Link } from "react-router-dom";
import { CartProduct } from "../components/Product";
import "../styles/cart.css";

type QuantFunction = (item: number) => void;

type CartProps = {
  cartItems: CartItemProps[];
  handleCartAdd: (item: CartItemProps) => void;
  handleIncrement: QuantFunction;
  handleDecrement: QuantFunction;
  setCartItems: (arg: CartItemProps[]) => void;
};

export default function Cart({
  cartItems,
  setCartItems,
  handleCartAdd,
  handleIncrement,
  handleDecrement,
}: CartProps) {
  const total: number = cartItems.reduce((prev, curr): number => {
    return (prev + Math.round(parseFloat(curr.price))) * curr.quantity;
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
          <button className="empty-cart-btn" onClick={() => setCartItems([])}>
            Empty Cart
          </button>
          <div className="cart-items">
            {cartItems.map((item) => (
              <CartProduct
                key={item.id}
                data={item}
                cartItems={cartItems}
                setCartItems={setCartItems}
                handleCartAdd={handleCartAdd}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
              />
            ))}
          </div>
          <p className="cart-total">{`Total: $${total}`}</p>
        </>
      )}
    </div>
  );
}
