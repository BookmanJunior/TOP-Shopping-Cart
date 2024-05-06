type ToastId = number | string;
type ToastType = "add" | "remove" | "empty";

type ToastDataProps = {
  id: ToastId;
  type: ToastType;
};
