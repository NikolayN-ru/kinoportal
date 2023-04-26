import { render, screen } from "@testing-library/react";
import Navbar from ".";

describe("Navbar", () => {
  it("renders all navigation links", () => {
    render(<Navbar />);
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(3);
    expect(links[0]).toHaveTextContent("Главная");
    expect(links[1]).toHaveTextContent("Фильмы");
    expect(links[2]).toHaveTextContent("Актеры");
  });
});
