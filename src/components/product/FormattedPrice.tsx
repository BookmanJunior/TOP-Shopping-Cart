import formatPrice from "../../helpers/PriceFormatter";

export default function FormattedPrice({ price }: { price: number }) {
  return <p className="font-bold">{`$${formatPrice(price)}`}</p>;
}
