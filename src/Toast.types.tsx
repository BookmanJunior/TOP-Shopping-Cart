type ToastId = number;
type ToastType = "add" | "remove" | "empty";

type ToastDataProps = {
  id: ToastId;
  type: ToastType;
};
