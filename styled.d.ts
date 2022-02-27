import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            body: string;
            text: string;
            navBar: {
                background: string;
            };
            button: {
                text: string;
                background: string;
            };
        };
    }
}
