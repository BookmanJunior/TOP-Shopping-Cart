import Cart from "../routes/Cart";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Outlet, Route, Routes } from "react-router-dom";

export const RenderRouteWithOutletContext = ({ context, children }) => {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Outlet context={context} />}>
          <Route index element={children} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
};

describe("Cart Component", () => {
  it("render cart is empty", () => {
    const mockCartItems = {
      cartItems: [],
    };

    render(
      <RenderRouteWithOutletContext context={mockCartItems}>
        <Cart />
      </RenderRouteWithOutletContext>
    );

    expect(screen.getByText(/Your Cart is Empty./i)).toBeInTheDocument();
  });

  it("renders all products in cart", () => {
    const mockCartItems = {
      cartItems: [
        {
          id: 1,
          title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
          price: 109,
          description:
            "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
          category: "men's clothing",
          image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        },
      ],
    };

    const { container } = render(
      <RenderRouteWithOutletContext context={mockCartItems}>
        <Cart />
      </RenderRouteWithOutletContext>
    );

    expect(container.querySelectorAll(".cart-item").length).toBe(
      mockCartItems.cartItems.length
    );
  });
});
