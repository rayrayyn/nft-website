import React from "react";
import type { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";
import { AnimatePresence } from "framer-motion";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

import store from "../redux/store";
import NavBar from "../components/NavBar";
import Modal from "../components/Modal";
import ThemeManager from "../components/ThemeManager";

const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    font-family: Montserrat, sans-serif;
    background-color: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};

    > div {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
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
        <Provider store={store}>
            <ThemeManager>
                <GlobalStyle />
                <Toaster position="top-center" reverseOrder={false} />
                <Modal />

                <NavBar />
                <AnimatePresence
                    exitBeforeEnter
                    initial={false}
                    onExitComplete={() => window.scrollTo(0, 0)}
                >
                    <Component {...pageProps} />
                </AnimatePresence>
            </ThemeManager>
        </Provider>
    );
}

export default MyApp;
