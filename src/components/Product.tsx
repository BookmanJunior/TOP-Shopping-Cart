type QuantFunction = (item: number) => void;

type ProductProps = {
  data: ProductData;
  cartItems: CartItemProps[];
  handleCartAdd: (item: CartItemProps) => void;
  handleIncrement: QuantFunction;
  handleDecrement: QuantFunction;
  setCartItems: (arg: CartItemProps[]) => void;
};

export function Product({
  data,
  cartItems,
  setCartItems,
  handleCartAdd,
  handleIncrement,
  handleDecrement,
}: ProductProps) {
  return (
    <div className="item">
      <img src={data.image} alt={data.title} />
      <div className="prod-details">
        <p className="product-title">{data.title}</p>
        <p className="prod-price">{`$${data.price}`}</p>
      </div>
      <ProductButtons
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
        cartItems={cartItems}
        setCartItems={setCartItems}
        handleCartAdd={handleCartAdd}
        data={data}
      />
    </div>
  );
}

export function CartProduct({
  data,
  cartItems,
  setCartItems,
  handleCartAdd,
  handleIncrement,
  handleDecrement,
}: ProductProps) {
  return (
    <div className="cart-item">
      <div className="left-wrapper">
        <img src={data.image} alt={data.title} />
        <p className="product-title">{data.title}</p>
      </div>
      <div className="right-wrapper">
        <p className="prod-price">{`$${data.price}`}</p>
        <ProductButtons
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          handleCartAdd={handleCartAdd}
          cartItems={cartItems}
          setCartItems={setCartItems}
          data={data}
        />
        <button
          className="remove-cart-item-btn"
          onClick={() =>
            setCartItems(cartItems.filter((item) => item.id !== data.id))
          }
        >
          Remove Item
        </button>
      </div>
    </div>
  );
}

function ProductButtons({
  handleDecrement,
  handleIncrement,
  cartItems,
  setCartItems,
  handleCartAdd,
  data,
}: ProductProps) {
  const isProductInCart = cartItems.filter((item) => item.id === data.id)[0];
  const quantityOfProduct = cartItems.filter((item) => item.id === data.id)[0]
    ?.quantity;

  const lessThanOne = quantityOfProduct <= 1;

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
