import { render, screen } from "@testing-library/react";
import SubscriptionButton from ".";

describe("SubscriptionButton component", () => {
  it("renders a button element", () => {
    render(<SubscriptionButton />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  it("renders the correct text", () => {
    render(<SubscriptionButton />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveAttribute(
      "data-text",
      "30 дней подписки бесплатно"
    );
  });

  it("has the correct class name", () => {
    render(<SubscriptionButton />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveClass("button");
  });

  it("has the correct type", () => {
    render(<SubscriptionButton />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveAttribute("type", "button");
  });
});
