import { RenderRouteWithOutletContext } from "./Cart.test";
import { vi } from "vitest";
import { render, waitFor, screen, getByText } from "@testing-library/react";
import Store from "../routes/Store";

global.fetch = vi.fn();

const mockData = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  },
];

function createFetchResponse(data) {
  return {
    json: () => new Promise((resolve) => resolve(data)),
  };
}

describe("Store component", () => {
  it("render spinner", () => {
    const { container } = render(
      <RenderRouteWithOutletContext context={""}>
        <Store />
      </RenderRouteWithOutletContext>
    );

    const spinner = container.querySelector(".loading-screen");
    expect(spinner).toBeInTheDocument();
  });

  it("render products on fetch", async () => {
    fetch.mockResolvedValue(createFetchResponse(mockData));

    const { container } = render(
      <RenderRouteWithOutletContext context={""}>
        <Store />
      </RenderRouteWithOutletContext>
    );

    await waitFor(() => container.querySelectorAll(".item"));
    expect(container.querySelectorAll(".item").length).toBe(1);
  });
});
