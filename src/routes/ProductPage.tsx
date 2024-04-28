import { useLoaderData } from "react-router-dom";
import ProductButtons from "../components/product/ProductButtons";
import "../styles/productPage.css";

type paramsProps = {
  params: ProductData;
};

export async function ProductLoader({
  params,
}: paramsProps): Promise<ProductData> {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);

  if (res.ok) return res.json();

  throw new Error();
}

export function ProductPage() {
  const product = useLoaderData() as ProductData;

  return (
    <div className="product-page">
      <div className="product-wrapper">
        <div className="product-image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product-details">
          <p className="prod-title">{product.title}</p>
          <div className="product-description-wrapper">
            <p>Product Description</p>
            <p className="prod-desc">{product.description}</p>
          </div>
          <p className="prod-price">${product.price}</p>
          <ProductButtons data={product} />
        </div>
      </div>
    </div>
  );
}
