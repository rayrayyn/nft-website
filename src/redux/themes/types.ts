import { DARK_THEME, LIGHT_THEME } from "./constants";
import { DefaultTheme } from "styled-components";

export const Themes: { [key: string]: DefaultTheme } = {
    light: LIGHT_THEME,
    dark: DARK_THEME,
};
