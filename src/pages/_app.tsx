import type { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";
import NavBar from "../components/NavBar";
import { COLORS } from "../constants/styles";

const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: ${COLORS.background.primary};
    color: ${COLORS.text.primary};
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyle />
            <NavBar />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
