import { useState } from "react";
import { Outlet, useOutletContext, ScrollRestoration } from "react-router-dom";
import Nav from "./components/Nav";
import Modal from "./components/Modal";
import ToastList from "./components/toast";

type ContextType = {
  products: ProductData[];
  setProducts: (arg0: ProductData[]) => void;
  cartItems: CartItemProps[];
  setCartItems: (arg0: ProductData[]) => void;
  setIsModalOpen: (arg0: boolean) => void;
  setActiveItem: (arg0: ProductData) => void;
  showToast: (data: ProductData, type: "add" | "remove") => void;
};

type toastProps = {
  id: number;
  title: string;
  type: string;
};

export default function App() {
  const [products, setProducts] = useState<ProductData[]>([] as ProductData[]);
  const [cartItems, setCartItems] = useState<CartItemProps[]>([]);
  const [activeItem, setActiveItem] = useState<ProductData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toasts, setToasts] = useState<toastProps[]>([]);

  function showToast(item: ProductData, type: "add" | "remove") {
    const newToast = {
      id: item.id,
      title: item.title,
      type,
    };

    setToasts((prevToasts) => [...prevToasts, newToast]);
  }

  function removeToast(toastId: number) {
    setToasts((prevToasts) =>
      prevToasts.filter((toast) => toast.id !== toastId)
    );
  }

  return (
    <>
      <ScrollRestoration />
      <Nav cartItemsLength={cartItems.length} />
      <Modal
        isModalOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        handleDelete={handleDelete}
        activeItem={activeItem}
      />
      <ToastList data={toasts} removeToast={removeToast} />
      <Outlet
        context={{
          cartItems,
          setCartItems,
          products,
          setProducts,
          setIsModalOpen,
          setActiveItem,
          showToast,
        }}
      />
    </>
  );

  function handleDelete() {
    if (activeItem) {
      setCartItems(cartItems.filter((item) => item.id !== activeItem.id));
      showToast(activeItem, "remove");
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
