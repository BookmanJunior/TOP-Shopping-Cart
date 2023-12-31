import { RenderRouteWithOutletContext } from "./RenderRouteWithOutletContext";
import { Product } from "../components/Product";
import { render } from "@testing-library/react";
import { vi } from "vitest";

describe("Product component", () => {
  const mockData = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  };

  const mockContext = {
    cartItems: [],
    setCartItems: vi.fn(),
  };

  it("renders product", () => {
    const { container } = render(
      <RenderRouteWithOutletContext context={mockContext}>
        <Product data={mockData} />
      </RenderRouteWithOutletContext>
    );
    const price = container.querySelector(".product-title");
    expect(price.textContent).toMatch(
      /Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops/i
    );
  });
});
