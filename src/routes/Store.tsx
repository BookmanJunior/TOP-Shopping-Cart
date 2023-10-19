import { useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "../components/Product";
import CategoriesAside from "../components/CategoriesAside";
import FetchProducts from "../components/FetchProducts";
import { AppContext } from "../App";
import "../styles/store.css";

// type StoreProps = {
//   products: ProductData[];
//   setProducts: (item: ProductData[]) => void;
// };

export default function Store() {
  const { products, setProducts } = AppContext();
  const [categories, setCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string[]>([]);
  const { isLoading, error } = FetchProducts({
    setProducts,
    setCategories,
  });

  const productsToDisplay: ProductData[] = products?.filter((item) => {
    if (!activeCategory.length) return products;

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
        <CategoriesAside
          categories={categories}
          handleActiveCategory={handleSetActiveCategory}
        />
        <div className="items">
          {productsToDisplay?.map((item) => (
            <Product key={item.id} data={item} />
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
