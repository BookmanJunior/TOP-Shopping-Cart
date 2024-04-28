import { AppContext } from "../../App";
import FormattedPrice from "./FormattedPrice";
import ProductButtons from "./ProductButtons";

export default function CartProduct({ data }: { data: ProductData }) {
  const { setCartItems, cartItems, showToast } = AppContext();

  return (
    <div className="cart-item">
      <div className="left-wrapper">
        <img src={data.image} alt={data.title} />
        <p className="product-title">{data.title}</p>
      </div>
      <div className="right-wrapper">
        <FormattedPrice price={data.price} />
        <ProductButtons data={data} />
        <button className="remove-cart-item-btn" onClick={handleEmptyCart}>
          Remove Item
        </button>
      </div>
    </div>
  );

  function handleEmptyCart() {
    setCartItems(cartItems.filter((item) => item.id !== data.id));
    showToast(data.id, "remove");
  }
}
