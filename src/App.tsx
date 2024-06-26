import { useState } from "react";
import {
  Outlet,
  useOutletContext,
  ScrollRestoration,
  useNavigation,
} from "react-router-dom";
import Nav from "./components/Nav";
import Modal from "./components/Modal";
import ToastList from "./components/toast";
import Spinner from "./components/Spinner";

export default function App() {
  const [cartItems, setCartItems] = useState<CartItemProps[]>([]);
  const [activeItem, setActiveItem] = useState<ProductData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastDataProps[]>([]);
  const { state } = useNavigation();

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
      {state === "loading" ? (
        <Spinner />
      ) : (
        <Outlet
          context={{
            cartItems,
            setCartItems,
            setIsModalOpen,
            setActiveItem,
            showToast,
          }}
        />
      )}
    </>
  );

  function showToast(id: ToastId, type: ToastType) {
    const newToast = {
      id: id + type,
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
  cartItems: CartItemProps[];
  setCartItems: (arg0: ProductData[]) => void;
  setIsModalOpen: (arg0: boolean) => void;
  setActiveItem: (arg0: ProductData) => void;
  showToast: (id: ToastId, type: ToastType) => void;
};

export function AppContext() {
  return useOutletContext<ContextType>();
}
