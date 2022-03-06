import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        name: string;
        colors: {
            body: string;
            text: string;
            background: string;
            button: {
                text: string;
                background: string;
            };
        };
    }
}
