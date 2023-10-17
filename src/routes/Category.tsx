import { useLoaderData } from "react-router-dom";
import { Product } from "../components/Product";

type CategoryProps = {
  cartItems: CartItemProps[];
  setCartItems: (arg: CartItemProps[]) => void;
};

type CategoryLoaderProps = {
  params: { name: string };
};

export function Category({ cartItems, setCartItems }: CategoryProps) {
  const categoryData = useLoaderData() as ProductData[];
  const categoryTitle = categoryData[0].category ?? "";

  return (
    <>
      <header className="category-header">
        <h1 className="category-title">{categoryTitle}</h1>
      </header>
      <div className="category-page-wrapper store">
        <div className="items">
          {categoryData?.map((item) => (
            <Product
              key={item.id}
              data={item}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export async function CategoryLoader({ params }: CategoryLoaderProps) {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${params.name}`
  );

  if (res.ok) return res.json();

  throw new Error();
}
