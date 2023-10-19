import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Store from "./Store";
import Cart from "./Cart";
import Homepage from "./Homepage";
import { Category, CategoryLoader } from "./Category";
import { ProductPage, ProductLoader } from "./ProductPage";
import ErrorPage from "./ErrorPage";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Homepage />,
        },
        {
          path: "category/:name",
          element: <Category />,
          //@ts-ignore
          loader: CategoryLoader,
        },
        {
          path: "category/:name/:id",
          element: <ProductPage />,
          //@ts-ignore
          loader: ProductLoader,
        },
        {
          path: "store",
          element: <Store />,
        },
        {
          path: "store/:id",
          element: <ProductPage />,
          //@ts-ignore
          loader: ProductLoader,
        },
        {
          path: "cart",
          element: <Cart />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
