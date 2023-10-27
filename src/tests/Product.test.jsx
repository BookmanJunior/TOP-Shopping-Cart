import { TestRouter } from "./testRouter";
import { Product } from "../components/Product";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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

  it("renders product", () => {
    const { container } = render(
      <TestRouter>
        <Product data={mockData} />
      </TestRouter>
    );
    const price = container.querySelector(".product-title");
    expect(price.textContent).toMatch(
      /Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops/i
    );
  });

  it("adds product to cart", async () => {
    render(
      <TestRouter>
        <Product data={mockData} />
      </TestRouter>
    );

    const addToCartButton = screen.getByRole("button", { name: "Add to Cart" });
    await userEvent.click(addToCartButton);

    expect(addToCartButton).not.toBeInTheDocument();

    const incrementButton = screen.getByRole("button", { name: "+" });
    const decrementButton = screen.getByRole("button", { name: "-" });

    expect(incrementButton).toBeInTheDocument();
    expect(decrementButton).toBeInTheDocument();
  });

  it("increments product quantity", async () => {
    render(
      <TestRouter>
        <Product data={mockData} />
      </TestRouter>
    );

    const addToCartButton = screen.getByRole("button", { name: "Add to Cart" });
    await userEvent.click(addToCartButton);

    const incrementButton = screen.getByRole("button", { name: "+" });
    await userEvent.click(incrementButton);

    const quantity = screen.getByText(/2/i);

    expect(quantity).toBeInTheDocument();
  });

  it("decrements product quantity", async () => {
    render(
      <TestRouter>
        <Product data={mockData} />
      </TestRouter>
    );

    const addToCartButton = screen.getByRole("button", { name: "Add to Cart" });
    await userEvent.click(addToCartButton);

    const incrementButton = screen.getByRole("button", { name: "+" });
    await userEvent.click(incrementButton);

    const decrementButton = screen.getByRole("button", { name: "-" });
    await userEvent.click(decrementButton);
    const quantity = screen.getByText(/1/i, { selector: "span" });

    expect(quantity).toBeInTheDocument();
  });
});
