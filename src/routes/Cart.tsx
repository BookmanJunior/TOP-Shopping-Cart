import { Link } from "react-router-dom";
import { AppContext } from "../App";
import CartProduct from "../components/product/CartProduct";
import formatPrice from "../helpers/PriceFormatter";

export default function Cart() {
  const { cartItems, setIsModalOpen } = AppContext();

  const totalCost: number = cartItems.reduce((prev, curr): number => {
    return Math.round((prev + curr.price * curr.quantity) * 100) / 100;
  }, 0);

  return (
    <div className="max-w-[1200px] mx-auto p-4">
      {!cartItems.length ? (
        <div className=" bg-primary-product-bg h-[150px] rounded-[8px] grid place-content-center text-center">
          Your Cart is Empty.
          <Link to="/store" className="bg-accent-clr text-white p-2 mt-2">
            Browse Shop
          </Link>
        </div>
      ) : (
        <>
          <button onClick={() => setIsModalOpen(true)}>Empty Cart</button>
          <div className="my-2">
            {cartItems.map((item) => (
              <CartProduct key={item.id} data={item} />
            ))}
          </div>
          <p className="font-bold">{`Total: $${formatPrice(totalCost)}`}</p>
        </>
      )}
    </div>
  );
}
