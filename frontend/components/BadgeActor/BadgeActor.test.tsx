import { render, screen } from "@testing-library/react";
import BadgeActor from "./index";

describe("BadgeActor", () => {
  it("renders button with title", () => {
    const title = "Load more";
    render(<BadgeActor title={title} />);
    // const actor = screen.getByRole("div");
    // expect(actor).toBeInTheDocument();
    // expect(actor).toHaveTextContent(title);
  });
});
