import React from "react";
import { render } from "@testing-library/react";
import Quality from ".";

describe("Quality component", () => {
  it("renders the title prop", () => {
    const title = "Test Title";
    const { getByText } = render(<Quality title={title} />);
    expect(getByText(title)).toBeInTheDocument();
  });

  it("renders with the correct class name", () => {
    const title = "Test Title";
    const { container } = render(<Quality title={title} />);
    expect(container.firstChild).toHaveClass("Quality");
  });
});
