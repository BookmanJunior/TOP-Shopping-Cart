import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Store from "./Store";
import Cart from "./Cart";
import Header from "../components/Header";
import ErrorPage from "./ErrorPage";

export default function Router() {
  const [products, setProducts] = useState<ProductData[]>([] as ProductData[]);
  const [cartItems, setCartItems] = useState<CartItemProps[]>([]);

  function handleCartAdd(item: CartItemProps) {
    setCartItems([...cartItems, { ...item, quantity: 1 }]);
  }

  function incrementProductQuantity(item: number) {
    setCartItems(
      cartItems.map((cartItem) => {
        if (cartItem.id === item) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      })
    );
  }

  function decrementProductQuantity(item: number) {
    setCartItems(
      cartItems.map((cartItem) => {
        if (cartItem.id === item) {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        }
        return cartItem;
      })
    );
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Header />,
        },
        {
          path: "store",
          element: (
            <Store
              products={products}
              setProducts={setProducts}
              cartItems={cartItems}
              handleCartAdd={handleCartAdd}
              handleIncrementQuantity={incrementProductQuantity}
              handleDecrementQuantity={decrementProductQuantity}
            />
          ),
        },
        {
          path: "cart",
          element: <Cart cartItems={cartItems} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
