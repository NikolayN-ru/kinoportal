import React from "react";
import { render } from "@testing-library/react";
import Tooltip from ".";

describe("Tooltip component", () => {
  it("renders the tooltip text", () => {
    const text = "Hello, world!";
    const coords = { x: 10, y: 20 };
    const { getByText } = render(<Tooltip text={text} coords={coords} />);
    expect(getByText(text)).toBeInTheDocument();
  });

  it("positions the tooltip correctly", () => {
    const text = "Hello, world!";
    const coords = { x: 10, y: 20 };
    const { getByText } = render(<Tooltip text={text} coords={coords} />);
    const tooltip = getByText(text);
    expect(tooltip).toHaveStyle("top: 13px");
    expect(tooltip).toHaveStyle("left: 10px");
  });
});
