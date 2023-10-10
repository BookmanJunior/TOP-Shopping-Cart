import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Product from "../components/Product";
import "../styles/store.css";

type QuantFunction = (item: number) => void;

type StoreProps = {
  products: ProductData[];
  cartItems: CartItemProps[];
  handleCartAdd: (item: CartItemProps) => void;
  setProducts: (item: ProductData[]) => void;
  handleIncrementQuantity: QuantFunction;
  handleDecrementQuantity: QuantFunction;
};

export default function Store({
  products,
  setProducts,
  cartItems,
  handleCartAdd,
  handleIncrementQuantity,
  handleDecrementQuantity,
}: StoreProps) {
  const [categories, setCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const dataFetch = async () => {
      const cats = fetch("https://fakestoreapi.com/products/categories", {
        mode: "cors",
      });
      const prods = fetch(`https://fakestoreapi.com/products`, {
        mode: "cors",
      });

      try {
        const result = (await Promise.all([cats, prods])).map((res) => {
          if (res.ok) return res.json();

          throw new Error();
        });
        const [categoriesResult, productsResult] = await Promise.all(result);
        setCategories(categoriesResult);
        setProducts(productsResult);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    dataFetch();
  }, []);

  const productsToDisplay = products?.filter((item) => {
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
        <div className="items">
          {productsToDisplay.map((item) => (
            <Product
              key={item.id}
              data={item}
              cartItems={cartItems}
              handleCartAdd={handleCartAdd}
              handleIncrement={handleIncrementQuantity}
              handleDecrement={handleDecrementQuantity}
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
