import { SWITCH_THEME } from "./constants";
import { DefaultTheme } from "styled-components";

export const switchTheme = (theme: DefaultTheme) => {
    return {
        type: SWITCH_THEME,
        payload: theme,
    };
};
