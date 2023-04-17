import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import MainContainer from "../components/MainContainer/MainContainer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <MainContainer>
        <Component {...pageProps} />
      </MainContainer>
    </Provider>
  );
}
