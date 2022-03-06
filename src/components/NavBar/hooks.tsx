import { useCallback, useEffect, useState } from "react";

export const useShouldNavBarBeVisible = () => {
    const [shouldShow, setShouldShow] = useState<boolean>(true);
    const [previousScrollPosition, setPreviousScrollPosition] =
        useState<number>(0);

    const shouldNavBarBeVisible = useCallback(() => {
        const scrollTop = window.scrollY;
        setShouldShow(previousScrollPosition > scrollTop);
        setPreviousScrollPosition(scrollTop);
    }, [previousScrollPosition]);

    useEffect(() => {
        window.addEventListener("scroll", shouldNavBarBeVisible);

        return () => {
            window.removeEventListener("scroll", shouldNavBarBeVisible);
        };
    }, [shouldNavBarBeVisible]);

    return shouldShow;
};
