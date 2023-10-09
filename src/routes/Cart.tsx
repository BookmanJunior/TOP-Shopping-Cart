import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <div>
      Your Cart is Empty.
      <Link to="../store">Browse Shop</Link>
    </div>
  );
}
