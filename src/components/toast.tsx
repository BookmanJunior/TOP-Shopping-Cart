import { useState, useEffect } from "react";

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
      className={`grid min-h-[60px] bg-primary-product-bg shadow-light-dark rounded-md text-center mb-3 animate-slideIn ${
        animationOut ? "animate-slideOut" : ""
      }`}
    >
      <p className="col-start-1 row-start-1 place-self-center">{message}</p>
      <button
        className="justify-self-end self-start mr-2 col-start-1 row-start-1"
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
    <div className="fixed max-h-view-height right-[5px] bottom-0 w-[min(300px,100%)] p-4 select-none transition-[max-height] z-[100]">
      {toasts &&
        toasts.map((toast) => (
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
