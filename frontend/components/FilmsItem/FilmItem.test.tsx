import React from "react";
import { render } from "@testing-library/react";
import FilmsItem from ".";

describe("FilmsItem component", () => {
  it("should render correctly", () => {
    const { getByText } = render(<FilmsItem />);
    expect(getByText("2022")).toBeInTheDocument();
    expect(getByText("Name_kino")).toBeInTheDocument();
    expect(getByText("Rating ivi 7.5")).toBeInTheDocument();
    expect(getByText("подробнее")).toBeInTheDocument();
  });
});
