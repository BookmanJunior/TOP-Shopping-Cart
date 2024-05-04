import { useLoaderData } from "react-router-dom";
import ProductPreview from "../components/product/ProductPreview";

type CategoryLoaderProps = {
  params: { name: string };
};

export function Category() {
  const categoryData = useLoaderData() as ProductData[];
  const categoryTitle = categoryData[0].category ?? "";

  return (
    <main>
      <header className="text-[clamp(2rem,0.5rem+1.8vw,3rem)] text-center font-bold uppercase h-44 tracking-wider">
        <h1>{categoryTitle}</h1>
      </header>
      <div className="max-w-[1200px] mx-auto py-4">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
          {categoryData?.map((item) => (
            <ProductPreview key={item.id} data={item} />
          ))}
        </div>
      </div>
    </main>
  );
}

export async function CategoryLoader({ params }: CategoryLoaderProps) {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${params.name}`
  );

  if (res.ok) return res.json();

  throw new Error();
}
