import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Product } from "../components/Product";
import FetchProducts from "../components/FetchProducts";
import "../styles/store.css";

type StoreProps = {
  products?: ProductData[];
  cartItems: CartItemProps[];
  setCartItems: (arg: CartItemProps[]) => void;
  setProducts: (item: ProductData[]) => void;
};

export default function Store({
  products,
  setProducts,
  cartItems,
  setCartItems,
}: StoreProps) {
  const isProducts = products ?? (useLoaderData() as ProductData[]);
  const [categories, setCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string[]>([]);
  const { isLoading, error } = FetchProducts({
    products,
    setProducts,
    setCategories,
  });

  const productsToDisplay = isProducts?.filter((item) => {
    if (!activeCategory.length) return isProducts;

    return activeCategory.includes(item.category);
  });

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>Something went wrong</p>
        <Link to="../">Go Back</Link>
      </div>
    );
  }

  return (
    <>
      <div className="store">
        {products && (
          <aside className="categories">
            <div className="categories-wrapper">
              {categories.map((item) => (
                <label key={item}>
                  <input
                    type="checkbox"
                    name="category"
                    id={item}
                    value={item}
                    onChange={() => handleSetActiveCategory(item)}
                  />
                  {item}
                </label>
              ))}
            </div>
          </aside>
        )}
        <div className="items">
          {productsToDisplay?.map((item) => (
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

  function handleSetActiveCategory(item: string) {
    if (!activeCategory.includes(item)) {
      setActiveCategory([...activeCategory, item]);
      return;
    }
    setActiveCategory(activeCategory.filter((cat) => cat !== item));
  }
}
