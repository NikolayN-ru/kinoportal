import React from "react";
import { render } from "@testing-library/react";
import CategoryCard from ".";

describe("CategoryCard component", () => {
  const data = {
    id: 1,
    name: "Test Name",
    image: "test-image.jpg",
  };

  it("renders the name prop", () => {
    const { getByText } = render(<CategoryCard data={data} className={""} />);
    expect(getByText(data.name)).toBeInTheDocument();
  });

  it("renders with the correct class name", () => {
    const className = "test-class";
    const { container } = render(
      <CategoryCard data={data} className={className} />
    );
    expect(container.firstChild).toHaveClass("cardContainer");
    expect(container.firstChild).toHaveClass(className);
  });
});
