import { AppContext } from "../../App";
import FormattedPrice from "./FormattedPrice";
import ProductButtons from "./ProductButtons";

export default function CartProduct({ data }: { data: ProductData }) {
  const { setCartItems, cartItems, showToast } = AppContext();

  return (
    <div className="flex max-h-[300px] justify-between flex-wrap bg-primary-product-bg border-b-primary-bg border-b-2 p-4">
      <div className="flex items-center">
        <img
          src={data.image}
          alt={data.title}
          className="w-[100px] aspect-square object-contain"
        />
        <p className="product-title">{data.title}</p>
      </div>
      <div className="flex items-center gap-4">
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
