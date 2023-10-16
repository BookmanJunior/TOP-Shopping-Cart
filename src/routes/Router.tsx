import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Nav from "../components/Nav";
import App from "../App";
import Store from "./Store";
import Cart from "./Cart";
import Homepage from "./Homepage";
import { Category, CategoryLoader } from "./Category";
import { ProductPage, ProductLoader } from "../components/ProductPage";
import ErrorPage from "./ErrorPage";

export default function Router() {
  const [products, setProducts] = useState<ProductData[]>([] as ProductData[]);
  const [cartItems, setCartItems] = useState<CartItemProps[]>([]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <App>
          <Nav cartItemsLength={cartItems.length} />
        </App>
      ),
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Homepage />,
        },
        {
          path: "category/:name",
          element: (
            <Category cartItems={cartItems} setCartItems={setCartItems} />
          ),
          //@ts-ignore
          loader: CategoryLoader,
        },
        {
          path: "category/:name/:id",
          element: (
            <ProductPage cartItems={cartItems} setCartItems={setCartItems} />
          ),
          //@ts-ignore
          loader: ProductLoader,
        },
        {
          path: "store",
          element: (
            <Store
              products={products}
              setProducts={setProducts}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          ),
        },
        {
          path: "store/:id",
          element: (
            <ProductPage cartItems={cartItems} setCartItems={setCartItems} />
          ),
          //@ts-ignore
          loader: ProductLoader,
        },
        {
          path: "cart",
          element: <Cart cartItems={cartItems} setCartItems={setCartItems} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
