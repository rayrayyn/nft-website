import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { selectTheme } from "../../redux/themes/selectors";

type Props = {
    children: ReactNode;
};

const ThemeManager = ({ children }: Props) => {
    const theme = useSelector(selectTheme);

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeManager;
