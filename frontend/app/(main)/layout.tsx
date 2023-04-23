"use client";
import Footer from "@components/Footer";
import Header from "@components/Header";
import MainContainer from "@components/MainContainer/MainContainer";
import { store } from "@redux/store";
import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import "./global.scss";

const layout: FC<{ children: ReactNode }> = ({ children }) => (
  <Provider store={store}>
    <MainContainer>
      <Header />
      {children}
      <Footer />
    </MainContainer>
  </Provider>
);
export default layout;
