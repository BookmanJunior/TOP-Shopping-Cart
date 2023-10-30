import { useState, useEffect } from "react";

export default function FetchStoreData() {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
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

  useEffect(() => {
    fetchData();
  }, []);

  return { isLoading, error, products, categories };
}
