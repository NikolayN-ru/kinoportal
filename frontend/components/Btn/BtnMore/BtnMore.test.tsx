import { render, screen } from "@testing-library/react";
import BtnMore from "./index";

describe("BtnMore", () => {
  it("renders button with title", () => {
    const title = "Load more";
    render(<BtnMore title={title} />);
    const button = screen.getByRole("button", { name: title });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(title);
  });
});
