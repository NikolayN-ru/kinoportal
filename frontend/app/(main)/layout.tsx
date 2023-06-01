"use client";
import Footer from "@components/Footer";
import Header from "@components/Header";
import MainContainer from "@components/MainContainer";
import { FC, ReactNode } from "react";
import "./global.scss";
import MobileComponent from "@components/MobileComponent/MobileComponent";

const layout: FC<{ children: ReactNode }> = ({ children }) => (
  <MainContainer>
    <Header />
    {children}
    <Footer />
    <MobileComponent />
  </MainContainer>
);
export default layout;
