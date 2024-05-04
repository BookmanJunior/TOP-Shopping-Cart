import { Link } from "react-router-dom";
import ProductButtons from "./ProductButtons";
import FormattedPrice from "./FormattedPrice";

export default function ProductPreview({ data }: { data: ProductData }) {
  return (
    <div className="bg-primary-product-bg rounded-[8px] overflow-hidden p-4 grid gap-4 text-center">
      <Link to={`${data.id}`}>
        <img
          src={data.image}
          alt={data.title}
          className="mx-[auto] w-[160px] aspect-square object-contain hover:scale-105 transition"
        />
        <div className="my-2">
          <p className="my-2">{data.title}</p>
          <FormattedPrice price={data.price} />
        </div>
      </Link>
      <ProductButtons data={data} className="self-end" />
    </div>
  );
}
