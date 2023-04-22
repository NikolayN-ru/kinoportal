import React from "react";
import { render } from "@testing-library/react";
import Header from ".";

describe("Header component", () => {
  test("renders logo", () => {
    const { getByAltText } = render();
    const logo = getByAltText("IVI logo");
    expect(logo).toBeInTheDocument();
  });
  test("renders menu links", () => {
    const { getByText } = render();
    const myIviLink = getByText("Мой Иви");
    const whatsNewLink = getByText("Что нового");
    const moviesLink = getByText("Фильмы");
    const seriesLink = getByText("Сериалы");
    const cartoonsLink = getByText("Мультфильмы");
    const tvPlusLink = getByText("TV+");
    expect(myIviLink).toBeInTheDocument();
    expect(whatsNewLink).toBeInTheDocument();
    expect(moviesLink).toBeInTheDocument();
    expect(seriesLink).toBeInTheDocument();
    expect(cartoonsLink).toBeInTheDocument();
    expect(tvPlusLink).toBeInTheDocument();
  });
  test("renders subscribe button", () => {
    const { getByText } = render();
    const subscribeBtn = getByText("Оплатить подписку");
    expect(subscribeBtn).toBeInTheDocument();
  });
  test("renders search button", () => {
    const { getByText } = render();
    const searchBtn = getByText("Поиск");
    expect(searchBtn).toBeInTheDocument();
  });
  test("renders notification button", () => {
    const { getByTestId } = render();
    const notifyBtn = getByTestId("notify-button");
    expect(notifyBtn).toBeInTheDocument();
  });
  test("renders avatar button", () => {
    const { getByTestId } = render();
    const avatarBtn = getByTestId("avatar-button");
    expect(avatarBtn).toBeInTheDocument();
  });
});
