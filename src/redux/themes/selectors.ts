import { RootState } from "../store";

export const selectTheme = (state: RootState) => state.themes.theme;
