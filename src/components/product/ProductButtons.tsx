import { AppContext } from "../../App";

export default function ProductButtons({
  data,
  className,
}: {
  data: ProductData;
  className?: string;
}) {
  const { cartItems, setCartItems, setIsModalOpen, setActiveItem, showToast } =
    AppContext();

  const isProductInCart = cartItems?.filter((item) => item.id === data.id)[0];
  const quantityOfProduct = cartItems?.filter((item) => item.id === data.id)[0]
    ?.quantity;
  const lessThanOne = quantityOfProduct <= 1;

  return isProductInCart ? (
    <div
      className={`flex justify-center gap-4 py-[0.5rem] px-[1rem] bg-primary-bg ${
        className ? className : ""
      }`}
    >
      <button className="hover:text-accent-clr" onClick={handleDecrement}>
        -
      </button>
      <span>{quantityOfProduct}</span>
      <button className="hover:text-accent-clr" onClick={handleIncrement}>
        +
      </button>
    </div>
  ) : (
    <button
      className={`bg-accent-clr text-secondary-text-clr hover:shadow-outline-box-accent transition-[box-shadow] py-[0.5rem] px-[1rem] ${className}`}
      onClick={handleCartAdd}
    >
      Add to Cart
    </button>
  );

  function handleCartAdd() {
    setCartItems([...cartItems, { ...data, quantity: 1 }]);
    showToast(data.id, "add");
  }

  function handleIncrement() {
    setCartItems(
      cartItems.map((cartItem) => {
        if (cartItem.id === data.id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      })
    );
  }

  function handleDecrement() {
    if (lessThanOne) {
      setActiveItem(data);
      setIsModalOpen(true);
      return;
    }

    setCartItems(
      cartItems.map((cartItem) => {
        if (cartItem.id === data.id) {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        }
        return cartItem;
      })
    );
  }
}
