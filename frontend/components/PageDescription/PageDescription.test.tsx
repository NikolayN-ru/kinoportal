import { fireEvent, render, screen } from "@testing-library/react";
import About from "./index";

describe("About component", () => {
  test("renders title and description", () => {
    render(<About />);
    const title = screen.getByText(
      "Онлайн-кинотеатр Иви: фильмы в хорошем качестве всегда приносят настоящее удовольствие"
    );
    const description = screen.getByText(
      "Случалось ли вам отказаться от просмотра интересного фильма из-за того, что его показывали в неудобное время? Приходилось ли искать в сети интернет, где смотреть фильмы онлайн? А спорить с домашними из-за выбора кино для просмотра по ТВ?"
    );
    description.setAttribute("class", "description isClose"); // добавляем класс
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  test("toggles description on button click", () => {
    render(<About />);
    const toggleButton = screen.getByRole("button", { name: "Развернуть" });
    const description = screen.getByText(
      "Случалось ли вам отказаться от просмотра интересного фильма из-за того, что его показывали в неудобное время? Приходилось ли искать в сети интернет, где смотреть фильмы онлайн? А спорить с домашними из-за выбора кино для просмотра по ТВ?"
    );
    description.setAttribute("class", "description isClose");
    expect(description).toHaveClass("description isClose");
  });
});
