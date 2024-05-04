import { AppContext } from "../../App";
import FormattedPrice from "./FormattedPrice";
import ProductButtons from "./ProductButtons";

export default function CartProduct({ data }: { data: ProductData }) {
  const { setCartItems, cartItems, showToast } = AppContext();

  return (
    <div className="flex max-h-[300px] max-[850px]:flex-col justify-between flex-wrap gap-y-2 first:rounded-t-[8px] last:rounded-b-[8px] bg-primary-product-bg border-b-primary-bg border-b-2 p-4">
      <div className="flex items-center text-balance gap-4 max-[850px]:flex-col max-[850px]:text-center">
        <img
          src={data.image}
          alt={data.title}
          className="w-[100px] aspect-square object-contain"
        />
        <p className="max-w-[350px]">{data.title}</p>
      </div>
      <div className="flex items-center gap-4 max-[850px]:justify-center">
        <FormattedPrice price={data.price} />
        <ProductButtons data={data} />
        <button
          className="bg-primary-bg p-2 hover:outline hover:outline-2 hover:outline-primary-bg hover:outline-offset-2"
          onClick={handleEmptyCart}
        >
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
