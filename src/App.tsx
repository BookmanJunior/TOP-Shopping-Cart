import { useState } from "react";
import { Outlet, useOutletContext, ScrollRestoration } from "react-router-dom";
import Nav from "./components/Nav";
import Modal from "./components/Modal";
import ToastList from "./components/toast";

export default function App() {
  const [products, setProducts] = useState<ProductData[]>([] as ProductData[]);
  const [cartItems, setCartItems] = useState<CartItemProps[]>([]);
  const [activeItem, setActiveItem] = useState<ProductData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastDataProps[]>([]);

  return (
    <>
      <ScrollRestoration />
      <Nav cartItemsLength={cartItems.length} />
      <Modal
        isModalOpen={isModalOpen}
        closeModal={() => {
          setIsModalOpen(false);
          setActiveItem(null);
        }}
        handleDelete={handleDelete}
        activeItem={activeItem}
      />
      <ToastList toasts={toasts} removeToast={removeToast} />
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

  function showToast(id: ToastId, type: ToastType) {
    const newToast = {
      id,
      type,
    };

    setToasts((prevToasts) => [...prevToasts, newToast]);
  }

  function removeToast(toastId: ToastId) {
    setToasts((prevToasts) =>
      prevToasts.filter((toast) => toast.id !== toastId)
    );
  }

  function handleDelete() {
    if (activeItem) {
      setCartItems(cartItems.filter((item) => item.id !== activeItem.id));
      showToast(activeItem.id, "remove");
      setActiveItem(null);
    } else {
      setCartItems([]);
      showToast(0, "empty");
    }
    setIsModalOpen(false);
  }
}

type ContextType = {
  products: ProductData[];
  setProducts: (arg0: ProductData[]) => void;
  cartItems: CartItemProps[];
  setCartItems: (arg0: ProductData[]) => void;
  setIsModalOpen: (arg0: boolean) => void;
  setActiveItem: (arg0: ProductData) => void;
  showToast: (id: ToastId, type: ToastType) => void;
};

export function AppContext() {
  return useOutletContext<ContextType>();
}
