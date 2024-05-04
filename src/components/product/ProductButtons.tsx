import { AppContext } from "../../App";

export default function ProductButtons({ data }: { data: ProductData }) {
  const { cartItems, setCartItems, setIsModalOpen, setActiveItem, showToast } =
    AppContext();

  const isProductInCart = cartItems?.filter((item) => item.id === data.id)[0];
  const quantityOfProduct = cartItems?.filter((item) => item.id === data.id)[0]
    ?.quantity;
  const lessThanOne = quantityOfProduct <= 1;

  return isProductInCart ? (
    <div className="flex justify-center gap-4 py-[0.5rem] px-[1rem] bg-primary-bg">
      <button onClick={handleDecrement}>-</button>
      <span>{quantityOfProduct}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  ) : (
    <button
      className="bg-accent-clr text-secondary-text-clr hover:outline hover:outline-accent-clr hover:outline-2 hover:outline-offset-2 py-[0.5rem] px-[1rem]"
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
