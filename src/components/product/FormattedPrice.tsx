import formatPrice from "../../helpers/PriceFormatter";

export default function FormattedPrice({ price }: { price: number }) {
  return <p className="prod-price">{`$${formatPrice(price)}`}</p>;
}
