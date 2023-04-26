import React from "react";
import { render } from "@testing-library/react";
import Rating from ".";

describe("Rating component", () => {
  it("renders the component with the correct value", () => {
    const { getByText } = render(<Rating value={3.5} />);
    expect(getByText("3,5")).toBeInTheDocument();
  });

  it("renders the component with the correct category", () => {
    const { getByText } = render(<Rating value={3.5} />);
    expect(getByText("Актёры")).toBeInTheDocument();
  });
});
