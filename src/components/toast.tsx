import { useState, useEffect } from "react";
import "../styles/toast.css";

type ToastProps = {
  type: string;
  handleAnimationOut: (e: any) => void;
};

type ToastListProps = {
  removeToast: (id: number) => void;
  data: {
    id: number;
    title: string;
    type: string;
  }[];
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

export default function ToastList({ data, removeToast }: ToastListProps) {
  return (
    <div className="toast-list">
      {data &&
        data.map((toast) => (
          <Toast
            key={`${toast.id}+${toast.type}`}
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
