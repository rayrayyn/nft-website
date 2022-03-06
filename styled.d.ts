import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        name: string;
        colors: {
            body: string;
            text: string;
            navBar: {
                background: string;
            };
            footer: {
                background: string;
            };
            button: {
                text: string;
                background: string;
            };
        };
    }
}
