import type { AppProps } from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import NavBar from "../components/NavBar";
import { LIGHT_THEME } from "../constants/themes";
import { AnimatePresence } from "framer-motion";

const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    font-family: Montserrat, sans-serif;
    background-color: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
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
        <ThemeProvider theme={LIGHT_THEME}>
            <GlobalStyle />
            <NavBar />
            <AnimatePresence
                exitBeforeEnter
                initial={false}
                onExitComplete={() => window.scrollTo(0, 0)}
            >
                <Component {...pageProps} />
            </AnimatePresence>
        </ThemeProvider>
    );
}

export default MyApp;
