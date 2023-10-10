import { Link } from "react-router-dom";

type CartProps = {
  cartItems: CartItemProps[];
};

export default function Cart({ cartItems }: CartProps) {
  const total: number = cartItems.reduce((prev, curr): number => {
    return (prev + Math.round(parseFloat(curr.price))) * curr.quantity;
  }, 0);

  return (
    <div>
      {!cartItems.length ? (
        <div>
          Your Cart is Empty.
          <Link to="../store">Browse Shop</Link>
        </div>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id}>{item.title}</div>
          ))}
          {`Total: $${total}`}
        </div>
      )}
    </div>
  );
}
