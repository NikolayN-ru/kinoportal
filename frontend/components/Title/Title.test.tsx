import { render } from "@testing-library/react";
import Title from ".";

describe("Title component", () => {
  it("renders with default props", () => {
    const { getByText } = render(<Title>Hello World</Title>);
    const titleElement = getByText("Hello World");
    expect(titleElement.tagName).toBe("H1");
    expect(titleElement.classList.contains("title")).toBe(true);
  });

  it("renders with custom tag and size", () => {
    const { getByText } = render(
      <Title tag="h2" size="md">
        Hello World
      </Title>
    );
    const titleElement = getByText("Hello World");
    expect(titleElement.tagName).toBe("H2");
    expect(titleElement.classList.contains("title")).toBe(true);
    expect(titleElement.classList.contains("md")).toBe(true);
  });

  it("renders with custom class name", () => {
    const { getByText } = render(
      <Title className="custom-class">Hello World</Title>
    );
    const titleElement = getByText("Hello World");
    expect(titleElement.classList.contains("custom-class")).toBe(true);
  });
});
