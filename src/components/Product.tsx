import { useState } from "react";

type data = {
  data: ProductData;
};

export default function Product({ data }: data) {
  const [inputVal, setInputVal] = useState(1);
  const [isInCart, setIsInCart] = useState(false);

  const lessThanOne = inputVal <= 1;

  return (
    <div className="item">
      <img src={data.image} alt={data.title} />
      <div className="prod-details">
        <p className="product-title">{data.title}</p>
        <p className="prod-price">{`$${data.price}`}</p>
      </div>
      {isInCart ? (
        <div className="quant-wrapper">
          <button
            className="decrement"
            onClick={() => setInputVal(lessThanOne ? 1 : inputVal - 1)}
          >
            -
          </button>
          <div>{inputVal}</div>
          <button
            className="increment"
            onClick={() => setInputVal(inputVal + 1)}
          >
            +
          </button>
        </div>
      ) : (
        <button
          onClick={() => {
            setIsInCart(true);
          }}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}
