import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import MainContainer from "@components/MainContainer/MainContainer";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <MainContainer>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </MainContainer>
    </Provider>
  );
}
