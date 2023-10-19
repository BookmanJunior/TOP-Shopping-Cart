import { Link } from "react-router-dom";
import { AppContext } from "../App";

type ProductProps = {
  data: ProductData;
};

export function ProductButtons({ data }: ProductProps) {
  const { cartItems, setCartItems } = AppContext();

  const isProductInCart = cartItems.filter((item) => item.id === data.id)[0];
  const quantityOfProduct = cartItems.filter((item) => item.id === data.id)[0]
    ?.quantity;
  const lessThanOne = quantityOfProduct <= 1;

  function handleCartAdd(item: CartItemProps) {
    setCartItems([...cartItems, { ...item, quantity: 1 }]);
  }

  function handleIncrement(item: number) {
    setCartItems(
      cartItems.map((cartItem) => {
        if (cartItem.id === item) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      })
    );
  }

  function handleDecrement(item: number) {
    setCartItems(
      cartItems.map((cartItem) => {
        if (cartItem.id === item) {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        }
        return cartItem;
      })
    );
  }

  return isProductInCart ? (
    <div className="quant-wrapper">
      <button
        className="decrement"
        onClick={() => {
          if (lessThanOne) {
            setCartItems(cartItems.filter((item) => item.id !== data.id));
            return;
          }
          handleDecrement(data.id);
        }}
      >
        -
      </button>
      <div>{quantityOfProduct}</div>
      <button className="increment" onClick={() => handleIncrement(data.id)}>
        +
      </button>
    </div>
  ) : (
    <button
      className="add-to-cart-btn"
      onClick={() => handleCartAdd(data as CartItemProps)}
    >
      Add to Cart
    </button>
  );
}

export function Product({ data }: ProductProps) {
  return (
    <div className="item">
      <Link to={`./${data.id}`}>
        <img src={data.image} alt={data.title} />
        <div className="prod-details">
          <p className="product-title">{data.title}</p>
          <p className="prod-price">{`$${data.price}`}</p>
        </div>
      </Link>
      <ProductButtons data={data} />
    </div>
  );
}

export function CartProduct({ data }: ProductProps) {
  const { setCartItems, cartItems } = AppContext();

  function handleEmptyCart() {
    setCartItems(cartItems.filter((item) => item.id !== data.id));
  }

  return (
    <div className="cart-item">
      <div className="left-wrapper">
        <img src={data.image} alt={data.title} />
        <p className="product-title">{data.title}</p>
      </div>
      <div className="right-wrapper">
        <p className="prod-price">{`$${data.price}`}</p>
        <ProductButtons data={data} />
        <button className="remove-cart-item-btn" onClick={handleEmptyCart}>
          Remove Item
        </button>
      </div>
    </div>
  );
}
