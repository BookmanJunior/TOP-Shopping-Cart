import { useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import Nav from "./components/Nav";
import Modal from "./components/Modal";

type ContextType = {
  products: ProductData[];
  setProducts: (arg0: ProductData[]) => void;
  cartItems: CartItemProps[];
  setCartItems: (arg0: CartItemProps[]) => void;
};

export default function App() {
  const [products, setProducts] = useState<ProductData[]>([] as ProductData[]);
  const [cartItems, setCartItems] = useState<CartItemProps[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Nav cartItemsLength={cartItems.length} />
      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
      <Outlet context={{ cartItems, setCartItems, products, setProducts }} />
    </>
  );
}

export function AppContext() {
  return useOutletContext<ContextType>();
}
