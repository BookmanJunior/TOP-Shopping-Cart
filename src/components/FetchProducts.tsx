import { useState, useEffect } from "react";

type FetchProductsProps = {
  products: any;
  setProducts: (arg0: ProductData[]) => void;
  setCategories: (arg0: string[]) => void;
};

export default function FetchProducts({
  products,
  setProducts,
  setCategories,
}: FetchProductsProps) {
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
    if (products !== undefined) {
      dataFetch();
    } else {
      setIsLoading(false);
    }
  }, [products]);

  return { isLoading, error };
}
