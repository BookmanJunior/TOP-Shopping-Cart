import { Link } from "react-router-dom";
import { AppContext } from "../App";

type ProductProps = {
  data: ProductData;
};

export function ProductButtons({ data }: ProductProps) {
  const { cartItems, setCartItems, setIsModalOpen, setActiveItem, showToast } =
    AppContext();

  const isProductInCart = cartItems?.filter((item) => item.id === data.id)[0];
  const quantityOfProduct = cartItems?.filter((item) => item.id === data.id)[0]
    ?.quantity;
  const lessThanOne = quantityOfProduct <= 1;

  return isProductInCart ? (
    <div className="quant-wrapper">
      <button className="decrement" onClick={handleDecrement}>
        -
      </button>
      <span>{quantityOfProduct}</span>
      <button className="increment" onClick={handleIncrement}>
        +
      </button>
    </div>
  ) : (
    <button className="add-to-cart-btn" onClick={handleCartAdd}>
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

export function Product({ data }: ProductProps) {
  return (
    <div className="item">
      <Link to={`${data.id}`}>
        <img src={data.image} alt={data.title} />
        <div className="prod-details">
          <p className="product-title">{data.title}</p>
          <p className="prod-price">{`$${formatPrice(data.price)}`}</p>
        </div>
      </Link>
      <ProductButtons data={data} />
    </div>
  );
}

export function CartProduct({ data }: ProductProps) {
  const { setCartItems, cartItems, showToast } = AppContext();

  function handleEmptyCart() {
    setCartItems(cartItems.filter((item) => item.id !== data.id));
    showToast(data.id, "remove");
  }

  return (
    <div className="cart-item">
      <div className="left-wrapper">
        <img src={data.image} alt={data.title} />
        <p className="product-title">{data.title}</p>
      </div>
      <div className="right-wrapper">
        <p className="prod-price">{`$${formatPrice(data.price)}`}</p>
        <ProductButtons data={data} />
        <button className="remove-cart-item-btn" onClick={handleEmptyCart}>
          Remove Item
        </button>
      </div>
    </div>
  );
}

function formatPrice(num: number): number | string {
  return num % 1 === 0 ? num : num.toFixed(2);
}
