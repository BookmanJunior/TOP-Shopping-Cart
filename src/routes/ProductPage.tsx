import { useLoaderData } from "react-router-dom";
import ProductButtons from "../components/product/ProductButtons";

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
    <div className="flex justify-center items-center h-view-height">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] justify-items-start items-center max-w-[800px] gap-4 p-4 bg-primary-product-bg radius-[8px] rounded-[8px]">
        <div className="w-[min(300px,100%)] place-self-center">
          <img
            className="w-full aspect-square object-contain"
            src={product.image}
            alt={product.title}
          />
        </div>
        <div className="grid gap-4">
          <p className=" text-[2rem] font-bold">{product.title}</p>
          <div>
            <p className="border-b-2 mb-3">Product Description</p>
            <p>{product.description}</p>
          </div>
          <p className="font-bold">${product.price}</p>
          <ProductButtons data={product} />
        </div>
      </div>
    </div>
  );
}
