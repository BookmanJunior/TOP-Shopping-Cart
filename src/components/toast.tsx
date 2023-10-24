import { useState, useEffect } from "react";
import "../styles/toast.css";

type ToastProps = {
  type: string;
  handleAnimationOut: (e: any) => void;
};

type ToastListProps = {
  removeToast: (id: ToastId) => void;
  toasts: ToastDataProps[];
};

function Toast({ type, handleAnimationOut }: ToastProps) {
  const [animationOut, setAnimationOut] = useState(false);

  useEffect(() => {
    if (!animationOut) {
      setTimeout(() => {
        setAnimationOut(true);
      }, 3000);
    }
  }, [animationOut]);

  let message: string = "";

  if (type === "add") {
    message = `Added item to cart`;
  } else if (type === "remove") {
    message = `Removed item from cart`;
  } else if (type === "empty") {
    message = `Emptied cart`;
  }

  return (
    <div
      onAnimationEnd={handleAnimationOut}
      className={`toast-notification ${animationOut ? "animation-out" : ""}`}
    >
      <p>{message}</p>
      <button
        onClick={() => {
          setAnimationOut(true);
        }}
      >
        x
      </button>
    </div>
  );
}

export default function ToastList({ toasts, removeToast }: ToastListProps) {
  return (
    <div className="toast-list">
      {toasts &&
        toasts.map((toast) => (
          <Toast
            key={`${toast.id}`}
            type={toast.type}
            handleAnimationOut={(e: AnimationEvent) => {
              if (e.animationName === "slideOut") {
                removeToast(toast.id);
              }
            }}
          />
        ))}
    </div>
  );
}
