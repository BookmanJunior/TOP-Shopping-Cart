import { useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import Nav from "./components/Nav";
import Modal from "./components/Modal";

type ContextType = {
  products: ProductData[];
  setProducts: (arg0: ProductData[]) => void;
  cartItems: CartItemProps[];
  setCartItems: (arg0: ProductData[]) => void;
  setIsModalOpen: (arg0: boolean) => void;
  setActiveItem: (arg0: ProductData) => void;
};

export default function App() {
  const [products, setProducts] = useState<ProductData[]>([] as ProductData[]);
  const [cartItems, setCartItems] = useState<CartItemProps[]>([]);
  const [activeItem, setActiveItem] = useState<ProductData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Nav cartItemsLength={cartItems.length} />
      <Modal
        isModalOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        handleDelete={handleDelete}
        activeItem={activeItem}
      />
      <Outlet
        context={{
          cartItems,
          setCartItems,
          products,
          setProducts,
          setIsModalOpen,
          setActiveItem,
        }}
      />
    </>
  );

  function handleDelete() {
    if (activeItem) {
      setCartItems(cartItems.filter((item) => item.id !== activeItem.id));
      setActiveItem(null);
    } else {
      setCartItems([]);
    }
    setIsModalOpen(false);
  }
}

export function AppContext() {
  return useOutletContext<ContextType>();
}
