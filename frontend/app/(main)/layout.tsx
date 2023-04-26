"use client";

import { FC, ReactNode } from "react";
import Footer from "@components/Footer";
import Header from "@components/Header";
import MainContainer from "@components/MainContainer";
import "./global.scss";

const layout: FC<{ children: ReactNode }> = ({ children }) => (
  <MainContainer>
    <Header />
    {children}
    <Footer />
  </MainContainer>
);
export default layout;
