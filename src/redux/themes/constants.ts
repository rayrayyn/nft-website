import { DefaultTheme } from "styled-components";

export const SWITCH_THEME = "SWITCH_THEME";

export const LIGHT_THEME: DefaultTheme = {
    name: "light",
    colors: {
        body: "#f5f5f7",
        text: "#000000",
        button: {
            text: "",
            background: "",
        },
        navBar: {
            background: "#fff",
        },
        footer: {
            background: "#fff",
        },
    },
};

export const DARK_THEME: DefaultTheme = {
    name: "dark",
    colors: {
        body: "#121212",
        text: "#fff",
        button: {
            text: "",
            background: "",
        },
        navBar: {
            background: "#000000",
        },
        footer: {
            background: "#000000",
        },
    },
};
