import { Link } from "react-router-dom";
import ProductButtons from "./ProductButtons";
import FormattedPrice from "./FormattedPrice";

export default function ProductPreview({ data }: { data: ProductData }) {
  return (
    <div className="item">
      <Link to={`${data.id}`}>
        <img src={data.image} alt={data.title} />
        <div className="prod-details">
          <p className="product-title">{data.title}</p>
          <FormattedPrice price={data.price} />
        </div>
      </Link>
      <ProductButtons data={data} />
    </div>
  );
}
