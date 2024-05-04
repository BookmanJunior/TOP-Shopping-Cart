import { useState } from "react";
import { Link } from "react-router-dom";
import ProductPreview from "../components/product/ProductPreview";
import CategoriesAside from "../components/CategoriesAside";
import FetchStoreData from "../components/FetchStoreData";
import Spinner from "../components/Spinner";

export default function Store() {
  const { isLoading, error, products, categories } = FetchStoreData();
  const [activeCategory, setActiveCategory] = useState<string[]>([]);

  const productsToDisplay: ProductData[] = products?.filter((item) => {
    if (!activeCategory.length) return products;

    return activeCategory.includes(item.category);
  });

  if (isLoading) {
    return <Spinner />;
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
    <div className="flex flex-wrap gap-4 max-w-[1200px] p-4 mx-auto">
      <CategoriesAside
        categories={categories}
        handleActiveCategory={handleSetActiveCategory}
      />
      <div className="flex-1 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
        {productsToDisplay?.map((item) => (
          <ProductPreview key={item.id} data={item} />
        ))}
      </div>
    </div>
  );

  function handleSetActiveCategory(item: string) {
    if (!activeCategory.includes(item)) {
      setActiveCategory([...activeCategory, item]);
      return;
    }
    setActiveCategory(activeCategory.filter((cat) => cat !== item));
  }
}
