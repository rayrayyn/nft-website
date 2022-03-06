import { SWITCH_THEME, LIGHT_THEME } from "./constants";
import { DefaultTheme } from "styled-components";

const initialState = {
    theme: LIGHT_THEME,
};

const themesReducer = (
    state = initialState,
    action: { type: any; payload: DefaultTheme }
) => {
    const { type, payload } = action;
    switch (type) {
        case SWITCH_THEME:
            return {
                theme: payload,
            };
        default:
            return state;
    }
};

export default themesReducer;
