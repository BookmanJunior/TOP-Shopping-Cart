type QuantFunction = (item: number) => void;

type ProductProps = {
  data: ProductData;
  cartItems: CartItemProps[];
  handleCartAdd: (item: CartItemProps) => void;
  handleIncrement: QuantFunction;
  handleDecrement: QuantFunction;
};

export default function Product({
  data,
  cartItems,
  handleCartAdd,
  handleIncrement,
  handleDecrement,
}: ProductProps) {
  const isProductInCart = cartItems.filter((item) => item.id === data.id)[0];
  const quantityOfProduct = cartItems.filter((item) => item.id === data.id)[0]
    ?.quantity;

  const lessThanOne = quantityOfProduct <= 1;

  return (
    <div className="item">
      <img src={data.image} alt={data.title} />
      <div className="prod-details">
        <p className="product-title">{data.title}</p>
        <p className="prod-price">{`$${data.price}`}</p>
      </div>
      {isProductInCart ? (
        <div className="quant-wrapper">
          <button
            className="decrement"
            onClick={() => handleDecrement(data.id)}
            disabled={lessThanOne}
          >
            -
          </button>
          <div>{quantityOfProduct}</div>
          <button
            className="increment"
            onClick={() => {
              handleIncrement(data.id);
            }}
          >
            +
          </button>
        </div>
      ) : (
        <button
          onClick={() => {
            handleCartAdd(data as CartItemProps);
          }}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}
