import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Store from "./Store";
import Cart from "./Cart";
import ErrorPage from "./ErrorPage";

export default function Router() {
  const [cartItems, setCartItems] = useState<{}[]>([]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "store",
          element: <Store />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
      ],
    },
    // {
    //   path: "store",
    //   element: <Store />,
    // },
    // {
    //   path: "store/:category",
    //   element: <Products name="electronics" />,
    // },
    // {
    //   path: "store/electronics",
    //   element: <Products name="electronics" />,
    // },
    // {
    //   path: "store/jewelery",
    //   element: <Products name="jewelery" />,
    // },
    // {
    //   path: "store/men's clothing",
    //   element: <Products name="men's clothing" />,
    // },
    // {
    //   path: "store/women's clothing",
    //   element: <Products name="women's clothing" />,
    // },
    // {
    //   path: "cart",
    //   element: <Cart />,
    // },
  ]);

  return <RouterProvider router={router} />;
}
