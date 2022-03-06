import { ETH_PATHS, NFT_PATHS } from "./routes";

export const NAV_BAR_ITEMS = [
    {
        name: "Home",
        href: "/",
    },
    {
        title: "NFT",
        list: [
            {
                name: "Cyber Turtles",
                href: NFT_PATHS.cyberTurtles,
            },
        ],
    },
    {
        title: "ETH",
        list: [
            {
                name: "Gas Calculator",
                href: ETH_PATHS.gasCalculator,
            },
        ],
    },
];
