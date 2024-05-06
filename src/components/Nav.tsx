import { NavLink } from "react-router-dom";

type NavProps = {
  cartItemsLength: number;
};

export default function Nav({ cartItemsLength }: NavProps) {
  return (
    <nav className="sticky top-0 z-50 ps-4 pe-4 bg-nav-color">
      <div className="mx-[auto] w-[min(1200px,100%)] h-[4rem] border-b-[1px] border-solid border-white border-opacity-10">
        <ul className="flex justify-center items-center gap-8 uppercase size text-[0.85rem] font-bold h-full">
          <Link to="/">home</Link>
          <Link to="store">store</Link>
          <Link
            to="cart"
            data={cartItemsLength > 0 ? `(${cartItemsLength})` : ""}
          >
            cart
          </Link>
        </ul>
      </div>
    </nav>
  );
}

type LinkProps = {
  to: "/" | "store" | "cart";
  children: string;
  data?: string | number;
};

function Link({ to, children, data = "" }: LinkProps) {
  return (
    <li className={`text-secondary-text-clr has-[.active]:text-accent-clr`}>
      <NavLink
        to={to}
        data-items={data}
        className={data ? "after:content-[attr(data-items)] after:ml-1" : ""}
      >
        {children}
      </NavLink>
    </li>
  );
}
