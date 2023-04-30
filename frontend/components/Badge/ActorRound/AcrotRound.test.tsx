import { render } from "@testing-library/react";
import ActorRound from ".";

describe("ActorRound component", () => {
  it("renders title and role correctly", () => {
    const { getByText } = render(<ActorRound title="John Doe" role="Actor" />);
    expect(getByText("John Doe")).toBeInTheDocument();
    expect(getByText("Actor")).toBeInTheDocument();
  });

  it("renders link correctly", () => {
    const { getByRole } = render(
      <ActorRound title="John Doe" role="Actor" link="/actor/1" />
    );
    const link = getByRole("link");
    expect(link).toHaveAttribute("href", "/actor/1");
  });
});
