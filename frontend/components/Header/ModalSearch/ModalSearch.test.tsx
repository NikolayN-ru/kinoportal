import { render, fireEvent } from "@testing-library/react";
import Modal from ".";

describe("Modal component", () => {
  it("should render correctly when visible is true", () => {
    const { getByText } = render(
      <Modal visible={true} footer="Test Footer" onClose={() => {}} />
    );
    expect(getByText("Поиск")).toBeInTheDocument();
    expect(getByText("Премьеры фильмов")).toBeInTheDocument();
    expect(getByText("Новинки подписки")).toBeInTheDocument();
    expect(getByText("Сериалы Amediateka")).toBeInTheDocument();
    expect(getByText("Высокий рейтинг")).toBeInTheDocument();
  });

  it("should not render when visible is false", () => {
    const { queryByText } = render(
      <Modal visible={false} footer="Test Footer" onClose={() => {}} />
    );
    expect(queryByText("Поиск")).not.toBeInTheDocument();
    expect(queryByText("Фильмы, персоны, жанры")).not.toBeInTheDocument();
    expect(queryByText("Премьеры фильмов")).not.toBeInTheDocument();
    expect(queryByText("Новинки подписки")).not.toBeInTheDocument();
    expect(queryByText("Сериалы Amediateka")).not.toBeInTheDocument();
    expect(queryByText("Высокий рейтинг")).not.toBeInTheDocument();
  });

  it("should call onClose when close button is clicked", () => {
    const onClose = jest.fn();
    const { getByText } = render(
      <Modal visible={true} footer="Test Footer" onClose={onClose} />
    );
    fireEvent.click(getByText("×"));
    expect(onClose).toHaveBeenCalled();
  });
});
